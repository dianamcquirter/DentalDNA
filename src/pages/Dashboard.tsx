import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  LinearProgress,
} from '@mui/material';
import {
  CalendarToday,
  EmojiEvents,
  CheckCircle,
  Warning,
  Info,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Mock data - replace with real data from API
const mockData = {
  nextAppointment: {
    date: '2025-04-15',
    time: '10:00 AM',
    dentist: 'Dr. Drill Nye the Cavity Guy',
    type: 'Regular Check-up',
  },
  hygieneScore: 85,
  recentActivity: [
    {
      type: 'appointment',
      date: '2024-03-01',
      description: 'Regular check-up completed',
      icon: <CheckCircle color="success" />,
    },
    {
      type: 'hygiene',
      date: '2024-02-28',
      description: 'Daily brushing streak: 7 days',
      icon: <EmojiEvents color="primary" />,
    },
    {
      type: 'reminder',
      date: '2024-02-25',
      description: 'Flossing reminder',
      icon: <Info color="info" />,
    },
  ],
  upcomingTasks: [
    'Schedule next cleaning appointment',
    'Complete daily brushing routine',
    'Update medical history',
    'Review dental insurance coverage',
  ],
};

function Dashboard() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Welcome Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h4" gutterBottom>
              Welcome back, Diana!
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Here's your dental health overview
            </Typography>
          </Paper>
        </Grid>

        {/* Next Appointment Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Next Appointment
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CalendarToday color="primary" sx={{ mr: 1 }} />
                <Typography variant="h5">
                  {mockData.nextAppointment.date}
                </Typography>
              </Box>
              <Typography variant="body1" gutterBottom>
                {mockData.nextAppointment.time}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {mockData.nextAppointment.dentist}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {mockData.nextAppointment.type}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/schedule')}
                sx={{
                  color: '#ffffff',
                  fontWeight: 600,
                  borderRadius: '28px',
                  px: 3,
                  py: 1.5,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'primary.light',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(230, 213, 184, 0.4)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Hygiene Score Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Hygiene Score
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmojiEvents color="primary" sx={{ mr: 1 }} />
                <Typography variant="h5">
                  {mockData.hygieneScore}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={mockData.hygieneScore}
                sx={{ height: 10, borderRadius: 5 }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Keep up the good work! Your oral health is in great shape.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Actions Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <List>
                {mockData.upcomingTasks.map((task, index) => (
                  <ListItem key={index} button>
                    <ListItemIcon>
                      <CheckCircle color="action" />
                    </ListItemIcon>
                    <ListItemText primary={task} />
                  </ListItem>
                ))}
              </List>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  color: '#ffffff',
                  fontWeight: 600,
                  borderRadius: '28px',
                  px: 3,
                  py: 1.5,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'primary.light',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(230, 213, 184, 0.4)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                View All Tasks
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activity
              </Typography>
              <List>
                {mockData.recentActivity.map((activity, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>{activity.icon}</ListItemIcon>
                    <ListItemText
                      primary={activity.description}
                      secondary={activity.date}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Health Alerts */}
        <Grid item xs={12}>
          <Card sx={{ bgcolor: 'warning.light' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Warning color="warning" sx={{ mr: 1 }} />
                <Typography variant="h6" color="warning.dark">
                  Health Alert
                </Typography>
              </Box>
              <Typography variant="body1">
                Your last cleaning was more than 6 months ago. Schedule a check-up to maintain optimal oral health.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/schedule')}
                sx={{
                  color: '#ffffff',
                  fontWeight: 600,
                  borderRadius: '28px',
                  px: 3,
                  py: 1.5,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'primary.light',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(230, 213, 184, 0.4)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                Schedule Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard; 