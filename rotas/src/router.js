import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
// import Usuario from './components/usuario/Usuario'
// import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhes'
// import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router)
//registrando de forma global o Router, para acesso dentro de qualquer componente


//importação tardia.. ajuda a carregar o componente apenas qdo for ter utilização
//o comentário /* webpackChunkName:"nomeComponente" */ faz agrupamentos
const Usuario = () => import(/* webpackChunkName:"usuario" */'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName:"usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import(/* webpackChunkhName:"usuario" */'./components/usuario/UsuarioDetalhes')
const UsuarioEditar = () => import(/* webpackChunkName:"usuario" */'./components/usuario/UsuarioEditar')

export default new Router({
    //existem 2 modos de navegação (Hash e History)
    //Hash já possui uma navegação em que se chama no servidor sempre o index.html    
            //Exemplo: https://localhost:8080/#/usuario
            //vantagem é não necessitar configuração adicional
    //History chama diretamente uma subpágina, pulando o index.
            //Exemplo: https://localhost:8080/usuario
            //Para usar o History é necessário uma configuração extra no servidor, encontra-se essa configuração em: router.vuejs.org
            //vantagem de usar o history que pode-se usar a navegação do browser padrão e não apenas os links da aplicação
    mode: 'history',

    //mapeando todas as rotas
    routes: [
        {
            name: 'inicio',
            path: '/',

            //interceptando a rota para validação
            beforeEnter: ((to, from, next) => {
                //console.log('Antes da rota de Início')
                next()
            }),
            //component: Inicio <<<<< adicionando apenas num componente para o router-view

            //OUtra possibilidade de usar vários componentes e definir em qual router vai renderizar é...
            components: {
                default: Inicio,
                //nomeDoRouter: componenteQueSeraRenderizado
            }
        },
        {
            path: '/usuario',
            component: Usuario,
            children: [
                {path: '', component: UsuarioLista},
                {path: ':id', component: UsuarioDetalhe, props: true},
                {path: ':id/editar', component: UsuarioEditar, props: true, name:'editarUsuario'},
                //esta aninhando rotas ao 'http://usuario/'
            ]
        },
        {
            path: '*',
            redirect: '/'
            //redirecionando qualquer rota não mapeada para a tela principal
            //pode ser usado para apresentar uma tela de erro como 404 tbm... 
            //se desejar que apenas uma certa rota digitada seja direcionada pode ser especificado no path

        }
    ]
})

//DICAS DE ROTAS:

//Para que as rotas funcionem é necessário importar e configura no main.js
    //import Router from "./router";
    // new Vue({
    //     router: Router
    // })



//Tem 3 formas de INTERCEPTAR rotas para validações:

    // 01 Geral:
    // Transformando o export default deste arquivo de rotas em uma constante como abaixo 
    // e validando antes de cada chamada... exemplo:

            // const router = new router({})
            // router.beforeEach((to, from, next) => 
            //     console.log('Antes das rotas globais')
            //     next() // se não chamar o next a navegação é paralisada
            // )

            // export defaault router //depois exporta o método


    // 02 Dentro de uma rota:
        // routes: [
        //     {
        //         name: 'inicio',
        //         path: '/',
        //         beforeEnter: ((to, from, next) => {
        //             console.log('Antes da rota de Início')
        //             next()
        //         })
        //     }

        
    // 03 Dentro do componente:
        // beforeRouteEnter(to, from, next){
        //     console.log('Dentro do componente!')
        //     next()
        // }