// import {FC, useEffect, useRef, useState} from "react";
// import './HomeSlider.scss';
// import {SliderItemInterface} from "../../interfaces/interfaces";
//
//
// const sliderArray: SliderItemInterface[] = [
//     {
//         id: 0,
//         src: `/assets/images/home/slider_image.png`
//     },
//     {
//         id: 1,
//         src: `/assets/images/home/slider_image.png`
//     },
//     {
//         id: 2,
//         src: `/assets/images/home/slider_image.png`
//     }
// ]
//
// export const HomeSlider: FC = () => {
//
//     const [id, setId] = useState<number>(0);
//     // const timerRef: any = useRef(0);
//
//
//     useEffect(() => {
//
//         function resetTimeout() {
//             clearTimeout();
//         }
//
//         resetTimeout();
//         // console.log("Effect");
//         timerRef.current = setTimeout(() => timerRef.current += 1, 1000);
//
//         console.log(timerRef.current);
//
//         // return () => {
//         //     console.log(timer);
//         //     resetTimeout();
//         // };
//     }, [timerRef.current]);
//
//
//
//     return (
//
//         <div className="home_slider_div">
//
//             <div className="home_show_slider">
//
//                 {sliderArray.map(({id, src}: SliderItemInterface) => {
//                     return (
//                         <div
//                             className="slider"
//                             style={{transform: `translate3d(${-id * 100}%, 0, 0)`}}
//                             key={id}
//                         >
//
//                             <div className="slider_left_part">
//                                 <img
//                                     src={src}
//                                     alt="slider_image"
//                                     className="slider_image"
//                                 />
//                             </div>
//
//                             <div className="slider_right_part">
//                                 <p className="slider_right_part_title">
//                                     HOT DEALS THIS WEEK
//                                 </p>
//                                 <p className="slider_right_part_text">
//                                     SALE 50% OFF <br/>
//                                     MODERN FURNITURE
//                                 </p>
//                                 <button className="slider_right_part_view_btn">
//                                     VIEW NOW
//                                 </button>
//                             </div>
//
//                         </div>
//                     )
//                 })}
//
//
//             </div>
//         </div>
//     )
// }
//
//
// // <div className="slider_circle_div_flex">
// //     <div className="slider_circle_div">
// //         <div className="slider_circle"></div>
// //         <div className="slider_circle"></div>
// //         <div className="slider_circle"></div>
// //     </div>
// // </div>

import React, {useState, useEffect, FC} from 'react';
import './HomeSlider.scss' ;
import {SliderItemInterface} from "../../interfaces/interfaces";

export const HomeSlider: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);


    const sliderArray: SliderItemInterface[] = [
        {
            id: 0,
            src: `/assets/images/home/slider_image.png`
        },
        {
            id: 1,
            src: `/assets/images/home/slider_image.png`
        },
        {
            id: 2,
            src: `/assets/images/home/slider_image.png`
        }
    ]
    useEffect(() => {
        // Function to handle the timeout and change the active index
        const handleTimeout = () => {
            const newIndex = (activeIndex + 1) % sliderArray.length;
            setActiveIndex(newIndex);
        };

        // Set a timeout to change the active index every 3 seconds (adjust as needed)
        const timeoutId = setTimeout(handleTimeout, 2000);

        // Clear the timeout when the component is unmounted or when the activeIndex changes
        return () => clearTimeout(timeoutId);
    }, [activeIndex]);

    return (

        <div className="home_slider_div">

            <div className="home_show_slider">
                <div className="slider">
                    {sliderArray.map(({id, src}, index) => (
                        <div
                            className={`slider-item ${index === activeIndex ? 'active' : ''}`}
                            key={id}
                        >

                            <div className="slider_show_flex">

                                <div className="slider_left_part">
                                    <img
                                        src={src}
                                        alt="slider_image"
                                        className="slider_image"
                                    />
                                </div>

                                <div className="slider_right_part">
                                    <p className="slider_right_part_title">
                                        HOT DEALS THIS WEEK
                                    </p>
                                    <p className="slider_right_part_text">
                                        SALE 50% OFF <br/>
                                        MODERN FURNITURE
                                    </p>
                                    <button className="slider_right_part_view_btn">
                                        VIEW NOW
                                    </button>
                                </div>

                            </div>

                        </div>

                        // <div
                        //     key={index}
                        //     className={`slider-item ${index === activeIndex ? 'active' : ''}`}
                        // >
                        //     ID:{id}
                        // </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

