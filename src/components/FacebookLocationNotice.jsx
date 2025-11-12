import React from 'react'

const FacebookLocationNotice = () => {
  return (
    <div className="lg:flex m-3 mb-7">
        {/* Facebook Section Start */}
        <div className="lg:w-4/12">
          <p className="text-center font-[200] text-xl text-white border p-0.5 bg-green-600 mb-4"> ANOTHER WEBSITE </p>

          <iframe className="w-full h-[360px]" src="https://www.ahmadsit.com/?fbclid=IwY2xjawMZZQBleHRuA2FlbQIxMABicmlkETFNOHVzaGM2REZFdWlRU1ZKAR4t19sZUWTaLR3Mr3KHOJJoBwYlaXZKRhStp9MKgnEsVIqPtWeNwQWkQ3L1sQ_aem_iW3R8u5rDjbe7tlfsfJLQw" frameBorder="0"></iframe>

        </div>
        {/* Facebook Section End */}

         {/* Location Section Start */}
        <div className="lg:w-4/12 lg:mx-5">
          <p className="text-center font-[200] text-xl text-white border p-0.5 bg-green-600 mb-4"> LOCATION </p>
          <iframe
            className="rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0905007215306!2d90.47117617409886!3d23.708461990387523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b70054decb79%3A0x5cd9f2b094411fd2!2sAhmad&#39;s%20Education!5e0!3m2!1sen!2sbd!4v1756011590698!5m2!1sen!2sbd"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Location Section End */}

         {/* Notice Board Section Start */}
        <div className="lg:w-4/12">
          <p className="text-center font-[200] text-xl text-white border p-0.5 bg-green-600 mb-4"> NOTICE BOARD </p>

          <ul className="[&>li]:mb-4 px-4 h-[360px] rounded-xl bg-[#F8F9FA]">
            <li> <i className="fa-solid fa-hand-point-right"></i> আলহামদুলিল্লাহ, সকাল ৯টা থেকে আসর পর্যন্ত দাপ্তরিক সকল কার্যক্রম চালু আছে। </li>
            <li> <i className="fa-solid fa-hand-point-right"></i> নূরানী কিন্ডার গার্টেন বিভাগে ১লা জানুয়ারী ২০২৫ ই. থেকে পুর্ণরূপে ক্লাস শুরু হয়েছে। এখনও যারা ভর্তি করাননি, সিলেবাস বৃদ্ধি হবার আগেই ভর্তি করিয়ে দিন। </li>
            <li> <i className="fa-solid fa-hand-point-right"></i> সকল বিভাগের রেজাল্ট প্রদান করা হয়েছে। আপনার সন্তানের রেজাল্টের ব্যাপারে গুরুত্ব দিয়ে খোঁজ নিন। </li>
            <li> <i className="fa-solid fa-hand-point-right"></i> আপনার সন্তানের দীন-ঈমান সংরক্ষণের নৈতিক দায়িত্ব আপনার। সুতরাং, তাকে দীনদার ও আলোকিত মানুষ বানানোর জন্য কওমী মাদরাসায় ভর্তি করুন। </li>
          </ul>

        </div>
        {/* Notice Board Section End */}
      </div>
  )
}

export default FacebookLocationNotice
