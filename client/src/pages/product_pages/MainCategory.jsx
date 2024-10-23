import React, { useState } from 'react';
import grapes from "../../assets/grapes.jpg";
import green_apple from "../../assets/green_apple.jpg";
import oat_meal from "../../assets/oat_meal.jpg";
import salad from "../../assets/salad.jpg";
import grains from "../../assets/grains.jpg";
import banana from "../../assets/banana.jpg";
import barries from "../../assets/barries.jpg";
import apples from "../../assets/apples.jpg";

const MainCategory = () => {
  const [products] = useState([
    { name: "Avare Kalu 250g", price: 31, oldPrice: 40, sku: "SKU123", category: "Food and Beverages", imageUrl: grapes },
    { name: "Avarebele 250g", price: 50, oldPrice: 59, sku: "SKU124", category: "Food and Beverages", imageUrl: green_apple },
    { name: "Bengal Gram", price: 28, oldPrice: 30, sku: "SKU125", category: "Food and Beverages", imageUrl: oat_meal },
    { name: "Big Coconut", price: 29, oldPrice: 48, sku: "SKU126", category: "Food and Beverages", imageUrl: salad },
    { name: "Black Eyed Pea", price: 35, oldPrice: 75, sku: "SKU127", category: "Food and Beverages", imageUrl: grains },
    { name: "Black Gram", price: 149, oldPrice: 200, sku: "SKU128", category: "Food and Beverages", imageUrl: apples },
    { name: "Boiled Rice", price: 68, oldPrice: 70, sku: "SKU129", category: "Food and Beverages", imageUrl: barries},
    { name: "Byadagi Chillies", price: 200, oldPrice: 300, sku: "SKU130", category: "Food and Beverages", imageUrl: banana },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="col-span-1 bg-white p-4 shadow-md rounded-md">
          <h2 className="font-bold text-lg mb-4">Categories</h2>
          <ul className="space-y-2 text-teal-600">
            <li>Cleaning and Hygiene Products</li>
            <li>Grocery and Gourmet Foods</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-4">By Brands</h2>
          <ul className="space-y-2">
            <li>
              <input type="checkbox" id="brookbond" className="mr-2" />
              <label htmlFor="brookbond">Brook Bond</label>
            </li>
            <li>
              <input type="checkbox" id="fcbuy" className="mr-2" />
              <label htmlFor="fcbuy">FC BUY</label>
            </li>
            <li>
              <input type="checkbox" id="grb" className="mr-2" />
              <label htmlFor="grb">GRB</label>
            </li>
            <li>
              <input type="checkbox" id="harpic" className="mr-2" />
              <label htmlFor="harpic">Harpic</label>
            </li>
            <li>
              <input type="checkbox" id="mtr" className="mr-2" />
              <label htmlFor="mtr">MTR</label>
            </li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-4">By Price</h2>
          <div>
            <input type="range" min="0" max="5000" className="w-full" />
            <p className="text-sm mt-2">0 - 5000</p>
          </div>

          <h2 className="font-bold text-lg mt-8 mb-4">Customer Ratings</h2>
          <ul className="space-y-2">
            <li>
              <input type="checkbox" id="5stars" className="mr-2" />
              <label htmlFor="5stars">★★★★★</label>
            </li>
            <li>
              <input type="checkbox" id="4stars" className="mr-2" />
              <label htmlFor="4stars">★★★★☆</label>
            </li>
            <li>
              <input type="checkbox" id="3stars" className="mr-2" />
              <label htmlFor="3stars">★★★☆☆</label>
            </li>
          </ul>
        </div>

        {/* Product Grid */}
        <div className="col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-700">Product Name: A - Z</p>
            <p className="text-sm text-gray-700">Showing 1-8 of {products.length} results</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="border p-4 shadow-md rounded-md">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4" />
                <h3 className="text-gray-900 font-bold mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-gray-500 text-sm">SKU: {product.sku}</p>
                <div className="mt-2">
                  <span className="text-green-500 font-bold">₹{product.price}</span>{' '}
                  <span className="line-through text-gray-400">₹{product.oldPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCategory;
