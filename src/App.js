import './App.css';
import Header from './Header';
import {SubHeader} from './Header';
import { Starter, Greetings, Introduction } from './components/Greetings';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  const dateOfBirth = "1st September, 1996"

  return (
    <div className="App">
      <Starter/>
      <Greetings/>
      <Introduction/>
      <Header/>
      <SubHeader/>
      <h1 id='Name'>Md Jahid Hasan</h1>
      <h2 className='Profession'>Front End Developer</h2>
      <h3 className='dateOfBirth'>Date of Birth : {dateOfBirth}</h3>
      <Skills title= "My Skills:"/>
      <Experience position1="Office Assistant Cum Computer Operator" position2="Computer Numerical Control Operator, Machinist and Programmer"/>
    </div>
  );
}

export default App;
