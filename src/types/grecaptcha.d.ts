/**
 * Interface defining the structure of the global grecaptcha object for v3 execution.
 */
interface GreCaptcha {
  /**
   * Executes the reCAPTCHA v3 verification and returns a token.
   * @param siteKey Your public reCAPTCHA site key.
   * @param options An object containing the required action string.
   * @returns A promise that resolves with the reCAPTCHA token string.
   */
  execute: (siteKey: string, options: { action: string }) => Promise<string>
}

/**
 * Extend the global Window interface to include the grecaptcha property.
 */
interface Window {
  grecaptcha?: GreCaptcha
}
