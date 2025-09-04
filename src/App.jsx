import React from "react";
import { store } from "./Redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import User from "./Pages/LoginAndRegis/User.jsx";
const App = () => {
  return (
    <Provider store={store}>
      <div>
         <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
              <Route path="/userL-R" element={<User/>}></Route>
          </Routes>
         </Router>
      </div>
    </Provider>
  );
};

export default App;
