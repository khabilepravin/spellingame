import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpellCheck } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "reactstrap";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";

import SpellTest from "./components/spelltest";
import Result from "./components/result";

function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <header className="App-header">
          <Row>
            <Col>
              <FontAwesomeIcon icon={faSpellCheck} /> <Link to="/">Spell</Link>
            </Col>
          </Row>
        </header>
        <Switch>
          <Route path="/" exact component={SpellTest} />
          <Route path="/result" component={Result} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
