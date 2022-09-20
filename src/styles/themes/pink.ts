import { ThemeModel } from "../../hooks/theme";
import { commonTheme } from "./common";

export const pinkTheme : ThemeModel = {
    ...commonTheme,
    
    id: "pink",
    primary: "#97266D", //900
    secondary: "#D53F8C", //500
    third: "#B83280", //700

}