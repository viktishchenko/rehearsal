import { useGlobalContext } from "./draft/14-cart/context";

// components
import Navbar from "./draft/14-cart//Navbar";
import CartContainer from "./draft/14-cart/CartContainer";
// items

function App() {
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
