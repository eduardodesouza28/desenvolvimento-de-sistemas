// import react from "react";

function Button(children, id, onclick) {
  const text = children.text;
  return (
    <div>
      <button className="button-card" id={id} onClick={onclick}>{text}</button>
    </div>
  );
}

export default Button;