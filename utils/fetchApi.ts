import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url: string) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': 'a8e8493efdmshb679738ab88d28cp1900b0jsn441bd5c3901b',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}


// headers: {
//     'X-RapidAPI-Key': 'a8e8493efdmshb679738ab88d28cp1900b0jsn441bd5c3901b',
//         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
// }