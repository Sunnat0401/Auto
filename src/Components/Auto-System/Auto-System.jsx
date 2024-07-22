import "./Auto-System.css";

import faCart from "/fa-cart.png";
import faUser from "/fa-user.png";
import faBill from "/fa-bill.png";

const AutoSystem = () => {
  return (
    <div className="auto-system" id="user">  
      <div className="container">
        <div>
          <div>
            <h2 className="auto-system_text">Tizim qanday ishlaydi?</h2>
          </div>
          <div>
            <p className="auto-system_title">
              Bizning kuchli CRM tizimimiz bilan avto ehtiyot qismlar sotuvini
              osonlashtiring
            </p>
          </div>
        </div>

        <div className="auto-system_cards">
          <div className="auto-system_card block">
            <div className="auto-system_img">
              <img src={faCart} alt="Jarayonlarni avtomatlashtirish" className="Tizim__img" />
            </div>
            <h3 className="auto-system_heading">Jarayonlarni avtomatlashtirish</h3>
            <p className="auto-system_paragraph">
              Bizning CRM tizimi, mijozlar ma`lumotlar bazasini saqlash, tranzaktsiyalarni kuzatish va kontaktlarni boshqarish kabi ko`plab vazifalarni avtomatlashtirishga imkon beradi
            </p>
          </div>

          <div className="auto-system_card block ">
            <div className="auto-system_img">
              <img src={faUser} alt="Mijozlar bilan yaqinroq boling" className="Tizim__img" />
            </div>
            <h3 className="auto-system_heading">Mijozlar bilan yaqinroq bo'ling</h3>
            <p className="auto-system_paragraph">
              Bizning CRM tizimimiz tufayli siz mijozlar bilan muloqotni yanada samarali boshqarishingiz mumkin bo'ladi
            </p>
          </div>

          <div className="auto-system_card block">
            <div className="auto-system_img">
              <img src={faBill} alt="img" className="Tizim__img" />
            </div>
            <h3 className="auto-system_heading">Savdo tahlili</h3>
            <p className="auto-system_paragraph">
              Bizning CRM tizimi ma'lumotlarni tahlil qilish va hisobot berish uchun kuchli vositalarni taqdim etadi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoSystem;
