import { Experiences, Header, LandingPage, Service } from "../Components";

export const AboutMe = () => {
  return (
    <div className="px-8">
      <div className="h-screen">
        <Header />
        <LandingPage />
      </div>
      <Experiences />
      <Service />
    </div>
  );
};
