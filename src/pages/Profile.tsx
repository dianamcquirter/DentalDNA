import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  FormControlLabel,
  Alert,
  Card,
  CardContent,
  Chip,
  Divider,
  IconButton,
} from '@mui/material';
import {
  Person,
  Email,
  Phone,
  Home,
  Security,
  MedicalInformation,
  Edit,
  LocalHospital,
  Favorite,
  Warning,
} from '@mui/icons-material';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Diana McQuirter',
    email: 'diana.mcquirter@gmail.com',
    phone: '(555) 123-4567',
    address: 'Novi, MI 48377',
    dentalHistory: {
      lastCheckup: '2024-02-15',
      preferredDentist: 'Dr. Drill Nye the Cavity Guy',
      previousProcedures: [
        { procedure: 'Crowns 8 & 9', date: '2025-04-01' },
        { procedure: 'Teeth Cleaning', date: '2024-02-15' },
      ],
    },
    medicalHistory: {
      conditions: ["Behçet's Disease"],
      bloodType: 'O+',
      emergencyContact: {
        name: 'Roderick McQuirter',
        relation: 'Spouse/BFF/Business Partner',
        phone: '(555)555-5555',
      },
    },
    comfortPreferences: {
      anxietyLevel: 'Moderate',
      preferredMusic: 'Classical',
      temperatureSensitivity: 'High',
      gagReflex: 'Mild',
      preferredAppointmentTime: 'Morning',
    },
    allergies: ['None'],
    medications: [
      { name: 'Vitamin D', dosage: '2000 IU', frequency: 'Daily' },
    ],
    preferences: {
      emailNotifications: true,
      smsNotifications: true,
      appointmentReminders: true,
      newsletterSubscription: false,
    },
    clinicalPreferences: {
      anesthetic: {
        type: 'Septocaine',
        notes: 'Double amount and extra time needed'
      },
      equipment: [
        'Mouth Prop',
        'Rubber Dam'
      ],
      procedurePreferences: [
        'Multiple Photos during procedure',
        'Periodic breaks',
        'Explanations during procedure'
      ]
    },
  });

  const handleSave = () => {
    setIsEditing(false);
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 3000);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {showSaved && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Profile updated successfully!
        </Alert>
      )}

      {/* Profile Header */}
      <Paper sx={{ p: 3, mb: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            src="/images/profile-picture.png"
            alt={profile.name}
            sx={{
              width: 80,
              height: 80,
              mr: 3,
              border: 2,
              borderColor: 'primary.main',
              backgroundColor: 'secondary.main'
            }}
          >
            <Person />
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h3" sx={{ color: 'primary.main', mb: 1 }}>
              {profile.name}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary', opacity: 0.8 }}>
              Patient ID: #123456
            </Typography>
          </Box>
          <Button
            variant="outlined"
            startIcon={<Edit />}
            onClick={() => setIsEditing(!isEditing)}
            sx={{
              borderRadius: '20px',
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.light',
                backgroundColor: 'rgba(230, 213, 184, 0.08)'
              }
            }}
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </Box>

        {/* Contact Information */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Email sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography>{profile.email}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Phone sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography>{profile.phone}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Home sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography>{profile.address}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={3}>
        {/* Dental History */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocalHospital sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="h6">Dental History</Typography>
                </Box>
                <IconButton
                  size="small"
                  onClick={() => setIsEditing(!isEditing)}
                  sx={{
                    borderRadius: '50%',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(230, 213, 184, 0.08)'
                    }
                  }}
                >
                  <Edit fontSize="small" />
                </IconButton>
              </Box>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Last Checkup"
                    secondary={profile.dentalHistory.lastCheckup}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Preferred Dentist"
                    secondary={profile.dentalHistory.preferredDentist}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Previous Procedures"
                    secondary={
                      <Box sx={{ mt: 1 }}>
                        {profile.dentalHistory.previousProcedures.map((proc, index) => (
                          <Typography key={index} variant="body2">
                            {proc.procedure} - {proc.date}
                          </Typography>
                        ))}
                      </Box>
                    }
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Medical History */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MedicalInformation sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="h6">Medical History</Typography>
                </Box>
                <IconButton
                  size="small"
                  onClick={() => setIsEditing(!isEditing)}
                  sx={{
                    borderRadius: '50%',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(230, 213, 184, 0.08)'
                    }
                  }}
                >
                  <Edit fontSize="small" />
                </IconButton>
              </Box>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Medical Conditions"
                    secondary={profile.medicalHistory.conditions.join(', ')}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Blood Type"
                    secondary={profile.medicalHistory.bloodType}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Emergency Contact"
                    secondary={
                      <Box sx={{ mt: 1 }}>
                        <Typography variant="body2" gutterBottom>
                          {profile.medicalHistory.emergencyContact.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          ({profile.medicalHistory.emergencyContact.relation})
                        </Typography>
                        <Typography variant="body2">
                          {profile.medicalHistory.emergencyContact.phone}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Comfort Preferences */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Favorite sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="h6">Comfort Preferences</Typography>
                </Box>
                <IconButton
                  size="small"
                  onClick={() => setIsEditing(!isEditing)}
                  sx={{
                    borderRadius: '50%',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(230, 213, 184, 0.08)'
                    }
                  }}
                >
                  <Edit fontSize="small" />
                </IconButton>
              </Box>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Anxiety Level"
                    secondary={profile.comfortPreferences.anxietyLevel}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Preferred Music"
                    secondary={profile.comfortPreferences.preferredMusic}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Temperature Sensitivity"
                    secondary={profile.comfortPreferences.temperatureSensitivity}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Gag Reflex"
                    secondary={profile.comfortPreferences.gagReflex}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Preferred Appointment Time"
                    secondary={profile.comfortPreferences.preferredAppointmentTime}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Allergies */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Warning sx={{ mr: 1, color: 'error.main' }} />
                  <Typography variant="h6">Allergies</Typography>
                </Box>
                <IconButton
                  size="small"
                  onClick={() => setIsEditing(!isEditing)}
                  sx={{
                    borderRadius: '50%',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(230, 213, 184, 0.08)'
                    }
                  }}
                >
                  <Edit fontSize="small" />
                </IconButton>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 1,
                justifyContent: { xs: 'center', sm: 'flex-start' }
              }}>
                {profile.allergies.map((allergy, index) => (
                  <Chip
                    key={index}
                    label={allergy}
                    color="error"
                    variant="outlined"
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.875rem' },
                      height: { xs: '28px', sm: '32px' }
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Medications */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocalHospital sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="h6">Current Medications</Typography>
                </Box>
                <IconButton
                  size="small"
                  onClick={() => setIsEditing(!isEditing)}
                  sx={{
                    borderRadius: '50%',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(230, 213, 184, 0.08)'
                    }
                  }}
                >
                  <Edit fontSize="small" />
                </IconButton>
              </Box>
              <List>
                {profile.medications.map((medication, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <LocalHospital color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={medication.name}
                      secondary={`Dosage: ${medication.dosage} | Frequency: ${medication.frequency}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Notification Preferences */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Security sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="h6">Communication Preferences</Typography>
                </Box>
                <IconButton
                  size="small"
                  onClick={() => setIsEditing(!isEditing)}
                  sx={{
                    borderRadius: '50%',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(230, 213, 184, 0.08)'
                    }
                  }}
                >
                  <Edit fontSize="small" />
                </IconButton>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={profile.preferences.emailNotifications}
                        onChange={() => {}}
                        disabled={!isEditing}
                      />
                    }
                    label="Email Notifications"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={profile.preferences.smsNotifications}
                        onChange={() => {}}
                        disabled={!isEditing}
                      />
                    }
                    label="SMS Notifications"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={profile.preferences.appointmentReminders}
                        onChange={() => {}}
                        disabled={!isEditing}
                      />
                    }
                    label="Appointment Reminders"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={profile.preferences.newsletterSubscription}
                        onChange={() => {}}
                        disabled={!isEditing}
                      />
                    }
                    label="Newsletter Subscription"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Clinical Preferences */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocalHospital sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="h6">Clinical Preferences</Typography>
                </Box>
                <IconButton
                  size="small"
                  onClick={() => setIsEditing(!isEditing)}
                  sx={{
                    borderRadius: '50%',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(230, 213, 184, 0.08)'
                    }
                  }}
                >
                  <Edit fontSize="small" />
                </IconButton>
              </Box>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Anesthetic Type"
                    secondary={profile.clinicalPreferences.anesthetic.type}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Anesthetic Notes"
                    secondary={profile.clinicalPreferences.anesthetic.notes}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Required Equipment"
                    secondary={
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                        {profile.clinicalPreferences.equipment.map((item, index) => (
                          <Chip
                            key={index}
                            label={item}
                            variant="outlined"
                            size="small"
                            sx={{ 
                              color: 'primary.main',
                              borderColor: 'primary.main'
                            }}
                          />
                        ))}
                      </Box>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Procedure Preferences"
                    secondary={
                      <Box sx={{ mt: 1 }}>
                        {profile.clinicalPreferences.procedurePreferences.map((pref, index) => (
                          <Typography key={index} variant="body2" gutterBottom>
                            • {pref}
                          </Typography>
                        ))}
                      </Box>
                    }
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile; 