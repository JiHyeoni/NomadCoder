import React from 'react';
import PropTypes from"prop-types"; //npm i prop-types

const foodILike = [
  {
  id:1,
  name: "Kimchi",
  image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  },
  {
  id:2,
  name: "samgyetang",
  image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
  rating : 5
  }
]

function Food({name,picture,rating}){
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
    </div>
}

Food.propTypes={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div className="App">
      {foodILike.map(dish=> (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
      </div>
  );
}

export default App;
