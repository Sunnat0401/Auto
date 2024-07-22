/* eslint-disable no-unused-vars */
import "./Comments.css";

//Swiper for horizontal carousel
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

//Comments Images Imported
import test1 from "/image 21.png";
import test2 from "/image 22.png";
import test3 from "/image 19.png";
import test4 from "/image 20.png";
import test5 from "/image 17.png";
import test6 from "/image 18.png";

const Comments = () => {
  return (
    <div className="container Comments">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="Comments_header">Mijozlarning sharhlari</h2>
          <p className="Comments_info">
            What our lovely customer sold for our service
          </p>
        </div>
      </div>
      <div className="row Comments_mainRow">
        <div className="col Comments_col_swiper">
          <Swiper
            slidesPerView={1}
            speed={10000}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className="Swiper"
          >
            <SwiperSlide>
              <div className="SwiperSlide">
                <p className="SwiperSlide_info">
                  {" "}
                  Ushbu CRM tizimidan foydalanishni boshlaganimizdan so`ng
                  bizning sotuvlarimiz keskin oshdi. Bu faoliyatimizga katta
                  o`zgarishlar kiritdi
                </p>
                <div className="SwiperSlide_author">B. Yoqubov</div>
                <span>Foydalanuvchi</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SwiperSlide">
                <p className="SwiperSlide_info">
                  {" "}
                  Ushbu CRM tizimidan foydalanishni boshlaganimizdan so`ng
                  bizning sotuvlarimiz keskin oshdi. Bu faoliyatimizga katta
                  o`zgarishlar kiritdi
                </p>
                <div className="SwiperSlide_author">B. Yoqubov</div>

                <span>Foydalanuvchi</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SwiperSlide">
                <p className="SwiperSlide_info">
                  {" "}
                  Ushbu CRM tizimidan foydalanishni boshlaganimizdan so`ng
                  bizning sotuvlarimiz keskin oshdi. Bu faoliyatimizga katta
                  o`zgarishlar kiritdi
                </p>
                <div className="SwiperSlide_author">B. Yoqubov</div>

                <span>Foydalanuvchi</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SwiperSlide">
                <p className="SwiperSlide_info">
                  {" "}
                  Ushbu CRM tizimidan foydalanishni boshlaganimizdan so`ng
                  bizning sotuvlarimiz keskin oshdi. Bu faoliyatimizga katta
                  o`zgarishlar kiritdi
                </p>
                <div className="SwiperSlide_author">B. Yoqubov</div>

                <span>Foydalanuvchi</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SwiperSlide">
                <p className="SwiperSlide_info">
                  {" "}
                  Ushbu CRM tizimidan foydalanishni boshlaganimizdan so`ng
                  bizning sotuvlarimiz keskin oshdi. Bu faoliyatimizga katta
                  o`zgarishlar kiritdi
                </p>
                <div className="SwiperSlide_author">B. Yoqubov</div>

                <span>Foydalanuvchi</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col Comments_col">
          <div className="col Comments_col_div">
            <img src={test1} className="Comments_col_image" alt="" />
            <img src={test2} className="Comments_col_image" alt="" />
          </div>
          <div className="col Comments_col">
            <img src={test3} className="Comments_col_image" alt="" />
          </div>
          <div className="col Comments_col_div">
            <img src={test4} className="Comments_col_image" alt="" />
            <img src={test6} className="Comments_col_image" alt="" />
          </div>
          <div className="col Comments_col">
            <img src={test5} className="Comments_col_image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
