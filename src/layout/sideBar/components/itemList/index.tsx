import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {Link} from "react-router-dom";
import {IItemList, IList} from "./type.ts";

export default function ItemList(props: IItemList) {
    const {open, menu} = props

    return (
        <List>
            {menu.map((item: IList) => (
                <ListItem key={item.text} disablePadding sx={{display: 'block'}}>
                    <Link to={item.route}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
        </List>
    );
}