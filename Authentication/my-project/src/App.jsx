import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../src/components/Signup";
import Home from "../src/components/Home";
import Login from "../src/components/Login";
import NotFound from "../src/components/NotFound";

function App() {
  return (
    <Router>
      <div className='h-screen w-full'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
