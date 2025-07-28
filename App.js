import React, { useState } from 'react';

const menuItems = [
  { id: 1, name: 'Andhra Chicken Curry', price: 180 },
  { id: 2, name: 'Gongura Mutton', price: 250 },
  { id: 3, name: 'Pesarattu Dosa', price: 90 },
  { id: 4, name: 'Andhra Veg Meals', price: 120 },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#e60000' }}>Welcome to Andhra Food</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Menu</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {menuItems.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px' }}>
            <h3 style={{ fontSize: '1.2rem', margin: '10px 0' }}>{item.name}</h3>
            <p style={{ color: '#555' }}>₹{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              style={{
                backgroundColor: '#e60000',
                color: '#fff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%',
                marginTop: '10px',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px' }}>Cart</h2>
      {cart.length === 0 ? (
        <p style={{ color: '#555' }}>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                marginBottom: '10px',
              }}
            >
              <div>
                <p>{item.name}</p>
                <p style={{ fontSize: '0.9rem', color: '#777' }}>
                  ₹{item.price} x {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: '#f44336',
                  color: '#fff',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <div
            style={{
              textAlign: 'right',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              marginTop: '20px',
              color: '#e60000',
            }}
          >
            Total: ₹{totalPrice}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
