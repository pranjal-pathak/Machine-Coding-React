const data = [
  {
    id: '1',
    name: 'public',
    isFolder: true,
    children: [
      {
        id: '2',
        name: 'assets',
        isFolder: true,
        children: [
          { id: '3', name: 'logo.png', isFolder: false, children: [] },
          { id: '4', name: 'background.jpg', isFolder: false, children: [] },
        ],
      },
      {
        id: '5',
        name: 'index.html',
        isFolder: false,
        children: [],
      },
    ],
  },
  {
    id: '6',
    name: 'src',
    isFolder: true,
    children: [
      {
        id: '7',
        name: 'components',
        isFolder: true,
        children: [
          { id: '8', name: 'Header.js', isFolder: false, children: [] },
          { id: '9', name: 'Footer.js', isFolder: false, children: [] },
        ],
      },
      {
        id: '10',
        name: 'App.js',
        isFolder: false,
        children: [],
      },
      {
        id: '11',
        name: 'index.js',
        isFolder: false,
        children: [],
      },
    ],
  },
  {
    id: '12',
    name: 'package.json',
    isFolder: false,
    children: [],
  },
];

export default data;
