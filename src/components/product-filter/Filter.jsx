import React, { useEffect, useState } from 'react';
import items from './items';

const Filter = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState(items);
  const [currFilters, setCurrentFilters] = useState([]);

  useEffect(() => {
    let temp = products.map((product) => product.category);
    temp = new Set(temp);
    setCategories([...temp]);
  }, [products]);

  const handleFilterChange = (category) => {
    if (currFilters.includes(category)) {
      let updatedCategories = currFilters.filter((item) => item !== category);
      setCurrentFilters(updatedCategories);
    } else {
      setCurrentFilters([...currFilters, category]);
    }
  };

  return (
    <div className="bg-[#d3d3d3]/50 min-h-screen">
      <div className="flex gap-2">
        {categories.map((category) => {
          const bgColor = currFilters.includes(category)
            ? 'bg-black text-white'
            : 'bg-white text-black';
          return (
            <div
              className={`bg-gray p-2 border border-black/30 hover:cursor-pointer ${bgColor}`}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2 border border-top mt-10 p-4">
        {products
          .filter((item) => currFilters.length === 0 || currFilters.includes(item.category))
          .map((product) => (
            <div key={product.id} className="p-2 border border-yellow-500">
              {product.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Filter;
