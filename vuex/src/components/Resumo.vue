<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters('carrinho', {
        total: 'valorTotal'
        //acessando um getter e mapeando para uma variável local
    })

    //OUTRAS 2 FORMAS:

    // computed: mapGetters(['valorTotal'])

    // computed: {
    //     total() {
    //         return this.$store.getters.valorTotal
    //     }
    // }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
