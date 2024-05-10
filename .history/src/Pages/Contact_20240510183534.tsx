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
          <form className="py-12">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                placeholder="Enter your Email"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className="after:content[' '] pointer-events-none absolute left-0  text-white -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-xl font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
          </form>
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
          <div className="space-y-2">
            <h5 className="text-gray">Local Time</h5>
            <p className="text-white">UTC+1 Paris, France</p>
          </div>
          <p className="text-gray">
            designed by <span className="text-white">MINO</span>
          </p>
        </div>
      </div>
    </div>
  );
};
