import React from "react";
import PreWeddingShoot from"../../assets/dffas.jpg"
import album4 from"../../assets/Decoration_Image-2_11zon.webp"
import album3 from"../../assets/Hero_Section_Image-2_11zon.jpg"
import album5 from"../../assets/IMG_9689_11zon.webp"


const albums = [
  { id: 1, title: "PreWeddingShoot", img: PreWeddingShoot },
  { id: 2, title: "Cinematic Wedding Film", img: album4},
  { id: 3, title: "Post-Wedding Photography", img: album3},
  { id: 4, title: "Wedding Day Photography", img: album5 },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white py-16">
      <div className="text-center mb-12">
        {/* Heading */}
        {/* <h2 className="font-allura text-5xl text-gray-800 font-allura">Portfolio</h2> */}

        {/* Underline */}
       
      </div>

      {/* Albums Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={album.img}
              alt={album.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800">{album.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
