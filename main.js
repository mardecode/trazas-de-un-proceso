var app = new Vue({
  el: '#main',
  data: {
    procesos: [],
    newProcess: {name:"", time:""}
  },
  methods: {
    crearProceso: function () {
    this.procesos.push(JSON.parse(JSON.stringify(this.newProcess)));
   }
  }
});

$(document).ready(function() {
  $('select').material_select();
});