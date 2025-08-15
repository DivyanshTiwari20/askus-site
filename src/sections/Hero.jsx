import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { BlurFade } from "@/components/magicui/blur-fade";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
];

const Hero = () => {
  return (
    <section className="gradient-blue bg-gradient-to-r from-violet-200 to-blue-200 min-h-screen w-full">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center px-3 sm:px-5 md:px-7 pt-14 sm:pt-18 md:pt-22 pb-14 sm:pb-18 md:pb-25">
        
        {/* Avatar Section with Stars and Text */}
        <BlurFade delay={0.25} offset={8}>
          <div className="flex flex-row items-center justify-center gap-4 mb-0.5 my-3 mt-16 sm:mt-24 md:mt-32">
            <AvatarCircles numPeople={99} avatarUrls={avatars} />
            <div className="flex flex-col justify-center">
              <div className="flex flex-col items-center gap-1">
                {/* 5 Stars and 100+ Happy Brands stacked vertically */}
                <div className="flex flex-col items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="font-jakarta font-medium text-gray-700 text-xs sm:text-sm mt-1">
                    100+ Happy Brands
                  </span>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.5} offset={12}>
          <h1 className="font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3.5 sm:mb-5">
            Revolutionizing Startup Infrastructure.
          </h1>
        </BlurFade>
        
        <BlurFade delay={0.75} offset={10}>
          <p className="font-jakarta text-sm sm:text-base md:text-lg text-gray-600 mb-5 sm:mb-7 max-w-xl">
            We are a team of passionate experts who help startups thrive by unlocking the full potential of social media, web development, and strategic marketing.
          </p>
        </BlurFade>
        
        <BlurFade delay={1.0} offset={8}>
          <a
            href="#"
            className="px-5 sm:px-7 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Get Started
          </a>
        </BlurFade>
      </div>
    </section>
  );
};

export default Hero;