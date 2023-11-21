import { Category } from "../../App";
import CategoryItem from "../category-item/category-item.component";
import { FC } from "react";
import "./directory.styles.scss";
const Directory: FC<{ categories: Category[] }> = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
