import React, { useState, useEffect } from 'react';
import { UNSPLASH_ACCESS_KEY } from '../../utils/constants';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(false);
  const FALLBACK_IMAGE = "https://www.gingerhotels.com/icons/fallBackImage.jpg";

  const fetchGallery = async () => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=student+entrepreneurship&per_page=9&client_id=${UNSPLASH_ACCESS_KEY}`
      );
      const json = await res.json();
      setImages(json.results);
    } catch (err) {
      setError(true);
      console.error("Image loading failed", err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16 relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-purple-600 drop-shadow">
          🌟 Inspiring Moments from the Journey
        </h2>

        {error ? (
          <p className="text-red-600 font-semibold">Images could not be loaded.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.length > 0 ? (
              images.map((img) => (
                <div
                  key={img.id}
                  className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <img
                    src={img.urls.small || FALLBACK_IMAGE}
                    alt={img.alt_description || "Gallery Image"}
                    onClick={() => setSelectedImage(img.urls.full)}
                    className="w-full h-64 object-cover cursor-pointer transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500">Loading inspiring visuals...</p>
            )}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
            onClick={() => setSelectedImage(null)}
          ></div>

          <div className="relative z-50 bg-white p-4 rounded-lg shadow-2xl max-w-3xl w-[90%]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="rounded max-h-[70vh] mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
