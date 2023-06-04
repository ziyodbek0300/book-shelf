import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";

export interface IAppMenu {
    open: boolean;
    setOpen: (open: boolean) => void
    user: any
}

export interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}