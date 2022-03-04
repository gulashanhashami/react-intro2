import logo from './logo.svg';
import './App.css';

function App() {
  //create component and use it
  const arr=["Android", "Blackberry", "iPhone", "Windows Phone"];
  const arr1=["Samsung", "HTC", "Micromax", "Apple"]
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <div>
      {arr.map((e)=>(
        <li>{e}</li>
      ))}
      </div>

      <h1>Mobile Manufacturers</h1>
      <div>
      {arr1.map((e)=>(
        <li>{e}</li>
      ))}
      </div>
    </div>
  );
}

export default App;
