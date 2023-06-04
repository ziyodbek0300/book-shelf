import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar} from "./style";
import {IAppMenu} from "./type.ts";
import {AccountCircle, LoginOutlined} from "@mui/icons-material";
import {Menu, MenuItem} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import {useCookies} from "react-cookie";
import {MAIN_SECRET_NAME} from "../../constants";
import {useNavigate} from "react-router-dom";

export default function AppMenu(props: IAppMenu) {
    const [_1, _, remove] = useCookies();
    const navigate = useNavigate();
    const {setOpen, open} = props;

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        remove(MAIN_SECRET_NAME);
        remove('key');
        navigate('/login');
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && {display: 'none'}),
                    }}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Book shelf
                </Typography>
                {props.user && (
                    <Box ml="auto">
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem disabled>{props.user?.name}</MenuItem>
                            <MenuItem onClick={handleClose}>Logout &nbsp; <LoginOutlined/></MenuItem>
                        </Menu>
                    </Box>
                )}

            </Toolbar>
        </AppBar>
    );
}