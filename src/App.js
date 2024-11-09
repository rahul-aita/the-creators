
import './App.css';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Main/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Components/Navbar/Navbar';
import OurWorks from './Components/Our-Works/OurWorks';

function App() {
  return (
    <>
    <div className='conatiner set-body'>
    <Navbar/>
    <Slider/>
    <Content/>
    <OurWorks/>
    <Footer/>
    </div>
   
    </>
  );
}

export default App;
