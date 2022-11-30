import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import { path } from "././compoents/Ultils/constant";

import LayoutStore from "./compoents/Layout/LayoutStore";
import LayOutContent from "./compoents/Layout/LayOutContent";
import { LoginForm } from "./compoents/public";
import SearchMovies from "./compoents/SearchProduct/SearchProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={path.HOME} element={<LayoutStore></LayoutStore>}>
          <Route path={path.LOGIN} element={<LoginForm></LoginForm>}></Route>
          <Route
            path={path.CONTENT}
            element={<LayOutContent></LayOutContent>}
          ></Route>
          <Route
            path={path.SEARCH}
            element={<SearchMovies></SearchMovies>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
