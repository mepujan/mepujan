import { HomePage } from "./pages/HomePage";
import background from './images/bg-image.jpg';


function App() {
  return (
    <div style={{backgroundImage :`url(${background})`,backgroundSize:'cover'}}>
      <HomePage />
    </div>

  );
}

export default App;
