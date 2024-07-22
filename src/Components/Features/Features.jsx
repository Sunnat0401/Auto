import "./Features.css";

import mainImg from "/comfortMain.png";
import bill from "/comfortImg1.png";
import phone from "/comfortImg2.png";
import home from "/comfortImg3.png";

const Features = () => {
  return (
    <div className="features" id="offer">
      <div className="container">
      <div className="features-cards">
        <div className="block">
          <img src={mainImg} className="feature-card" alt="Comfort Image" />
        </div>
        <div className="block">
          <span className="features-subtitle">Qulayliklar</span>
          <h3 className="features-title">
            <span className="features-system">Tizim</span> qulayliklari bilan{" "}
            <span className="features-info">tanishing!</span>
          </h3>
          <div >
            <div className="block">
              <div className=" features-informtion">
                <div className="col features-wrapper">
                  <img
                    src={bill}
                    className="Comfort_sideImg"
                    alt="Comfort Image"
                  />
                </div>
                <div className="col features-wrapper">
                <div className="feature-texts">Narxi</div>
                <p className="feature-paragraphs">
                  Bizning tariflarimiz har qanday byudjetga mos keladi.
                </p>
              </div>
              </div>
              
            </div>
          </div>
          <div className="">
            <div className="col-lg-12">
              <div className=" features-informtion">
                <div className="col features-wrapper">
                  <img
                    src={phone}
                    className="Comfort_sideImg"
                    alt="Comfort Image"
                  />
                </div>
                <div className="col Comfort_col">
                  <div className="feature-texts">
                    24/7 qo`llab-quvvatlash
                  </div>
                  <p className="feature-paragraphs">
                    Bizning texnik yordamimiz doimo aloqada.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="col-lg-12">
              <div className=" features-informtion">
                <div className="col Comfort_col">
                  <img
                    src={home}
                    className="Comfort_sideImg"
                    alt="Comfort Image"
                  />
                </div>
                <div className="col Comfort_col">
                  <div className="feature-texts">24/7 dostup</div>
                  <p className="feature-paragraphs">
                    Tizimda istalgan vaqtda ishlang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Features;
