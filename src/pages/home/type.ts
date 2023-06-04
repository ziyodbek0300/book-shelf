export interface ISearchItem {
    author: string;
    cover: string;
    isbn: string;
    published: number;
    title: string;
}

export interface ISearchHome {
    data: ISearchItem[];
    isOk: boolean;
    message: string;
}