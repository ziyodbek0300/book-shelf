import {useAllBooks} from "../../hooks";
import {BooksList} from "./components";

export default function Books() {
    const {data, isLoading} = useAllBooks();

    return <BooksList data={data} isLoading={isLoading}/>;
}