import React, { useEffect, useState } from 'react';

const AutoComplete = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState();
  const [showSuggetions, setShowSuggestions] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      console.log('Cache', input);

      setSuggestions(cache[input]);
      return;
    }
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const result = await data.json();
    console.log('API Call', input);
    setSuggestions(result?.recipes);
    setCache((prev) => ({ ...prev, [input]: result.recipes }));
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);

    return () => clearTimeout(timer);
  }, [input]);
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h2 className="font-semibold text-lg text-blue-500">Autocomplete Search Bar</h2>
      <div>
        <input
          type="text"
          placeholder="Enter the search keyword"
          className="p-2 w-[500px] border border-gray-200 mt-5 rounded-lg shadow-lg"
          onChange={(e) => handleInputChange(e)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
      </div>

      {showSuggetions && (
        <div className="flex flex-col justify-left items-left w-[500px]  border-gray-200 mt-5 rounded-lg shadow-lg max-h-[400px] overflow-auto">
          {suggestions.map((suggestion) => (
            <span key={suggestion.id} className="p-2">
              {suggestion.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
