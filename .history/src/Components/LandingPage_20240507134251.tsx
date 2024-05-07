import { MessageOutlined } from "@ant-design/icons";

export const LandingPage = () => {
  return (
    <div>
      <div>
        <h1>
          Hello, I'm <span>Piotr UX & UI Designer.</span>
        </h1>
      </div>
      <div>
        <p>
          With experience in a Creative Agency as a Graphic Designer and as a
          UX/UI designer, I combine both fields to understand the needs of
          brands and create experiences that bring them profit.
        </p>
        <p>
          I have been designing and developing digital products for over 5
          years, both as a full-time employee and as a freelancer working in the
          gaming industry, through the legal industry, to goverment projects.
        </p>
        <button>
          Write a message{" "}
          <span>
            <MessageOutlined />
          </span>
        </button>
      </div>
    </div>
  );
};
