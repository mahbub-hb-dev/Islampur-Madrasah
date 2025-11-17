import React from 'react';

const Principle = (): React.JSX.Element => {
  return (
    <div className="my-3 lg:w-4/12">
        <p className="text-center font-[200] text-xl text-white p-1 border bg-blue-700 mb-3"> PRINCIPLE'S MESSAGE </p>
        <div className="bg-[#F8F9FA] lg:p-1">
            <div className="flex justify-center">
                <img src="/images/Better.jpg" className="w-[150px] h-[150px] my-4 align-super border-4 border-blue-400" alt="Principle's image"/>
            </div>

            <div className="px-8 text-center">
                <p> الحمد لله، والصلاة والسلام على رسول الله وعلى آله وصحبه ومن والاه، أما بعد মহান আল্লাহর অশেষ মেহেরবানিতে আল জামিআতুল ইসলামিয়া (ইসলামপুর মাদরাসা ও এতিমখানা)-এর পথচলার দীর্ঘ ছয় যুগেরও অধিক সময় অতিবাহিত... </p>
              
                {/* Modal toggle */}
                <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block my-4 mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Read More 
                </button>

                {/* Main modal Start */}
                <div id="default-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
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
                                    الحمد لله، والصلاة والسلام على رسول الله وعلى آله وصحبه ومن والاه، أما بعد মহান আল্লাহর অশেষ মেহেরবানিতে আল জামিআতুল ইসলামিয়া (ইসলামপুর মাদরাসা ও এতিমখানা)-এর পথচলার দীর্ঘ ছয় যুগেরও অধিক সময় অতিবাহিত হয়েছে, আলহামদুলিল্লাহ। তবে এর উন্নতির ধারা শুরু হয়েছে দ্বিতীয় প্রতিষ্ঠাতা (মরহুম মুহতামিম সাহেব) আব্বাজান মৌলবি আবুল খায়ের মুহাম্মদ ইবরাহীম (রহ.) এবং উন্নয়নের রূপকার (মরহুম নাজেম সাহেব) ছোটভাই হাফেজ মাওলানা ইউসুফ ইবরাহীম (রহ.)-এর হাত ধরে। আমরা বর্তমানে তাঁদের শুরু করে যাওয়া সেই উন্নতির ধারাবাহিকতা অগ্রসর করার চেষ্টা করছি মাত্র। এ সুদীর্ঘ পথপরিক্রমায় প্রতিষ্ঠানটির শিক্ষাকার্যক্রম ও যাবতীয় বিষয়াদি বেশ সুচারুরূপে পরিচালিত হচ্ছে। তালিম-তাদরিস বা পড়ালেখার পাশাপাশি শিক্ষার্থীদের তরবিয়ত তথা চারিত্রিক গঠন, আত্মন্নোয়ন ও আদর্শ তালিবুল ইলমরূপে গড়ে তোলার জন্য সর্বদা নানান উদ্যোগ গ্রহণ করা হয়ে থাকে। সেগুলির তদারকির জন্য সার্বক্ষণিক মেহনতি আসাতিজায়ে কেরামের বিশেষ নেগরানি রয়েছে। পাশাপাশি জামিআর ভর্তি সংশ্লিষ্ট নিয়মকানুন, তালিমাত-দারুল ইকামা-মাতবাখ ও এতিমখানা সংশ্লিষ্ট নীতিমালা, দাতব্য চিকিৎসালয় ও তরবিয়ত সংশ্লিষ্ট নিয়মনীতিসহ ছাত্রের দৈনিক, মাসিক ও বার্ষিক পড়ালেখা, পরীক্ষা, ছুটি-অনুপস্থিতি ও অন্যান্য বিষয় নিয়ন্ত্রণে একটি তথ্য বই প্রস্তুত করার উদ্যোগ গ্রহণ করা হয়েছে। জামিআর বর্তমান শিক্ষাপরিচালক (নাজেমে তালিমাত)-এর তত্ত¡াবধানে সংশ্লিষ্ট দায়িত্বশীল উস্তাদ মহোদয় অক্লান্ত পরিশ্রম করে বইটি ছাত্রদের হাতে তুলে দেওয়ার জন্য চূড়ান্ত করেছেন। এতে ছাত্রের অঙ্গীকারনামাসহ জামিআ প্রতিষ্ঠার লক্ষ্য-উদ্দেশ্য, সংক্ষিপ্ত পরিচিতি এবং সকাল-সন্ধ্যার মাসনুন দোয়াসমূহের সন্নিবেশ তথ্য বইটির সৌন্দর্য বৃদ্ধি করেছে। রাব্বুল আলামিনের দরবারে ফরিয়াদ, বইটি তৈরির কাঙ্খিত উদ্দেশ্য অর্জনে আমাদেরকে যেনো কামিয়াবি দান করেন। জামিআর প্রতিটি ছাত্রকে এর নির্দেশনা মোতাবেক ছাত্রজীবন গঠন করে জীবনকে সর্বাঙ্গীন সুন্দর ও সাফল্যমন্ডিত করার তৌফিক দান করেন। বইটি তৈরিতে যে যেভাবে শ্রম দিয়েছেন, আল্লাহতায়ালা তাঁদের সকলকে আপন শান মোতাবেক উত্তম প্রতিদান দান করেন। আমিন। 
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
  )
}

export default Principle
