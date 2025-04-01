import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ScheduleVisit from './pages/ScheduleVisit';
import Records from './pages/Records';
import Profile from './pages/Profile';
import SymptomChecker from './pages/SymptomChecker';
import FindDentist from './pages/FindDentist';
import About from './pages/About';
import Contact from './pages/Contact';
import HygieneProgress from './pages/HygieneProgress';
import AskAQuestion from './pages/AskAQuestion';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E6D5B8', // Metallic gold from the image
      light: '#F4E6D1',
      dark: '#C4B095',
      contrastText: '#1A1F2E',
    },
    secondary: {
      main: '#1A1F2E', // Deep navy blue from the image
      light: '#252B3D',
      dark: '#12161F',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#1A1F2E', // Deep navy blue background
      paper: '#252B3D', // Slightly lighter navy for cards
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E6D5B8', // Using gold for secondary text
    },
    divider: 'rgba(230, 213, 184, 0.12)', // Gold-tinted dividers
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 300,
      letterSpacing: '0.05em',
      color: '#FFFFFF',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 300,
      letterSpacing: '0.05em',
      color: '#E6D5B8',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 300,
      letterSpacing: '0.05em',
    },
    h4: {
      color: '#E6D5B8',
      fontWeight: 300,
      letterSpacing: '0.05em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 400,
      letterSpacing: '0.05em',
    },
    subtitle1: {
      color: '#E6D5B8',
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'none',
          padding: '12px 32px',
          fontSize: '1rem',
          fontWeight: 400,
          letterSpacing: '0.05em',
          border: '1px solid #E6D5B8',
          background: 'linear-gradient(180deg, #252B3D 0%, #1A1F2E 100%)',
          '&:hover': {
            boxShadow: '0 0 20px rgba(230, 213, 184, 0.2)',
            background: 'linear-gradient(180deg, #2A3145 0%, #1E2334 100%)',
          },
        },
        contained: {
          backgroundColor: '#E6D5B8',
          color: '#1A1F2E',
          '&:hover': {
            backgroundColor: '#F4E6D1',
          },
        },
        outlined: {
          borderColor: '#E6D5B8',
          color: '#E6D5B8',
          '&:hover': {
            borderColor: '#F4E6D1',
            color: '#F4E6D1',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#252B3D',
          border: '1px solid rgba(230, 213, 184, 0.12)',
          borderRadius: 24,
          '&:hover': {
            boxShadow: '0 0 20px rgba(230, 213, 184, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#252B3D',
          borderRadius: 24,
          border: '1px solid rgba(230, 213, 184, 0.12)',
          background: 'linear-gradient(180deg, #252B3D 0%, #1A1F2E 100%)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1F2E',
          backgroundImage: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(230, 213, 184, 0.23)',
              borderRadius: 8,
            },
            '&:hover fieldset': {
              borderColor: 'rgba(230, 213, 184, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#E6D5B8',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#E6D5B8',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(230, 213, 184, 0.08)',
          borderRadius: 50,
          border: '1px solid rgba(230, 213, 184, 0.12)',
          '&:hover': {
            backgroundColor: 'rgba(230, 213, 184, 0.12)',
          },
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1F2E',
          borderTop: '1px solid rgba(230, 213, 184, 0.12)',
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: '#E6D5B8',
          '&.Mui-selected': {
            color: '#F4E6D1',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navigation />
          <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/schedule" element={<ScheduleVisit />} />
              <Route path="/records" element={<Records />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/symptom-checker" element={<SymptomChecker />} />
              <Route path="/find-dentist" element={<FindDentist />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/hygiene-progress" element={<HygieneProgress />} />
              <Route path="/ask-question" element={<AskAQuestion />} />
            </Routes>
          </Container>
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App; 