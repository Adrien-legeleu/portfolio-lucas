import { CopyOutlined } from "@ant-design/icons";
export const Header = () => {
  return (
    <div>
      <h1 className="text-5xl text-white">Lucas</h1>
      <div className="text-white">
        <ul>
          <li>About me</li>
          <li>Contact</li>
        </ul>
        <div>
          <CopyOutlined />
          <span>Lucas@lucas.studio</span>
        </div>
      </div>
    </div>
  );
};
