import React, { useState } from 'react';

const ToDO = () => {
  const [items, setItems] = useState([]);
  const [entry, setEntry] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setEntry(e.target.value);
  };

  const handleAdd = () => {
    if (entry.trim() !== '') {
      setError(null);
      setItems([entry, ...items]);
      setEntry('');
    } else {
      setError('Attempt to add more emptiness');
    }
  };
    
    const handleDelete = (item) => {
        setItems(items.filter((i)=>i!==item))
    }
  return (
    <div>
      <div className="flex justify-center mt-10 gap-4">
        <input
          type="text"
          placeholder=" what is on your mind"
          className="border  px-3 py-2 rounded "
          value={entry}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <button className="border border-gray-500 p-2" onClick={handleAdd}>
          ADD
        </button>
      </div>
      <div className="flex flex-col items-center mt-10">
        {error && <div className="text-red-500">{error}</div>}
        {items.length === 0 && <div className="text-gray-800">Such Empty !</div>}
        {items.map((item, index) => (
          <div key={index}>
            <ul>
              <li>
                {item}
                <span
                  className="text-red-500 ml-2 hover:cursor-pointer"
                  onClick={() => handleDelete(item)}
                >
                  x
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDO;
