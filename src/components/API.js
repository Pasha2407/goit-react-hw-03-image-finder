import axios from 'axios';

export async function api(query, page) {
    const searchParams = new URLSearchParams({
        key: '40276547-2ed900adc5a61ed15a312b440',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 12,
        page: page,
    });
    const images = await axios.get(`https://pixabay.com/api/?${searchParams}`);

    return images;
}