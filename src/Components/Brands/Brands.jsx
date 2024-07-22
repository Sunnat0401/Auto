import axios from 'axios';
import { useState } from 'react';
import { message } from 'antd';
import "./Brands.css";

import brandImg1 from "/brand1.png";
import brandImg2 from "/brand2.png";
import brandImg3 from "/brand3.png";
import brandImg4 from "/brand4.png";
import brandImg5 from "/brand5.png";
import brandImg6 from "/brand6.png";
import brandImg7 from "/brand7.png";
import mainImg from '/brandMainImg.png';
import rocket from '/Rocket.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const Brands = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const capitalizeUser = (string) => {
    return string.toUpperCase();
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setName(capitalizeUser(value));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^+\d]/g, '');
    if (numericValue.startsWith("+998") && numericValue.length <= 13) {
      setPhone(numericValue);
    } else {
      setPhone("+998");
    }
  };

  const sendBrandMessage = async (event) => {
    event.preventDefault();
    setLoading(true);

    const token = "6887615421:AAH1YIJJvatolq6qpSaTBdzV9pZAG-OK0jc";
    const chat_id = -1002073716537;;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    if (!name || !phone) {
      message.error("Iltimos, barcha maydonlarni to'ldiring!");
      setLoading(false);
      return;
    }

    const sendMessageContent = `Ismi: ${name}\nTelefon: ${phone}`;

    try {
      await axios.post(url, {
        chat_id: chat_id,
        text: sendMessageContent
      });
      message.success("Muvaffaqiyatli yuborildi");
      setName('');
      setPhone('');
    } catch (err) {
      console.log("Yuborishda xatolik", err);
      message.error("Yuborishda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container Brands">
      <div className="row">
        <div className="col-lg-12">
          <div className="Brands_header">50 dan ortiq brendlar</div>
        </div>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwipers1 row" id='partner'
      >
        {[brandImg1, brandImg2, brandImg3, brandImg4, brandImg5, brandImg6, brandImg7].map((img, index) => (
          <SwiperSlide key={index} style={{ border: "none" }} className="swiper-columns">
            <div className="Brands_col">
              <img src={img} className="brandMianImg" alt={`brand${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="row">
        <div className="col-lg-12 BrandsMainRow" id='btn'>
          <div className="BrandsLeftSide" >
            <h2 className="BransLeftSide_header">Bepul sinab ko`ring!</h2>
            <p className="BrandsLeftSide_info">
              CRM tizimimizning afzalliklarini uch kun davomida bepul sinab ko`ring.
            </p>
            <form onSubmit={sendBrandMessage} id="brandsForm ">
              <div className="BrandsLeft_form_left" >
                <p className="BrandsLeftSide_form__header">Demoni 3 kun bepul ishlatib ko`ring!</p>
                <input 
                  type="text" 
                  placeholder="Ismingiz..." 
                  value={name} 
                  onChange={handleUsernameChange} 
                  required 
                />
                <input 
                  type="text" 
                  placeholder="+998  --  --- -- --" 
                  value={phone} 
                  onChange={handlePhoneChange} 
                  maxLength={13} 
                  required 
                />
                <button className="BrandsLeftSide_form__button" type="submit" disabled={loading}>
                  {loading ? "Yuborilmoqda..." : "Jo`natish"}
                </button>
              </div>
              <div className="BrandsLeft_form_right">
                <img src={rocket} className="BrandsLeft_form_right_img" alt="rocket" />
              </div>
            </form>
          </div>
          <img src={mainImg} className="Brand_mainImg" alt="main" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
