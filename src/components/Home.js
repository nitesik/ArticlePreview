import { useState } from "react";
import "./styles.css";
import image from "./images/avatar-michelle.jpg";
import share from "./images/icon-share.svg";
import facebook from "./images/icon-facebook.svg";
import pinterest from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";

function Home() {

  const [button, setButton] = useState(false);

  function Detail() {

    return (
      <div className="detail">
        <img src={image} alt="profile picture" />
        <div>
          <div className="bold">Michelle Appleton</div>
          <div className="gray">28 Jun 2020</div>
        </div>
      </div>  
    )
  }
  
  function SharedComponents() {

    return (
      <div className="sharedcomponent">
            <div>S H A R E</div>
            <div className="triangle"></div>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
      </div>
    )
  }

  return (
    <div className="container">
      <div className="image" />
      <div className="text">
        <div className="title bold">Shift the overall look and feel by adding these wonderful touches to furniture in your home</div>
        <div className="description gray">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</div>
        <div className="profile-desktop">
          <div className="detail">
            <img src={image} alt="profile picture" />
            <div>
              <div className="bold">Michelle Appleton</div>
              <div className="gray">28 Jun 2020</div>
            </div>
          </div>
          <img src={share} alt="share" className={`share ${button}`} onClick={() => setButton(!button)} />
          {button ? <div className="sharedcomponent">
            <div>SHARE</div>
            <div className="triangle"></div>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
          </div> : ""}
        </div>

        <div className="profile-mobile">
          {button ? <SharedComponents /> : <Detail />}
          <img src={share} alt="share" className={`share ${button}`} onClick={() => setButton(!button)} />
          
        </div>
      </div>

      <style>{`
      ${button ? `
      .profile-mobile {
        background-color: hsl(217, 19%, 35%);
      }
      ` : `
      .profile-mobile {
        background-color: white;
      }
      `}
      `}</style>
    </div>
  )
}

export default Home;