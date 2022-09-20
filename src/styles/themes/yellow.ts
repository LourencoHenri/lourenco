import { ThemeModel } from "../../hooks/theme";
import { commonTheme } from "./common";

export const yellowTheme : ThemeModel = {
    ...commonTheme,
    
    id: "yellow",
    primary: "#975A16", //900
    secondary: "#D69E2E", //500
    third: "#B7791F", //700

}