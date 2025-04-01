import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  CircularProgress,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import {
  QuestionAnswer,
  Search,
  History,
  Chat,
  LocalHospital,
  AccessTime,
} from '@mui/icons-material';

const mockQuestions = [
  {
    id: 1,
    question: 'How often should I replace my toothbrush?',
    answer: 'You should replace your toothbrush every 3-4 months, or sooner if the bristles become frayed.',
    date: '2024-03-30',
    expert: 'Dr. Smith',
  },
  {
    id: 2,
    question: 'What causes sensitive teeth?',
    answer: 'Tooth sensitivity can be caused by worn tooth enamel, exposed tooth roots, cavities, cracked teeth, or gum disease.',
    date: '2024-03-29',
    expert: 'Dr. Johnson',
  },
];

const suggestedQuestions = [
  'How often should I floss?',
  'What causes bad breath?',
  'Is teeth whitening safe?',
  'How can I prevent cavities?',
];

function AskAQuestion() {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setQuestion('');
      // Handle submission
    }, 2000);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Ask Question Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Ask a Dental Question
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              Get expert answers from our dental professionals
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Type your question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={!question || isLoading}
                startIcon={isLoading ? <CircularProgress size={20} /> : <QuestionAnswer />}
              >
                {isLoading ? 'Submitting...' : 'Submit Question'}
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Suggested Questions */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Common Questions
            </Typography>
            <List>
              {suggestedQuestions.map((q, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => setQuestion(q)}
                >
                  <ListItemIcon>
                    <Chat color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={q} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Previous Questions */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6">Previous Questions</Typography>
              <TextField
                size="small"
                placeholder="Search previous questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ ml: 'auto', width: 250 }}
                InputProps={{
                  startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
                }}
              />
            </Box>
            <List>
              {mockQuestions.map((q) => (
                <React.Fragment key={q.id}>
                  <Card sx={{ mb: 2 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <QuestionAnswer color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h6">{q.question}</Typography>
                      </Box>
                      <Typography color="text.secondary" sx={{ mb: 2 }}>
                        {q.answer}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Chip
                          icon={<LocalHospital />}
                          label={q.expert}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                        <Chip
                          icon={<AccessTime />}
                          label={q.date}
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AskAQuestion; 