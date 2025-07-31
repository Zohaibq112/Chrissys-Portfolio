
export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <img
                src="https://i.postimg.cc/PJPkSqwR/about.jpg"
                alt="Chrissy Lingenberg portrait"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blush-100 rounded-full opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-blush-200 rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              About Chrissy
            </h2>
            
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                I'm Christian (Chrissy) Lingenberg, a concert and live event photographer with a passion for freezing unforgettable moments in the heart of the action. From the raw emotion of a lead singer mid-verse to the crowd's electric energy, I specialize in turning live music into powerful, lasting images.
              </p>
              
              <p>
                I've photographed everything from intimate venues to massive festivals and stadiums — always working with fast-paced environments to tell the real story of your show.
              </p>
              
              <p>
                Whether you're a band, solo artist, promoter, or publication — let's make your performance unforgettable.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-blush-500 mb-2">25+</div>
                <div className="text-sm text-gray-600 font-medium">Shows Captured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-blush-500 mb-2">10+</div>
                <div className="text-sm text-gray-600 font-medium">Artists Worked With</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-blush-500 mb-2">2</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
