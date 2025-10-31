import React from "react";
import "./Gallery.css";
import NavBar from "../../Util/NavBar";
import FooterSection from "../../Util/FooterSection";

const images = [
    new URL("../../assets/Services-hero-1_11zon.webp", import.meta.url).href,
    new URL("../../assets/rightimge.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9691_11zon.webp", import.meta.url).href,
    new URL("../../assets/light&sound.png", import.meta.url).href,
    new URL("../../assets/centerImage.jpg", import.meta.url).href,
    new URL("../../assets/lightsound.png", import.meta.url).href,
    new URL("../../assets/IMG_9689_11zon.webp", import.meta.url).href,
    new URL("../../assets/IMG_9690_11zon.webp", import.meta.url).href,
    new URL("../../assets/IMG_9694.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9692.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9693.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9696.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9697.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9699.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9705.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9704.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9709.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9695.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9708.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9713.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9706.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9711.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9714.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9712.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9710.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9720.jpg", import.meta.url).href,
    new URL("../../assets/IMG_9718.jpg", import.meta.url).href,
    new URL("../../assets/dffas.jpg", import.meta.url).href,
];

const Gallery = () => {
    return (
        <>
            <NavBar />
            <section className="gallery-section" id="gallery">
                <h2 style={{ fontFamily: "'Allura', cursive", fontSize: "50px", color: "black" }}>Our Gallery</h2>
                <div className="underline"></div>

                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={img} alt={`Gallery ${index + 1}`} loading="lazy" />
                        </div>
                    ))}
                </div>
            </section>
            <FooterSection />
        </>
    );
};

export default Gallery;
