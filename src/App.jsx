import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList.jsx'
import AddProductForm from,'./AddProductForm.jsx'

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Lip Gloss', price: 12, description: 'This pink shimmery gloss will leave your lips moisturized and shining all day'}
    { id: 2, name: 'Blush', price: 10, description: 'Vibrant, bold, and unique, this blush is long lasting and perfect to complete your look'}
    { id: 3, name: 'Mascara', price: 15, description: 'No makeup look is complete without our long lasting and lengthening mascara'}
    {id: 4, name: 'Foundation', price: 20, description: 'With over 20 shades, our foundation formula leaves a glowy and smooth finish everytime'}
  ]);

  const addProduct = (newProduct) => {
    setProducts ([...products, {...newProduct}]);
  };

  return (
    <div>
<h1> Product Dashboard</h1>
<ProductList products={products}/>
<AddProductForm addProduct={addProduct}/>
    </div>
  );
};

  

export default App;
