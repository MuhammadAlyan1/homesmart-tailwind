import ContactUs from './components/contactUs/Index';
import Features from './components/Features';
import HeroSection from './components/HeroSection';
import Partners from './components/Partners';
import Table from './components/Table';

function App() {
  return (
    <section className="h-screen bg-black">
      <HeroSection />
      <Features />
      <Partners />
      <Table />
      <ContactUs />
    </section>
  );
}

export default App;
