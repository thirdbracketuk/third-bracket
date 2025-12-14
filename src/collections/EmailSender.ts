// src/collections/EmailSender.ts
import { CollectionConfig, PayloadRequest } from 'payload'

interface EmailOptions {
  from: string
  to: string
  subject: string
  html: string
  replyTo?: string
  cc?: string
  bcc?: string
}

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { adminOnly } from '../access/adminOnly'

export const EmailSender: CollectionConfig = {
  slug: 'email-sender',
  access: {
    create: adminOnly,
    delete: adminOnly,
    read: adminOnly,
    update: adminOnly,
  },
  admin: {
    useAsTitle: 'subject',
    description: 'Send emails from the admin panel',
    group: 'Communication',
  },
  fields: [
    {
      name: 'fromName',
      type: 'text',
      required: true,
      defaultValue: 'S M A Musabbir Sagar',
      admin: {
        description: "Name that will appear in the recipient's inbox",
      },
    },
    {
      name: 'fromEmail',
      type: 'email',
      required: true,
      defaultValue: 'musabbir@thirdbracket.co.uk',
      admin: {
        description: 'Email address that will be used to send the email',
      },
    },
    {
      name: 'replyTo',
      type: 'email',

      admin: {
        description: 'Reply-to email address (if different from sender)',
      },
    },
    {
      name: 'to',
      type: 'email',
      required: true,
      defaultValue: 'sma.musabbir@gmail.com',
      admin: {
        description: 'Recipient email address',
      },
    },
    {
      name: 'cc',
      type: 'email',
      admin: {
        description: 'CC recipient (optional)',
      },
    },
    {
      name: 'bcc',
      type: 'email',
      admin: {
        description: 'BCC recipient (optional)',
      },
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
      defaultValue: 'Default Subject',
      admin: {
        description: 'Email subject line',
      },
    },
    {
      name: 'html',
      type: 'textarea',
      required: false,
      admin: {
        description: 'HTML content of your email',
      },
    },
    {
      name: 'sent',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        readOnly: true,
        description: 'Whether this email has been sent',
      },
    },
  ],
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [
      async ({ req, doc, operation }: { req: PayloadRequest; doc: Record<string, unknown>; operation: string }) => {
        if (operation === 'create' && !doc.sent) {
          try {
            // Format the from field as "Name <email>"
            const formattedFrom = `${doc.fromName as string} <${doc.fromEmail as string}>`

            // Process the HTML content to replace placeholders
            let processedHtml = (doc.html as string) || '<p>Email content</p>'
            
            // Replace [email] placeholder with the sender's email
            processedHtml = processedHtml.replace(/\[email\]/g, doc.fromEmail as string)
            
            // Replace [Recipient Email] placeholder with the recipient's email
            processedHtml = processedHtml.replace(/\[Recipient Email\]/g, doc.to as string)
            
            // Check if reply-to is different from sender email
            const replyToDifferent = doc.replyTo && doc.replyTo !== doc.fromEmail
            
            // Handle conditional reply-to section
            if (replyToDifferent) {
              // Replace [reply-to] placeholder with the reply-to email
              processedHtml = processedHtml.replace(/\[reply-to\]/g, doc.replyTo as string)
              
              // Replace the conditional handlebars syntax with the content
              processedHtml = processedHtml.replace(
                /\{\{#if replyToDifferent\}\}([\s\S]*?)\{\{\/if\}\}/g, 
                '$1'
              )
            } else {
              // Remove the conditional handlebars section if reply-to is not different
              processedHtml = processedHtml.replace(
                /\{\{#if replyToDifferent\}\}[\s\S]*?\{\{\/if\}\}/g, 
                ''
              )
            }
            
            // Prepare email options
            const emailOptions: EmailOptions = {
              from: formattedFrom,
              to: doc.to as string,
              subject: doc.subject as string,
              html: processedHtml,
            }

            // Add Reply-To, CC and BCC if provided
            if (doc.replyTo) emailOptions.replyTo = doc.replyTo as string
            if (doc.cc) emailOptions.cc = doc.cc as string
            if (doc.bcc) emailOptions.bcc = doc.bcc as string

            // Send the email
            await req.payload.sendEmail(emailOptions)
            
            // Log a clear success message
            console.log('✅ Email sent successfully to:', doc.to as string)
            console.log(`Subject: ${doc.subject as string}`)
            console.log(`From: ${doc.fromName as string} <${doc.fromEmail as string}>`)
            console.log(`To: ${doc.to as string}`)
            
            // Mark as sent - with a small delay to ensure document is fully created
            try {
              // Wait a short time to ensure the document is fully committed
              setTimeout(async () => {
                try {
                  await req.payload.update({
                    collection: 'email-sender' as const,
                    id: doc.id as string,
                    data: {
                      sent: true,
                    },
                  })
                } catch (delayedUpdateErr) {
                  console.error('❌ Failed to mark email as sent after delay:', delayedUpdateErr)
                }
              }, 1000) // 1 second delay
            } catch (updateErr) {
              console.error('❌ Failed to mark email as sent:', updateErr)
            }
          } catch (err) {
            console.error('❌ Email sending failed:', err)
          }
        }
      },
    ],
  },
}
