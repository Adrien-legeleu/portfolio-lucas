import { Experiences, Faq, Header, LandingPage, Service } from "../Components";

export const AboutMe = () => {
  return (
    <div className="px-8">
      <div className="h-screen">
        <Header />
        <LandingPage />
      </div>
      <Experiences />
      <Service />
      <Faq />
      <div className="flex items-center justify-center pt-20 pb-10 ">
        <p className="text-gray">
          designed by <span className="text-white">MINO</span>
        </p>
      </div>
    </div>
  );
};
