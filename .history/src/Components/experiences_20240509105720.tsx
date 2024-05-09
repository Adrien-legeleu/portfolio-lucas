export const Experiences = () => {
  return (
    <div className="py-32 space-y-8 font-montserrat">
      <h2 className="text-5xl text-white font-mdeium ">Experiences</h2>
      <p className="leading-relaxed tracking-wide text-gray w-1/2 text-lg">
        As a freelancer I worked on the UX / UI of websites from the
        cryptocurrency, e-commerce, CSR, RCP industries. I am also constantly
        expanding my knowledge in the front-end area and coding simple websites.
      </p>
      <div className="flex flex-col gap-6">
        {ExperiencesList.map((experience, index) => {
          return (
            <div
              key={`entreprise numéro : ${index} , name : ${experience.name}`}
              className="bg-blackGray px-8 py-4 flex justify-between items-center rounded-3xl"
            >
              <div className="flex items-center gap-12">
                <div
                  className="h-20 w-20 flex items-center justify-center rounded-3xl"
                  style={{ backgroundColor: experience.color }}
                >
                  <img
                    className="w-1/2 h-1/2 object-contain"
                    src={experience.src}
                    alt={experience.name}
                  />
                </div>
                <div>
                  <h4 className="text-white text-2xl font-medium tracking-wide">
                    {experience.name}
                  </h4>
                  <p className="text-gray tracking-wider">{experience.job}</p>
                </div>
              </div>
              <div>
                <p className="text-whiteGray  tracking-widest text-end">
                  {experience.date}
                </p>
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
    color: "#0C1E30",
  },
  {
    name: "Froggly",
    job: "backend dev director",
    date: "2019 - Current",
    src: "./froggly.png",
    color: "#F5C71B",
  },
  {
    name: "GPD Agency & Film Studio",
    job: "backend dev",
    date: "2020 - 2023",
    src: "./gpd.png",
    color: "#7B1C8D",
  },
];
