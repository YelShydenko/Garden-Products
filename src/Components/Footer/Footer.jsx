import { useContext } from "react";
import "./Footer.scss";
import { ThemeContext } from "@/ThemeContext/ThemeContext";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  const { theme } = useContext(ThemeContext); // Получаем нашу тему

  return (
    <footer className="footer__container">
      <div>
        <p className={`title title-${theme}`}>Contact</p>
      </div>
      <div className="card_items">
        <div className={`footer__item item-${theme}`}>
          <p>Phone</p>
          <p>+49 999 999 99 99</p>
        </div>
        <div className={`footer__item item-${theme}`}>
          <p>Socials</p>
          <div className="images">
            <a href="https://www.instagram.com/">
              <RiInstagramFill className={`icon icon-${theme}`} />
            </a>
            <a href="https://web.whatsapp.com/">
              <RiWhatsappFill className={`icon icon-${theme}`} />
            </a>
          </div>
        </div>
        <div className={`footer__item item-${theme}`}>
          <p>Address</p>
          <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
        </div>
        <div className={`footer__item item-${theme}`}>
          <p>Working Hours</p>
          <p>24 hours a day</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4095566177657!2d13.372520476191934!3d52.50792683712399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xff2aef2e44148447!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin!5e0!3m2!1sde!2sde!4v1723228390180!5m2!1sde!2sde"></iframe>
      </div>
    </footer>
  );
};

export default Footer;
