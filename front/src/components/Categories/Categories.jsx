import CategoryBox from "./CategoryBox";
import "./Categories.scss";
import { CategoryService } from "../../services";
import { useEffect, useState } from "react";
import { buffer2hexHelper } from "../../helpers";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditCategory from "../EditCategory/EditCategory";
import PageTitleHelper from "../helper-components/PageTitleHelper/PageTitleHelper";

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
      {admin ? <PageTitleHelper title="Gestion des catégories" /> : ""}
      <div className="categories-wrapper">
        {categories.length ? (
          categories.map((category) => (
            <CategoryBox
              key={category.id}
              {...category}
              admin={admin}
              reloadCategories={fetchCategories}
            />
          ))
        ) : (
          <CategoryBox loading />
        )}
      </div>
      {admin ? (
        <>
          <Fab
            color="primary"
            aria-label="add-category"
            onClick={handleCreateClick}
            sx={{
              position: "fixed",
              bottom: 75,
              right: 25,
              zIndex: 500,
            }}
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
