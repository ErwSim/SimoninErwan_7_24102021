import Category from "./Category";
import "./Categories.scss";
import { CategoryService } from "../../services";
import { useState } from "react";
import { useAsync } from "../../hooks";

export default function Categories() {
  const categoryService = new CategoryService();

  const [categories, setCategories] = useState([]);

  useAsync(categoryService.getAll(), (categories) => {
    setCategories(categories);
  });

  return (
    <div className="categories-wrapper">
      {categories.length ? (
        categories.map((category) => (
          <Category key={category.id} {...category} />
        ))
      ) : (
        <Category loading />
      )}
    </div>
  );
}
