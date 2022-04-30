import { createTheme, ThemeProvider } from '@mui/material';
import CustomTheme from "../styles/theme";
import '../styles/globals.css'
import Nav from '../components/Nav';

import { AppWrapper } from '../context/AppContext';

function MyApp({ Component, pageProps }) {

  const theme = createTheme(CustomTheme)

  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
            <Nav />
            <Component {...pageProps} />
          </ThemeProvider>
    </AppWrapper>
    
  )
}

export default MyApp
