import Register from "./pages/Register/Register";
import Main from "./pages/Main/Main";
import Card from "./pages/Card/Card";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Register />} />
      <Route
        path={"/main"}
        element={
          <ProtectedRoute redirect="/">
            <Main />
          </ProtectedRoute>
        }
      />
      <Route
        path={"/card/:id"}
        element={
          <ProtectedRoute redirect="/">
            <Card />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
