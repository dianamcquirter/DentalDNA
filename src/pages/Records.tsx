import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Alert,
} from '@mui/material';
import {
  PhotoLibrary,
  Science,
  Description,
  MedicalInformation,
  Upload,
  KeyboardArrowRight,
  KeyboardArrowLeft,
  MoreVert,
  NavigateNext,
} from '@mui/icons-material';

const tabData = [
  { label: 'X-Rays', icon: <PhotoLibrary />, id: 'xrays' },
  { label: 'Photos', icon: <PhotoLibrary />, id: 'photos' },
  { label: 'Saliva Analysis', icon: <Science />, id: 'saliva' },
  { label: 'Insurance Docs', icon: <Description />, id: 'insurance' },
  { label: 'Treatment Plans', icon: <Description />, id: 'treatment' },
  { label: 'Medical History', icon: <MedicalInformation />, id: 'medical' },
];

function Records() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (index?: number) => {
    setAnchorEl(null);
    if (typeof index === 'number') {
      setValue(index);
    }
  };

  const scrollTabs = (direction: 'left' | 'right') => {
    const tabsContainer = document.getElementById('tabs-container');
    if (tabsContainer) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      tabsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Sticky Navigation */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1100,
          bgcolor: 'background.default',
          pt: 2,
          pb: 1,
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
          borderRadius: '8px 8px 0 0',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}>
          {/* Left Scroll Button */}
          <IconButton 
            onClick={() => scrollTabs('left')}
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              position: 'absolute',
              left: 0,
              zIndex: 2,
              bgcolor: 'background.paper',
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>

          {/* Tabs Container */}
          <Box
            id="tabs-container"
            sx={{
              flex: 1,
              overflow: 'hidden',
              mx: { xs: 4, md: 0 },
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              overflowX: 'auto',
              px: 2,
              '&::-webkit-scrollbar': { display: 'none' },
            }}>
              {tabData.map((tab, index) => (
                <Button
                  key={tab.id}
                  onClick={() => setValue(index)}
                  startIcon={tab.icon}
                  sx={{
                    minWidth: 'auto',
                    px: 2,
                    py: 1,
                    color: value === index ? 'primary.main' : 'text.secondary',
                    bgcolor: value === index ? 'rgba(230, 213, 184, 0.1)' : 'transparent',
                    fontWeight: value === index ? 'bold' : 'normal',
                    borderRadius: '4px 4px 0 0',
                    '&:hover': {
                      bgcolor: 'rgba(230, 213, 184, 0.05)',
                    },
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tab.label}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Right Scroll Button */}
          <IconButton 
            onClick={() => scrollTabs('right')}
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              position: 'absolute',
              right: 40,
              zIndex: 2,
              bgcolor: 'background.paper',
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <KeyboardArrowRight />
          </IconButton>

          {/* Menu Button */}
          <IconButton
            onClick={handleMenuClick}
            sx={{ 
              ml: 1,
              mr: 1,
              bgcolor: 'background.paper',
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <MoreVert />
          </IconButton>
        </Box>
      </Box>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleMenuClose()}
        PaperProps={{
          sx: {
            maxHeight: 300,
            width: '200px',
          },
        }}
      >
        {tabData.map((tab, index) => (
          <MenuItem 
            key={tab.id} 
            onClick={() => handleMenuClose(index)}
            selected={value === index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              py: 1,
              '&.Mui-selected': {
                bgcolor: 'rgba(230, 213, 184, 0.1)',
                '&:hover': {
                  bgcolor: 'rgba(230, 213, 184, 0.2)',
                },
              },
            }}
          >
            {tab.icon}
            <Typography variant="body2">{tab.label}</Typography>
            {value === index && <NavigateNext sx={{ ml: 'auto' }} />}
          </MenuItem>
        ))}
      </Menu>

      {/* Medical History Alert */}
      {value === 5 && (
        <Alert 
          severity="info" 
          sx={{ 
            mt: 2,
            borderRadius: 1,
            '& .MuiAlert-icon': {
              color: 'primary.main',
            },
          }}
        >
          This summary pulls from your profile. Visit the profile section to update your medical history.
        </Alert>
      )}

      {/* Content for each tab */}
      <Box sx={{ mt: 2 }}>
        {tabData.map((tab, index) => (
          <Box
            key={tab.id}
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
          >
            {value === index && (
              <Card sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    mb: 2 
                  }}>
                    <Typography variant="h6" component="h2">
                      {tab.label}
                    </Typography>
                    <Button
                      variant="outlined"
                      startIcon={<Upload />}
                      sx={{
                        borderRadius: '20px',
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          borderColor: 'primary.light',
                          bgcolor: 'rgba(230, 213, 184, 0.08)',
                        },
                      }}
                    >
                      Upload {tab.label}
                    </Button>
                  </Box>
                  <List>
                    <ListItem>
                      <ListItemText 
                        primary="No records available"
                        secondary="Upload new records or contact your dental office"
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            )}
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Records; 