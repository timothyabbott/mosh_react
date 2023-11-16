import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL:'https://jsonplaceholder.typicode.com', 
    // headers could be set here if requied
})

export {CanceledError}