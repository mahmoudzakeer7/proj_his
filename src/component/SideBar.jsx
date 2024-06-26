import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Box, Typography, styled, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import EmailIcon from '@mui/icons-material/Email';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;
const Array1 = [
    {
        'text': "Dashboard",
        'icon': <DashboardIcon />,
        'path': "/"
    },
    {
        'text': "patient list",
        'icon': <RecentActorsIcon />,
        'path': "/"
    },
    {
        'text': "mail",
        'icon': <EmailIcon />,
        'path': "/"
    },
    {
        'text': "medical",
        'icon': <MedicalServicesIcon />,
        'path': "/"
    }
];

const Array2 = [
    {
        'text': "settings",
        'icon': <SettingsIcon />,
        'path': '/'
    },
    {
        'text': "out",
        'icon': <LogoutIcon />,
        'path': '/'
    }
];

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const SideBar = ({ open, handleDrawerClose }) => {
    const theme = useTheme();
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>

            <Avatar sx={{ mx: 'auto', width: 100, height: 100, marginBottom: 2, border: 'solid 2px red' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography align='center' color={'inherit'} sx={{ marginBottom: 2 }}>username</Typography>
            <Typography align='center' color={'inherit'} sx={{ marginBottom: 2 }}>admin</Typography>

            <Divider />

            <List>
                {Array1.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider />

            <Box flexGrow={1}></Box>
            <List>
                {Array2.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
export default SideBar;