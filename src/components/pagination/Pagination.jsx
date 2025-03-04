import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowBigLeft } from 'lucide-react';
import { ArrowBigRight } from 'lucide-react';

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(2);
  const totalProducts = products.length;
  const [sliceBy,setSliceBy] = useState(10);
  const maxPageNumber = Math.ceil(totalProducts / sliceBy);

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=100').then((response) => {
      console.log(response.data.products);
      setProducts(response.data.products);
    });
  }, []);
  const handlePage = (direction) => {
    if (direction === 'back') {
    setPage(page - 1);
    } else {
       setPage(page + 1);
    }
  };
  const handleSlice = (e) => {
    let value = parseInt(e.target.value, 10) || 1; // Convert to number, default to 1 if NaN

    if (value > totalProducts) {
      setSliceBy(totalProducts);
    } else if (value <= 0) {
      setSliceBy(1);
    } else {
      setSliceBy(value);
    }

    setPage(1); // Reset page to 1 when sliceBy changes
  };
  return (
    <div>
      <div className="flex flex-wrap gap-6 p-4 mx-20">
        {products.slice((page - 1) * sliceBy, page * sliceBy).map((product) => (
          <div>
            <div className="bg-gray-900 border border-gray-500 flex flex-col ">
              <div className="bg-gray-800  w-100 h-80 overflow-hidden">
                <img src={product.thumbnail} alt="Product" className="w-full h-full object-fit" />
              </div>
              <div className="flex justify-center text-red-500 font-semibold p-2">
                {product.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex gap-4 justify-center items-center">
        {page > 1 && (
          <div className="text-red-500 " onClick={() => handlePage('back')}>
            <ArrowBigLeft />
          </div>)}
        <div className="p-2 border border-gray-200 text-red-500">{page}</div>
        {page < maxPageNumber && (
          <div className="text-red-500" onClick={() => handlePage('forward')}>
            <ArrowBigRight />
          </div>
        )}
      </div>
      <div className="mt-4 flex gap-4 justify-center items-center ">
        <label htmlFor="productsOnPage"></label>
        <input
          type="number"
          id="productsOnPage"
          value={sliceBy}
          className="border border-gray-300 w-20 rounded-lg p-2 py-1"
          onChange={(e) => handleSlice(e)}
        />
      </div>
    </div>
  );
};

export default Pagination;
