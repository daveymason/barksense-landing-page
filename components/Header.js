import { Typography, Button, Grid, Paper } from '@mui/material';


export default function Header({ title }) {
  return (
    <Grid
    container
    alignItems="end"
    justifyContent="start" 
    sx={{
      height: '100vh',
      backgroundImage: 'url(/barkSenseBg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <Grid item xs={12} sm={6} md={4} sx={{ padding: 2 }}>
    <Paper elevation={3} sx={{
      padding: 4,
      borderRadius: 4,
      margin: 4,
      maxWidth: 600,
      backdropFilter: 'blur(10px)', 
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      border: '1px solid rgba(255, 255, 255, 0.2)', 
    }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to BarkSense!
        </Typography>
        <Typography paragraph>
          Canine insights at your fingertips.
        </Typography>
        <a href="https://github.gatech.edu/gmouton6/BarkSense7470/archive/refs/heads/main.zip" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Download App
          </Button>
        </a>

        <Button variant="text" color="primary">
          Learn More
        </Button>
      </Paper>
    </Grid>
  </Grid>
  )
}
