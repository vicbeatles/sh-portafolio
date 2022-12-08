import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Start from "./pages/Start"

function App() {
  return (
    <Router>
            <Routes>
                <Route>
                    <Route path="/inicio" element={<Start />} />
                </Route>
                <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
        </Router>
  );
}

export default App;
