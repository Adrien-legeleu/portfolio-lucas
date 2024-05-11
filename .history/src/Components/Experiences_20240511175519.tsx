export const Experiences = () => {
  return (
    <div className="py-40 space-y-8 font-montserrat">
      <h2 className="text-4xl max-lg:text-center text-white font-medium ">
        Experiences
      </h2>
      <p className="leading-relaxed max-lg:text-center max-lg:m-auto tracking-wide text-gray w-full sm:w-2/3 text-lg">
        As a freelancer I worked on the UX / UI of websites from the
        cryptocurrency, e-commerce, CSR, RCP industries. I am also constantly
        expanding my knowledge in the front-end area and coding simple websites.
      </p>
      <div className="flex flex-col gap-6 pt-12">
        {ExperiencesList.map((experience, index) => {
          return (
            <div
              key={`entreprise numéro : ${index} , name : ${experience.name}`}
              className="bg-blackGray px-3 sm:px-8 py-4 flex justify-between items-center rounded-3xl"
            >
              <div className="flex items-center gap-4 sm:gap-12">
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
                  <h4 className="text-white  sm:text-2xl font-medium tracking-wide">
                    {experience.name}
                  </h4>
                  <p className="text-gray max-sm:text-[10px] tracking-wider">
                    {experience.job}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-whiteGray max-sm:text-[10px] tracking-widest text-end">
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
    name: "GPD Agency",
    job: "backend dev",
    date: "2020 - 2023",
    src: "./gpd.png",
    color: "#7B1C8D",
  },
];