import Header from '../components/Header'
import '../styles/globals.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className=''>
      <Header />
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
