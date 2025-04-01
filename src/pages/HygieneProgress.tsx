import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
} from '@mui/material';
import {
  CheckCircle,
  Brush,
  WaterDrop,
  Timer,
  TrendingUp,
} from '@mui/icons-material';

const mockData = {
  overallScore: 85,
  dailyHabits: [
    { name: 'Brushing', completed: true, time: 'Morning' },
    { name: 'Flossing', completed: true, time: 'Morning' },
    { name: 'Mouthwash', completed: false, time: 'Evening' },
    { name: 'Brushing', completed: false, time: 'Evening' },
  ],
  weeklyProgress: {
    brushing: 90,
    flossing: 75,
    mouthwash: 60,
  },
  tips: [
    'Remember to brush for at least 2 minutes',
    'Use fluoride toothpaste',
    'Replace your toothbrush every 3-4 months',
    'Visit your dentist regularly',
  ],
};

function HygieneProgress() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Overall Score */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Overall Hygiene Score
            </Typography>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={mockData.overallScore}
                size={120}
                thickness={4}
                color="primary"
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h4" color="primary">
                  {mockData.overallScore}%
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Daily Habits */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Today's Habits
            </Typography>
            <List>
              {mockData.dailyHabits.map((habit, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    {habit.completed ? (
                      <CheckCircle color="success" />
                    ) : (
                      <Timer color="action" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={`${habit.name} - ${habit.time}`}
                    secondary={habit.completed ? 'Completed' : 'Pending'}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Weekly Progress */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Weekly Progress
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Brushing</Typography>
                <LinearProgress
                  variant="determinate"
                  value={mockData.weeklyProgress.brushing}
                  sx={{ height: 10, borderRadius: 5 }}
                />
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {mockData.weeklyProgress.brushing}% consistency
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Flossing</Typography>
                <LinearProgress
                  variant="determinate"
                  value={mockData.weeklyProgress.flossing}
                  sx={{ height: 10, borderRadius: 5 }}
                />
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {mockData.weeklyProgress.flossing}% consistency
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Mouthwash</Typography>
                <LinearProgress
                  variant="determinate"
                  value={mockData.weeklyProgress.mouthwash}
                  sx={{ height: 10, borderRadius: 5 }}
                />
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {mockData.weeklyProgress.mouthwash}% consistency
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Tips */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Dental Care Tips
            </Typography>
            <List>
              {mockData.tips.map((tip, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <TrendingUp color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={tip} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HygieneProgress; 