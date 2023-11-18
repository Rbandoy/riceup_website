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
import { ItemPreview } from './components/ItemPreview';
import { Login } from './components/Login';
import { useEffect } from 'react';
import { SignUp } from './components/SignUp';
import { VerifyPage } from './components/VerifyPage';
function App() {
  useEffect(() => {
    // Change body color when the component mounts
    document.body.style.backgroundColor = '#fef6f5';
    // Clean up the style when the component unmounts
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
  <BrowserRouter>
    <div className='relative z-10 w-full'> 
    <NavBar />
    <Routes>
      <Route path='/home' element={<Landing />}/>
      {/* <Route path='/Home' element={}> 
        <Route path='history' element={<CompanyHistory />}/>
      </Route> */}
      <Route path='/login' element={<Login />}/> 
      <Route path='/signup' element={<SignUp />}/> 
      <Route path='/signup/verify' element={<VerifyPage />}/> 
      <Route path='/about' element={<About />}/> 
      <Route path='/policy' element={<PrivacyPolicy />}/> 
      <Route path='/' element={<Products />}/>
      <Route path='/products/item' element={<ItemPreview />}/>  
      <Route path='*' element={<PageNotFound />}/> 
    </Routes>
    <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
