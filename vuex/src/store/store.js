import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nome: 'Maria',
        sobrenome: 'Silva',
        //São propriedades compartilhadas entre todos os components
        //Consultadas e calculadas a partir de Getters
        //Modificadas por Mutations/Actions
            //Mutations executa a alteração
            //Actions carrega as regras do negócio e/ou APIs e invocam as Mutations
    },
    getters,
    modules: { carrinho, parametros }
    // Qdo trabalhamos com os módulos, o acesso externo ao 'store' não é mais de forma direta como: this.$store.state.produtos
    // A estrutura, qdo usa-se 'modules: {carrinho}' é lida desta forma:
            // state: {
            //     carrinho:{
            //         produtos: []
            //     },
            //     parametros: {
            //         quantidade: 0,
            //         preco: 0
            //     }
            // }
    //Para acessar deve-se usar além de 'this.$store....', precisa colocar o nome do módulo tbm... exemplo: this.$store.state.carrinho.produtos
})