import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  LocalHospital,
  Warning,
  CheckCircle,
  Info,
  Help,
} from '@mui/icons-material';

// Mock data - replace with real data from API
const mockSymptoms = [
  { id: 1, name: 'Tooth Pain', category: 'Pain' },
  { id: 2, name: 'Gum Bleeding', category: 'Gums' },
  { id: 3, name: 'Sensitivity', category: 'Sensitivity' },
  { id: 4, name: 'Bad Breath', category: 'General' },
  { id: 5, name: 'Swollen Gums', category: 'Gums' },
  { id: 6, name: 'Jaw Pain', category: 'Pain' },
  { id: 7, name: 'Tooth Discoloration', category: 'Appearance' },
  { id: 8, name: 'Loose Teeth', category: 'Gums' },
];

const mockAnalysis = {
  possibleConditions: [
    {
      name: 'Gingivitis',
      description: 'Early stage of gum disease',
      severity: 'Mild',
      icon: <Warning color="warning" />,
    },
    {
      name: 'Tooth Decay',
      description: 'Cavity formation',
      severity: 'Moderate',
      icon: <LocalHospital color="error" />,
    },
  ],
  recommendations: [
    'Schedule a dental check-up within the next week',
    'Practice good oral hygiene: brush twice daily and floss',
    'Avoid sugary foods and drinks',
    'Use a fluoride toothpaste',
  ],
  urgency: 'Moderate',
  disclaimer: 'This is an AI-powered analysis and should not replace professional dental advice. Please consult a dentist for proper diagnosis and treatment.',
};

function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([]);
  const [description, setDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const handleSymptomToggle = (symptomId: number) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomId)
        ? prev.filter((id) => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const handleCloseResults = () => {
    setShowResults(false);
    setSelectedSymptoms([]);
    setDescription('');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          AI Symptom Checker
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Get instant insights about your dental symptoms
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Select Your Symptoms
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {mockSymptoms.map((symptom) => (
              <Grid item key={symptom.id}>
                <Chip
                  label={symptom.name}
                  onClick={() => handleSymptomToggle(symptom.id)}
                  color={selectedSymptoms.includes(symptom.id) ? 'primary' : 'default'}
                  variant={selectedSymptoms.includes(symptom.id) ? 'filled' : 'outlined'}
                />
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6" gutterBottom>
            Additional Details
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Describe your symptoms in more detail..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: 4 }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleAnalyze}
              disabled={selectedSymptoms.length === 0 || isAnalyzing}
              startIcon={isAnalyzing ? <CircularProgress size={20} /> : <LocalHospital />}
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyze Symptoms'}
            </Button>
          </Box>
        </Box>
      </Paper>

      <Dialog
        open={showResults}
        onClose={handleCloseResults}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocalHospital color="primary" sx={{ mr: 1 }} />
            Analysis Results
          </Box>
        </DialogTitle>
        <DialogContent>
          <Alert severity={mockAnalysis.urgency === 'High' ? 'error' : 'warning'} sx={{ mb: 3 }}>
            Urgency Level: {mockAnalysis.urgency}
          </Alert>

          <Typography variant="h6" gutterBottom>
            Possible Conditions
          </Typography>
          <List>
            {mockAnalysis.possibleConditions.map((condition, index) => (
              <ListItem key={index}>
                <ListItemIcon>{condition.icon}</ListItemIcon>
                <ListItemText
                  primary={condition.name}
                  secondary={`${condition.description} (Severity: ${condition.severity})`}
                />
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Recommendations
          </Typography>
          <List>
            {mockAnalysis.recommendations.map((rec, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                <ListItemText primary={rec} />
              </ListItem>
            ))}
          </List>

          <Alert severity="info" sx={{ mt: 3 }}>
            {mockAnalysis.disclaimer}
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseResults}>Close</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleCloseResults();
              // Navigate to schedule visit
            }}
          >
            Schedule Visit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={showDisclaimer} onClose={() => setShowDisclaimer(false)}>
        <DialogTitle>Important Disclaimer</DialogTitle>
        <DialogContent>
          <Typography>
            The AI Symptom Checker is designed to provide general information and suggestions only.
            It is not a substitute for professional dental advice, diagnosis, or treatment.
            Always seek the advice of your dentist or other qualified healthcare provider with any
            questions you may have regarding a dental condition.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDisclaimer(false)}>I Understand</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default SymptomChecker; 