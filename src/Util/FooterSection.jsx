import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <div>
      <footer id="contact" className="footer">
        <div className="footer-container">
          {/* Left - Contact Info */}
          <div className="footer-column">
            <h3>Memories Photography</h3>
            <p>Jakkasandra Extension,</p>
            <p>Opp. Loco Bear Koramangala,Bengaluru -560034</p>
            <p>+91 9411583866</p>
            <p>memoriesphotographyktm@gmail.com</p>
          </div>

          {/* Middle - About & Social */}
          <div className="footer-column">
            <p>
              Memories Photographer is a professional wedding photography
              service, capturing timeless moments since 2022. We specialize in
              pre-wedding shoots, wedding teasers, and full cinematic wedding
              films — turning every celebration into unforgettable memories.
            </p>
            <div className="footer-socials">
              <div className="footer-socials">
                <a
                  href="https://www.instagram.com/__memoriesphotography?igsh=MXNxajdza2xnaDkwcw=="
                  target="blank"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  target="blank"
                >
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
                <a href="#">
                  <FaPinterestP />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Google Map */}
          <div className="footer-column">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6937618997426!2d77.6376592111679!3d12.927393587331348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153659ea5543%3A0x67f16fe1c49ebfe5!2sLoco%20Bear%20-%20The%20Ultimate%20Entertainment%20Hub!5e0!3m2!1sen!2sin!4v1757586463135!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2022 Memories Photographer. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
