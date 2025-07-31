
import { useState } from 'react';
import { X } from 'lucide-react';

type Category = 'all' | 'concerts' | 'weddings' ;

interface Photo {
  id: number;
  src: string;
  alt: string;
  category: Category;
}

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Sample photos - in a real app, these would come from a CMS or API
  const photos: Photo[] = [
    { id: 1, src: 'https://i.postimg.cc/sy2708P6/a15ac8fb-a65e-4ade-acb3-bf9cf28466a2.jpg', alt: 'Concert lighting', category: 'concerts' },
    { id: 2, src: 'https://i.postimg.cc/X7PqRQwp/9d97978b-c657-4799-89f2-1b3e8887b2f1.jpg', alt: 'Live performance', category: 'concerts' },
    { id: 3, src: 'https://i.postimg.cc/VsVRcG3t/8a158010-4064-4be3-a753-4eb3c680029c.jpg', alt: 'Wedding ceremony', category: 'weddings' },
    { id: 4, src: 'https://i.ibb.co/5xc1Sr58/5a50f0c7-e9ec-4389-85fc-ed4f340cf494.jpg', alt: 'Concert crowd', category: 'concerts' },
    { id: 6, src: 'https://i.postimg.cc/3N56h2JM/814c17d5-3df8-4f85-b043-e18cfcc56840.jpg', alt: 'Stage performance', category: 'concerts' },
    { id: 9, src: 'https://i.postimg.cc/ryKKQBrv/b77f1a65-11fc-459a-bcfc-c88e6fdc707f.jpg', alt: 'Live band', category: 'concerts' },
    { id: 10, src: 'https://i.postimg.cc/WTQnvR0n/34c4a943-44a0-4375-b217-57261b1cb266.jpg', alt: 'Wedding reception', category: 'weddings' },
    { id: 11, src: 'https://i.postimg.cc/KGYz86JR/cbb95cbb-1ae9-4624-9151-54328c13da19.jpg', alt: 'Concert performer', category: 'concerts' },
    { id: 12, src: 'https://i.ibb.co/XrScvt15/f6dc82e5-e152-4d20-9af1-7aad981d8277.jpg', alt: 'Wedding reception', category: 'weddings' },
    { id: 13, src: 'https://i.ibb.co/Psgdr29t/af8168b1-cd5b-47c9-a780-6d6075006757.jpg', alt: 'Wedding reception', category: 'weddings' },
    { id: 14, src: 'https://i.ibb.co/cSZJdgk7/33213b9f-c46d-4ea0-afc2-8f53885a10f5.jpg', alt: 'Concert lighting', category: 'concerts' },
    { id: 15, src: 'https://i.ibb.co/tgRpBN4/797049cb-6024-4557-9b53-58e6b90d2396.jpg', alt: 'Live performance', category: 'concerts' },
    { id: 16, src: 'https://i.ibb.co/sdYNKRVp/059322c1-4abe-4f8d-bafc-1dd650d44e34.jpg', alt: 'Wedding ceremony', category: 'concerts' },
    { id: 17, src: 'https://i.ibb.co/8nyb7q6t/4e800106-bf9f-49e8-81e6-ae18c515ea90.jpg', alt: 'Concert crowd', category: 'concerts' },
    { id: 18, src: 'https://i.ibb.co/P2NJ8mn/ee87ca05-27cf-4ff6-8cda-329e5185959a.jpg', alt: 'Stage performance', category: 'concerts' },
     { id: 19, src: 'https://i.ibb.co/4nFHNzzL/94a9b1a5-277f-4b8e-95fc-06989acdf95e.jpg', alt: 'Concert lighting', category: 'concerts' },
    { id: 20, src: 'https://i.ibb.co/pvV20nQ4/aedba1d5-22ef-4e35-b7b0-db25db1f365e.jpg', alt: 'Live performance', category: 'concerts' },
    { id: 21, src: 'https://i.ibb.co/mFRbnqk0/b6e0db62-79ee-45c4-818e-8cb71117bf63.jpg', alt: 'Wedding ceremony', category: 'concerts' },
    { id: 22, src: 'https://i.ibb.co/fYgRjF36/9a46108c-f3db-4900-b299-be2c48397090.jpg', alt: 'Concert crowd', category: 'concerts' },
    { id: 23, src: 'https://i.ibb.co/Y4qV19xC/0672483b-5c0e-412a-aa77-e529e1075d9f.jpg', alt: 'Stage performance', category: 'concerts' },
    { id: 24, src: 'https://i.ibb.co/r2gsrhrP/aece1e81-a7f5-4bd2-933a-332875d6190c.jpg', alt: 'Concert lighting', category: 'concerts' },
    { id: 25, src: 'https://i.ibb.co/jPMzTPYX/d2130b78-cd67-43dd-be87-0a11ae45da06.jpg', alt: 'Live performance', category: 'concerts' },
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'concerts', label: 'Concerts' },
    { id: 'weddings', label: 'Weddings' },
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-gray-50">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of moments captured through my lens, from intimate venues to grand stages
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as Category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedPhoto(null)}>
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
