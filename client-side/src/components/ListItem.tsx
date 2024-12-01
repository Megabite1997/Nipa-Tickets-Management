import React, { FC } from "react";
import { Link } from "react-router-dom";

interface ListItemProps {
  category: { name: string; image: string; path: string };
}

const ListItem: FC<ListItemProps> = ({ category }) => {
  return (
    <Link
      to={`products/${category.path}`}
      className="w-57 h-35 bg-slate-300 mr-3 border border-slate-300"
    >
      <img className="object-cover w-full h-full" src={category.image} alt="" />
      <p className="text-center pt-2">{category.name}</p>
    </Link>
  );
};

export default ListItem;
