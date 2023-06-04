import IconButton from '@mui/material/IconButton';
import {Drawer, DrawerHeader} from "./style";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import {ISideBar} from "./type.ts";
import menu from "../../constants/menu";
import {ItemsList} from "./components";

export default function SideBar(props: ISideBar) {
    const {setOpen, open, theme} = props;

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <ItemsList open={open} menu={menu}/>
        </Drawer>
    );
}