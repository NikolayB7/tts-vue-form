import { ref, onMounted } from 'vue';
import axios from 'axios';

export const useSelectCity = (field_name, updateValue) => {
    const value = ref('');
    const options = ref([]);
    const allOptions = ref([]);

    const fetchAllOptions = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_CITIES_API);

            allOptions.value = response.data.map((item) => ({
                name: item.name,
                value: item.id,
                tags: item.tags.toLowerCase().split(', '),
            }));
            options.value = allOptions.value;
        } catch (error) {
            console.error('Error fetching options:', error);
        }
    };

    const filterOptions = (query) => {
        if (!query.trim()) {
            options.value = allOptions.value;
            return;
        }

        const lowerQuery = query.toLowerCase();
        options.value = allOptions.value.filter(
            (item) =>
                item.name.toLowerCase().includes(lowerQuery) ||
                item.tags.some((tag) => tag.includes(lowerQuery))
        );
    };

    onMounted(() => {
        fetchAllOptions();
    });

    const handleInput = (event) => {
        if (updateValue) {
            updateValue(field_name, event);
        }
    };

    return {
        value,
        options,
        filterOptions,
        handleInput
    };
};
