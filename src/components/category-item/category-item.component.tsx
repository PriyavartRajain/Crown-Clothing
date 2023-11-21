import "./category-item.styles.scss";
import { Category } from "../../App";
import { FC } from "react";

const CategoryItem: FC<{ category: Category }> = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div key={category.id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
