export const Experiences = () => {
  return (
    <div className="pt-32">
      <h2 className="text-5xl text-white font-semibold font-montserrat">
        Experiences
      </h2>
      <p className="leading-relaxed tracking-wide">
        As a freelancer I worked on the UX / UI of websites from the
        cryptocurrency, e-commerce, CSR, RCP industries. I am also constantly
        expanding my knowledge in the front-end area and coding simple websites.
      </p>
      <div className="flex flex-col gap-5">
        {ExperiencesList.map((experience, index) => {
          return (
            <div
              key={`entreprise numéro : ${index} , name : ${experience.name}`}
              className="bg-blackGray px-8 py-4 flex justify-between items-center rounded-3xl"
            >
              <div className="flex items-center gap-12 w-1/3">
                <div className="h-12 w-full bg-whiteGray">
                  <img
                    className="w-1/2 h-1/2"
                    src={experience.src}
                    alt={experience.name}
                  />
                </div>
                <div>
                  <h4>{experience.name}</h4>
                  <p>{experience.job}</p>
                </div>
              </div>
              <div>
                <p>{experience.date}</p>
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
