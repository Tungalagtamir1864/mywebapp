import React from "react";
import  "./module.css";

const ContactPageSection = () => {
  return (
    <div className="contact_us_6">
      <div className="responsive-container-block container">
        <form className="form-box">
          <div className="container-block form-wrapper">
            <div className="responsive-container-block" id="i2cbk">
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-3">
                <p className="text-blk input-title">
                  Овог нэр:
                </p>
                <input className="input" id="ijowk-3" name="FirstName" placeholder="Овог нэрээ оруулна уу..." />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ip1yp">
                <p className="text-blk input-title">
                  И-мэйл:
                </p>
                <input className="input" id="ipmgh-3" name="Email" placeholder="И-мэйл оруулна уу..." />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ih9wi">
                <p className="text-blk input-title">
                  Гарчиг
                </p>
                <input className="input" id="imgis-3" name="PhoneNumber" placeholder="" />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-3">
                <p className="text-blk input-title">
                  Хүсэлт
                </p>
                <textarea className="textinput" id="i5vyy-3" placeholder=""></textarea>
              </div>
            </div>
            <button className="submit-btn" id="w-c-s-bgc_p-1-dm-id-2">
              Илгээх
            </button>
          </div>
        </form>
        <div className="responsive-cell-block wk-desk-7 wk-ipadp-12 wk-tab-12 wk-mobile-12" id="i772w">
          <div className="map-part">
            <p className="text-blk map-contactus-head" id="w-c-s-fc_p-1-dm-id">
              Холбоо барих, МУИС
            </p>
            <p className="text-blk map-contactus-subhead">
              <ul><b>Утас</b> <ul>75754400, 77307730</ul> </ul>
              <ul><b>Байршил</b> <ul>Монгол Улсын Их Сургууль Их сургуулийн гудамж - 1, бага тойруу , Сүхбаатар дүүрэг, Улаанбаатар хот</ul> </ul>
              <ul><b>МУИС, Багш ажилчид</b> <ul>МУИС-ийн багш ажилчдын дэлгэрэнгүй мэдээлэл, холбоо барих утас, цахим хаягийг харна уу?</ul> </ul>

            </p>
            <div className="social-media-links mob">
              <a className="social-icon-link" href="#" id="ix94i-2-2">
                <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" alt="Twitter" />
              </a>
              <a className="social-icon-link" href="#" id="itixd">
                <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" alt="Facebook" />
              </a>
              <a className="social-icon-link" href="#" id="izxvt">
                <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png" alt="Google" />
              </a>
              <a className="social-icon-link" href="#" id="izldf-2-2">
                <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png" alt="Instagram" />
              </a>
            </div>

            <div className="map-box container-block">
              {/* Энд Google Maps эсвэл бусад мэдээллийг оруулах */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageSection;
