import { Person } from "@mui/icons-material";
import { useState } from "react";
import "./Category.scss";

export function Category() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
  };

  return (
    <div
      className={active ? "category-box__active" : "category-box"}
      onClick={handleClick}
    >
      <div className="category-title">Catégorie test</div>
      <div className="category-content">
        <Person />
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
      </div>
    </div>
  );
}
