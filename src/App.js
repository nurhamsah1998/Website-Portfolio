import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BodyContent from './components/BodyContent';
import Get from './components/Get';
import MyWork from './components/MyWork';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <BodyContent />
      <MyWork />
      <Experience />
      <Education />
      <Get />
    </div>
  );
}

export default App;
