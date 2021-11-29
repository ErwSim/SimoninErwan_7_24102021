import { Category } from "./Category";
import "./Categories.scss";
import { CategoryService } from "../../services";
import { useEffect, useState } from "react";

export function Categories() {
  const categoryService = new CategoryService();

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    categoryService.getAll().then((categories) => {
      setCategories(categories);
    });
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
