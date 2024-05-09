export const Experiences = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold">Experiences</h2>
      <p className="leading-relaxed tracking-wide">
        As a freelancer I worked on the UX / UI of websites from the
        cryptocurrency, e-commerce, CSR, RCP industries. I am also constantly
        expanding my knowledge in the front-end area and coding simple websites.
      </p>
      <div>
        {ExperiencesList.map((experience, index) => {
          return (
            <div>
              <div>
                <img src={experience.src} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ExperiencesList = [
  {
    name: "ezeze",
    job: "zd",
    date: "",
    src: "dd",
  },
];
