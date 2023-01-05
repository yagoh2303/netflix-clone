import './App.css';

import Row from './components/Row';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

import categories from './api';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      {categories.map((category) => {
        return <Row key={category.name} title={category.title} path={category.path} isLarge={category.isLarge}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
