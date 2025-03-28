import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [products] = useState([
    { id: 1, name: 'Interstellar', price: 14.99, description: 'A science fiction film directed by Christopher Nolan.' },
    { id: 2, name: '1917', price: 12.99, description: 'A thriller film directed by Sam Mendes.' },
    { id: 3, name: 'Pulp Fiction', price: 12.99, description: 'A crime film directed by Quentin Tarantino.' },
    { id: 4, name: 'The Silence of the Lambs', price: 13.99, description: 'A thriller film directed by Jonathan Demme.' },
    { id: 5, name: 'The Departed', price: 13.99, description: 'A thriller film directed by Martin Scorsese.' },
    { id: 6, name: 'Fight Club', price: 12.99, description: 'A drama film directed by David Fincher.' },
    { id: 7, name: 'The Prestige', price: 13.99, description: 'A thriller film directed by Christopher Nolan.' },
    { id: 8, name: 'Inglourious Basterds', price: 12.99, description: 'A thriller film directed by Quentin Tarantino.' },
    { id: 9, name: 'Kill Bill: Vol. 1', price: 12.99, description: 'A thriller film directed by Quentin Tarantino.' },
    { id: 10, name: 'Kill Bill: Vol. 2', price: 12.99, description: 'The sequel to "Kill Bill: Vol. 1" directed by Quentin Tarantino.' },
  ]);
// ask why this is appears above the ProductList
  return (
    <div className="app">
      <h1>Your Favorite Movies In One Place</h1> 
      <ProductList products={products} />
    </div>
  );
}

export default App;