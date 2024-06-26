import react from "react";
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, IconButton,Stack,Typography, styled, useTheme } from "@mui/material";
import MenuIcon from "./MenuIcon";
import {alpha} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import NotificationsIcon from '@mui/icons-material/Notifications';

const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    // @ts-ignore
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const TopBar = ({ open, handleDrawerOpen ,setMode}) => {
    const theme = useTheme();
    return (

        <AppBar position="fixed"
            // @ts-ignore
            open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                     <MenuIcon /> 
                </IconButton>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>

                <Box flexGrow={1}>
                </Box>

                <Stack direction="row" spacing={1}>

                    {theme.palette.mode === 'light' ? <IconButton aria-label="lightmode" onClick={()=>{localStorage.setItem("currentMode",theme.palette.mode === "dark"? "light" : "dark")
                        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
                    }} color="inherit">
                        <LightModeIcon />
                    </IconButton> : <IconButton aria-label="darkmode" onClick={()=>{localStorage.setItem("currentMode",theme.palette.mode === "dark"? "light" : "dark")
                        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
                    }} color="inherit">
                        <DarkModeIcon />
                    </IconButton>}
                   
                    <IconButton aria-label="notification" color="inherit">
                        <NotificationsIcon/>
                    </IconButton>
                    <IconButton aria-label="person" color="inherit">
                        <PersonIcon/>
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;