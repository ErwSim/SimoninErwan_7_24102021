import { useState } from "react";
import "./Category.scss";

export function Category(props) {
  const [active, setActive] = useState(false);
  const { name, imageUri, description, backgroundFallback } = props;

  const handleClick = () => {
    setActive(true);
  };

  return (
    <div
      className={active ? "category-box__active" : "category-box"}
      onClick={handleClick}
    >
      <div
        className="category-title"
        style={{ backgroundColor: backgroundFallback }}
      >
        {name}
      </div>
      <div
        className="category-content"
        style={{ backgroundImage: imageUri ?? "none", opacity: 0.5 }}
      >
        {description}
      </div>
    </div>
  );
}
