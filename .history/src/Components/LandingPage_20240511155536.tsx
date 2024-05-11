import { MessageOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="flex h-full flex items-center justify-center  font-montserrat">
      <div className="flex-1">
        <h1 className="text-gray text-6xl font-semibold">
          Hello, I'm{" "}
          <span className="text-whiteGray">
            Lucas <br /> UX & UI Designer.
          </span>
        </h1>
      </div>
      <div className="flex-1 flex gap-8 flex-col items-start">
        <p className="text-whiteGray text-2xl">
          With experience in a Creative Agency as a Graphic Designer and as a
          UX/UI designer, I combine both fields to understand the needs of
          brands and create experiences that bring them profit.
        </p>
        <p className="text-gray text-xl">
          I have been designing and developing digital products for over 5
          years, both as a full-time employee and as a freelancer working in the
          gaming industry, through the legal industry, to goverment projects.
        </p>
        <Link to="/contact">
          <button className="bg-whiteGray text-xl py-3 px-5 rounded-full flex gap-4 hover:brightness-110 duration-150">
            Write a message{" "}
            <span>
              <MessageOutlined />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};
