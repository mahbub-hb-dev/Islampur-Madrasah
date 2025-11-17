import { JSX } from 'react';

const NoticeBoard = (): JSX.Element => {
  return (
    <div className="lg:w-4/12">
        <p className="text-center font-[200] text-xl text-white border p-0.5 bg-green-600 mb-4"> NOTICE BOARD </p>

        <ul className="[&>li]:mb-4 px-4 h-[360px] rounded-xl bg-[#F8F9FA]">
            <li> <i className="fa-solid fa-hand-point-right"></i> আলহামদুলিল্লাহ, সকাল ৯টা থেকে আসর পর্যন্ত দাপ্তরিক সকল কার্যক্রম চালু আছে। </li>
            <li> <i className="fa-solid fa-hand-point-right"></i> নূরানী কিন্ডার গার্টেন বিভাগে ১লা জানুয়ারী ২০২৫ ই. থেকে পুর্ণরূপে ক্লাস শুরু হয়েছে। এখনও যারা ভর্তি করাননি, সিলেবাস বৃদ্ধি হবার আগেই ভর্তি করিয়ে দিন। </li>
            <li> <i className="fa-solid fa-hand-point-right"></i> সকল বিভাগের রেজাল্ট প্রদান করা হয়েছে। আপনার সন্তানের রেজাল্টের ব্যাপারে গুরুত্ব দিয়ে খোঁজ নিন। </li>
            <li> <i className="fa-solid fa-hand-point-right"></i> আপনার সন্তানের দীন-ঈমান সংরক্ষণের নৈতিক দায়িত্ব আপনার। সুতরাং, তাকে দীনদার ও আলোকিত মানুষ বানানোর জন্য কওমী মাদরাসায় ভর্তি করুন। </li>
        </ul>

    </div>
  )
}

export default NoticeBoard
