
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * A page component for the 404 - Page Not Found error page.
 * @returns {JSX.Element} The NotFoundPage component for the 404 error page.
 */

const NotFoundPage = () => {
  return (
    <Container maxWidth='sm' sx={{ py: 5 }}>
      <Grid container spacing={2} direction='column' alignItems='center' justifyContent='center'>
        <Grid item xs={12}>
          <Typography variant='h3' component='h1' gutterBottom>
            404 - Page Not Found
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1'>The page you are looking for doesn&apos;t exist.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Box mt={2}>
            <Link to='/'>
              <Button variant='contained' color='primary' sx={{ textTransform: 'none' }}>
                Go Back to Products
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFoundPage;
