import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image'
import Link from 'next/Link';
import {useRouter} from 'next/router';

export default function Nav() {

  const router = useRouter()

  return (
    <AppBar position="static" color="transparent">
        <Toolbar>
            <Link href="/"> 
              <a>
                <Image src="/logo.png"  width="55" height="55"/>
              </a>
            </Link>
            
            <Typography sx={{ flexGrow: 1, margin:"auto" }}>the daily kernel</Typography>

            <Grid
            container
            display="flex"
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start">


              {router.route == "/saved"
              ?
              <Button variant="outlined">
                <Link href="/">
                  Home
                </Link>
              </Button>
              :
              <Button variant="outlined">
                <Link href="/saved">
                  Saved Articles
                </Link>
              </Button>
              }

            </Grid>

        </Toolbar>
    </AppBar>
  )
}
