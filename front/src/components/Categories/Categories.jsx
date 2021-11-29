import Category from "./Category";
import "./Categories.scss";
import { CategoryService } from "../../services";
import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoryService = new CategoryService();
    (async () => {
      const fetchCategories = await categoryService.getAll();
      setCategories(fetchCategories);
    })();
  }, []);

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
