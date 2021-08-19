import React from 'react';
//import PropTypes from"prop-types"; //npm i prop-types


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
  componentDidMount(){
    setTimeout(()=>{this.setState({isLoading:false});},6000);
  }
  render(){
    const {isLoading} = this.state;
    return (<div>
      {isLoading ? "Loading..." : "We are ready"}
    </div>);
  }
}
export default App;
