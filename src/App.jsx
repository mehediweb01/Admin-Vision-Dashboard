import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <section className="flex bg-gradient-to-r from-blue-300/75 to-slate-800">
          <div className="w-[13%] h-full bg-red-200">{/* side bar */}</div>
          <div className="w-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
