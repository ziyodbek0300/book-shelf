export interface IBook {
    id: number;
    isbn: string;
    title: string;
    pages: number;
    cover: string;
    author: string;
    published: number;
}

export interface IBookObj {
    book: IBook;
    status: number
}

export interface IDataBooks {
    data: IBookObj[];
}