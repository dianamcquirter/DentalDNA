import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import HealingIcon from '@mui/icons-material/Healing';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SearchIcon from '@mui/icons-material/Search';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';

const mainMenuItems = [
  { title: 'Dashboard', path: '/dashboard', icon: <DashboardIcon />, description: 'Overview of appointments, hygiene score, and updates' },
  { title: 'Records', path: '/records', icon: <FolderSpecialIcon />, description: 'X-rays, intraoral photos, treatment history, insurance documents' },
  { title: 'Symptom Checker', path: '/symptom-checker', icon: <HealingIcon />, description: 'AI-powered tool for current issues' },
  { title: 'Hygiene Tracker', path: '/hygiene-progress', icon: <TrackChangesIcon />, description: 'Daily/weekly hygiene habits + reminders' },
  { title: 'Smile Points', path: '/smile-points', icon: <EmojiEventsIcon />, description: 'Gamified engagement, rewards, progress milestones' },
  { title: 'Schedule Visit', path: '/schedule', icon: <EventNoteIcon />, description: 'Sync with providers and send appointment requests' },
  { title: 'Find a Dentist', path: '/find-dentist', icon: <LocalHospitalIcon />, description: 'Find DentalDNA providers near you' },
  { title: 'Search DentalDNA', path: '/search', icon: <SearchIcon />, description: 'Search across all DentalDNA resources' },
];

const profileMenuItems = [
  { title: 'My Profile', path: '/profile', icon: <PersonIcon />, description: 'Personal details, health preferences, comfort settings' },
  { title: 'Ask a Professional', path: '/ask-question', icon: <QuestionAnswerIcon />, description: 'Get quick answers from hygienists, dentists, or AI support' },
  { title: 'My Settings', path: '/settings', icon: <SettingsIcon />, description: 'Notifications, access permissions, app preferences' },
  { title: 'My Providers', path: '/providers', icon: <PeopleIcon />, description: 'List of saved or connected dentists/doctors' },
  { title: 'Log Out', path: '/logout', icon: <LogoutIcon />, description: 'Sign out of your account' },
];

function Navigation() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
    handleProfileMenuClose();
  };

  const drawer = (
    <Box sx={{ width: 320, p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
        Menu
      </Typography>
      <List>
        {mainMenuItems.map((item) => (
          <ListItem 
            button 
            key={item.title} 
            onClick={() => handleNavigation(item.path)}
            sx={{
              borderRadius: 2,
              mb: 1,
              '&:hover': {
                backgroundColor: 'rgba(230, 213, 184, 0.08)',
              }
            }}
          >
            <ListItemIcon sx={{ color: 'primary.main' }}>
              {item.icon}
            </ListItemIcon>
            <Box>
              <ListItemText 
                primary={item.title}
                secondary={item.description}
                primaryTypographyProps={{
                  variant: 'subtitle1',
                  sx: { color: 'primary.main' }
                }}
                secondaryTypographyProps={{
                  variant: 'body2',
                  sx: { color: 'text.secondary', fontSize: '0.75rem' }
                }}
              />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Box
              component="div"
              onClick={() => navigate('/')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': {
                  '& img': {
                    transform: 'scale(1.05)',
                  },
                  '& .title': {
                    color: 'primary.light',
                  }
                },
              }}
            >
              <Box
                component="img"
                src="/images/logo.png"
                alt="DentalDNA Logo"
                sx={{
                  height: 40,
                  width: 40,
                  mr: 2,
                  display: 'block',
                  borderRadius: '50%',
                  padding: '4px',
                  backgroundColor: 'transparent',
                  border: 2,
                  borderColor: 'primary.main',
                  objectFit: 'contain',
                  transition: 'transform 0.2s ease-in-out',
                }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  className="title"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.2s ease-in-out',
                  }}
                >
                  DentalDNA
                  <Typography
                    component="span"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      ml: 0.5,
                    }}
                  >
                    .AI
                  </Typography>
                </Typography>
                <Typography
                  variant="subtitle2"
                  noWrap
                  sx={{
                    color: 'white',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    opacity: 0.9,
                    mt: -0.5,
                  }}
                >
                  Your Smile. Your Story.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account settings">
              <IconButton onClick={handleProfileMenuOpen} sx={{ p: 0 }}>
                <Avatar 
                  src="/images/profile-picture.png"
                  alt="Profile Picture"
                  sx={{ 
                    width: 40, 
                    height: 40,
                    border: 2,
                    borderColor: 'primary.main',
                    backgroundColor: 'secondary.main',
                    '& img': {
                      objectFit: 'cover'
                    }
                  }}
                >
                  <PersonIcon />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={profileMenuAnchor}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(profileMenuAnchor)}
              onClose={handleProfileMenuClose}
            >
              {profileMenuItems.map((item) => (
                <MenuItem 
                  key={item.title} 
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    py: 1.5,
                    px: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(230, 213, 184, 0.08)',
                    }
                  }}
                >
                  <ListItemIcon sx={{ color: 'primary.main', minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <Box>
                    <Typography variant="subtitle1" color="primary.main">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                      {item.description}
                    </Typography>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'background.default',
            backgroundImage: 'none',
          }
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navigation; 