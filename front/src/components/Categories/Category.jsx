import { Skeleton } from "@mui/material";
import { useState } from "react";
import "./Category.scss";

export default function Category(props) {
  const [active, setActive] = useState(false);
  const { name, imageUri, description, backgroundFallback, loading } = props;

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
        {loading ? <Skeleton /> : name}
      </div>
      <div
        className="category-content"
        style={{ backgroundImage: imageUri ?? "none", opacity: 0.5 }}
      >
        {loading ? <Skeleton /> : description}
      </div>
    </div>
  );
}
