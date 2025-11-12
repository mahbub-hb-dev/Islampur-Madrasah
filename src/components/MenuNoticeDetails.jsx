import Details from "./Details"
import Menu from "./Menu"
import Notice from "./Notice"

const MenuNoticeDetails = () => {
  return (
    <div className="lg:flex m-3 mb-7">

        <Menu />
        <Details />
        <Notice />

      </div>
  )
}

export default MenuNoticeDetails
