import {inject} from "vue";

export const useProvided = () => {
    const provided = inject('provided');
    return provided;
}