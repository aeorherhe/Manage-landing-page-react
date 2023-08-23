// import AboutManage from "./components/AboutManage";
import { FetchData } from "./components/FetchData";
import Footer from "./components/Footer";
import { GlobalProvider } from "./components/GlobalCotext";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Simplify from "./components/Simplify";

function App() {
  return (
    <GlobalProvider>
      <main className="main">
        <Navbar />
        <Hero />
        {/* <AboutManage /> */}
        <FetchData />
        <Reviews />
        <Simplify />
        <Footer />
      </main>
    </GlobalProvider>
  );
}

export default App;
