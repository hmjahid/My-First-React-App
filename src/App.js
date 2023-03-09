import './App.css';
import Header from './Header';
import {SubHeader} from './Header';
import { Starter, Greetings, Introduction } from './components/Greetings';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  const dateOfBirth = "1st September, 1996"

  return (
    <div className="App">
    <div className='Intro'>
      <Starter/>
      <Greetings/>
      <Introduction/>
      <Header/>
      <SubHeader/>
      <h1 id='Name'>Md Jahid Hasan</h1>
      <h2 className='Profession'>Front End Developer</h2>
      <h3 className='dateOfBirth'>Date of Birth : {dateOfBirth}</h3>
    </div>
      <div className='SkillDiv'>
         <Skills title= "Skills"/>
      </div>
      <Experience 
          position1="Office Assistant Cum Computer Operator"
          position2="Computer Numerical Control Operator, Machinist and Programmer" 
          company="at Nichima Precision Engineering Sdn. Bhd., Penang, Malaysia"
      />
      <Education/>

    </div>
  );
}

export default App;
