import React, { useState } from 'react';
import data from './data';

const List = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState({});
  const handleExpandToggle = (node) => {
    setIsExpanded((prev) => ({
      ...prev,
      [node.name]: !prev[node.name],
    }));
  };
  return (
    <div className="border border-gray-100  ">
      {data.map((node) => (
        <div key={node.id} className="py-2 px-6">
          {node.isFolder && (
            <span className="pr-2 cursor-pointer" onClick={() => handleExpandToggle(node)}>
              {isExpanded[node.name] ? '-' : '+'}
            </span>
          )}
          <span>{node.name}</span>
          {isExpanded[node.name] && node?.children && <List data={node.children} />}
        </div>
      ))}
    </div>
  );
};

const Explorer = () => {
  const [items, setItems] = useState(data);
  return (
    <div className="flex flex-col justify-center items-center mt- 10">
      <h1 className="text-blue-500 text-xl font-semibold p-4">File Explorer</h1>
      <div className="max-w-[1000px] ">
        <List data={items} />
      </div>
    </div>
  );
};

export default Explorer;
