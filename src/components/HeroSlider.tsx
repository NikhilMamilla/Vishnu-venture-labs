import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Custom styles for Swiper pagination to match original
const swiperStyles = `
  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    background: #fff;
    opacity: 1;
  }
`;

const HeroSlider: React.FC = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[600px] mt-0 pb-0">
            <style>{swiperStyles}</style>
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                speed={1200}
                pagination={{ clickable: true }}
                className="w-full h-full"
            >
                {/* Slide 1 */}
                <SwiperSlide className="relative flex justify-center items-center overflow-hidden">
                    <img
                        src="/images_vvlf/vvlf6.jpeg"
                        alt="Slide 1"
                        className="w-full h-full object-cover rounded-[10px]"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(70,79,111,0.3)] z-[1]"></div>

                    <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-center z-10 text-[rgb(15,49,137)] font-playfair px-6 py-3">
                        <div className="font-playfair text-white font-semibold text-[1.2rem] md:text-[3.5rem] mb-6 opacity-0 animate-[fadeInUp_6s_ease_forwards]">
                            Got an idea that can change lives?
                        </div>
                        <div className="font-playfair text-white font-light text-[0.9rem] md:text-[1.8rem] mt-[10px] opacity-0 animate-[fadeInUp_6s_ease_forwards_0.8s] text-justify">
                            <span className="inline-block font-playfair font-normal text-white text-[2rem] overflow-hidden whitespace-nowrap border-r-2 border-[#222] animate-[typing_4s_steps(60,end)_forwards,blink-caret_0.75s_step-end_infinite] mx-auto">
                                Join VVLF to turn impactful ideas into scalable ventures.
                            </span>
                        </div>
                    </div>

                    <div className="absolute top-[75%] md:top-[70%] left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-[10px] md:gap-[15px]">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdVdqSv6MBAmUJatiOsjqBrhx825IRaHbHx3HKZG4Np1CrmrQ/viewform"
                            className="px-[16px] py-[8px] md:px-[36px] md:py-[10px] text-[0.9rem] md:text-[18px] bg-white text-[#222] border-2 border-white rounded-[10px] no-underline font-playfair font-normal shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-[#f0f0f0] hover:border-[#f0f0f0] transition-all duration-300"
                        >
                            Build With Us
                        </a>
                        <a
                            href="https://drive.google.com/file/d/10PQ7Y2_f9P5_l4cpXVMN8-qvBpW8y2qy/view?usp=sharing"
                            target="_blank"
                            className="px-[12px] py-[5px] md:px-[24px] md:py-[6px] text-[0.8rem] md:text-[14px] bg-transparent text-white border-2 border-white rounded-[10px] no-underline font-playfair font-normal shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-white hover:text-[#222] transition-all duration-300"
                        >
                            View Brochure
                        </a>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide className="relative flex justify-center items-center overflow-hidden">
                    <img
                        src="/images_vvlf/vvlf7.png"
                        alt="Slide 2"
                        className="w-full h-full object-cover rounded-[10px]"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(70,79,111,0.3)] z-[1]"></div>

                    <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-center z-10 text-[rgb(15,49,137)] font-playfair px-6 py-3">
                        <div className="font-playfair text-white font-semibold text-[1.2rem] md:text-[3.5rem] mb-6 opacity-0 animate-[fadeInUp_6s_ease_forwards]">
                            Innovation That Serves a Purpose
                        </div>
                        <div className="font-playfair text-white font-light text-[0.9rem] md:text-[1.8rem] mt-[10px] opacity-0 animate-[fadeInUp_6s_ease_forwards_0.8s] text-justify">
                            <span className="inline-block font-playfair font-normal text-white text-[2rem] overflow-hidden whitespace-nowrap border-r-2 border-[#222] animate-[typing_4s_steps(60,end)_forwards,blink-caret_0.75s_step-end_infinite] mx-auto">
                                We empower startups in assistive tech, sustainability, and deep tech.
                            </span>
                        </div>
                    </div>

                    <div className="absolute top-[75%] md:top-[70%] left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-[10px] md:gap-[15px]">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdVdqSv6MBAmUJatiOsjqBrhx825IRaHbHx3HKZG4Np1CrmrQ/viewform"
                            className="px-[16px] py-[8px] md:px-[36px] md:py-[10px] text-[0.9rem] md:text-[18px] bg-white text-[#222] border-2 border-white rounded-[10px] no-underline font-playfair font-normal shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-[#f0f0f0] hover:border-[#f0f0f0] transition-all duration-300"
                        >
                            Build With Us
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1lTRNqYU2juupEFF9oCyXSckRBYr8hmsm/view?usp=sharing"
                            target="_blank"
                            className="px-[12px] py-[5px] md:px-[24px] md:py-[6px] text-[0.8rem] md:text-[14px] bg-transparent text-white border-2 border-white rounded-[10px] no-underline font-playfair font-normal shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-white hover:text-[#222] transition-all duration-300"
                        >
                            View Brochure
                        </a>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide className="relative flex justify-center items-center overflow-hidden">
                    <img
                        src="/images_vvlf/vvlf2.jpeg"
                        alt="Slide 3"
                        className="w-full h-full object-cover rounded-[10px]"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(70,79,111,0.3)] z-[1]"></div>

                    <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-center z-10 text-[rgb(15,49,137)] font-playfair px-6 py-3">
                        <div className="font-playfair text-white font-semibold text-[1.2rem] md:text-[3.5rem] mb-6 opacity-0 animate-[fadeInUp_6s_ease_forwards]">
                            Build What Matters, With People Who Care.
                        </div>
                        <div className="font-playfair text-white font-light text-[0.9rem] md:text-[1.8rem] mt-[10px] opacity-0 animate-[fadeInUp_6s_ease_forwards_0.8s] text-justify">
                            <span className="inline-block font-playfair font-normal text-white text-[2rem] overflow-hidden whitespace-nowrap border-r-2 border-[#222] animate-[typing_4s_steps(60,end)_forwards,blink-caret_0.75s_step-end_infinite] mx-auto">
                                Join a collaborative ecosystem—where ideas scale and innovation drives real impact.
                            </span>
                        </div>
                    </div>

                    <div className="absolute top-[75%] md:top-[70%] left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-[10px] md:gap-[15px]">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdVdqSv6MBAmUJatiOsjqBrhx825IRaHbHx3HKZG4Np1CrmrQ/viewform"
                            className="px-[16px] py-[8px] md:px-[36px] md:py-[10px] text-[0.9rem] md:text-[18px] bg-white text-[#222] border-2 border-white rounded-[10px] no-underline font-playfair font-normal shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-[#f0f0f0] hover:border-[#f0f0f0] transition-all duration-300"
                        >
                            Build With Us
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1lTRNqYU2juupEFF9oCyXSckRBYr8hmsm/view?usp=sharing"
                            target="_blank"
                            className="px-[12px] py-[5px] md:px-[24px] md:py-[6px] text-[0.8rem] md:text-[14px] bg-transparent text-white border-2 border-white rounded-[10px] no-underline font-playfair font-normal shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-white hover:text-[#222] transition-all duration-300"
                        >
                            View Brochure
                        </a>
                    </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide className="relative flex justify-center items-center overflow-hidden">
                    <img
                        src="/images_vvlf/IMG_0564-scaled.jpg"
                        alt="Slide 4"
                        className="w-full h-full object-cover rounded-[10px]"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(70,79,111,0.3)] z-[1]"></div>

                    <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-center z-10 text-[rgb(15,49,137)] font-playfair px-6 py-3">
                        <div className="font-playfair text-white font-semibold text-[1.2rem] md:text-[3.5rem] mb-6 opacity-0 animate-[fadeInUp_6s_ease_forwards]">
                            From Campus to Creation
                        </div>
                        <div className="font-playfair text-white font-light text-[0.9rem] md:text-[1.8rem] mt-[10px] opacity-0 animate-[fadeInUp_6s_ease_forwards_0.8s] text-justify">
                            <span className="inline-block font-playfair font-normal text-white text-[2rem] overflow-hidden whitespace-nowrap border-r-2 border-[#222] animate-[typing_4s_steps(60,end)_forwards,blink-caret_0.75s_step-end_infinite] mx-auto">
                                VVLF turns early ideas into real-world solutions with expert support.
                            </span>
                        </div>
                    </div>

                    <div className="absolute top-[75%] md:top-[70%] left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-[10px] md:gap-[15px]">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdVdqSv6MBAmUJatiOsjqBrhx825IRaHbHx3HKZG4Np1CrmrQ/viewform"
                            className="px-[16px] py-[8px] md:px-[36px] md:py-[10px] text-[0.9rem] md:text-[18px] bg-white text-[#222] border-2 border-white rounded-[10px] no-underline font-playfair font-normal shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-[#f0f0f0] hover:border-[#f0f0f0] transition-all duration-300"
                        >
                            Build With Us
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1lTRNqYU2juupEFF9oCyXSckRBYr8hmsm/view?usp=sharing"
                            target="_blank"
                            className="px-[12px] py-[5px] md:px-[24px] md:py-[6px] text-[0.8rem] md:text-[14px] bg-transparent text-white border-2 border-white rounded-[10px] no-underline font-playfair font-normal shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-white hover:text-[#222] transition-all duration-300"
                        >
                            View Brochure
                        </a>
                    </div>
                </SwiperSlide>

                {/* Slide 5 */}
                <SwiperSlide className="relative flex justify-center items-center overflow-hidden">
                    <img
                        src="/images_vvlf/vvlf7.png"
                        alt="Slide 5"
                        className="w-full h-full object-cover rounded-[10px]"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(70,79,111,0.3)] z-[1]"></div>

                    <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-center z-10 text-[rgb(15,49,137)] font-playfair px-6 py-3">
                        <div className="font-playfair text-white font-semibold text-[1.2rem] md:text-[3.5rem] mb-6 opacity-0 animate-[fadeInUp_6s_ease_forwards]">
                            Your Startup’s First Step Starts Here
                        </div>
                        <div className="font-playfair text-white font-light text-[0.9rem] md:text-[1.8rem] mt-[10px] opacity-0 animate-[fadeInUp_6s_ease_forwards_0.8s] text-justify">
                            <span className="inline-block font-playfair font-normal text-white text-[2rem] overflow-hidden whitespace-nowrap border-r-2 border-[#222] animate-[typing_4s_steps(60,end)_forwards,blink-caret_0.75s_step-end_infinite] mx-auto">
                                Get the right environment, resources, and support to go from zero to one at VVLF.
                            </span>
                        </div>
                    </div>

                    <div className="absolute top-[75%] md:top-[70%] left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-[10px] md:gap-[15px]">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdVdqSv6MBAmUJatiOsjqBrhx825IRaHbHx3HKZG4Np1CrmrQ/viewform"
                            className="px-[16px] py-[8px] md:px-[36px] md:py-[10px] text-[0.9rem] md:text-[18px] bg-white text-[#222] border-2 border-white rounded-[10px] no-underline font-playfair font-normal shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-[#f0f0f0] hover:border-[#f0f0f0] transition-all duration-300"
                        >
                            Build With Us
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1lTRNqYU2juupEFF9oCyXSckRBYr8hmsm/view?usp=sharing"
                            target="_blank"
                            className="px-[12px] py-[5px] md:px-[24px] md:py-[6px] text-[0.8rem] md:text-[14px] bg-transparent text-white border-2 border-white rounded-[10px] no-underline font-playfair font-normal shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-white hover:text-[#222] transition-all duration-300"
                        >
                            View Brochure
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroSlider;
