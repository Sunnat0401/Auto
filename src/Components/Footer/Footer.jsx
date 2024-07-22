import "./Footer.css";
import facebook from "/facebook.png";
import twitter from "/twitter.png";
import instagram from "/instagram.png";

const Footer = () => {
  return (
    <div className="container Footer">
      <div className="row Footer_mainRow">
        <div className="col-lg-3">
          <h3>AutoZapchast</h3>
          <p style={{ textAlign: "center" }}>
            Bizning maqsadimiz qulaylik yaratish va savdo biznesingizni
            oshirishga yordam berishdir.
          </p>
          <div className="row">
            <div className="col-lg-4">
              <img src={facebook} alt="er" />
            </div>
            <div className="col-lg-4">
              <img src={twitter} alt="er" />
            </div>
            <div className="col-lg-4">
              <img src={instagram} alt="er" />
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <h4>About</h4>
          <p>How it works</p>
          <p>Featured</p>
          <p>Partnership</p>
          <p>Business Relation</p>
        </div>
        <div className="col-lg-3">
          <h4>Community</h4>
          <p>Events</p>
          <p>Blog</p>
          <p>Podcats</p>
          <p>Invite a friend</p>
        </div>
        <div className="col-lg-3">
          <h4>Socials</h4>
          <p>Discord</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Facebook</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <hr />
        </div>
      </div>
      <div className="row Footer_mainRow_row">
        <div className="col-lg-6">
          &copy;2022 Auto Fast. All rights reserved
        </div>
        <div className="col-lg-6">
          <div className="row Footer_mainRow_row_Inner">
            <div>Privacy & Policy</div>
            <div> Terms & Condition</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
