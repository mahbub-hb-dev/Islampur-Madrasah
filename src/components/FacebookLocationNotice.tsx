import { JSX } from 'react'

import Facebook from './Facebook'
import Location from './Location'
import NoticeBoard from './NoticeBoard'

const FacebookLocationNotice = (): JSX.Element => {
  return (
    <div className="lg:flex m-3 mb-7">
        <Facebook />
        <Location />
        <NoticeBoard />
    </div>
  )
}

export default FacebookLocationNotice
