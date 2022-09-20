import { ThemeModel } from "../../hooks/theme";
import { commonTheme } from "./common";

export const redTheme : ThemeModel = {
    ...commonTheme,
    
    id: "red",
    primary: "#9B2C2C", //900
    secondary: "#E53E3E", //500
    third: "#C53030", //700

}