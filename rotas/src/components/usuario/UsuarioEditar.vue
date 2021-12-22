<template>
    <div class="usuario-editar">
        <h3>Usuario Editar</h3>
        <p v-if="id"><strong>Código: </strong>{{ id }}</p>
        <p v-if="id"><strong>Completo: </strong>{{ $route.query.completo ? 'Sim':'Não'}}</p>
        <p v-if="id"><strong>Língua: </strong>{{ $route.query.lingua }}</p>
        <button primario @click="confirmado=true">Salvar</button>
    </div>
</template>

<script>
    export default {
        props:['id'],

        data(){
            return{
                confirmado: false
            }
        },

        beforeRouteLeave(to, from, next){
            //lógica de deixar o usuário sair da página apenas se ele confirmar algo
            if(this.confirmado){
                next()
            }else{
                if (confirm('Já salvou as edições?')) {
                    next()                
                } else {
                    next(false)
                }
            }
        }
    }
</script>

<style scoped>

</style>