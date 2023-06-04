import {IBook} from "../../../../types";

export interface ISearchedCardProps {
    cover: string,
    author: string,
    published: number,
    title: string,
    isbn: string
}

export interface ISearchedCard {
    isOk: boolean;
    data: IBook
    message: string;
}