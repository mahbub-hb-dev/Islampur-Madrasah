import React from 'react'

const Menu = () => {
  return (
    <div className="lg:w-2/12">

        <p className="text-center font-[200] text-xl text-white p-1 border bg-blue-700"> MENU </p>
        <ul className="text-center [&>li>a]:block [&>li>a]:bg-amber-400 [&>li>a]:my-2 [&>li>a]:p-2 [&>li>a]:rounded [&>li>a:hover]:bg-black [&>li>a:hover]:text-white [&>li>a]:transition">
        <li><a href="#"> ভূমিকা </a></li>
        <li><a href="#"> লক্ষ ও উদ্দেশ্য </a></li>
        <li><a href="#"> মাদ্রাসা পরিচিতি </a></li>
        <li><a href="#"> আমাদের বিভাগসমূহ </a></li>
        <li><a href="#"> ভবিষ্যৎ পরিকল্পনা </a></li>
        <li><a href="#"> আপনার সন্তানকে আমাদের প্রতিষ্ঠানে কেন দিবেন? </a></li>
        </ul>

    </div>
  )
}

export default Menu
