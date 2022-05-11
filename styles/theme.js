import { blueGrey, grey } from '@mui/material/colors';

const components = {
    MuiCardContent: {
        styleOverrides: {
            root: {
                "padding": 4
            }
        }
    },

}

export default {
    palette: {
        primary: blueGrey,
        secondary: {
            main: grey[500],
            dark: grey[900]
        }
    },
    shape: {
        borderRadius: 28
    },
    typography: {
        fontFamily: ["courier-prime", "monospace"]
    },
    components: components,
}

