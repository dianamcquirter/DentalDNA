import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  FormControlLabel,
  Switch,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Search,
  LocationOn,
  Phone,
  Email,
  Language,
  AccessTime,
  Star,
  StarBorder,
  FilterList,
  Map,
  Directions,
  Schedule,
  LocalHospital,
} from '@mui/icons-material';

// Mock data - replace with real data from API
const mockDentists = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'General Dentistry',
    rating: 4.8,
    reviews: 127,
    location: '123 Dental Street, New York, NY',
    distance: '0.5 miles',
    image: '/dentist1.jpg',
    phone: '(555) 123-4567',
    email: 'dr.johnson@dentalcare.com',
    website: 'www.dentalcare.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    specialties: ['General Dentistry', 'Cosmetic Dentistry', 'Emergency Care'],
    insurance: ['Aetna', 'Blue Cross', 'Cigna'],
    languages: ['English', 'Spanish'],
    availability: 'Next available: Tomorrow',
    description: 'Experienced general dentist with over 15 years of practice. Specializes in cosmetic dentistry and emergency care.',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Orthodontics',
    rating: 4.9,
    reviews: 89,
    location: '456 Smile Avenue, New York, NY',
    distance: '1.2 miles',
    image: '/dentist2.jpg',
    phone: '(555) 987-6543',
    email: 'dr.chen@smileortho.com',
    website: 'www.smileortho.com',
    hours: 'Mon-Thu: 8:00 AM - 7:00 PM, Fri: 8:00 AM - 5:00 PM',
    specialties: ['Orthodontics', 'Invisalign', 'Pediatric Dentistry'],
    insurance: ['Aetna', 'United Healthcare', 'MetLife'],
    languages: ['English', 'Mandarin'],
    availability: 'Next available: Next Week',
    description: 'Board-certified orthodontist specializing in Invisalign and pediatric orthodontics.',
  },
];

function FindDentist() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDentist, setSelectedDentist] = useState<number | null>(null);
  const [filters, setFilters] = useState({
    specialty: '',
    rating: 0,
    distance: 10,
    insurance: '',
    languages: '',
    availability: false,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (field: string, value: any) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleViewDentist = (id: number) => {
    setSelectedDentist(id);
  };

  const handleCloseDialog = () => {
    setSelectedDentist(null);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Find a Dentist
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Search for dental professionals in your area
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by name, specialty, or location..."
            value={searchQuery}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="outlined"
            startIcon={<FilterList />}
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters
          </Button>
        </Box>

        {showFilters && (
          <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel>Specialty</InputLabel>
                  <Select
                    value={filters.specialty}
                    label="Specialty"
                    onChange={(e) => handleFilterChange('specialty', e.target.value)}
                  >
                    <MenuItem value="">All Specialties</MenuItem>
                    <MenuItem value="general">General Dentistry</MenuItem>
                    <MenuItem value="ortho">Orthodontics</MenuItem>
                    <MenuItem value="cosmetic">Cosmetic Dentistry</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography gutterBottom>Minimum Rating</Typography>
                <Rating
                  value={filters.rating}
                  onChange={(_, value) => handleFilterChange('rating', value)}
                  precision={0.5}
                  emptyIcon={<StarBorder />}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography gutterBottom>Distance (miles)</Typography>
                <Slider
                  value={filters.distance}
                  onChange={(_, value) => handleFilterChange('distance', value)}
                  min={0}
                  max={50}
                  step={1}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={filters.availability}
                      onChange={(e) => handleFilterChange('availability', e.target.checked)}
                    />
                  }
                  label="Available Today"
                />
              </Grid>
            </Grid>
          </Box>
        )}
      </Paper>

      <Grid container spacing={3}>
        {mockDentists.map((dentist) => (
          <Grid item xs={12} key={dentist.id}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={dentist.image}
                      alt={dentist.name}
                      sx={{ borderRadius: 1 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="h6">{dentist.name}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Rating value={dentist.rating} precision={0.1} readOnly />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          ({dentist.reviews} reviews)
                        </Typography>
                      </Box>
                    </Box>
                    <Typography color="text.secondary" gutterBottom>
                      {dentist.specialty}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Chip
                        icon={<LocationOn />}
                        label={dentist.distance}
                        size="small"
                      />
                      <Chip
                        icon={<AccessTime />}
                        label={dentist.availability}
                        size="small"
                        color="primary"
                      />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      {dentist.specialties.map((specialty, index) => (
                        <Chip key={index} label={specialty} size="small" />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        variant="contained"
                        startIcon={<Schedule />}
                        onClick={() => handleViewDentist(dentist.id)}
                      >
                        Schedule Visit
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<Directions />}
                        onClick={() => {/* Handle directions */}}
                      >
                        Get Directions
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={selectedDentist !== null}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedDentist && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">{mockDentists[selectedDentist - 1].name}</Typography>
                <Rating value={mockDentists[selectedDentist - 1].rating} readOnly />
              </Box>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" gutterBottom>
                    Contact Information
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon><LocationOn /></ListItemIcon>
                      <ListItemText primary={mockDentists[selectedDentist - 1].location} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Phone /></ListItemIcon>
                      <ListItemText primary={mockDentists[selectedDentist - 1].phone} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Email /></ListItemIcon>
                      <ListItemText primary={mockDentists[selectedDentist - 1].email} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Language /></ListItemIcon>
                      <ListItemText primary={mockDentists[selectedDentist - 1].website} />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" gutterBottom>
                    Practice Information
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon><AccessTime /></ListItemIcon>
                      <ListItemText primary={mockDentists[selectedDentist - 1].hours} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><LocalHospital /></ListItemIcon>
                      <ListItemText
                        primary="Specialties"
                        secondary={mockDentists[selectedDentist - 1].specialties.join(', ')}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Star /></ListItemIcon>
                      <ListItemText
                        primary="Insurance Accepted"
                        secondary={mockDentists[selectedDentist - 1].insurance.join(', ')}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    About
                  </Typography>
                  <Typography>
                    {mockDentists[selectedDentist - 1].description}
                  </Typography>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleCloseDialog();
                  // Navigate to schedule visit
                }}
              >
                Schedule Visit
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
}

export default FindDentist; 