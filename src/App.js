import './App.css';
import Resume from './resume';
import Experience from './experience';
import Education from './education';

function App() {
  return (
    <>
    <Resume name="Rahul Gautam" />
    <h1 style={{"margin":"0px","marginTop":"15px"}}>Experience</h1>
    <hr style={{"width":"60%","marginBottom":"0px","height":"5px","backgroundColor":"black"}} />
    <Experience head="Senior Product Manager" con="S-health"/>
    <Experience head="Product manager" con="McDonald's USA"/>
    <Experience head="Associate Product Manager" con="Sony Group Corporation"/>
    <h1 style={{"margin":"0px","marginTop":"15px"}}>Education</h1>
    <hr style={{"width":"60%","marginBottom":"0px","height":"5px","backgroundColor":"black"}} />
    <Education head="B.S. Business and Enterpreneurship" con="UC berekeley"/>
    
    </>
   
  );
}

export default App;
