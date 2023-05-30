// import logo from './logo.svg';
import './App.css';
import Myabout from './mycomponent/About'; //variable
import { Myapp } from './mycomponent/About';

function App() {
  return (
    <div className='App'>
      <h1>welcome to it sector</h1>
      <Myabout></Myabout>   {/*element */}
      <Myapp></Myapp>
    </div>
  );
}

export default App;
