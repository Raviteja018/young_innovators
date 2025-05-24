import React, { useState, useEffect } from 'react';

const UNSPLASH_ACCESS_KEY = 'vLiz422yP5cAg5DbArkCP19oigLSfaP1oo7K4Vp6hFs'; // 🔑 Replace this

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=innovation&per_page=9&client_id=${UNSPLASH_ACCESS_KEY}`)
      .then((res) => res.json())
      .then((data) => setImages(data.results))
      .catch(() => setError(true));
  }, []);

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-pink-600">Project Gallery</h2>

        {error ? (
          <p className="text-red-600">Images could not be loaded at this time. Please try again later.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.length > 0 ? (
              images.map((img) => (
                <img
                  key={img.id}
                  src={img.urls.small}
                  alt={img.alt_description}
                  onClick={() => setSelectedImage(img.urls.full)}
                  className="rounded-lg cursor-pointer shadow-md transition duration-300 transform hover:scale-105"
                />
              ))
            ) : (
              <p>Loading images...</p>
            )}
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-[80%] max-w-[90%] rounded-lg shadow-xl transition-opacity duration-500"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
