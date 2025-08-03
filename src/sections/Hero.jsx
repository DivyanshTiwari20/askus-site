import Navbar from "../components/Navbar";
import { AvatarCircles } from "@/components/magicui/avatar-circles";

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
      <Navbar />
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-28">
        
        {/* Avatar Section with Stars and Text */}
        <div className="flex flex-col items-center mb-2 my-6">
          <AvatarCircles numPeople={99} avatarUrls={avatars} />
          <div className="flex items-center gap-2 mt-3">
            {/* 5 Stars */}
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-jakarta font-medium text-gray-700 text-sm sm:text-base">
              3.9M+ Happy Clients
            </span>
          </div>
        </div>

        <h1 className="font-manrope text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          Revolutionizing Startup Infrastructure.
        </h1>
        <p className="font-jakarta text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl">
          Your go-to platform for all your questions and answers. Join our community and start learning today!
        </p>
        <a
          href="#"
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition text-base sm:text-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;