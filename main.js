// configurazione vue
Vue.config.devtools = true;

// Attraverso l'apposita API di Boolean
// (https://flynn.boolean.careers/exercises/api/random/mail)
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue({
  el: "#app",
  data: {
    allEmails: [],
    // allNumbers: [], 
    // allPhone: [],
  },
  computed: {
    alltogether() {
      
    },
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.allEmails.push(response.data.response);
        });
    }
    console.log(this.allEmails);

    // for (let i = 0; i < 10; i++) {
    //     axios
    //       .get("https://flynn.boolean.careers/exercises/api/random/int")
    //       .then((response) => {
    //         this.allNumbers.push(response.data.response);
    //       });
    //   }

    //   for (let i = 0; i < 10; i++) {
    //     axios
    //       .get("https://flynn.boolean.careers/exercises/api/random/phone")
    //       .then((response) => {
    //         this.allPhone.push(response.data.response);
    //       });
    //   }
  },
});
