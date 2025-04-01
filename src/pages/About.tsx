import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  LocalHospital,
  Security,
  Speed,
  Group,
  EmojiEvents,
  Support,
  Science,
  Verified,
} from '@mui/icons-material';

const features = [
  {
    title: 'AI-Powered Insights',
    description: 'Advanced artificial intelligence algorithms analyze your dental health data to provide personalized recommendations and early warning signs.',
    icon: <Science />,
  },
  {
    title: 'Secure & Private',
    description: 'Your dental health data is encrypted and protected with industry-leading security measures. We prioritize your privacy.',
    icon: <Security />,
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Track your dental health progress in real-time with our comprehensive monitoring system.',
    icon: <Speed />,
  },
  {
    title: 'Expert Network',
    description: 'Connect with a network of qualified dental professionals who can provide personalized care.',
    icon: <Group />,
  },
];

const stats = [
  { label: 'Active Users', value: '50,000+' },
  { label: 'Partner Dentists', value: '1,000+' },
  { label: 'AI Accuracy Rate', value: '95%' },
  { label: 'Customer Satisfaction', value: '98%' },
];

function About() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom>
                Transforming Dental Care
              </Typography>
              <Typography variant="h5" sx={{ mb: 4 }}>
                DentalDNA is revolutionizing dental health management through cutting-edge technology and personalized care.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mr: 2 }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
              >
                Learn More
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/hero-image.jpg"
                alt="Dental Care"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ maxWidth: 800, mx: 'auto' }}>
            At DentalDNA, we're committed to making dental health care more accessible, personalized, and preventive.
            Our platform combines artificial intelligence with expert dental care to help you maintain optimal oral health
            and catch potential issues before they become serious problems.
          </Typography>
        </Paper>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Why Choose DentalDNA?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'primary.main', mr: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6">{feature.title}</Typography>
                  </Box>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 6, mb: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box textAlign="center">
                  <Typography variant="h3" color="primary" gutterBottom>
                    {stat.value}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Our Team
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Box
                    component="img"
                    src="/team1.jpg"
                    alt="Team Member"
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      mx: 'auto',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6">Dr. Emily Chen</Typography>
                  <Typography color="text.secondary">CEO & Founder</Typography>
                </Box>
                <Typography>
                  Board-certified dentist with 15+ years of experience in dental technology innovation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Box
                    component="img"
                    src="/team2.jpg"
                    alt="Team Member"
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      mx: 'auto',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6">Dr. James Wilson</Typography>
                  <Typography color="text.secondary">Chief Medical Officer</Typography>
                </Box>
                <Typography>
                  Leading expert in AI applications in healthcare with a focus on preventive medicine.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Box
                    component="img"
                    src="/team3.jpg"
                    alt="Team Member"
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      mx: 'auto',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6">Sarah Martinez</Typography>
                  <Typography color="text.secondary">Head of Technology</Typography>
                </Box>
                <Typography>
                  Tech innovator with expertise in machine learning and healthcare software development.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom align="center">
            Ready to Transform Your Dental Health?
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4 }}>
            Join thousands of satisfied users who are taking control of their dental health with DentalDNA.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
            >
              Contact Sales
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default About; 