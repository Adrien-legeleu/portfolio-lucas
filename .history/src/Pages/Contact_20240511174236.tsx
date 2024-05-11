import { CopyOutlined, MessageOutlined } from "@ant-design/icons";
import { Header } from "../Components";

export const Contact = () => {
  return (
    <div className="mx-8 font-montserrat">
      <Header />
      <div className="md:grid-cols-contact md:grid max-md:flex  mt-36">
        <div className="pr-28">
          <h1 className="text-white text-5xl font-bold leading-tight">
            Let's create{" "}
            <span className="text-gray">something remarkable together.</span>
          </h1>
          <form className="py-12 space-y-12">
            <div className="relative h-full w-full  ">
              <label className="text-white  flex h-full w-full select-none !overflow-visible truncate text-xl font-normal leading-tight text-gray-500 transition-all after:absolute after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                name
              </label>
              <input
                placeholder="Enter your Name"
                className="peer h-full w-full pb-5 border-b border-blue-gray-200 bg-transparent pt-4  font-sans text-sm font-normal text-whiteGray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>
            <div className="relative h-full w-full  ">
              <label className="text-white  flex h-full w-full select-none !overflow-visible truncate text-xl font-normal leading-tight text-gray-500 transition-all after:absolute after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
              <input
                placeholder="Enter your Email"
                className="peer h-full w-full pb-5 border-b border-blue-gray-200 bg-transparent pt-4  font-sans text-sm font-normal text-whiteGray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>
            <div className="relative h-ful w-full  ">
              <label className="text-white  flex h-full w-full select-none !overflow-visible truncate text-xl font-normal leading-tight text-gray-500 transition-all after:absolute after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Message
              </label>
              <textarea
                placeholder="Enter your Message"
                className="peer h-48 w-full pb-5 border-b border-blue-gray-200 bg-transparent pt-4  font-sans text-sm font-normal text-whiteGray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>
            <button className="bg-whiteGray text-xl py-3 px-5 rounded-full flex gap-4 hover:brightness-110 duration-150">
              Send the message
              <span>
                <MessageOutlined />
              </span>
            </button>
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
