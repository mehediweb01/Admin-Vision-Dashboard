import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import PageNotFound from "./PageNotFound";
import Billing from "./pages/Billing";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="min-h-screen flex bg-gradient-to-r from-blue-500/75 to-slate-800">
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
