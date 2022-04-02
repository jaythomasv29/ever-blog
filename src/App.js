import Featured from "./components/Featured/Featured";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Listings from "./components/Listings/Listings"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Listings />
    </>
  );
}

export default App;
