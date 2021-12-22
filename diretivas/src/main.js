import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive(
    // 'destaque', {
    //     bind(el) {
    //         el.style.backgroundColor = 'lightgreen'
    //             //definindo por diretiva personalizada o funcionamento de um elemento. sem receber parâmetro			
    //     }
    // }
    // 'destaque_2', {
    //     bind(el, binding) {
    //         el.style.backgroundColor = binding.value
    //             //definindo por diretiva personalizada o funcionamento de um elemento, recendo parâmetro de fora		
    // 		}
    // 	}
    'destaque_3', {
        bind(el, binding) {

            //diretiva suporta um argumento, que podemos usar para validação
            //suporta diversos modificadores, que tbm podem ser usados para validação

            //não obrigatoriamente tem de se usar um arg antes de usar um modificador

            const aplicarCor = cor => {
                //função que interna que vai ser invocada no timer abaixo
                if (binding.arg == 'fundo') {
                    el.style.backgroundColor = cor
                } else {
                    el.style.color = cor
                }
            }



            let atraso = 0
            if (binding.modifiers['atrasar']) atraso = binding.value.atraso


            const cor1 = binding.value.cor1
            const cor2 = binding.value.cor2
            let corAtual = cor1

            setTimeout(() => {

                if (binding.modifiers['alternar']) {

                    setInterval(() => {

                        corAtual = corAtual == cor1 ? cor2 : cor1
                            //alternancia ternária

                        aplicarCor(corAtual)

                    }, binding.value.intervalo);

                } else {

                    aplicarCor(binding.value.cor1)
                }
            }, atraso);



        }
    }
)


new Vue({
    render: h => h(App),
}).$mount('#app')