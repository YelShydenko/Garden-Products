import React from 'react'
import insta from '/public/images/ic-instagram.png'
import whatsapp from '/public/images/ic-whatsapp.png'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="container">
      <div className="title">
        <p>Contact</p>
      </div>
      <div className="card_items">
        <div>
          <p>Phone</p>
          <p>+49 999 999 99 99</p>
        </div>
        <div>
          <p>Socials</p>
          <div className="images">
            <a href="https://www.instagram.com/"><img src={insta} alt="inst" /></a>
            <a href="https://web.whatsapp.com/"><img src={whatsapp} alt="whatsapp" /></a>
          </div>
        </div>
        <div>
          <p>Address</p>
          <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
        </div>
        <div>
          <p>Working Hours</p>
          <p>24 hours a day</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4095566177657!2d13.372520476191934!3d52.50792683712399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xff2aef2e44148447!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin!5e0!3m2!1sde!2sde!4v1723228390180!5m2!1sde!2sde"></iframe>
      </div>
    </footer>
  )
}