export default {
    namespaced: true, //usado para evitar conflitos de propriedades entre outros módulos

    state: {
        //STATE é como o data de um componente
        //tem um estado inicial, porém vai ser 'administrado' por diversos componentes
        produtos: []
    },

    getters: {
        //GETTERS são funções computadas que são lidas por diversos componentes
        //neste exemplo está sendo passado o PRODUTO, através do STATE e está sendo calculado o total
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
                //calcula-se novo total, armazena na prop total e zera a prop atual
        }
    },
    mutations: {
        //a mutation, por padrão recebe o estado (state) e pode ter APENAS 1 parâmetro que convenciona-se chamar de payload
        //o payload pode ser uma lista, objeto, string....
        //executa alterações nas propriedades centralizadas
        adicionarProduto(state, payload) {            
            state.produtos.push(payload)
            //neste exemplo está sendo adicionado produtos a STATE
        }
    },
    actions: {

        //Invoca as mutations para que a alteração seja executada
        //Carrega a regra de negócio... no exemplo abaixo, provoca um delay de 1s
        adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000)
        }
    }
}