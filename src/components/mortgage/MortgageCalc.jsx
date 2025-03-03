import React, { useState } from 'react';
import { IndianRupee, Percent } from 'lucide-react';

const MortgageCalc = () => {
  const [principal, setPrincipal] = useState('');
  const [time, setTime] = useState('');
  const [rate, setRate] = useState('');
  const [result, setResult] = useState('');

  const inputConfig = [
    {
      title: 'Principal Amount',
      id: 'principal',
      placeholder: 'INR',
    },
    {
      title: ' Interest Rate',
      id: 'rate',
      placeholder: '%',
    },
    {
      title: 'Time',
      id: 'time',
      placeholder: 'Years',
    },
  ];

  const handleChange = (e, id) => {
    console.log('handleChange triggered for:', id); // Debugging
    console.log('Value:', e.target.value); // Debugging

    const value = e.target.value;

    if (id === 'principal') setPrincipal(value);
    else if (id === 'rate') setRate(value);
    else if (id === 'time') setTime(value);
  };
  const isValidNumber = (str) => !isNaN(str) && str.trim() !== '' && Number(str) > 0;

  const calculateMortgage = () => {
    if (!isValidNumber(principal) || !isValidNumber(rate) || !isValidNumber(time)) {
      setResult('Invalid input');
      return;
    }

    const p = Number(principal);
    const r = Number(rate) / 12 / 100; // Convert annual interest rate to monthly
    const n = Number(time) * 12; // Convert years to months

    if (r === 0) {
      setResult((p / n).toFixed(2)); // If interest rate is 0, just divide principal by months
      return;
    }

    const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setResult(monthlyPayment.toFixed(2));
  };

  return (
    <div className="m-10 max-w-[50%] border bg-gray-900 border-gray-900 p-4 rounded-lg">
      <div className="flex flex-col gap-2">
        {inputConfig.map((item) => (
          <div key={item.id} className="flex flex-col">
            <label htmlFor={item.id} className="text-red-400">
              {item.title}
            </label>
            <div className="flex items-center gap-1">
              <input
                type="text"
                placeholder={item.placeholder}
                id={item.id}
                name={item.id}
                className="border border-gray-800 p-2 rounded-lg w-[200px]  bg-slate-100 text-black"
                value={item.id === 'principal' ? principal : item.id === 'rate' ? rate : time}
                onChange={(e) => handleChange(e, item.id)}
              />
            </div>
          </div>
        ))}

        <div>
          <button
            className="bg-red-500 text-white font-semibold px-2 py-1 rounded-lg mt-2 hover:bg-red-800"
            onClick={() => calculateMortgage(principal, rate, time)}
          >
            Calculate
          </button>
        </div>
        <div className="text-white flex items-center gap-1">
          <IndianRupee className="size-4" />
          {result}
        </div>
      </div>
    </div>
  );
};

export default MortgageCalc;
