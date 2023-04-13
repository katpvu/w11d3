import logo from './_assets/logo.png';
import Navigation from './components/Navigation/Navigation.jsx';
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <h1>Hello from App</h1>
      <img src={logo} alt="logo" />
      <Navigation />
      <Switch>
        <Route path="/sampleSurvey">
          <SampleSurvey />
        </Route>
        <Route path="/sensoryPreferences">
          <SensoryPreferences />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </>
  );
}

export default App;
