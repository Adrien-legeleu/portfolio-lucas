export const Service = () => {
  return (
    <div>
      <h2 className="text-gray text-4xl font-medium tracking-wide">
        How my <span className="text-white"> service process</span> looks like
      </h2>
      <div className="grid grid-cols-3 gap-5 items-center justify-center">
        {ServiceLList.map((service, index) => {
          return (
            <div key={`service numéro ${index} , name  :${service.name}`}>
              <div>
                <img src={service.src} alt={service.name} />
              </div>
              <h4 className="text-white text-2xl">{service.name}</h4>
              <p className="tracking-wide leading-relaxed">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ServiceLList = [
  {
    name: "Consulting",
    desc: "The first stage is a conversation with the client, in which he gets to know his needs, goals and vision. During this phase, together we analyze the characteristics of the brand, its target group, competition, values and the purpose of the project.",
    src: "./consulting.png",
  },
  {
    name: "Designing",
    desc: "I start my work by designing the home page. This template is crucial because it determines the style in which the entire website will be designed. After accepting the project, I prepare templates for the remaining subpages.",
    src: "./designing.png",
  },
  {
    name: "Developing",
    desc: "The final phase is the implementation of the website. This requires supervision and experience, which is why I support the client throughout the entire process from start to finish.",
    src: "./developing.png",
  },
];
