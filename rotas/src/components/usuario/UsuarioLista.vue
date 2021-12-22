<template>
    <div class="usuario-lista">
        <h3>Lista de Usuários</h3>
        <ul class="lista">
            <router-link tag='li' class="item-lista" to='usuario/1'>Usuario 1</router-link>
            <router-link tag='li' class="item-lista" to='usuario/2'>Usuario 2</router-link>
            <router-link tag='li' class="item-lista" to='usuario/3'>Usuario 3</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        
        //interceptando o roteamento do componente para validações de segurança
        // beforeRouteEnter(to, from, next){
        //     console.log('Dentro do componente!')
        //     next()
        // }
    }
</script>

<style scoped>

</style>