import { createContext,useContext} from 'react';

interface ThemeContextStructure {
    themeMode:string;
    setDarkMode():void;
    setLightMode():void;
}

export const ThemeContext = createContext<ThemeContextStructure>({
    themeMode:"light",
    setDarkMode() {
        
    },
    setLightMode() {
        
    },
})

export const  ThemeContextProvider = ThemeContext.Provider;

export default function useTheme():ThemeContextStructure {
    return useContext(ThemeContext)
}