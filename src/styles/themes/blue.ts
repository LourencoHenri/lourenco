import { ThemeModel } from "../../hooks/theme";
import { commonTheme } from "./common";

export const blueTheme : ThemeModel = {
    ...commonTheme,

    id: "blue",
    primary: "#2A4365", //900
    secondary: "#3182CE", //500
    third: "#2B6CB0", //700

}