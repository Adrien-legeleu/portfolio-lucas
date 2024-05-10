import { MessageOutlined } from "@ant-design/icons";

export const Faq = () => {
  return (
    <div>
      <div>
        <h2>F.A.Q.</h2>
        <p>
          The first stage is a conversation with the client, in which he gets to
          know his needs, goals and vision. During this phase, together we
          analyze the characteristics of the brand, its target group,
          competition, values and the purpose of the project.
        </p>
        <div>
          <h4>Do you still have any questions?</h4>
          <p>Contact me and I'll get back to you as soon as it's possible.</p>
          <button className="bg-whiteGray text-xl py-3 px-5 rounded-full flex gap-4 hover:brightness-110 duration-150">
            Write a message{" "}
            <span>
              <MessageOutlined />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
