import { ThemeModel } from "../../hooks/theme";
import { commonTheme } from "./common";

export const orangeTheme : ThemeModel = {
    ...commonTheme,
    
    id: "orange",
    primary: "#9C4221", //900
    secondary: "#DD6B20", //500
    third: "#C05621", //700

}