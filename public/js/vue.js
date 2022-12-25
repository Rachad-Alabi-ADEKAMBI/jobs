
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
    getJobs() {
       axios.get('https://api.publish.jobs/api/user-business-jobs').then(response =>
            this.jobs = response.data);
            //this.showInfos = true;
            console.log('jobs');
        },

    format(num){
    let res = new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(num);
    return res;
},
    getImgUrl(pic) {
    return "public/img/" + pic;
},
}
  }).mount('#app')