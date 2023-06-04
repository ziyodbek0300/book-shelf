import {IBook, IBookObj} from "../../types";

export interface IBookCard {
    book: IBook;
}

export interface IRemovedBookData {
    data: IBookObj[];
    isOk: boolean;
    message: string;
}