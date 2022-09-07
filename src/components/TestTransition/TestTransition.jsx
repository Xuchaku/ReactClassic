import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";
function TestTransition() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <CSSTransition in={inProp} timeout={2000} classNames="my-node">
        <div>{"I'll receive my-node-* classes"}</div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(!inProp)}>
        Click to Enter
      </button>
    </div>
  );
}
export default TestTransition;
