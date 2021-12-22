<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>
export default {
    computed: {
        //Como existe valores em um estado centralizado, opta-se por uma propriedade computada invez de Data
        //necessário criar o get e set para que os valores centralizados sejam devidamente lidos e alterados
        //desta forma o v-model pode monitorar o estado
        quantidade: {
            get () {
                return this.$store.state.parametros.quantidade
            },
            set (valor) {
                this.$store.commit('setQuantidade', valor)
            }
        },
        preco: {
            get () {
                return this.$store.state.parametros.preco
            },
            set (valor) {
                this.$store.commit('setPreco', valor)
            }
        }
    }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
