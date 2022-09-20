import { ThemeModel } from "../../hooks/theme";
import { commonTheme } from "./common";

export const grayTheme : ThemeModel = {
    ...commonTheme,
    
    id: "gray",
    primary: "#111827", //900
    secondary: "#6b7280", //500
    third: "#374151", //700

}