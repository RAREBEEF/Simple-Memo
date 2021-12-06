import React, { useEffect } from "react";

export default function useWindowHeight() {
  const [vh, setVh] = React.useState(window.innerHeight * 0.01);

  useEffect(() => {
    const resize = () => {
      setVh(window.innerHeight * 0.01);
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  return vh;
}
