import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image'
import Link from 'next/Link';

export default function Nav() {
  return (
    <div>
      <Box>
        <AppBar position="static" color="transparent">
            <Toolbar>
              <Link href="/"> 
                <a>
                  <Image src="/logo.png"  width="50"  height="20"/>
                </a>
              </Link>
             

            {/* fills the mid part (puts buttons on each side) */}
                <Typography sx={{ flexGrow: 1 }} />
                  <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="flex-start">
                    
                      <Button variant="outlined">
                        <Link href="/">
                          Home
                        </Link>
                      </Button>

                      <Button variant="outlined">
                        <Link href="/saved">
                          Saved Articles
                        </Link>
                      </Button>
                      </Grid>
            </Toolbar>
        </AppBar>
        </Box>
    </div>
  )
}
