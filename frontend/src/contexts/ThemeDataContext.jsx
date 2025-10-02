import { createContext, useContext, useState } from "react";
import { profileCardData } from '../data/themeData.js';

const ThemeDataContext = createContext();

export default function ThemeDataProvider({ children }) {
    const [theme, setTheme] = useState('retro');
    const selectedThemeData = profileCardData[theme];
    const values = {
        selectedThemeData,
        theme,
        setTheme,
    };

    return(
        <ThemeDataContext.Provider value={values}>
            { children }
        </ThemeDataContext.Provider>
    );
}

export const useThemeData = () => useContext(ThemeDataContext); 