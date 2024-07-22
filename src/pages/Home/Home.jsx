import axios from 'axios';
import "./Home.css";

// Home Image Imported
import homeImg from "/headerImg.png";
import homeImage from "/headerImg2.png";
import { useState } from 'react';
import { message } from 'antd';

const Home = () => {
  const [loading, setLoading] = useState(false);

  const capitalizeUser = (string) => {
    return string.toUpperCase();
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    document.getElementById("name").value = capitalizeUser(value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^+\d]/g, '');
    if (numericValue.startsWith("+998") && numericValue.length <= 13) {
      document.getElementById("phone").value = numericValue;
    } else {
      document.getElementById("phone").value = "+998";
    }
  };

  const sendMessage = (event) => {
    setLoading(true);
    event.preventDefault();

    const token = "6887615421:AAH1YIJJvatolq6qpSaTBdzV9pZAG-OK0jc";
    const chat_id = -1002073716537;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    if (!name || !phone) {
      message.error("Iltimos, barcha maydonlarni to'ldiring!");
      setLoading(false);
      return;
    }

    const sendMessageContent = `Ismi: ${name}\nTelefon: ${phone}`;

    axios({
      url: url,
      method: 'POST',
      data: {
        chat_id: chat_id,
        text: sendMessageContent
      }
    })
    .then((res) => {
      message.success("Muvaffaqiyatli yuborildi");
      document.getElementById("homeForm").reset();
    })
    .catch((err) => {
      console.log("Yuborishda xatolik", err);
      message.error("Yuborishda xatolik yuz berdi");
    })
    .finally(() => setLoading(false));
  };

  return (
    <div className="home">
      <div className="container">
        <div className="home-series">
          <h1 className="home-header">
            <span>Ehtiyot qisimlarni</span>
            <div className="home-style"> online sotish vaqti keldi</div>
          </h1>
        </div>
        <div className="home-series">
          <div className="home-block">
            <p className="home-information">
              Yangi texnologiya biznes imkoniyatlarini ochib beradi. Avtomobil qismlarini onlayn sotishni boshlang va raqamli bozordan to'liq foydalaning. Mijozlaringiz qulaylikdan, siz esa savdo hajmi oshganidan mamnun bo'lasiz.
            </p>
            <form className="home-forms" onSubmit={sendMessage} id="homeForm">
              <h3 className="home-text">Bepul konsultatsiya oling</h3>
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Ismingiz..." 
                required 
                onChange={handleUsernameChange} 
              />
              <input 
                type="text" 
                name="phone" 
                id="phone" 
                placeholder="+998 " 
                required 
                onChange={handlePhoneChange} 
                maxLength={13}
              />
              <button className="home-btn" type="submit" disabled={loading}>
                {loading ? "Yuborilmoqda..." : "Jo'natish"}
              </button>
            </form>
            <img src={homeImage} className="home-img1" alt="home-img1" />
            <img src={homeImg} className="home-img2" alt="home-img2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
