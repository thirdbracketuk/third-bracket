import React from 'react'
import { Metadata } from 'next'
import { Bracket, Card } from '@thirdbracket/bracketui'
import Script from 'next/script'
import CallbackForm from '@/components/CallbackForm'
import PageHeader from '@/components/PageHeader'
import CTASection from '@/components/CTASection'
import { FaTachometerAlt, FaStar, FaPhoneAlt, FaSearch, FaCheckCircle } from 'react-icons/fa'
import { MdRocketLaunch, MdBrush, MdPhoneIphone } from 'react-icons/md'
import { IoCheckmark } from 'react-icons/io5'
import { RiLayout5Line } from 'react-icons/ri'

export const metadata: Metadata = {
  title: 'ফ্রি কলব্যাক রিকুয়েস্ট করুন',
  description:
    'আপনার ব্যবসার জন্য প্রফেশনাল ওয়েবসাইট ও ব্র্যান্ডিং সলিউশন। DesignRush-এ ম্যানচেস্টারের #১ ওয়েব ডিজাইন এজেন্সি। আজই ফ্রি কলব্যাক বুক করুন।',
  openGraph: {
    title: 'ফ্রি কলব্যাক রিকুয়েস্ট করুন',
    description:
      'আপনার ওয়েবসাইট ও ডিজিটাল ব্র্যান্ডিং নিয়ে বিশেষজ্ঞ পরামর্শ পান। সম্পূর্ণ বিনামূল্যে।',
  },
  robots: { index: false, follow: false },
}

const painPoints = [
  {
    Icon: FaTachometerAlt,
    title: 'ওয়েবসাইট অনেক স্লো',
    desc: 'শেয়ার্ড হোস্টিংয়ে ৫০০-১০০০টা সাইট একসাথে চলে। কাস্টমার ৩ সেকেন্ডের বেশি অপেক্ষা না করে চলে যায়।',
  },
  {
    Icon: MdBrush,
    title: 'ব্র্যান্ড কনসিস্টেন্ট না',
    desc: 'ফেসবুকে এক লোগো, ওয়েবসাইটে আরেক রং - এই অসামঞ্জস্য কাস্টমারের মনে অজান্তে অবিশ্বাস তৈরি করে।',
  },
  {
    Icon: FaSearch,
    title: 'গুগলে খুঁজে পাওয়া যায় না',
    desc: 'যেটা গুগলে নেই সেটা দুনিয়ায় নেই। বায়ার আপনার নাম সার্চ করলে কিছুই দেখা যায় না।',
  },
  {
    Icon: MdPhoneIphone,
    title: 'মোবাইলে সাইট ভেঙে যায়',
    desc: 'বাংলাদেশে ৮০%+ ইন্টারনেট ব্যবহার মোবাইলে। মোবাইল অপটিমাইজড না হলে সব বৃথা।',
  },
  {
    Icon: FaStar,
    title: 'ভেরিফাইড রিভিউ নেই',
    desc: 'আপনার রিভিউগুলো এখন ছড়িয়ে আছে - কেউ ফেসবুকে দিয়েছে, কেউ গুগলে, কেউ হয়তো অন্য কোথাও',
  },
  {
    Icon: RiLayout5Line,
    title: 'জটিল কন্টাক্ট ফর্ম',
    desc: 'প্রতিটা অতিরিক্ত ফিল্ডে ১০-২০% লিড কমে। সহজ ফর্ম বেশি কাস্টমার আনে।',
  },
]

const processSteps = [
  {
    Icon: FaPhoneAlt,
    num: '০১',
    title: 'আমরা কল করবো',
    desc: 'রিকোয়েস্ট করার ৭২ ঘণ্টার মধ্যে আমাদের টিম আপনাকে কল করবে।',
  },
  {
    Icon: FaSearch,
    num: '০২',
    title: 'ফ্রি অডিট',
    desc: 'আপনার বর্তমান ডিজিটাল উপস্থিতি বিশ্লেষণ করব। কোথায় সমস্যা, কী করলে উন্নতি হবে বলব।',
  },
  {
    Icon: MdRocketLaunch,
    num: '০৩',
    title: 'কাস্টম প্ল্যান',
    desc: 'আপনার বাজেট ও ব্যবসার সাইজ অনুযায়ী পূর্ণাঙ্গ প্ল্যান দেব।',
  },
]

export default async function BdCampaignPage() {
  return (
    <section>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="beforeInteractive"
      />

      {/* ── PAGE HEADER ── */}
      <PageHeader
        title="আপনার ব্যবসার জন্য একটি ডিজিটাল পরিচয় তৈরি করুন"
        description="DesignRush-এ ম্যানচেস্টারের #১ ওয়েব ডিজাইন এজেন্সি। আপনার ব্যবসাকে ব্র্যান্ড এ রূপান্তর করতে এখনই কলবেক রিকোয়েস্ট করুন"
      />

      {/* ── HERO FORM + TRUST ── */}
      <div className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
        <Bracket fluid centered padding="small">
          <div className="mx-auto md:max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left — trust signals + stats */}
              <div>
                <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] text-primary-500 dark:text-primary-400 leading-relaxed mb-8">
                  Bata, Apex, Aarong — এরা কোটি টাকা খরচ করে ব্র্যান্ড বানিয়েছে। আপনার সেই পথে যেতে
                  হবে না। আমরা আপনার বাজেট ও সাইজ বুঝে সম্পূর্ণ ডিজিটাল সলিউশন দিই।
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { num: '১০০+', label: 'ইন্টারনেশনাল প্রজেক্টের অভিজ্ঞতা' },
                    { num: '#১', label: 'DesignRush-এ ম্যানচেস্টার ভিত্তিক রেঙ্কিং' },
                    { num: '১০০%', label: 'বিনামূল্যে প্রথম পরামর্শ ও অডিট' },
                    { num: '৭২', label: 'ঘন্টার মধ্যে কলব্যাকের প্রতিশ্রুতি' },
                  ].map(({ num, label }) => (
                    <div
                      key={num}
                      className="p-4 rounded-2xl bg-white dark:bg-black border border-primary-500 border-opacity-30 shadow-[0_0_2px_rgba(11,13,15,0.10)] dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]"
                    >
                      <p className="text-2xl font-bold bg-gradient-text dark:bg-gradient-text-dark bg-clip-text text-transparent leading-none mb-1">
                        {num}
                      </p>
                      <p className="text-xs text-primary-500 dark:text-primary-400 leading-relaxed">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Trust checks */}
                <ul className="space-y-2">
                  {[
                    'DesignRush-এ ম্যানচেস্টার #১',
                    'ইন্টারন্যাশনাল ক্লায়েন্ট অভিজ্ঞতা',
                    'সম্পূর্ণ বিনামূল্যে পরামর্শ',
                    'বাজেট অনুযায়ী প্ল্যান',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-300"
                    >
                      <IoCheckmark className="text-accent-600 dark:text-accent-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — form card */}
              <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-accent-50/50 via-white to-accent-50/30 dark:from-accent-950/10 dark:via-black dark:to-accent-950/5 border border-accent-200 dark:border-accent-800/30 shadow-[0_0_0_1px_rgba(188,58,91,0.06),0_8px_32px_-8px_rgba(188,58,91,0.12)] dark:shadow-[0_0_0_1px_rgba(215,93,130,0.08),0_8px_40px_-8px_rgba(215,93,130,0.16)]">
                <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent-100/60 dark:bg-accent-900/10 blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent-500 dark:text-accent-400 border border-accent-200 dark:border-accent-800 bg-accent-50 dark:bg-accent-950 px-3 py-1 rounded-full mb-4">
                    ফ্রি কলব্যাক অফার
                  </span>
                  <h2 className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold tracking-tight text-primary-950 dark:text-primary-50 mb-2">
                    আজই একটি ফ্রি কলব্যাক বুক করুন
                  </h2>
                  <p className="text-sm text-primary-500 dark:text-primary-400 mb-6">
                    আপনার ফোন নম্বর দিন, আমরা কল করব। কোনো চাপ নেই, কোনো খরচ নেই।
                  </p>
                  <CallbackForm recaptchaSiteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
                  <p className="text-xs text-primary-400 dark:text-primary-500 mt-4 text-center">
                    আপনার তথ্য সম্পূর্ণ নিরাপদ। কোনো স্প্যাম নেই।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Bracket>
      </div>

      {/* ── PAIN POINTS — using Card from bracketui like Feature.tsx ── */}
      <div className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
        <Bracket fluid centered padding="small">
          <div className="mx-auto md:max-w-screen-xl">
            <div className="mb-8 md:mb-10 lg:mb-12 grid gap-3 lg:gap-4 lg:grid-cols-2 lg:items-center lg:max-w-5xl lg:mx-auto">
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-bold tracking-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-left sm:text-center lg:text-right">
                আপনার বিজনেস এর কি একটি ওয়েবসাইট আছে?
              </h2>
              <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-primary-500 dark:text-primary-400 text-left sm:text-center lg:text-left">
                হয়তো আছে কিন্তু নিচের সমস্যাগুলোর সমাধান কি আছে? আমাদের কাছে এর সমাধান আছে শুধু একটা
                কলবেক রিকোয়েস্ট করে যান আমরাই যোগাযোগ করবো আপনাকে।
              </p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
              {painPoints.map(({ Icon, title, desc }) => (
                <div key={title} className="mb-6 break-inside-avoid">
                  <Card
                    size="lg"
                    header={
                      <span className="bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold flex items-center gap-2">
                        <Icon className="text-accent-600 dark:text-accent-400 shrink-0" />
                        {title}
                      </span>
                    }
                    theme={{
                      background: 'bg-white dark:bg-black',
                      border:
                        'border-opacity-30 border-primary-500 dark:shadow-[0_0_2px_rgba(224,227,230,0.20)] shadow-[0_0_2px_rgba(11,13,15,0.10)]',
                      hover:
                        '[@media(hover:hover)]:hover:border-opacity-50 [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] focus-within:border-opacity-100 active:border-opacity-100',
                      text: 'text-primary-400 dark:text-primary-600 leading-[1.45] font-normal',
                    }}
                  >
                    {desc}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Bracket>
      </div>

      {/* ── PROCESS ── */}
      <div className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
        <Bracket fluid centered padding="small">
          <div className="mx-auto md:max-w-screen-xl">
            <div className="mb-8 md:mb-10 lg:mb-12 grid gap-3 lg:gap-4 lg:grid-cols-2 lg:items-center lg:max-w-5xl lg:mx-auto">
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-bold tracking-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-left sm:text-center lg:text-right">
                কলব্যাকের পর কী হবে?
              </h2>
              <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-primary-500 dark:text-primary-400 text-left sm:text-center lg:text-left">
                তিনটি ধাপে আমরা আপনার ব্যবসার ডিজিটাল সমস্যার সমাধান করব।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {processSteps.map(({ Icon, num, title, desc }) => (
                <Card
                  key={num}
                  size="lg"
                  header={
                    <span className="bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold flex items-center gap-2">
                      <Icon className="text-accent-600 dark:text-accent-400 shrink-0" />
                      {title}
                    </span>
                  }
                  theme={{
                    background: 'bg-white dark:bg-black',
                    border:
                      'border-opacity-30 border-primary-500 dark:shadow-[0_0_2px_rgba(224,227,230,0.20)] shadow-[0_0_2px_rgba(11,13,15,0.10)]',
                    hover:
                      '[@media(hover:hover)]:hover:border-opacity-50 focus-within:border-opacity-100',
                    text: 'text-primary-400 dark:text-primary-600 leading-[1.45] font-normal',
                  }}
                >
                  <span className="text-4xl font-bold text-primary-100 dark:text-primary-800 leading-none block mb-3 select-none">
                    {num}
                  </span>
                  {desc}
                </Card>
              ))}
            </div>
          </div>
        </Bracket>
      </div>

      {/* ── BOTTOM FORM ── */}
      <div className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
        <Bracket fluid centered padding="small">
          <div className="mx-auto md:max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] tracking-tight leading-tight font-bold text-primary-950 dark:text-primary-50 mb-3">
                  আর দেরি নয়, আজই কথা বলুন
                </h2>
                <p className="text-primary-500 dark:text-primary-400 text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed mb-6 max-w-[460px]">
                  আপনার প্রতিযোগীরা ইতিমধ্যে ডিজিটাল দুনিয়ায় এগিয়ে যাচ্ছে। প্রথম পদক্ষেপটা নিতে
                  কোনো খরচ লাগবে না।
                </p>
                <ul className="space-y-2">
                  {[
                    'সম্পূর্ণ বিনামূল্যে পরামর্শ',
                    'কোনো চুক্তি বা বাধ্যবাধকতা নেই',
                    'বাংলায় কথা বলার সুযোগ',
                    '২৪ ঘণ্টার মধ্যে কলব্যাক',
                    'আপনার বাজেট অনুযায়ী সলিউশন',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-300"
                    >
                      <FaCheckCircle className="text-accent-600 dark:text-accent-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-accent-50/50 via-white to-accent-50/30 dark:from-accent-950/10 dark:via-black dark:to-accent-950/5 border border-accent-200 dark:border-accent-800/30 shadow-[0_0_0_1px_rgba(188,58,91,0.06),0_8px_32px_-8px_rgba(188,58,91,0.12)] dark:shadow-[0_0_0_1px_rgba(215,93,130,0.08),0_8px_40px_-8px_rgba(215,93,130,0.16)]">
                <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent-100/60 dark:bg-accent-900/10 blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400 border border-accent-200 dark:border-accent-800 bg-accent-50 dark:bg-accent-950 px-3 py-1 rounded-full mb-4">
                    ফ্রি কলব্যাক
                  </span>
                  <h3 className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold tracking-tight text-primary-950 dark:text-primary-50 mb-2">
                    এখনই রিকোয়েস্ট করুন
                  </h3>
                  <p className="text-sm text-primary-500 dark:text-primary-400 mb-6">
                    শুধু ফোন নম্বর দিন, বাকিটা আমাদের উপর ছেড়ে দিন।
                  </p>
                  <CallbackForm recaptchaSiteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
                  <p className="text-xs text-primary-400 dark:text-primary-500 mt-4 text-center">
                    আপনার তথ্য সম্পূর্ণ নিরাপদ।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Bracket>
      </div>

      {/* ── CTA SECTION ── */}
      <CTASection
        title="Third Bracket সম্পর্কে আরও জানুন"
        description="আমাদের কাজ দেখুন, ক্লায়েন্টদের রিভিউ পড়ুন, এবং বুঝুন কেন আমরা ম্যানচেস্টারের #১।"
        primary={{ label: 'আমাদের কাজ দেখুন', href: '/portfolio' }}
        secondary={{ label: 'যোগাযোগ করুন', href: '/contact' }}
      />
    </section>
  )
}
