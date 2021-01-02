import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import PostsPage from "./pages/Posts";
import Login from "./containers/auth/Login";
import Register from "./containers/auth/Register";
import DigestsPage from "./pages/Digests";
import SurveysPage from "./pages/Surveys";
import PetitionsPage from "./pages/Petitions";
import SurveyDetail from "./containers/survey/survey-detail/SurveyDetail";
import PostDetail from "./containers/post/PostDetail";

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
              <Switch>
                  <Route exact path="/" component={PostsPage}/>
                  <Route path="/post/:id" component={PostDetail}/>
                  <Route path="/digests" component={DigestsPage}/>
                  <Route path="/petitions" component={PetitionsPage}/>
                  <Route path="/surveys" component={SurveysPage}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/survey/:id" component={SurveyDetail}/>
              </Switch>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
