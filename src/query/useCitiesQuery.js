import {onMounted, ref} from "vue";
import axios from "axios";

export const useCitiesQuery = () => {
    const options = ref([]);

    const fetchAllOptions = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_CITIES_API);

            options.value = response.data.map((item) => ({
                id: item.id,
                name: item.name,
                lookup: item.id + ' ' + item.tags.toLowerCase().split(', ').join(' '),
            }));

        } catch (error) {
            console.error('Error fetching options:', error);
        }
    };

    onMounted(() => {
        fetchAllOptions();
    });

    return {
        options,
    };
};