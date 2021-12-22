<template>
    <nav class="menu">
        <ul>
            <router-link to='/' tag='li' active-class="active" exact>
                <a>Inicio</a>
            </router-link>

            <router-link to='/usuario' tag='li' active-class="active">
                <a>Usuários</a>
            </router-link>            
        </ul>
        <!--
            Como a aplicação é um single page, o router link 'emula' o link de uma nova página, mas na verdade ele emit eventos para que o vue faça a navegação

            Para listar, pode-se usar a altertaniva acima, colocando os router-likns dentro de ul, mas invez de envolvê-los com li, pode-se expressar a tag que ele será
            no caso específico uma li.
            Para o nome se tornar link, basta envolver em uma tag a.


            active-class="active" usado para demonstrar qual link está ativo
            o exact mostra a active-class que tem de ser extamente o valor do 'to' e não conter o valor do 'to'
        -->
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>