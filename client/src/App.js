import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import HomePage from "./pages/Home";
import PostsPage from "./pages/Posts";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import FavoritesPage from "./pages/Favorites";
import Digest from "./components/digest/Digest";

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
              <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/posts" component={PostsPage}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/favorites" component={FavoritesPage}/>
                  <Route path="/digests" component={Digest}/>
              </Switch>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
