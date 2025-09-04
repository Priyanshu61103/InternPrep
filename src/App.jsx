import React from "react";
import { store } from "./Redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
const App = () => {
  return (
    <Provider store={store}>
      <div>
         <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
          </Routes>
         </Router>
      </div>
    </Provider>
  );
};

export default App;
