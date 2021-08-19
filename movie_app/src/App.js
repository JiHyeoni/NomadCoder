import React from 'react';
//import PropTypes from"prop-types"; //npm i prop-types
import axios from 'axios'; // npm install axios
import Movie from './Movies';
import "./App.css";

/*
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
*/

/*
class App extends React.Component{
  constructor(props){
  super(props);
  console.log("hello");
  }
  state={
    count:0
  }//state=> object, 동적인 데이터
  
  add = () =>{ 
    this.setState(current=>({count:current.count+1})); //setState를 사용하면 자동으로 refresh
  };
  minus = () =>{ 
    this.setState(current=>({count:current.count-1})); 
  };


  componentDidMount(){
    console.log("component rendered");
  }

  componentDidUpdate(){
    console.log("I just updated");
  }

  render(){ //react는 자동적으로 class component의 render method를 실행함
    console.log("I'm rendering");
    return(
    <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
  //setState를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출
}
*/

class App extends React.Component{
  state={
    isLoading:true,
    movies: []
  }

  getMovies = async () => { //async -> 비동기, 조금 기다려야 할 때
    const {
      data:{
      data:{movies}
    }
  } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
  //await는 async를 사용하지 않으면 사용 못함
    //console.log(movies);

    this.setState({movies:movies,isLoading:false});
  }

  componentDidMount(){
    //setTimeout(()=>{this.setState({isLoading:false});},6000);
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return (<section className="container">
      {isLoading ? (
      <div className="loader">
      <span className="loader__text">Loading...</span>
      </div>
      ) : (
        <div className="movies">
          {
            movies.map(movie=>(
              <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres} >
            </Movie>
              )
            )
          }
        </div>
      ) }
    </section>);
  }
}
export default App;
