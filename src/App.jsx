import React from "react";
import { store } from "./Redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import User from "./Pages/LoginAndRegis/User.jsx";
import Main from "./Pages/CareerResourcesPage/MainPage/Main.jsx";
const App = () => {
  return (
      <div>

    <Provider store={store}>
      <div>

         <Router>
          <Routes>

            <Route path="/" element={<HomePage/>}></Route>
              <Route path="/userL-R" element={<User/>}></Route>
              <Route path='/carrer_resources' element={<Main/>}></Route>
          </Routes>
         </Router>
      </div>
    </Provider>
      </div>
  );
};

export default App;
