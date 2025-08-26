import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import FeaturedProducts from './Components/FeaturedProducts';
import Footer from './Components/Footer';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <FeaturedProducts/>
      <Footer/>
    </div>
  );
}
