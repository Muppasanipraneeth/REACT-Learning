import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Contact } from "./Components/Contact";
import { Signup } from "./Components/Signup";
import React, { Suspense } from "react";
import { UserProvider } from "./Components/Usercontext";

const Dashboard = React.lazy(() => import("./Components/Dashboard"));

const App = () => {
  return (
    
    <UserProvider> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
