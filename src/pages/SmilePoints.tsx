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
  Chip,
} from '@mui/material';
import {
  Star,
  EmojiEvents,
  LocalOffer,
  Redeem,
  CheckCircle,
  TrendingUp,
} from '@mui/icons-material';

const mockData = {
  totalPoints: 2500,
  level: 'Gold',
  nextLevel: {
    name: 'Platinum',
    pointsNeeded: 500,
  },
  recentActivity: [
    { action: 'Daily Brushing', points: 50, date: '2024-03-31' },
    { action: 'Dental Visit', points: 200, date: '2024-03-30' },
    { action: 'Weekly Streak', points: 100, date: '2024-03-29' },
  ],
  rewards: [
    {
      title: 'Free Dental Cleaning',
      points: 1000,
      description: 'Redeem for a professional dental cleaning session',
    },
    {
      title: 'Electric Toothbrush',
      points: 2000,
      description: 'Premium electric toothbrush with smart features',
    },
    {
      title: 'Whitening Treatment',
      points: 3000,
      description: 'Professional teeth whitening treatment',
    },
  ],
};

function SmilePoints() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Points Overview */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Your Smile Points
            </Typography>
            <Typography variant="h2" color="primary" gutterBottom>
              {mockData.totalPoints}
            </Typography>
            <Chip
              icon={<Star />}
              label={`${mockData.level} Level`}
              color="primary"
              sx={{ mb: 2 }}
            />
            <Typography variant="body2" color="text.secondary">
              {mockData.nextLevel.pointsNeeded} points until {mockData.nextLevel.name} Level
            </Typography>
          </Paper>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <List>
              {mockData.recentActivity.map((activity, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary={activity.action}
                    secondary={`Earned ${activity.points} points on ${activity.date}`}
                  />
                  <Chip
                    icon={<Star />}
                    label={`+${activity.points}`}
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Available Rewards */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Available Rewards
          </Typography>
          <Grid container spacing={3}>
            {mockData.rewards.map((reward, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <EmojiEvents color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">{reward.title}</Typography>
                    </Box>
                    <Typography color="text.secondary" gutterBottom>
                      {reward.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                      <Chip
                        icon={<LocalOffer />}
                        label={`${reward.points} points`}
                        color="primary"
                        sx={{ mr: 1 }}
                      />
                      <Button
                        variant="contained"
                        startIcon={<Redeem />}
                        disabled={mockData.totalPoints < reward.points}
                      >
                        Redeem
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Progress Tips */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              How to Earn More Points
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <TrendingUp color="primary" sx={{ mr: 1 }} />
                  <Typography>Complete Daily Habits</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Earn 50 points for each daily dental care routine completed
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CheckCircle color="primary" sx={{ mr: 1 }} />
                  <Typography>Maintain Streaks</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Get bonus points for maintaining weekly and monthly streaks
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Star color="primary" sx={{ mr: 1 }} />
                  <Typography>Visit Your Dentist</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Earn 200 points for each dental check-up or cleaning
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SmilePoints; 