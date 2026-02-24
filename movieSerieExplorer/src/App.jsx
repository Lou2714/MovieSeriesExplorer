import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";

function App() {

  return (
    <div className="font-DMSans bg-Shark-800 min-h-dvh">
      <Navbar />
      <SearchBar/>
      {/* <MobileMenu /> */}
    </div>
  )
}

export default App
