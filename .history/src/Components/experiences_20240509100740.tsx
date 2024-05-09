export const Experiences = () => {
  return (
    <div className="pt-32">
      <h2 className="text-6xl font-semibold font-montserrat">Experiences</h2>
      <p className="leading-relaxed tracking-wide">
        As a freelancer I worked on the UX / UI of websites from the
        cryptocurrency, e-commerce, CSR, RCP industries. I am also constantly
        expanding my knowledge in the front-end area and coding simple websites.
      </p>
      <div>
        {ExperiencesList.map((experience, index) => {
          return (
            <div
              key={`entreprise numéro : ${index} , name : ${experience.name}`}
            >
              <div>
                <div>
                  <img src={experience.src} alt={experience.name} />
                </div>
                <div>
                  <h4>{experience.name}</h4>
                  <p>{experience.job}</p>
                </div>
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
    name: "Webmetric",
    job: "backend dev",
    date: "2021 - Current",
    src: "./webmetric.png",
  },
  {
    name: "Froggly",
    job: "backend dev director",
    date: "2019 - Current",
    src: "./froggly.png",
  },
  {
    name: "ezeze",
    job: "backend dev",
    date: "2020 - 2023",
    src: "./gpd.png",
  },
];
