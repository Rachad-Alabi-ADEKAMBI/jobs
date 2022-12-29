const { createApp } = Vue;

new Vue({
    el: "#app",
    data() {
    return{
      jobs: []  // define the jobs data property
    }
},
    methods: {
      async fetchJobs() {
        try {
          const response = await axios.get('https://api.publish.jobs/api/user-business-jobs', {
            headers: {
              'Authorization': '244|AZGdoqbpo4gEzxSzAkznhKlBpMiUufWsOr7ZEeDe'
            }
          });
          this.jobs = response.data;  // update the jobs data property with the response data
          console.log(jobs);

        } catch (error) {
          console.error(error);
        }
        alert('ok');
          }
    },
    created() {
      this.fetchJobs();  // fetch the jobs data when the app is created
    }
  });