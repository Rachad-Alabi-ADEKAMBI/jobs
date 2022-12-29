<template>
    <div>
        <button @click="fetchData">Fetch Data</button>
        <ul>
            <li v-for="item in items" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
        };
    },
    methods: {
        async fetchData() {
            const token = '244|AZGdoqbpo4gEzxSzAkznhKlBpMiUufWsOr7ZEeDe';
            const headers = {
                'Authorization': `Bearer ${token}`,
            };
            const response = await fetch('https://api.publish.jobs/api/user-business-jobs', {
                headers
            });
            const data = await response.json();
            this.items = data.items;
        },
    },
};
</script>