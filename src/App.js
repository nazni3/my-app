// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TextForms from './components/TextForms';

function App() {
  return (
  <>

<Navbar title= "TextUtils" aboutText= " About TextUtils"/>
 
 <div className="container my-3">

 <TextForms heading="Enter the text to analyze:"/>

 </div>

</>
)
}

export default App;
