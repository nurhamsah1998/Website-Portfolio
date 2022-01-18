import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import BodyContent from './BodyContent';
import Get from './Get';
import MyWork from './MyWork';
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
