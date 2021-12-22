<template>
    <div>
        <h2>Usuários</h2>
        <hr>
        <router-view/> <!-- Irá carregar as rotas 'filhos' -->
        <button sucesso @click="irParaInicio">Voltar</button>
        <!-- 
            sucesso é uma propriedade criado no arquivo de CSS (style.css):
            [sucesso] {
                color: #FFF;
                background-color: #47af55;
            }
        -->
    </div>
</template>

<script>
    export default {


        methods:{
            
            irParaInicio(){
                    //navegando de forma programática, usando JS.
                    

                    //objeto no push, determinando o camninho ou o nome da rota:
                    //this.$router.push({path: '/'})
                    this.$router.push({name: 'inicio'})

                    //ou basta informar a rota, dentro do push de forma direta
                    //this.$router.push('/')
                }
        }
    }
</script>

<style scoped>

</style>