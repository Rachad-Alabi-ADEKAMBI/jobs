
const { createApp } = Vue

createApp({
  data() {
    return {
        jobs: []
    }
},
mounted: function() {
   this.getJobs();
},
methods: {
    async getJobs() {
        const token = '244|AZGdoqbpo4gEzxSzAkznhKlBpMiUufWsOr7ZEeDe';
        const headers = {
            'Authorization': `Bearer ${token}`,
        };
        const response = await fetch('https://api.publish.jobs/api/user-business-jobs', {
            headers
        });
        const data = await response.json();
        this.jobs = data.items;
        console.log(jobs);
    },
    format(num){
    let res = new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(num);
    return res;
}
}
  }).mount('#app')