import Category from "./Category";
import "./Categories.scss";
import { CategoryService } from "../../services";
import { useEffect, useState } from "react";
import { buffer2hexHelper } from "../../helpers";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditCategory from "../EditCategory/EditCategory";

export default function Categories(props) {
  const [categories, setCategories] = useState([]);
  const [createOpen, setCreateOpen] = useState(false);
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

  const handleCreateClose = () => {
    fetchCategories();
    setCreateOpen(false);
  };

  const handleCreateClick = () => {
    setCreateOpen(true);
  };

  return (
    <>
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
      {admin ? (
        <>
          <Fab
            color="primary"
            aria-label="add-category"
            onClick={handleCreateClick}
          >
            <AddIcon />
          </Fab>
          <EditCategory open={createOpen} onClose={handleCreateClose} />
        </>
      ) : (
        ""
      )}
    </>
  );
}
