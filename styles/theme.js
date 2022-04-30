import { blueGrey } from '@mui/material/colors';

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
        primary:blueGrey
    },
    shape: {
        borderRadius: 28
    },
    components: components,
}

