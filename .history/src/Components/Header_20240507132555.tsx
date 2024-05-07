import { CopyOutlined } from "@ant-design/icons";
export const Header = () => {
  return (
    <div className="px-8 py-4 flex items-center justify-between">
      <h1 className="text-5xl text-white">Lucas</h1>
      <div className="text-white flex gap-14">
        <ul className="flex gap-8 text-xl">
          <li>About me</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-5  px-5 bg-gray rounded-full">
          <CopyOutlined />
          <span className="text-xl">Lucas@lucas.studio</span>
        </div>
      </div>
    </div>
  );
};
