import { FaStar } from "react-icons/fa";

export function TestimoniesCard({ userName, positionClient, img, sex }) {
  return (
    <div className="container-card">
      <aside>
        <img
          className="avatar"
          src={`https://xsgames.co/randomusers/assets/avatars/${sex}/${img}.jpg`}
          alt=""
        />
      </aside>
      <article className="comments">
        <div className="top-comments">
          <FaStar style={{ color: "#ffea00" }} />
          <FaStar style={{ color: "#ffea00" }} />
          <FaStar style={{ color: "#ffea00" }} />
          <FaStar style={{ color: "#ffea00" }} />
          <FaStar style={{ color: "#ffea00" }} />
        </div>
        <div className="main-comments">
          Lorem ipsum dolor amet consectur adicing elit sed do usmod tempor
          incididunt enim ad minim veniam.
        </div>
        <div className="bottom-comments">
          <h5>{userName}</h5>
          <p>{positionClient}</p>
        </div>
      </article>
    </div>
  );
}
