import { Link } from 'react-router-dom';

const questionsConfig = [
  { name: 'Accordion', path: '/accordion' },
//   { name: 'Carousel', path: '/carousel' },
];

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-start bg-gray-900 text-white p-10">
      <h2 className="text-4xl font-semibold text-red-400 mb-6">Machine Coding Challenges</h2>

      <ol className="list-decimal list-inside space-y-3 text-xl">
        {questionsConfig.map(({ name, path }, index) => (
          <li key={index}>
            <Link to={path} className="text-blue-400 hover:text-blue-300 transition duration-200">
                   {name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Home;
