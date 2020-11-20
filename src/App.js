
import './App.css';
import ContactUs from './components/Home/ContactUs/ContactUs';
import Footer from './components/Home/Footer/Footer';

import Header from './components/Home/Header/Header';
import Project from './components/Home/Project/Project';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Project></Project>
     <ContactUs></ContactUs>
     <Footer></Footer>
    </div>
  );
}

export default App;
