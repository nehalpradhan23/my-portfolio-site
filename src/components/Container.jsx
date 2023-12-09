import React from "react";

function Container({ children }) {
  return (
    <div className="w-[70%] h-fit mx-auto">
      {children}
    </div>
  );
}

export default Container;
