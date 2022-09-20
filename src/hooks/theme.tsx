import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { DefaultTheme } from "styled-components";
import { blueTheme } from "../styles/themes/blue";
import { grayTheme } from "../styles/themes/gray";
import { pinkTheme } from "../styles/themes/pink";
import { redTheme } from "../styles/themes/red";
import { purpleTheme } from "../styles/themes/purple";
import { cyanTheme } from "../styles/themes/cyan";
import { yellowTheme } from "../styles/themes/yellow";
import { orangeTheme } from "../styles/themes/orange";
import { greenTheme } from "../styles/themes/green";

export type availableThemes = "gray" | "red" | "pink" | "blue" | "cyan" | "green" | "orange" | "purple" | "yellow"

export interface ThemeModel extends DefaultTheme, CommonThemeModel {
    id: string;
    primary: string;
    secondary: string;
    third: string;

    iconColor?: string;

}

export interface CommonThemeModel {
    background: string;
    headerText: string;
    text: string;
    title: string;
    shadow: string;
}

interface ThemeContextData {
    theme: ThemeModel;
    toggleTheme: (name : availableThemes) => void
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData) 

const ThemeProvider : React.FC = ({ children } : any ) => {

    const [theme, setTheme] = useState<ThemeModel>(grayTheme)

    useEffect(() => {
        const localStorageTheme = localStorage.getItem("theme") as availableThemes
        toggleTheme(localStorageTheme ?? "gray")
    },[])

    const toggleTheme = ( name : availableThemes ) => {

        switch (name) {
            case "blue":
                setTheme(blueTheme)
                localStorage.setItem("theme", "blue")
                break;
            
            case "cyan":
                setTheme(cyanTheme)
                localStorage.setItem("theme", "cyan")
                break;
                
            case "green":
                setTheme(greenTheme)
                localStorage.setItem("theme", "green")
                break;

            case "orange":
                setTheme(orangeTheme)
                localStorage.setItem("theme", "orange")
                break;
                
            case "pink":
                setTheme(pinkTheme)
                localStorage.setItem("theme", "pink")
                break;
                
            case "purple":
                setTheme(purpleTheme)
                localStorage.setItem("theme", "purple")
                break;

            case "red":
                setTheme(redTheme)
                localStorage.setItem("theme", "red")
                break;

            case "yellow":
                setTheme(yellowTheme)
                localStorage.setItem("theme", "yellow")
                break; 

            case "gray":
                setTheme(grayTheme)
                localStorage.setItem("theme", "gray")
                break;
                
            default:
                setTheme(grayTheme)
                break;
        }
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

} 

const useTheme = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider.")
    }

    return context
}

export { ThemeProvider, useTheme }