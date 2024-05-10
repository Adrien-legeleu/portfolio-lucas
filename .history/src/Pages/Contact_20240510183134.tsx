import { CopyOutlined } from "@ant-design/icons";
import { Header } from "../Components";

export const Contact = () => {
  return (
    <div className="mx-8 font-montserrat">
      <Header />
      <div className="grid-cols-contact grid mt-36">
        <div className="">
          <h1 className="text-white text-5xl font-bold leading-tight">
            Let's create{" "}
            <span className="text-gray">something remarkable together.</span>
          </h1>
          <form></form>
        </div>
        <div className="space-y-10">
          <p className="text-gray text-lg">
            Send me a message so we can start working together. Tell me your
            vision and goals and I will create extraordinary website for you I'm
            looking forward to our cooperation.
          </p>
          <div className="space-y-2">
            <h5 className="text-gray ">Adress email</h5>
            <div className="flex gap-2  cursor-pointer">
              <CopyOutlined style={{ color: "white" }} />
              <span className="text-xl text-white ">Lucas@lucas.studio</span>
            </div>
          </div>
          <div>
            <h5 className="text-gray">Local Time</h5>
            <p>UTC+1 Paris, France</p>
          </div>
          <p>
            designed by <span>MINO</span>
          </p>
        </div>
      </div>
    </div>
  );
};
