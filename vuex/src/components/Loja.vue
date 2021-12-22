<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1
        }
    },
    computed: {
        //Como existe valores em um estado centralizado, opta-se por uma propriedade computada invez de Data
        //necessário criar o get e set para que os valores centralizados sejam devidamente lidos e alterados
        //desta forma o v-model pode monitorar o estado
        quantidade() {
            return this.$store.state.parametros.quantidade
        },
        preco() {
            return this.$store.state.parametros.preco
        }
    },
    methods: {
        ...mapActions('carrinho', ['adicionarProduto']), //mapeando todos os métodos das mutations

        // adicionarProduto(produto) {
        //     this.$store.dispatch('adicionarProduto', produto, 123)
        // },
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            
            this.adicionarProduto(produto) //como as muttations foram mapeadas, pode ser acessada como se fosse um método local
            
            //OUTRAS FORMAS DE ADCIONAR O PRODUTO usando MUTATIONS

            // this.$store.state.produtos.push(produto)
            // this.$store.commit('adicionarProduto', produto)



            //OUTRAS FORMAS DE ADCIONAR O PRODUTO usando ACTIONS
            // this.$store.dispatch('adicionarProduto', produto)

        
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
