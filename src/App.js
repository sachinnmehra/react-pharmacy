import "./App.css";
import LoginPage from "./components/login/login";
import Header from "./components/header/header";
import { Route } from "react-router";
import Medicine from "./components/medicine/medicine";
function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/medicine" component={Medicine} />
      <Route exact path="/" component={LoginPage} />
    </div>
  );
}

export default App;
