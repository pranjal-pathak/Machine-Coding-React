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
    <div className="bg-emerald-900 min-h-screen">
      <div className="flex gap-2 items-center justify-center pt-10">
        {categories.map((category) => {
          const bgColor = currFilters.includes(category)
            ? 'bg-black text-yellow-500 hover:bg-black/50'
            : 'bg-yellow-300 text-black hover:bg-yellow-200';
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
      <div className='flex justify-center'>
        <div className="flex flex-wrap gap-2 border border-gray-300 mt-10 p-4 max-w-[500px] items-center justify-center">
          {products
            .filter((item) => currFilters.length === 0 || currFilters.includes(item.category))
            .map((product) => (
              <div key={product.id} className="p-2 border border-yellow-500 text-yellow-500">
                {product.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
