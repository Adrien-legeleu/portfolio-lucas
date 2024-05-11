import { Link } from "react-router-dom";
import { Experiences, Faq, Header, LandingPage, Service } from "../Components";

export const AboutMe = () => {
  return (
    <div className="px-5 sm:px-8">
      <div className="sm:h-screen">
        <Header />
        <LandingPage />
      </div>
      <Experiences />
      <Service />
      <Faq />
      <div className="flex items-center justify-center pt-20 pb-10 ">
        <Link to="https://mino-design.netlify.app">
          <p className="text-gray">
            designed by <span className="text-white">MINO</span>
          </p>
        </Link>
      </div>
    </div>
  );
};
