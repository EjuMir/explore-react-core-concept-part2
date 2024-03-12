import './App.css'
import Counter from './Count';
import Users from './Users';
import Friends from './Friends';


function App() {

  function handleClick(){
    alert('clicked');
  }
  const addToFive = (num) =>{
    alert(num+=5);
  }
 return (
    <>
      <h1>React core components 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
     
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => {addToFive(10)}}>Click me</button>
    </>
  )
}

export default App
