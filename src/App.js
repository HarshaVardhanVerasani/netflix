import { useSelector } from "react-redux";
import "./App.css";
import WelcomePage from "./components/auth/WelcomePage";
import AppRoutes from "./components/routes/appRoutes";

function App() {
  let isUser = useSelector((store) => {
    if (store.netflix.user === null) {
      return false;
    } else if (
      Object.values(store.netflix.user).every((curr) => curr !== null)
    ) {
      return true;
    }
    return false;
  });

  return (
    <div className="App">
      {!isUser && <WelcomePage />}
      {isUser && <AppRoutes />}
    </div>
  );
}

export default App;
