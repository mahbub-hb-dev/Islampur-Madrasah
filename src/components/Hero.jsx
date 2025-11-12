import React from 'react'

const Hero = () => {
  return (
    <div className='m-3'>
      <div className="lg:flex">
        {/* Carousel Start Here */}
        <div id="default-carousel" className="relative w-full lg:w-8/12 lg:mr-3" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                                {/* Item 1 (show by default so an image appears without JS) */}
                                <div className="duration-700 ease-in-out block" data-carousel-item>
                                    <img src="/images/first.jpg" className="w-full h-full object-cover" alt="..."/>
                                </div>
                {/* Item 2 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/images/second.jpg" className="w-full h-full object-cover" alt="..."/>
                </div>
                {/* Item 3 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/images/third.jpeg" className="w-full h-full object-cover" alt="..."/>
                </div>
                {/* Item 4 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/images/first.jpg" className="w-full h-full object-cover" alt="..."/>
                </div>
                {/* Item 5 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/images/second.jpg" className="w-full h-full object-cover" alt="..." />
                </div>
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            {/* Slider controls */}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
        {/* Carousel End Here */}

        {/* Principles Section Start */}
        <div className="my-3 lg:w-4/12">
          <p className="text-center font-[200] text-xl text-white p-1 border bg-blue-700 mb-3"> PRINCIPLE'S MESSAGE </p>
          <div className="bg-[#F8F9FA] lg:p-1">
                        <div className="flex justify-center">
                            {/* Use root-relative path for files in `public/images` */}
                              <img src="/images/Better.jpg" className="w-[150px] h-[150px] my-4 align-super border-4 border-blue-400" alt="Principle's image"/>
                        </div>

            <div className="px-8 text-center">
              <p> الحمد لله، والصلاة والسلام على رسول الله وعلى آله وصحبه ومن والاه، أما بعد মহান আল্লাহর অশেষ মেহেরবানিতে আল জামিআতুল ইসলামিয়া (ইসলামপুর মাদরাসা ও এতিমখানা)-এর পথচলার দীর্ঘ ছয় যুগেরও অধিক সময় অতিবাহিত... </p>
              
              {/* Modal toggle */}
              <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block my-4 mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Read More 
              </button>

              {/* Main modal Start */}
              <div id="default-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                  <div className="relative p-4 w-full max-w-2xl max-h-full">
                      {/* Modal content */}
                      <div className="relative bg-white rounded-lg shadow-sm">
                          {/* Modal header */}
                          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white"> Principle's Message </h3>
                              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                  </svg>
                                  <span className="sr-only">Close modal</span>
                              </button>
                          </div>
                          {/* Modal body */}
                          <div className="p-4 md:p-5 space-y-4">
                              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                  الحمد لله، والصلاة والسلام على رسول الله وعلى آله وصحبه ومن والاه، أما بعد মহান আল্লাহর অশেষ মেহেরবানিতে আল জামিআতুল ইসলামিয়া (ইসলামপুর মাদরাসা ও এতিমখানা)-এর পথচলার দীর্ঘ ছয় যুগেরও অধিক সময় অতিবাহিত হয়েছে, আলহামদুলিল্লাহ। তবে এর উন্নতির ধারা শুরু হয়েছে দ্বিতীয় প্রতিষ্ঠাতা (মরহুম মুহতামিম সাহেব) আব্বাজান মৌলবি আবুল খায়ের মুহাম্মদ ইবরাহীম (রহ.) এবং উন্নয়নের রূপকার (মরহুম নাজেম সাহেব) ছোটভাই হাফেজ মাওলানা ইউসুফ ইবরাহীম (রহ.)-এর হাত ধরে। আমরা বর্তমানে তাঁদের শুরু করে যাওয়া সেই উন্নতির ধারাবাহিকতা অগ্রসর করার চেষ্টা করছি মাত্র। এ সুদীর্ঘ পথপরিক্রমায় প্রতিষ্ঠানটির শিক্ষাকার্যক্রম ও যাবতীয় বিষয়াদি বেশ সুচারুরূপে পরিচালিত হচ্ছে। তালিম-তাদরিস বা পড়ালেখার পাশাপাশি শিক্ষার্থীদের তরবিয়ত তথা চারিত্রিক গঠন, আত্মন্নোয়ন ও আদর্শ তালিবুল ইলমরূপে গড়ে তোলার জন্য সর্বদা নানান উদ্যোগ গ্রহণ করা হয়ে থাকে। সেগুলির তদারকির জন্য সার্বক্ষণিক মেহনতি আসাতিজায়ে কেরামের বিশেষ নেগরানি রয়েছে। পাশাপাশি জামিআর ভর্তি সংশ্লিষ্ট নিয়মকানুন, তালিমাত-দারুল ইকামা-মাতবাখ ও এতিমখানা সংশ্লিষ্ট নীতিমালা, দাতব্য চিকিৎসালয় ও তরবিয়ত সংশ্লিষ্ট নিয়মনীতিসহ ছাত্রের দৈনিক, মাসিক ও বার্ষিক পড়ালেখা, পরীক্ষা, ছুটি-অনুপস্থিতি ও অন্যান্য বিষয় নিয়ন্ত্রণে একটি তথ্য বই প্রস্তুত করার উদ্যোগ গ্রহণ করা হয়েছে। জামিআর বর্তমান শিক্ষাপরিচালক (নাজেমে তালিমাত)-এর তত্ত¡াবধানে সংশ্লিষ্ট দায়িত্বশীল উস্তাদ মহোদয় অক্লান্ত পরিশ্রম করে বইটি ছাত্রদের হাতে তুলে দেওয়ার জন্য চূড়ান্ত করেছেন। এতে ছাত্রের অঙ্গীকারনামাসহ জামিআ প্রতিষ্ঠার লক্ষ্য-উদ্দেশ্য, সংক্ষিপ্ত পরিচিতি এবং সকাল-সন্ধ্যার মাসনুন দোয়াসমূহের সন্নিবেশ তথ্য বইটির সৌন্দর্য বৃদ্ধি করেছে। রাব্বুল আলামিনের দরবারে ফরিয়াদ, বইটি তৈরির কাঙ্খিত উদ্দেশ্য অর্জনে আমাদেরকে যেনো কামিয়াবি দান করেন। জামিআর প্রতিটি ছাত্রকে এর নির্দেশনা মোতাবেক ছাত্রজীবন গঠন করে জীবনকে সর্বাঙ্গীন সুন্দর ও সাফল্যমন্ডিত করার তৌফিক দান করেন। বইটি তৈরিতে যে যেভাবে শ্রম দিয়েছেন, আল্লাহতায়ালা তাঁদের সকলকে আপন শান মোতাবেক উত্তম প্রতিদান দান করেন। আমিন। 
                              </p>
                          </div>
                          {/* Modal footer */}
                          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                              <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> Close </button>
                          </div>
                      </div>
                  </div>
              </div>
              {/* Main Modal End */}
            </div>
          </div>
        </div>
        {/* Principles Section End */}
      </div>
    </div>
  )
}

export default Hero
