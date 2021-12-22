<template>
	<!-- 
        Div Escolha, emite um evento para poder funcionar como v-model, qdo invocada por outro componente
        :class está atribuindo classes dinâmicamente. A classe é utilizada apenas qdo o valor é TRUE, por isso, os testes com a props value

        Dentro da div escolha, temos o botão, que está sendo validado tbm pela props value, exibindo apenas o botão coerente com o estado do objeto
    -->
	<div
		class="escolha"
		@click="$emit('input', !value)"
		:class="{ ligado: value, desligado: !value }"
	>
		<div v-if="value" class="botao"></div>
		<div v-else class="botao"></div>
	</div>
</template>

<script>
export default {
        props:{
            value: {
                type: Boolean,
                default: false
            }
        }
    }

</script>

<style scoped>
.escolha {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 15px;
	width: 40px;
	border-radius: 20px;
	border: 1px solid #AAA;
}

.botao {
	position: absolute;
	margin: 0px 5px;
	height: 26px;
	width: 26px;
	border-radius: 13px;
	background: #FFF;
	box-shadow: 0px 0px 5px #000B;
}

.desligado {
	background-color: #AAA;
}

.ligado {
	background-color: #7495c2;
}

.desligado .botao {
	left: -10px;
	/*align-self: start;*/
}

.ligado .botao {
	background-color: #255ca9;
	right: -10px;
	/*align-self: flex-end;*/
}
</style>
