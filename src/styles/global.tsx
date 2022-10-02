import { ReactElement } from "react"
import { css, Global } from "@emotion/react"

export function GlobalStyles(): ReactElement {
    return <Global styles={css`
        * {
            margin: 0;
            padding: 0;
            outline: 0;
            
            box-sizing: border-box;
            
            scroll-behavior: smooth;
            
            font-weight: 400;
            font-family: 'Montserrat', sans-serif;
        }
    `} />
}
