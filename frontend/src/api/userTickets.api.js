import ApiClient from "../utils/ApiClient.util.js";

const api = new ApiClient('http://localhost:8000/')

export const getUserTickets = async () => {
    const response = await api.get('api/user/tickets');
    return response.data;
}