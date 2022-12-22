import { Mainpage } from "./Components/Mainpage";

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {

  return (
    <Router >
    <Routes>
      <Route path="/" element={<Mainpage/>} >
      <Route path="colections" element={<Mainpage/>} />
        <Route path="men" element={<Mainpage/>} />
      </Route>
     
    

    </Routes>
    
  </Router>
    
  );
}

export default App;