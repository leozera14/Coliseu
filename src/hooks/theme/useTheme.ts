import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

export function useThemeHook() {
  return useContext(ThemeContext);
}
