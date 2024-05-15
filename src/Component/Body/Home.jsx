import React from 'react'
import HomeBanner from '../../assets/Images/home.jpg';
import HomeVegi from '../../assets/Images/home-2.jpg';
import HomeShop from '../../assets/Images/home-3.jpg';
import {UncontrolledCarousel} from 'reactstrap';

const Home = () => {
  return (
    <div className='container'>
        {/* <img src={HomeBanner} className='w-75' alt="Banner" /> */}
        <UncontrolledCarousel
  items={[
    {
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
      src: HomeBanner
    },
    {
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
      src: HomeVegi
    },
    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src: HomeShop
    }
  ]}
 />

    </div>
  )
}

export default Home;