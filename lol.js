import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import SignIn from "./pages/signIn/SignIn";
import SelfProfile from "./pages/selfprofile/SelfProfile";
import Body from "./components/body/Body";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />}></Route>

          <Route
            path="/feeds"
            element={
              <>
                <NavBar />
                <Body />
              </>
            }
          ></Route>

          <Route
            path="/self-profile"
            element={
              <>
                <NavBar />
                <SelfProfile />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
