import { Routes, Route } from "react-router-dom";
import { Header, Main, Login, Register, Footer } from "./components";
import "./App.css";
import LoggingProvider from "./store/LoggingContext";

function App() {
  return (
    <div className="App">
      <LoggingProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </LoggingProvider>
    </div>
  );
}

export default App;
