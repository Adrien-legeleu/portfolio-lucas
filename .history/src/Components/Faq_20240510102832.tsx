import { MessageOutlined } from "@ant-design/icons";

export const Faq = () => {
  return (
    <div className="grid-cols-faq grid font-montserrat">
      <div className="space-y-6">
        <h2 className="text-white text-4xl">F.A.Q.</h2>
        <p className="text-gray leading-relaxed">
          The first stage is a conversation with the client, in which he gets to
          know his needs, goals and vision. During this phase, together we
          analyze the characteristics of the brand, its target group,
          competition, values and the purpose of the project.
        </p>
        <div className="px-4 py-5 bg-blackGray rounded-3xl">
          <h4 className="text-2xl text-white">
            Do you still have any questions?
          </h4>
          <p className="text-gray leading-relaxed">
            Contact me and I'll get back to you as soon as it's possible.
          </p>
          <button className="bg-whiteGray text-xl py-3 px-5 rounded-full flex gap-4 hover:brightness-110 duration-150">
            Write a message{" "}
            <span>
              <MessageOutlined />
            </span>
          </button>
        </div>
      </div>
      <div>
        {FaqQuestions.map((question, index) => {
          return (
            <div key={`question of the faq : ${index}`}>
              <div>
                <h3>{question.title}</h3>
              </div>
              <div>
                <p>{question.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FaqQuestions = [
  {
    title: "How much does a website backend project typically cost?",
    answer:
      "The cost of creating a backend website, along with development, can very significantly depending on several factors, such as the complexity of the project, the scope of the project, the experience of the agency, location , and additionnal service",
  },
  {
    title:
      "Will the website be fully developed and ready for launch upon completion?",
    answer:
      "Yes, I offer complete website solutions. This includes both design and development, ensuring that your website is not only visually appealing but also fully functional and ready for launch.",
  },
  {
    title:
      "Do you design e-commerce websites, and what features can be included?",
    answer:
      "Yes, I design e-commerce website and I also take care of their features. There are many different tools that you canuse within e-commerce website design, depending on your needs and brand specifications.",
  },
  {
    title:
      "How long does it typically take to complete a website design project?",
    answer:
      "The time needed for design and developing, e.g. an e-commerce website, may take from 2 to 4 weeks and approximately the same amount of time for development. It is also worth taking into account additional time for tests, corrections and final adaptation of the project to the client's needs.",
  },
  {
    title:
      "What is the process for revisions and feedback during the design phase?",
    answer:
      "The UI/UX design revised and feedback reporting process includes client input, concept and mockup creation, client feedback collection, iterative on client feedback, significant control testing, and final client acceptance of the design.",
  },
  {
    title: "Are the websites you design mobile-responsive?",
    answer:
      "I usually start the process with low-fidelity mockups to gain as much information as possible in the shortest possible time. Then I prepare a mockup of the Homepage, and finally I create the rest of the subpages. At each of these stages, client gets involved and accepts the work and functionalities that I done previously.",
  },
];
