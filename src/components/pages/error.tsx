import { Container, Grid, Alert, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ErrorProps {
  error: Error;
}

/**
 * ErrorPage component displays a user-friendly error message when an error is encountered.
 * It provides a button for users to navigate back to a safe state, typically the home page or a dashboard.
 * This component is designed to be used as a fallback UI in an ErrorBoundary, receiving the caught error as a prop.
 *
 * @component
 * @param {ErrorProps} props - Component properties
 * @param {Error} props.error - The error object caught by the ErrorBoundary
 * @returns {JSX.Element} A styled error message with a navigation button
 */

const ErrorPage: React.FC<ErrorProps> = ({ error }) => {
  const navigate = useNavigate();

  const errorMessage = error.message || 'Oops! Something went wrong.';

  return (
    <Container maxWidth='sm' sx={{ mt: 5 }}>
      <Grid container justifyContent='center'>
        <Grid item xs={12}>
          <Alert severity='error' sx={{ textAlign: 'center' }}>
            <h4>Error</h4> {/* You can customize this as needed */}
            <p>{errorMessage}</p>
            <Button variant='contained' color='primary' onClick={() => navigate('/')} sx={{ mt: 2 }}>
              Go Back to Products {/* Adjust the label and path as needed */}
            </Button>
          </Alert>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ErrorPage;
