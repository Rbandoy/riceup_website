import logo from './logo.svg';
import { NavBar } from './components/NavBar';
import { Landing } from './components/Landing';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';

function App() {
  return (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Landing />}/>
      {/* <Route path='/Home' element={}> 
        <Route path='history' element={<CompanyHistory />}/>
      </Route> */}
      <Route path='/about' element={<About />}/> 
      <Route path='/policy' element={<PrivacyPolicy />}/> 
      <Route path='*' element={<div><h1>Not Found</h1></div>}/> 
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
