import type { CollectionBeforeChangeHook } from 'payload'
import axios from 'axios'

// Define the minimum acceptable score (0.0 to 1.0)
const MIN_RECAPTCHA_SCORE = 0.5

export const verifyRecaptcha: CollectionBeforeChangeHook = async ({ data, req }) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY

  // 1. Find the token within the submissionData array sent from the frontend
  const tokenEntry = data.submissionData.find((item: any) => item.field === 'gRecaptchaToken')

  const token = tokenEntry?.value

  if (!token || !secret) {
    // Block submissions if token or secret key are missing
    req.payload.logger.warn('RECAPTCHA: Blocked submission. Token or Secret missing.')
    // IMPORTANT: Throwing an error stops the form entry from being saved!
    throw new Error('Form submission rejected: Missing security token.')
  }

  // 2. Request verification from Google
  try {
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`

    // Using a POST request to the verification URL
    const response = await axios.post(verificationURL)
    const { success, score } = response.data

    if (success && score >= MIN_RECAPTCHA_SCORE) {
      // SUCCESS: Remove the temporary token field before saving to the database
      data.submissionData = data.submissionData.filter(
        (item: any) => item.field !== 'gRecaptchaToken',
      )
      return data // Allow the entry to save (and the Resend hook to trigger)
    }

    // FAILURE: Log and throw an error to block the submission
    req.payload.logger.warn(`RECAPTCHA: Blocked spam. Score: ${score}, Success: ${success}`)
    throw new Error('Form submission rejected: Security check failed.')
  } catch (err) {
    req.payload.logger.error('RECAPTCHA: Verification API error:', err)
    throw new Error('Form submission rejected: Internal error during security check.')
  }
}
