import Category from "./Category";
import "./Categories.scss";
import { CategoryService } from "../../services";
import { useEffect, useState } from "react";

export default function Categories() {
  const categoryService = new CategoryService();

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let isSubscribed = true;
    categoryService.getAll().then((categories) => {
      if (isSubscribed) {
        setCategories(categories);
      }
    });

    return () => (isSubscribed = false);
  });

  return (
    <div className="categories-wrapper">
      {categories.length
        ? categories.map((category) => (
            <Category key={category.id} {...category} />
          ))
        : ""}
    </div>
  );
}
