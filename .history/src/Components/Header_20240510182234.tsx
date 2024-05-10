import { CopyOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="py-4 flex items-center justify-between font-montserrat ">
      <h2 className="text-5xl font-semibold text-white">Lucas</h2>
      <div className="text-white flex gap-14 items-center justify-center">
        <ul className="flex gap-8 text-xl tracking-wide">
          <Link to="/node_modules" className="cursor-pointer">
            About me
          </Link>
          <Link to="/contact" className="cursor-pointer">
            Contact
          </Link>
        </ul>
        <div className="flex gap-2  px-6 py-3 bg-gray rounded-full cursor-pointer hover:brightness-110 duration-150">
          <CopyOutlined />
          <span className="text-xl border-b-[1px] border-white">
            Lucas@lucas.studio
          </span>
        </div>
      </div>
    </div>
  );
};
