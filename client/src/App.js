import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import WritePage from "./components/views/WritePage/WritePage";
import PostPage from './components/views/PostPage/PostPage';
import MyPage from './components/views/MyPage/MyPage';
import ListPage from './components/views/AimPage/pages/ListPage'
import BoardPage from './components/views/AimPage/pages/BoardPage'
import LoginPage from './components/views/login/login';
import SignUpPage from './components/views/SignUp/SignUp';
import Store from 'store/index'
import './App.scss';


const {persistor, store} = Store();

function App() {
  const style = {
    height: "100%",
    width: "100%"
  }
  const [init, setInit] = React.useState(false);
  const [isLoggedIn,setIsLoggedIn] = React.useState(false);
  // React.useEffect(()=>{
  //   authService.onAuthStateChanged((user) => {
  //     if(user){
  //       setIsLoggedIn(true);
  //     }else{
  //       setIsLoggedIn(false);
  //     }
  //     setInit(true);
  //   });
  // },[]);
  return (
    <Router>
      {/* {init ? <AppRouter isLoggedIn={isLoggedIn}/>:"Init"} */}
      <div style={style}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/write" component={WritePage} />
          <Route exact path="/post" component={PostPage} />
          <Route exact path="/mypage" component={MyPage} />
          <Route path="/post/:doc" component={PostPage} />
          <Route exact path="/aim" component ={BoardPage}/>
          <Route exact path="/login" component ={LoginPage}/>
          <Route path="/signUp" component={SignUpPage}/>
          <Route exact path="/board/:id" component={ListPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
