import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params: {
        key: "3cc1c7fa7b454958837a77a3fac938bd",}
});

export {CanceledError};