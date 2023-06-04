import Box from "@mui/material/Box";
import {SearchBar, SearchResult} from "./components";
import {FieldValues, useForm} from "react-hook-form";
import {useSearch} from "../../hooks";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import {ISearchHome, ISearchItem} from "./type.ts";

export default function Home() {
    const [data, setData] = useState<ISearchItem[]>([]);
    const {
        register,
        handleSubmit,
        getValues,
        watch
    } = useForm();

    const searchBook = useSearch({
        onSuccess: (data: ISearchHome) => {
            setData(data.data);
            toast.success("Search fetched!");
        },
        onError: (err: any) => {
            console.log(err);
        },
    });

    useEffect(() => {
        const subscription = watch(() => {
            if (getValues('search').length < 2) {
                setData([]);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, getValues]);

    const handleSearch = (data: FieldValues) => {
        searchBook.mutate(data);
    }

    return (
        <Box>
            <SearchBar
                handleSearch={handleSearch}
                handleSubmit={handleSubmit}
                register={register}
            />
            <SearchResult isLoading={searchBook.isLoading} data={data}/>
        </Box>
    );
}