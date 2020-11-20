
import './App.css';
import Achievements from './components/Home/Achievements/Achievements';
import ContactUs from './components/Home/ContactUs/ContactUs';
import Footer from './components/Home/Footer/Footer';

import Header from './components/Home/Header/Header';
import Project from './components/Home/Project/Project';
import Services from './components/Home/Services/Services';
import Packages from './components/Home/Packages/Packages';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Services />
     <Project></Project>
     <Achievements />
     <Packages />
     <ContactUs></ContactUs>
     <Footer></Footer>
    </div>
  );
}

export default App;
