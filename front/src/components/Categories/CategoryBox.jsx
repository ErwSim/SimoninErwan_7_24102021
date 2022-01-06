import { Skeleton } from "@mui/material";
import { useState } from "react";
import EditCategory from "../EditCategory/EditCategory";
import { useNavigate } from "react-router-dom";
import "./CategoryBox.scss";

export default function CategoryBox(props) {
  const [active, setActive] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const navigate = useNavigate();

  let { name, imageUri, description, backgroundFallback, loading, admin } =
    props;

  const handleClick = () => {
    if (!admin) {
      setActive(!active);
      navigate(`/c/${props.id}`);
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
