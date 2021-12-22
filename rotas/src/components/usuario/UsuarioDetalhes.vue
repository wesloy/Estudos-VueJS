<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p v-if="id"><strong>Código: </strong>{{ id }}</p>
        <hr>
        
        <router-link tag='button' primario :to="{ name: 'editarUsuario', params: {id}, query:{completo: true, lingua: 'PT'} }">
        
        <!-- 
            passando de forma dinâmica o editar, tem duas formas, por nome da rota ou endereço:
            endereço: :to="`/usuario/${ id }/editar`"
            nome: :to="{ name: 'editarUsuario', params: {id}
        -->
            Editar
        </router-link>
    </div>
</template>

<script>
    export default {
        props: ['id'] //tem de ser o mesmo nome dado ao parametro na rota

        //Outro método de captura de propriedade por parâmetro de rota:
        //
        // data() {
        //     return{
        //         //capturando o parametro que veio na rota
        //         id: this.$route.params.id, //não é necessário informar que é o TO, pois como padrão já o passa                
        //     }
        // },
        // watch:{

        //     $route(to, from){
        //         //em caso de mudança apenas da rota, como sair do usuário x para o usuario y. Não atualiza o componetne e assim sendo não atualiza o
        //         //parametro id de forma automática, assim sendo, faz-se necessário o uso do watch
        //         this.id = to.params.id                
        //     }
        // },
    }
</script>

<style scoped>

</style>