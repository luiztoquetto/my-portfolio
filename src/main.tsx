import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from "./styles/global.styles";
import { AppRouting } from "./routing/app.routing";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <GlobalStyles/>
      <AppRouting/>
  </React.StrictMode>
)
