import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpellCheck } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "reactstrap";

import SpellTest from "./components/spelltest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <Col>
            <FontAwesomeIcon icon={faSpellCheck} /> Spell
          </Col>
        </Row>
      </header>

      <SpellTest />
    </div>
  );
}

export default App;
