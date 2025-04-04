import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion() {
  const [activeItem, setActiveItem] = useState();
  const items = [
    {
      id: '1',
      name: 'HTML',
      description:
        ' The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    },
    {
      id: '2',
      name: 'CSS',
      description:
        ' Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
    },
    {
      id: '3',
      name: 'JavaScript',
      description:
        ' JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
    },
  ];
  const handleClick = (e, index) => {
    if (index == activeItem)
      setActiveItem();
    else
    setActiveItem(index);
  };
  return (
    <div className="p-40 bg-gray-900 text-white h-screen w-screen flex flex-col gap-2 items-left">
      {items.map((item, index) => (
        <div className="flex flex-col  py-2 px-5 border-b-2 " key={item.id}>
          <div
            className="flex hover:cursor-pointer text-red-400"
            onClick={(e) => handleClick(e, index)}
          >
            {item.name} <ChevronDown className='ml-2'/>
          </div>
          {activeItem === index && <div className='text-gray-300 py-2 px-4'> {item.description}</div>}
        </div>
      ))}
    </div>
  );
}
