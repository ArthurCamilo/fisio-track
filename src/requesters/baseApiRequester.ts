import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const createBaseApiRequester = async () => {
    const token = await AsyncStorage.getItem('@FISIOTRACKAuth:token');
    const axiosApi = axios.create({
        baseURL: "http://localhost:4500/api",
    });
    if (token) {
        axiosApi.defaults.headers.common['Authorization'] = `Bearer ${token}` 
    }

    return axiosApi;
};

let baseApiRequester: any;

(async () => {
    baseApiRequester = await createBaseApiRequester();
})();

export default baseApiRequester;