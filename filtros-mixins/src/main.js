import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function(valor) {
    return valor.split('').reverse().join('')
})



Vue.mixin({
    //aplica em todos os componentes da aplicação, já que está registrado de forma global
    //prático para fazer o sistema de log
    data() {
        return {
            log: { type: Array }
        }
    },
    methods: {
        logSave() {
            //método para salvar no BD
        }
    }
})



new Vue({
    render: h => h(App)
}).$mount('#app')