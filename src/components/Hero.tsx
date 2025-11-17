import { JSX } from 'react';

import Carousel from './Carousel'
import Principle from './Principle'

const Hero = (): JSX.Element => {
  return (
    <div className='m-3'>
      <div className="lg:flex">
        <Carousel />
        <Principle />
      </div>
    </div>
  )
}

export default Hero
