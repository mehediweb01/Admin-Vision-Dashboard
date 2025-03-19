import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="min-h-screen flex bg-gradient-to-r from-blue-300/75 to-slate-800">
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/sign-in" element={<SignIn />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
