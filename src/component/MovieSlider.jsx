import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import Slider1 from "../assets/slider1.webp"
import Slider2 from "../assets/slider2.webp"
// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css';
const MovieSlider = () => {
 
    return (
        <Swiper
            direction={'horizontal'}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
                clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img className='w-full' src={Slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide> <img className='w-full' src={Slider2} alt="" /></SwiperSlide>
            {/* <SwiperSlide> <img src={Slider1} alt="" /></SwiperSlide>
            <SwiperSlide> <img src={Slider1} alt="" /></SwiperSlide> */}
        </Swiper>
    )
}

export default MovieSlider