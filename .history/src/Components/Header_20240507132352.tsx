import { CopyOutlined } from "@ant-design/icons";
export const Header = () => {
  return (
    <div className="px-8 flex items-center justify-between">
      <h1 className="text-5xl text-white">Lucas</h1>
      <div className="text-white flex gap-4">
        <ul className="flex gap-4 text-xl">
          <li>About me</li>
          <li>Contact</li>
        </ul>
        <div>
          <CopyOutlined />
          <span className="text-xl">Lucas@lucas.studio</span>
        </div>
      </div>
    </div>
  );
};
