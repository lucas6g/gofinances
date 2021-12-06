import  "styled-components";
import theme from "./theme";
//typando o thema e sobrescrevendo o do styled components 

declare module 'styled-components' {
    type ThemeType  = typeof theme

    export interface DefaultTheme extends ThemeType {}
}