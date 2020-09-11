import React from 'react'
import Nav from './Navigation/Nav';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade, Lazy, Mousewheel,EffectCoverflow } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-coverflow';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectCoverflow]);

const Home = () => {

    const Effectcover =  {
        loop: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        spaceBetween:2,
        slideShadows:true,
        slidesPerView:2,
        navigation:true,
        autoplay:{disableOnInteraction:true},

        
        coverflowEffect: {
          rotate: 50,
          width:100,
          stretch: 50,
          modifier: 2,
          slideShadows : false,
        }}
    
    return (
        <> 
            <Nav />
            <div className="main_page">
                <div className="home_child1">
                    <div className="figure_data">
                        <h3 id="heading_content">
                            Welcome to Dharmshala Navgurukul Students database..
                        </h3>
                    </div>
                </div>
                <div className="home_child2">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={{ clickable: true }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        autoplay={{ disableOnInteraction: true }}
                        
                    >
                        <SwiperSlide><img className="swiper_img" src="group.jpeg" /></SwiperSlide>

                        <SwiperSlide><img className="swiper_img" src="group.jpeg" /></SwiperSlide>
                        <SwiperSlide><img className="swiper_img" src="group.jpeg" /></SwiperSlide>
                    </Swiper>
                    
                </div>

                <div className="home_child3">
                    <div className="page_child">
                        <h3 id="child3">
                            Vision 
                        </h3>
                        <p className="child3">
                            This website store students information who are living in Navgurukul Dharmshala Campus.
                            It is just a demo of student inventory data which means that how your project will look.
                        </p>
                    </div>
                </div>

                <div className="home_child4">
                    <h3 className="child4_content"> Dharmshala Councils Members </h3>
                    <div className="page_child1">
                    <Swiper{...Effectcover}>
                        
                        <SwiperSlide><img className="child_img" src="himanshu.jpeg" /></SwiperSlide>
                        <SwiperSlide><img className="child_img" src="Deepak patel.jpeg" /></SwiperSlide>
                        <SwiperSlide><img className="child_img" src="Deepak Sharma.jpeg" /></SwiperSlide>
                        <SwiperSlide><img className="child_img" src="kaushal.jpeg" /></SwiperSlide>
                        <SwiperSlide><img className="child_img" src="sonu.jpeg" /></SwiperSlide>
                        <SwiperSlide><img className="child_img" src="Bijender.jpeg" /></SwiperSlide>
                        <SwiperSlide><img className="child_img" src="Ankur.jpeg" /></SwiperSlide>
                    </Swiper>
                    </div>
                </div>
                <hr></hr>
            </div>
        </>
    )
}

export default Home;