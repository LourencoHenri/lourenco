import { ThemeModel } from "../../hooks/theme";
import { commonTheme } from "./common";

export const cyanTheme : ThemeModel = {
    ...commonTheme,

    id: "cyan",
    primary: "#086F83", //900
    secondary: "#00A3C4", //500
    third: "#0987A0", //700

}