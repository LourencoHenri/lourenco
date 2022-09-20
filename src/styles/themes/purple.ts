import { ThemeModel } from "../../hooks/theme";
import { commonTheme } from "./common";

export const purpleTheme : ThemeModel = {
    ...commonTheme,
    
    id: "purple",
    primary: "#553C9A", //900
    secondary: "#805AD5", //500
    third: "#6B46C1", //700

}