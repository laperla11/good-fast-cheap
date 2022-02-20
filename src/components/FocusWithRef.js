import React, { useRef } from "react";
import UncontrolledInput from "./UncontrolledInput";

const FocusWithRef = () => {
  const myRef = useRef(null);
  const item = { id: 1, label: "first" };

  const handleSubmit = (e) => {
    // you don't need to listen keypress event for "enter", when user click on enter, handleSubmit is automatically triggereds
    e.preventDefault();
    console.log("ref---", myRef?.current?.value);
  };

  // we are monitoring child input's value from parent in an uncontrolled fashion

  return (
    <form>
      {/* you can pass the ref as a normal prop by using like myRef, so you don't
      have to use "forwardRef" in child but if you use ref as props name so you
      should use forwardRef in child */}
      <UncontrolledInput ref={myRef} key={item.id} item={item} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default FocusWithRef;
