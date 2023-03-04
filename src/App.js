import './App.css';
import Header from './Header';
import {SubHeader} from './Header';
import { Starter, Greetings, Introduction } from './Greetings';

function App() {
  const dateOfBirth = "1st September, 1996"

  return (
    <div className="App">
      <Starter/>
      <Greetings/>
      <Introduction/>
      <Header/>
      <SubHeader/>
      <h1>Md Jahid Hasan</h1>
      <h2>Front End Developer</h2>
      <h3>{dateOfBirth}</h3>
    </div>
  );
}

export default App;
