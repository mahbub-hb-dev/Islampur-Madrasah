import Facebook from './Facebook'
import Location from './Location'
import NoticeBoard from './NoticeBoard'

const FacebookLocationNotice = () => {
  return (
    <div className="lg:flex m-3 mb-7">
        <Facebook />
        <Location />
        <NoticeBoard />
    </div>
  )
}

export default FacebookLocationNotice
