import axios from "../index.ts";
import {TParams} from "../../types";

export default {
    create: (params: TParams) => axios.post("/signup", params),
    myself: (config?: any) => {
        return axios.get("/myself", {
            headers: config
        })
    },
};
