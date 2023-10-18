import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";

const CategoryList = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">Job Category List</h1>
        <p className="text-base font-medium text-[#757575] mt-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 mb-28">
        {category.map((categories) => (
          <Categories key={categories.id} categories={categories}></Categories>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
