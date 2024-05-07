import { CopyOutlined } from "@ant-design/icons";
export const Header = () => {
  return (
    <div className="px-8 py-4 flex items-center justify-between">
      <h1 className="text-5xl text-white">Lucas</h1>
      <div className="text-white flex gap-14 items-center justify-center">
        <ul className="flex gap-8 text-xl">
          <li className="cursor-pointer">About me</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div className="flex gap-2  px-6 py-3 bg-gray rounded-full cursor-pointer">
          <CopyOutlined />
          <span className="text-xl border-b-[2px">Lucas@lucas.studio</span>
        </div>
      </div>
    </div>
  );
};
