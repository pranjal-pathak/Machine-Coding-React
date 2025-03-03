import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pagination = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
        axios.get('https://dummyjson.com/products').then((response) => {
             console.log(response.data.products)
            setProducts(response.data.products)  
      }); 
 
  }, []);
  return (
    <div>
          <div>
              {products.map((product) => (
                  <div>
                      {product.title}
                  </div>
              ))}
      </div>
    </div>
  );
};

export default Pagination;
