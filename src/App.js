import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Section from './Components/Section';
import Steps from './Components/Steps';
import Create from './Components/Create';
import Review from './Components/Review';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
       <Header/>
       <Section/>
       <Steps/>
       <Create/>
       <Review/>
       <Footer/>
    </div>
  );
}

export default App;
