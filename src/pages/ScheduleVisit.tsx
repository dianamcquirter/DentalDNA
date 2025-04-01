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
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Stepper,
  Step,
  StepLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';

// Mock data - replace with real data from API
const mockDentists = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'General Dentistry' },
  { id: 2, name: 'Dr. Michael Chen', specialty: 'Orthodontics' },
  { id: 3, name: 'Dr. Emily Brown', specialty: 'Periodontics' },
];

const mockAppointmentTypes = [
  { id: 1, name: 'Regular Checkup', duration: 30 },
  { id: 2, name: 'Cleaning', duration: 60 },
  { id: 3, name: 'Consultation', duration: 45 },
  { id: 4, name: 'Emergency Visit', duration: 30 },
];

const mockTimeSlots = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
];

const steps = ['Select Date', 'Choose Dentist', 'Pick Time', 'Review'];

function ScheduleVisit() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDentist, setSelectedDentist] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setConfirmationOpen(true);
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    setConfirmationOpen(true);
  };

  const handleConfirm = () => {
    // Here you would typically make an API call to save the appointment
    setConfirmationOpen(false);
    // Reset form or redirect
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={(newValue: Date | null) => setSelectedDate(newValue)}
              minDate={new Date()}
              sx={{ width: '100%', mt: 2 }}
            />
          </LocalizationProvider>
        );
      case 1:
        return (
          <Box sx={{ mt: 2 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Select Dentist</InputLabel>
              <Select
                value={selectedDentist}
                label="Select Dentist"
                onChange={(e) => setSelectedDentist(e.target.value)}
              >
                {mockDentists.map((dentist) => (
                  <MenuItem key={dentist.id} value={dentist.id}>
                    {dentist.name} - {dentist.specialty}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Appointment Type</InputLabel>
              <Select
                value={selectedType}
                label="Appointment Type"
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {mockAppointmentTypes.map((type) => (
                  <MenuItem key={type.id} value={type.id}>
                    {type.name} ({type.duration} min)
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              {mockTimeSlots.map((time) => (
                <Grid item xs={6} sm={4} key={time}>
                  <Button
                    variant={selectedTime === time ? 'contained' : 'outlined'}
                    fullWidth
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      case 3:
        return (
          <Box sx={{ mt: 2 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Appointment Summary
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Date: {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Not selected'}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Time: {selectedTime || 'Not selected'}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Dentist: {mockDentists.find(d => d.id === Number(selectedDentist))?.name || 'Not selected'}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Type: {mockAppointmentTypes.find(t => t.id === Number(selectedType))?.name || 'Not selected'}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Additional Notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  sx={{ mt: 2 }}
                />
              </CardContent>
            </Card>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Schedule a Visit
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Book your next dental appointment in just a few steps
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mt: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ mt: 4 }}>
          {getStepContent(activeStep)}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
          )}
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{
                color: '#ffffff',
                fontWeight: 600,
                borderRadius: '28px',
                px: 4,
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
              Confirm Appointment
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              sx={{
                color: '#ffffff',
                fontWeight: 600,
                borderRadius: '28px',
                px: 4,
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
              Next
            </Button>
          )}
        </Box>
      </Paper>

      <Dialog open={confirmationOpen} onClose={() => setConfirmationOpen(false)}>
        <DialogTitle>Confirm Appointment</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to schedule this appointment?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmationOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirm}
            sx={{
              color: '#ffffff',
              fontWeight: 600,
              borderRadius: '28px',
              px: 4,
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
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default ScheduleVisit; 