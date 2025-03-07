import React, { useState } from 'react';

const ProgressBar = () => {

    const [prog, setProg] = useState();

    const handleProg = (e) => {
        let value = Number(e.target.value);
        setProg(value);
    }

  const textcolor = prog < 1 ? 'text-black' : 'text-white';

  return (
    <div>
      <div className="m-10">
        <label htmlFor="prog">Enter Progress : </label>
        <input type="number" id="prog" value={prog} className="border border-gray-800 ml-2 " onChange={(e)=>{handleProg(e)}} placeholder='type'/>
      </div>
      <div className="border border-gray-800 m-10">
        <div
          className={`bg-green-700 flex justify-end  ${textcolor}`}
          style={{ width: `${prog}%` }}
        >
          {prog}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
