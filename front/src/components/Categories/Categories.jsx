import Category from "./Category";
import "./Categories.scss";
import { CategoryService } from "../../services";
import { useEffect, useState } from "react";
import { buffer2hexHelper } from "../../helpers";

export default function Categories(props) {
  const [categories, setCategories] = useState([]);
  const { admin } = props;
  const categoryService = new CategoryService();

  useEffect(() => {
    (async () => {
      await fetchCategories();
    })();
  }, []);

  const fetchCategories = async () => {
    const categories = await categoryService.getAll();
    categories.map((category) => {
      category.backgroundFallback = buffer2hexHelper(
        category.backgroundFallback
      );
      return category;
    });

    setCategories(categories);
  };

  return (
    <div className="categories-wrapper">
      {categories.length ? (
        categories.map((category) => (
          <Category
            key={category.id}
            {...category}
            admin={admin}
            reloadCategories={fetchCategories}
          />
        ))
      ) : (
        <Category loading />
      )}
    </div>
  );
}
