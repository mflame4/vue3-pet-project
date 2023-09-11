import { ref, computed } from 'vue'

export default function useSortedPosts(posts) {
    const selectedSort = ref('')
    const sortedPosts = computed(() => {

        return [...posts.value].sort((post1, post2) => {
            const value1 = post1[selectedSort.value];
            const value2 = post2[selectedSort.value];

            if (typeof value1 === "number" && typeof value2 === "number") {
                return value1 - value2;
            }

            if (typeof value1 === "number") {
                return -1;
            }
            if (typeof value2 === "number") {
                return 1;
            }

            if (typeof value1 === "string" && typeof value2 === "string") {
                return value1.localeCompare(value2);
            }

            return String(value1).localeCompare(String(value2));
        });
    })

    return {
        selectedSort, sortedPosts
    }
};
