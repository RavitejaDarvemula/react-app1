import { useState } from "react";
import Logo from "./images/airbnb-logo.png";
import image from "./images/photo-grid.png";
import image3 from "./images/star.png";
import data from "./data";
import "./App.css";
function Navbar() {
  return (
    <div>
      <nav className="nav">
        <img className="nav--logo" src={Logo} alt="" />
      </nav>
    </div>
  );
}
function Hero() {
  return (
    <section className="hero">
      <img className="hero--image" src={image} alt="" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--para">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } else {
    badgeText = "NOT ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.coverImg} className="card--image" />
      <div className="card--stats">
        <img src={image3} className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        // item={item}
        {...item}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
