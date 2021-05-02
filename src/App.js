import "./App.css";
import LoginPage from "./components/login/login";
import Header from "./components/header/header";
import { Route } from "react-router";
import Medicine from "./components/medicine/medicine";
import OrderPage from "./components/Orders/Orders";
import UserPage from "./components/Users/User";
import Admin from "./components/admin/admin";
import Sales from "./components/Sale/Sales";
function App() {
  return (
    <div className="App">
      <Route exact path="/medicine" component={Medicine} />
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/order" component={OrderPage} />
      <Route exact path="/user" component={UserPage} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/sales" component={Sales} />
    </div>
  );
}

export default App;
