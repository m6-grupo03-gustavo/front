import { StyleBanner } from "./style"
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import car1 from '../../../public/car1.jpg'
import car2 from '../../../public/car2.jpg'
import car3 from '../../../public/car3.jpg'
import car4 from '../../../public/car5.jpg'


export const Banner = () =>{
    return(
        <Swiper     
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay:3500
        }}>
            <SwiperSlide>
                <StyleBanner>
                    <img src={car1} alt="car banner" />
                    <div>
                        <h1>Motors Shop</h1>
                        <h3>A melhor plataforma de anúncios de carros do país</h3>
                    </div>
                </StyleBanner>
            </SwiperSlide>

            <SwiperSlide>
                <StyleBanner>
                    <img src={car2} alt="car banner" />
                </StyleBanner>
            </SwiperSlide>

            <SwiperSlide>
                <StyleBanner>
                    <img src={car3} alt="car banner" />
                    <div></div>
                </StyleBanner>
            </SwiperSlide>

            <SwiperSlide>
                <StyleBanner>
                    <img src={car4} alt="car banner" />

                </StyleBanner>
            </SwiperSlide>
        </Swiper>
    )
}



{/*  */}