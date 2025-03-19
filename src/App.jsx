import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SideSection from "./components/shared/Sidebar/SideSection";
import Navbar from "./components/shared/Navbar";
import SignIn from "./SignInUp/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="min-h-screen flex bg-gradient-to-r from-blue-300/75 to-slate-800">
          <div className="max-w-[20%] min-h-screen bg-gradient-to-b from-sky-500/40 to-black/25">
            <SideSection />
          </div>
          <div className="w-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="SignIn" element={<SignIn/>} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
