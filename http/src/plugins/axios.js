import Vue from 'vue'
import axios from 'axios'

// adicionar plugin npm i axios --save
//axios.defaults.baseURL = 'https://curso-vuejs-cfd2f-default-rtdb.firebaseio.com/'
// esta é uma forma de declaração global

Vue.use({
    install(Vue) {

        Vue.prototype.$http = axios.create({
            baseURL: 'http://10.200.54.184/',
            //criando uma instância acesso nomeada como $http.
            //sendo possível ser chamada com: this.$http
            headers: {
                //Criando cabeçalho global para a aplicação
                //se NÃO definido um método específico para ser configurado, como get: { definições } será aplicado para todos os métodos o header
                "Authorization": 'teste123'
            }


            //se houver outras APIs para acessar, basta seguir o mesmo procedimento acima,
            //nomeando um prototype diferente
        })

        Vue.prototype.$http.interceptors.request.use(config => {
                //console.log(config.method)
                //Interceptando todas as requisições ocorridas na aplicação e podendo ser modificadas, como:
                // if (config.method == 'post') {
                //     config.method = 'put' // alterando todo POST para PUT

                // }


                //Ótimo método para gerar log de controle de acesso
                //Bloquear requisição caso não esteja logado na ferramenta

                return config
            }, error => Promise.reject(error))
            //possibilidade de tratar erros... 



        Vue.prototype.$http.interceptors.response.use(resp => {
            //capturando as respostas da Api e podendo aplicar alterações, como abaixo, transformando em Array todo Json que chega...

            // const array = []
            // for (let chave in resp.data) {
            //     array.push({ id: chave, ...resp.data[chave] })
            //         // este 3 pontos é um representante squad que diz que tudo que está dentro de data com a chave específica
            //         // vai ser transformado em chave/valor... seria semelhante a fazer item a item, desta forma: nome: resp.data[chave].nome
            // }

            // resp.data = array //substituindo o json que veio no data... pelo array criado acima
            return resp // retornando de forma global


        }, error => Promise.reject(error))

    }

})


//Depois registrar no main.js
// import './plugins/axios'



//TESTE PARA VERIFICAÇÃO DE FUNCIONAMENTO DO AXIOS
//USAR NO SCRIPT DO APP.JS

// created() {
// 	this.$http.post('user.json', {
// 		nome:'Wesley',
// 		email:'wesloy@gmail.com'
// 	}).then(res => console.log(res))
// }