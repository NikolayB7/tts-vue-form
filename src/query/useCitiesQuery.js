import { ref, onMounted } from 'vue';
import axios from 'axios';


// hook to fetch cities from the API one time and filter them
export const useCitiesQuery = () => {
    const cities = ref([]);

    const fetchAllOptions = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_CITIES_API);

            cities.value = response.data.map((item) => ({
                name: item.name,
                value: item.id,
                tags: item.tags.toLowerCase().split(', '),
            }));
        } catch (error) {
            console.error('Error fetching options:', error);
        }
    };


    onMounted(() => {
        fetchAllOptions();
    });

    return {
        cities: cities.value,
    };
};