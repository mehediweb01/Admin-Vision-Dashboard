import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SideSection from "./Sidevar/SideSection";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <SideSection/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <main className="min-h-screen flex bg-gradient-to-r from-blue-300/75 to-slate-800">
          <div className="w-[13%] min-h-screen bg-gradient-to-b from-sky-500/40 to-white/60">
            {/* side bar */}
          </div>
          <div className="w-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
