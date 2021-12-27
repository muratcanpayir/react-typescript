import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Box() {
  const theme = useContext(ThemeContext);
  return (
    <>
    <div
      style={{ backgroundColor: theme.secondary.main, color: theme.primary.text }}
    >
      Theme Context
    </div>
    </>
  );
}

export default Box;
