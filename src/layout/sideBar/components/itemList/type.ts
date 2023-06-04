import {ReactElement} from "react";

export interface IList {
    route: string;
    text: string;
    icon: ReactElement
}

export interface IItemList {
    open: boolean;
    menu: IList[];
}