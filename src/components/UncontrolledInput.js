import React, { Fragment } from "react";

const UncontrolledInput = React.forwardRef((props, ref) => {
  React.useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <Fragment key={props.item.id}>
      <label>{props.item.label}</label>
      <input type="text" ref={ref} />
    </Fragment>
  );
});

export default UncontrolledInput;
