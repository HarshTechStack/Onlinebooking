import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  maxWidth: 400,
  margin: 'auto',
  marginTop: theme.spacing(8),
  boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
}));

const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Logging in with email: ${email}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <PaperStyled>
        <Heading variant="h4">Login</Heading>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextFieldStyled
                fullWidth
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldStyled
                fullWidth
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <ButtonStyled
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </ButtonStyled>
            </Grid>
          </Grid>
        </Box>
      </PaperStyled>
    </Container>
  );
};

export default Login;
