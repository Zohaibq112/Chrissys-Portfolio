
export const BehindTheLens = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Behind The Lens
            </h2>
            
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                There's something magical about being in the pit during a live show. The bass reverberating through your chest, the flash of stage lights creating shadows and silhouettes, the raw emotion on an artist's face as they pour their soul into their music.
              </p>
              
              <p>
                That's where I live – in those fleeting moments between beats, when time seems to slow down and pure emotion crystallizes into a single frame. My favorite shot isn't always the perfectly lit, technically flawless image. It's the one that makes you feel like you were there, in that exact moment, experiencing the music firsthand.
              </p>
              
              <p>
                Every concert tells a story, and I'm here to make sure yours is unforgettable.
              </p>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-blush-500">
              <p className="text-gray-700 italic">
                "My camera doesn't just capture images – it captures feelings, energy, and the soul of live music."
              </p>
              <p className="text-sm text-gray-500 mt-2 font-medium">— Chrissy</p>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in-up lg:order-last">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Chrissy behind the scenes"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-lg shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blush-100 rounded-full opacity-60"></div>
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-blush-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
