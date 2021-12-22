<template>
    <Painel titulo="Carrinho" azul :notificacao="produtos.length">
        <div class="carrinho">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Qtde</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produto in produtos" :key="produto.nome">
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>{{ produto.preco | dinheiro }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="total">
                <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            </div>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
           
        //operador sprad é necessário para mapear todos os métodos de um Getters, bem como que outros 
       //metodos computados sejam implementados no componente    
        ...mapGetters('carrinho', {total: 'valorTotal'}),
        //como o módulo possui a propriedade namespace=true, se faz necessário indicar qual modulo (carrinho) para, que o getter 'valorTotal', seja localizado.
        //se namspace=false, o mapeamento seria: ...mapGetters({total: 'valorTotal'})



        // Outra forma de mapear um getters (que não possuem namespace ativado)
        // total() {
        //     return this.$store.getters.valorTotal
        // },
        
        produtos() {
            return this.$store.state.carrinho.produtos
        }
    }
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

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }
</style>
