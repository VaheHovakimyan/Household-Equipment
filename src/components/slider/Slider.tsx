import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import React, {FC} from "react";
import "./Slider.scss";
import {SliderItem} from "./sliderItem/SliderItem";
import {useSlider} from "../../hooks/useSlider";


export const Slider: FC = () => {

    const {data} = useSlider();


    return (
        <Swiper
            loop={true}
            spaceBetween={80}
            slidesPerView={4}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={{
                nextEl: ".swiper_button_next",
                prevEl: ".swiper_button_prev"
            }}
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            className="swiper-container"
        >


                {data?.map((slide: any) => (
                    <SwiperSlide key={slide.id} className="swiper-wrapper">
                        <SliderItem
                            url={slide.image}
                            name={slide.name}
                            price={slide.price}
                        />
                    </SwiperSlide>
                ))}

            
            <div style={{display:"flex", flexDirection: "row-reverse", justifyContent: "space-between"}}>
                <div className="swiper_button_next">
                    <img src={`/assets/icons/slider/left_arrow.svg`} alt="left_arrow_icon"/>
                </div>
                <div className="swiper_button_prev">
                    <img src={`/assets/icons/slider/right_arrow.svg`} alt="right_arrow_icon"/>
                </div>
            </div>
        </Swiper>
    );
};