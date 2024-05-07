import { MessageOutlined } from "@ant-design/icons";

export const LandingPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-1">
        <h1 className="text-gray text-6xl font-semibold">
          Hello, I'm{" "}
          <span className="text-whiteGray">
            Lucas <br /> UX & UI Designer.
          </span>
        </h1>
      </div>
      <div className="flex-1">
        <p className="text-white leading-relaxed">
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
