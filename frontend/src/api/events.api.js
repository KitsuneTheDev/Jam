import ApiClient from "../utils/ApiClient.util.js";

const api = new ApiClient('http://localhost:8000/');

export const getEvents = async () => {
    const response = await api.get('api/events');
    return response.data;
};