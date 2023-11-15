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
import { PageNotFound } from './components/utility/PageNotFound';
import { Products } from './components/Products';

function App() {
  return (
  <BrowserRouter>
    <div className='relative z-10 w-full'> 
    <NavBar />
    <Routes>
      <Route path='/' element={<Landing />}/>
      {/* <Route path='/Home' element={}> 
        <Route path='history' element={<CompanyHistory />}/>
      </Route> */}
      <Route path='/about' element={<About />}/> 
      <Route path='/policy' element={<PrivacyPolicy />}/> 
      <Route path='/products' element={<Products />}/> 
      <Route path='*' element={<PageNotFound />}/> 
    </Routes>
    <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
