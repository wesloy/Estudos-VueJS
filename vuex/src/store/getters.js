export const getNome = state => state.nome
export const getNomeCompleto = state => state.nome + state.sobrenome

//Mais utilizado para retorno de constantes gerais, que não se encaixam em nenhum módulo
//Mas pode ser usada para uma forma de organização do projeto também, separando os getters, mutations e actions

//Ao referenciar no store.js, pode ser:
    //feito com uso de sprad (...getters)
    //função a função (import getNome form './getters')
    //pode ser feita a importação de todos (import * as getters from './getters')
