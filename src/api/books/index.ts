import axios from "../index.ts";
import {TParams} from "../../types";

export default {
    getAll: () => axios.get("/books"),
    search: (params: TParams) => axios.get(`/books/${params.search}`),
    addToLibrary: (params: TParams) => axios.post('/books', params),
    removeFromLibrary: (params: TParams) => axios.delete(`/books/${params.id}`),
};
