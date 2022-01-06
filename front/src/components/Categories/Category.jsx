import { Skeleton } from "@mui/material";
import { useState } from "react";
import EditCategory from "../EditCategory/EditCategory";
import "./Category.scss";

export default function Category(props) {
  const [active, setActive] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  let { name, imageUri, description, backgroundFallback, loading, admin } =
    props;

  const handleClick = () => {
    if (!admin) {
      setActive(true);
    } else {
      setEditOpen(true);
    }
  };

  const handleClickEditClose = () => {
    props.reloadCategories();
    setEditOpen(false);
  };

  return (
    <>
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
      <EditCategory
        open={editOpen}
        onClose={handleClickEditClose}
        category={props}
      />
    </>
  );
}
