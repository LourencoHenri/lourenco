import { ThemeModel } from "../../hooks/theme";
import { commonTheme } from "./common";

export const greenTheme : ThemeModel = {
    ...commonTheme,
    
    id: "green",
    primary: "#276749", //900
    secondary: "#38A169", //500
    third: "#2F855A", //700

}