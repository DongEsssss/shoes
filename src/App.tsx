import { Route, Routes } from "react-router-dom";
import MainLayout from "./component/mainLayout";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
