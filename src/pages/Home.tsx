import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from '@mui/material';
import {
  CalendarToday,
  LocalHospital,
  Search,
  EmojiEvents,
  Folder,
} from '@mui/icons-material';

const features = [
  {
    title: 'Schedule Visit',
    description: 'Book your next dental appointment with ease',
    icon: <CalendarToday sx={{ fontSize: 40 }} />,
    path: '/schedule',
  },
  {
    title: 'Symptom Checker',
    description: 'Get AI-powered insights about your dental health',
    icon: <LocalHospital sx={{ fontSize: 40 }} />,
    path: '/symptom-checker',
  },
  {
    title: 'Find Dentist',
    description: 'Locate and connect with trusted dental professionals',
    icon: <Search sx={{ fontSize: 40 }} />,
    path: '/find-dentist',
  },
  {
    title: 'Hygiene Progress',
    description: 'Track your oral health journey and achievements',
    icon: <EmojiEvents sx={{ fontSize: 40 }} />,
    path: '/hygiene-progress',
  },
  {
    title: 'Smile Points',
    description: 'Earn rewards for maintaining good oral health',
    icon: <EmojiEvents sx={{ fontSize: 40 }} />,
    path: '/smile-points',
  },
  {
    title: 'Digital Records',
    description: 'Access all your dental records in one secure place',
    icon: <Folder sx={{ fontSize: 40 }} />,
    path: '/records',
  },
];

function Home() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a1f2e 0%, #24293e 100%)',
          color: 'primary.main',
          py: 12,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at top right, rgba(230, 213, 184, 0.1) 0%, rgba(26, 31, 46, 0) 70%)',
            pointerEvents: 'none',
          }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{ 
                  color: 'primary.main',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                Take control of your oral health with DentalDNA
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4,
                  color: 'white',
                  opacity: 0.9,
                  fontWeight: 300,
                  letterSpacing: '0.02em',
                }}
              >
                Your personal dental companion
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/dashboard')}
                  sx={{
                    mr: 2,
                    bgcolor: 'primary.main',
                    color: '#ffffff',
                    px: 4,
                    py: 1.5,
                    borderRadius: '28px',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    boxShadow: '0 4px 12px rgba(230, 213, 184, 0.3)',
                    '&:hover': {
                      bgcolor: 'primary.light',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(230, 213, 184, 0.4)',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/about')}
                  sx={{
                    color: 'primary.main',
                    borderColor: 'primary.main',
                    borderWidth: 2,
                    px: 4,
                    py: 1.5,
                    borderRadius: '28px',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    backgroundColor: 'rgba(230, 213, 184, 0.05)',
                    '&:hover': {
                      borderColor: 'primary.light',
                      borderWidth: 2,
                      bgcolor: 'rgba(230, 213, 184, 0.15)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/hero/dentaldna-hero.png"
                alt="DentalDNA Hero"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  height: 'auto',
                  display: 'block',
                  margin: 'auto',
                  filter: 'drop-shadow(0 4px 20px rgba(230, 213, 184, 0.2))',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            color: 'primary.main',
            fontWeight: 500,
            letterSpacing: '0.05em',
            mb: 3,
          }}
        >
          Everything You Need for Better Dental Health
        </Typography>
        <Typography 
          variant="h6" 
          align="center" 
          sx={{ 
            mb: 8,
            color: 'white',
            opacity: 0.9,
            fontWeight: 300,
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          Comprehensive tools and features to help you maintain optimal oral health
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease-in-out',
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'rgba(230, 213, 184, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(230, 213, 184, 0.1)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                  <Box sx={{ 
                    color: 'primary.main', 
                    mb: 3,
                    transform: 'scale(1.2)',
                  }}>
                    {feature.icon}
                  </Box>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h3"
                    sx={{ 
                      color: 'primary.main',
                      mb: 2,
                      fontWeight: 500,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'white',
                      opacity: 0.9,
                      mb: 3,
                    }}
                  >
                    {feature.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => navigate(feature.path)}
                    sx={{
                      color: 'primary.main',
                      borderColor: 'primary.main',
                      borderRadius: '20px',
                      px: 3,
                      '&:hover': {
                        borderColor: 'primary.light',
                        bgcolor: 'rgba(230, 213, 184, 0.08)',
                      },
                    }}
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #24293e 0%, #1a1f2e 100%)',
        py: 12,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at bottom left, rgba(230, 213, 184, 0.1) 0%, rgba(26, 31, 46, 0) 70%)',
          pointerEvents: 'none',
        }
      }}>
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ 
              color: 'primary.main',
              fontWeight: 500,
              letterSpacing: '0.05em',
              mb: 3,
            }}
          >
            Ready to Transform Your Dental Health?
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            sx={{ 
              mb: 6,
              color: 'white',
              opacity: 0.9,
              fontWeight: 300,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Join thousands of users who are taking control of their oral health with DentalDNA
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/dashboard')}
              sx={{
                mr: 2,
                bgcolor: 'primary.main',
                color: '#ffffff',
                px: 4,
                py: 1.5,
                borderRadius: '28px',
                fontWeight: 600,
                fontSize: '1.1rem',
                textTransform: 'none',
                boxShadow: '0 4px 12px rgba(230, 213, 184, 0.3)',
                '&:hover': {
                  bgcolor: 'primary.light',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(230, 213, 184, 0.4)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              Start Your Journey
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/about')}
              sx={{
                color: 'primary.main',
                borderColor: 'primary.main',
                borderWidth: 2,
                px: 4,
                py: 1.5,
                borderRadius: '28px',
                fontWeight: 600,
                fontSize: '1.1rem',
                textTransform: 'none',
                backgroundColor: 'rgba(230, 213, 184, 0.05)',
                '&:hover': {
                  borderColor: 'primary.light',
                  borderWidth: 2,
                  bgcolor: 'rgba(230, 213, 184, 0.15)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 