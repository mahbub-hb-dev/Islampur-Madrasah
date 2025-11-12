
const Header = () => {
  return (
    <header className="p-2">

      <div className="bg-[#986CDA] text-center lg:flex lg:justify-between lg:items-center lg:px-28">
        <p className="text-center text-white p-3"><i className="fa-solid fa-location-dot"></i> আল জামিয়াতুল ইসলামিয়া ইসলামপুর । প্রতিষ্ঠান কোড : No code </p>
        <p> <i title="Login" className="fa-solid fa-arrow-right-to-bracket cursor-pointer"></i> </p>
      </div>

      <div className="lg:px-28">
        <img src="/images/banner.png" alt="Banner" />
      </div>

    </header>
  )
}

export default Header
