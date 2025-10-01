import React from 'react';
import './App.css';

const ResortCard = ({ image, country, hotelName, rating, pricePerNight }) => {
  const ratingColor = rating >= 4.0 ? '#22c55e' : '#ef4444';
  
  return (
    <div className="resort-card">
      <div className="card-image">
        <img src={image} alt={`${hotelName} in ${country}`} />
      </div>
      <div className="card-content">
        <h3 className="country">{country}</h3>
        <h4 className="hotel-name">{hotelName}</h4>
        <div className="rating" style={{ color: ratingColor }}>
          {rating} ★
        </div>
        <div className="price">${pricePerNight}/night</div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const resorts = [
    {
      id: 1,
      image: "/images/1.jpg",
      country: "Indonesia",
      hotelName: "Gili Air Hotel",
      rating: 4.8,
      pricePerNight: 589
    },
    {
      id: 2,
      image: "/images/2.jpg",
      country: "Seychelles",
      hotelName: "Hilton Resort",
      rating: 4.2,
      pricePerNight: 629
    },
    {
      id: 3,
      image: "/images/3.jpg",
      country: "US Virgin Islands",
      hotelName: "Goa Resort",
      rating: 3.5,
      pricePerNight: 485
    },
    {
      id: 4,
      image: "/images/4.jpg",
      country: "Bahamas",
      hotelName: "Kuredu Resort",
      rating: 4.1,
      pricePerNight: 729
    },
    {
      id: 5,
      image: "/images/5.jpg",
      country: "Mauritius",
      hotelName: "Trou D'eau Douce",
      rating: 4.9,
      pricePerNight: 877
    },
    {
      id: 6,
      image: "/images/6.jpg",
      country: "Bermuda",
      hotelName: "Staniel Cay Hotel",
      rating: 3.2,
      pricePerNight: 365
    }
  ];

  return (
    <div className="app">
      <div className="container">
        <h1 className="main-title">Resorts Lite</h1>
        <div className="divider"></div>
        <div className="resort-grid">
          {resorts.map(resort => (
            <ResortCard
              key={resort.id}
              image={resort.image}
              country={resort.country}
              hotelName={resort.hotelName}
              rating={resort.rating}
              pricePerNight={resort.pricePerNight}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
