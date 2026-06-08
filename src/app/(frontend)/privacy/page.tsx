import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { Bracket } from '@thirdbracket/bracketui'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: 'Privacy Policy',
  description:
    'Read our Privacy Policy to understand how thirdbracket collects, uses, and protects your personal data.',
}

export default function PrivacyPolicy() {
  return (
    <section>
      <Bracket fluid centered padding="large">
        <div className="md:max-w-screen-xl mx-auto space-y-10 dark:text-white">
          <PageHeader
            title="Privacy Policy"
            description="Transparency and trust are at the core of our business."
          />

          {/* Intro */}
          <div className="space-y-4">
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              This Privacy Notice for <strong>thirdbracket</strong> (&apos;we&apos;, &apos;us&apos;,
              or &apos;our&apos;), describes how and why we might access, collect, store, use,
              and/or share (&apos;process&apos;) your personal information when you use our services
              (&apos;Services&apos;), including when you:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <li>
                Visit our website at{' '}
                <a
                  href="http://www.thirdbracket.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-900 dark:text-primary-100 hover:underline"
                >
                  http://www.thirdbracket.co.uk
                </a>
                , or any website of ours that links to this Privacy Notice
              </li>
              <li>Engage with us in other related ways, including any marketing or events</li>
            </ul>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you
              understand your privacy rights and choices. We are responsible for making decisions
              about how your personal information is processed. If you do not agree with our
              policies and practices, please do not use our Services. If you still have any
              questions or concerns, please contact us at{' '}
              <a
                href="mailto:hello@thirdbracket.co.uk"
                className="text-primary-900 dark:text-primary-100 hover:underline"
              >
                hello@thirdbracket.co.uk
              </a>
              .
            </p>
          </div>

          {/* Summary */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              Summary of Key Points
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>What personal information do we process?</strong> When you visit, use, or
              navigate our Services, we may process personal information depending on how you
              interact with us and the Services, the choices you make, and the products and features
              you use.
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>Do we process any sensitive personal information?</strong> We do not process
              sensitive personal information.
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>Do we collect any information from third parties?</strong> We do not collect
              any information from third parties.
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>How do we process your information?</strong> We process your information to
              provide, improve, and administer our Services, communicate with you, for security and
              fraud prevention, and to comply with law. We may also process your information for
              other purposes with your consent.
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>
                In what situations and with which parties do we share personal information?
              </strong>{' '}
              We may share information in specific situations and with specific third parties.
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>How do we keep your information safe?</strong> We have adequate organisational
              and technical processes and procedures in place to protect your personal information.
              However, no electronic transmission over the internet or information storage
              technology can be guaranteed to be 100% secure.
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>What are your rights?</strong> Depending on where you are located
              geographically, the applicable privacy law may mean you have certain rights regarding
              your personal information.
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>How do you exercise your rights?</strong> The easiest way to exercise your
              rights is by submitting a data subject access request, or by contacting us. We will
              consider and act upon any request in accordance with applicable data protection laws.
            </p>
          </div>

          {/* 1. WHAT INFORMATION DO WE COLLECT? */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              1. What Information Do We Collect?
            </h2>
            <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100">
              Personal information you disclose to us
            </h3>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              We collect personal information that you voluntarily provide to us when you express an
              interest in obtaining information about us or our products and Services, when you
              participate in activities on the Services, or otherwise when you contact us.
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>Personal Information Provided by You.</strong> The personal information that
              we collect depends on the context of your interactions with us and the Services, the
              choices you make, and the products and features you use. The personal information we
              collect may include the following:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <li>Names</li>
              <li>Phone numbers</li>
              <li>Email addresses</li>
              <li>Billing addresses</li>
              <li>Mailing addresses</li>
              <li>Job titles</li>
              <li>Contact preferences</li>
            </ul>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>Sensitive Information.</strong> We do not process sensitive information.
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>Social Media Login Data.</strong> We may provide you with the option to
              register with us using your existing social media account details, like your Facebook,
              X, or other social media account.
            </p>
            <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mt-6">
              Information automatically collected
            </h3>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              We automatically collect certain information when you visit, use, or navigate the
              Services. This information does not reveal your specific identity (like your name or
              contact information) but may include device and usage information, such as your IP
              address, browser and device characteristics, operating system, language preferences,
              referring URLs, device name, country, location, information about how and when you use
              our Services, and other technical information.
            </p>
          </div>

          {/* 2. HOW DO WE PROCESS YOUR INFORMATION? */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              2. How Do We Process Your Information?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              We process your personal information for a variety of reasons, depending on how you
              interact with our Services, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <li>
                <strong>To request feedback.</strong> We may process your information when necessary
                to request feedback and to contact you about your use of our Services.
              </li>
              <li>
                <strong>To send you marketing and promotional communications.</strong> We may
                process the personal information you send to us for our marketing purposes, if this
                is in accordance with your marketing preferences.
              </li>
              <li>
                <strong>To deliver targeted advertising to you.</strong> We may process your
                information to develop and display personalised content and advertising tailored to
                your interests, location, and more.
              </li>
              <li>
                <strong>To protect our Services.</strong> We may process your information as part of
                our efforts to keep our Services safe and secure, including fraud monitoring and
                prevention.
              </li>
              <li>
                <strong>To identify usage trends.</strong> We may process information about how you
                use our Services to better understand how they are being used so we can improve
                them.
              </li>
              <li>
                <strong>
                  To determine the effectiveness of our marketing and promotional campaigns.
                </strong>{' '}
                We may process your information to better understand how to provide marketing and
                promotional campaigns that are most relevant to you.
              </li>
              <li>
                <strong>To save or protect an individual&apos;s vital interest.</strong> We may
                process your information when necessary to save or protect an individual’s vital
                interest, such as to prevent harm.
              </li>
            </ul>
          </div>

          {/* 3. LEGAL BASES */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              3. What Legal Bases Do We Rely On To Process Your Information?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>If you are located in the EU or UK, this section applies to you.</strong>
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the
              valid legal bases we rely on in order to process your personal information. As such,
              we may rely on the following legal bases to process your personal information:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <li>
                <strong>Consent.</strong> We may process your information if you have given us
                permission (i.e. consent) to use your personal information for a specific purpose.
              </li>
              <li>
                <strong>Legitimate Interests.</strong> We may process your information when we
                believe it is reasonably necessary to achieve our legitimate business interests and
                those interests do not outweigh your interests and fundamental rights and freedoms.
              </li>
              <li>
                <strong>Legal Obligations.</strong> We may process your information where we believe
                it is necessary for compliance with our legal obligations.
              </li>
              <li>
                <strong>Vital Interests.</strong> We may process your information where we believe
                it is necessary to protect your vital interests or the vital interests of a third
                party.
              </li>
            </ul>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light mt-4">
              <strong>If you are located in Canada, this section applies to you.</strong>
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              We may process your information if you have given us specific permission (i.e. express
              consent) to use your personal information for a specific purpose, or in situations
              where your permission can be inferred (i.e. implied consent).
            </p>
          </div>

          {/* 4. SHARING INFO */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              4. When And With Whom Do We Share Your Personal Information?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              We may need to share your personal information in the following situations:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <li>
                <strong>Business Transfers.</strong> We may share or transfer your information in
                connection with, or during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to another company.
              </li>
            </ul>
          </div>

          {/* 5. COOKIES */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              5. Do We Use Cookies And Other Tracking Technologies?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              We may use cookies and similar tracking technologies (like web beacons and pixels) to
              gather information when you interact with our Services. Some online tracking
              technologies help us maintain the security of our Services, prevent crashes, fix bugs,
              save your preferences, and assist with basic site functions.
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>Google Analytics.</strong> We may share your information with Google Analytics
              to track and analyse the use of the Services.
            </p>
          </div>

          {/* 6. SOCIAL LOGINS */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              6. How Do We Handle Your Social Logins?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              Our Services offer you the ability to register and log in using your third-party
              social media account details (like your Facebook or X logins). Where you choose to do
              this, we will receive certain profile information about you from your social media
              provider.
            </p>
          </div>

          {/* 7. RETENTION */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              7. How Long Do We Keep Your Information?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              We will only keep your personal information for as long as it is necessary for the
              purposes set out in this Privacy Notice, unless a longer retention period is required
              or permitted by law (such as tax, accounting, or other legal requirements).
            </p>
          </div>

          {/* 8. SECURITY */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              8. How Do We Keep Your Information Safe?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              We have implemented appropriate and reasonable technical and organisational security
              measures designed to protect the security of any personal information we process.
              However, despite our safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology can be guaranteed to
              be 100% secure.
            </p>
          </div>

          {/* 9. MINORS */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              9. Do We Collect Information From Minors?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              We do not knowingly collect, solicit data from, or market to children under 18 years
              of age or the equivalent age as specified by law in your jurisdiction.
            </p>
          </div>

          {/* 10. PRIVACY RIGHTS */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              10. What Are Your Privacy Rights?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights
              under applicable data protection laws. These may include the right (i) to request
              access and obtain a copy of your personal information, (ii) to request rectification
              or erasure; (iii) to restrict the processing of your personal information; (iv) if
              applicable, to data portability; and (v) not to be subject to automated
              decision-making.
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>Withdrawing your consent:</strong> If we are relying on your consent to
              process your personal information, you have the right to withdraw your consent at any
              time.
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>Opting out of marketing and promotional communications:</strong> You can
              unsubscribe from our marketing and promotional communications at any time by clicking
              on the unsubscribe link in the emails that we send.
            </p>
          </div>

          {/* 11. DO-NOT-TRACK */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              11. Controls For Do-Not-Track Features
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              Most web browsers and some mobile operating systems and mobile applications include a
              Do-Not-Track (&apos;DNT&apos;) feature or setting you can activate to signal your
              privacy preference not to have data about your online browsing activities monitored
              and collected. At this stage, no uniform technology standard for recognising and
              implementing DNT signals has been finalised. As such, we do not currently respond to
              DNT browser signals.
            </p>
          </div>

          {/* 12. US RIGHTS */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              12. Do United States Residents Have Specific Privacy Rights?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              If you are a resident of California, Colorado, Connecticut, Delaware, Florida,
              Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New
              Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the
              right to request access to and receive details about the personal information we
              maintain about you and how we have processed it, correct inaccuracies, get a copy of,
              or delete your personal information.
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              We have not disclosed, sold, or shared any personal information to third parties for a
              business or commercial purpose in the preceding twelve (12) months. We will not sell
              or share personal information in the future belonging to website visitors, users, and
              other consumers.
            </p>
          </div>

          {/* 13. OTHER REGIONS */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              13. Do Other Regions Have Specific Privacy Rights?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>Australia and New Zealand:</strong> We collect and process your personal
              information under the obligations and conditions set by Australia&apos;s Privacy Act
              1988 and New Zealand&apos;s Privacy Act 2020.
            </p>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              <strong>Republic of South Africa:</strong> At any time, you have the right to request
              access to or correction of your personal information.
            </p>
          </div>

          {/* 14. UPDATES */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              14. Do We Make Updates To This Notice?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              Yes, we will update this notice as necessary to stay compliant with relevant laws. The
              updated version will be indicated by an updated &apos;Revised&apos; date at the top of
              this Privacy Notice.
            </p>
          </div>

          {/* 15. CONTACT */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              15. How Can You Contact Us About This Notice?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              If you have questions or comments about this notice, you may email us at{' '}
              <a
                href="mailto:hello@thirdbracket.co.uk"
                className="text-primary-900 dark:text-primary-100 hover:underline"
              >
                hello@thirdbracket.co.uk
              </a>{' '}
              or contact us by post at:
            </p>
            <address className="not-italic text-base/[1.6] md:text-lg/[1.75rem] font-light mt-2">
              <strong>thirdbracket</strong>
              <br />
              Nowab Manjil, Town Hall Road
              <br />
              Habiganj Sadar
              <br />
              Habiganj 3300
              <br />
              Bangladesh
            </address>
          </div>

          {/* 16. REVIEW/UPDATE/DELETE */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
              16. How Can You Review, Update, Or Delete The Data We Collect From You?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light">
              Based on the applicable laws of your country or state of residence in the US, you may
              have the right to request access to the personal information we collect from you,
              details about how we have processed it, correct inaccuracies, or delete your personal
              information. To request to review, update, or delete your personal information, please
              fill out and submit a{' '}
              <a
                href="https://app.termly.io/dsar/3de5d650-ec55-4be4-a37b-6a7185cbe65e"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-900 dark:text-primary-100 hover:underline"
              >
                data subject access request
              </a>
              .
            </p>
          </div>
        </div>
      </Bracket>
    </section>
  )
}
