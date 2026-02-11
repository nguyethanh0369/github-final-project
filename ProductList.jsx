import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => [...prev, plant.id]);
  };

  const plantsData = [
    {
      category: "Indoor Plants",
      items: [
        { id: 1, name: "Snake Plant", price: 15, image: "/images/snake.jpg" },
        { id: 2, name: "Spider Plant", price: 12, image: "/images/spider.jpg" },
        { id: 3, name: "Peace Lily", price: 18, image: "/images/lily.jpg" },
        { id: 4, name: "ZZ Plant", price: 20, image: "/images/zz.jpg" },
        { id: 5, name: "Pothos", price: 10, image: "/images/pothos.jpg" },
        { id: 6, name: "Rubber Plant", price: 22, image: "/images/rubber.jpg" },
      ],
    },
    {
      category: "Succulents",
      items: [
        { id: 7, name: "Aloe Vera", price: 8, image: "/images/aloe.jpg" },
        { id: 8, name: "Jade Plant", price: 9, image: "/images/jade.jpg" },
        { id: 9, name: "Echeveria", price: 7, image: "/images/eche.jpg" },
        { id: 10, name: "Haworthia", price: 6, image: "/images/haw.jpg" },
        { id: 11, name: "Sedum", price: 5, image: "/images/sedum.jpg" },
        { id: 12, name: "Cactus", price: 10, image: "/images/cactus.jpg" },
      ],
    },
    {
      category: "Outdoor Plants",
      items: [
        { id: 13, name: "Rose", price: 14, image: "/images/rose.jpg" },
        { id: 14, name: "Lavender", price: 16, image: "/images/lav.jpg" },
        { id: 15, name: "Hibiscus", price: 18, image: "/images/hib.jpg" },
        { id: 16, name: "Bougainvillea", price: 20, image: "/images/boug.jpg" },
        { id: 17, name: "Jasmine", price: 15, image: "/images/jas.jpg" },
        { id: 18, name: "Gardenia", price: 19, image: "/images/gard.jpg" },
      ],
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/plants">Plants</Link></li>
          <li>
            <Link to="/cart">Cart ({totalQuantity})</Link>
          </li>
        </ul>
      </nav>

      {/* Product List */}
      {plantsData.map((group) => (
        <div key={group.category}>
          <h3>{group.category}</h3>
          <div className="product-grid">
            {group.items.map((plant) => {
              const isAdded = addedItems.includes(plant.id);

              return (
                <div className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>
                  <button
                    disabled={isAdded}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {isAdded ? "Added" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
