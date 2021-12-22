<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-destaque-local>Teste de aplicação de diretiva personalizada</p>
		<p
			v-destaque_3:fundo.atrasar.alternar="{
				cor1: 'red',
				cor2: 'green',
				atraso: 2000,
				intervalo: 200,
			}"
		>
			Teste de aplicação de diretiva personalizada
		</p>
	</div>
</template>

<script>
export default {

	directives: {
		'destaque-local': {bind(el) {
				el.style.backgroundColor = 'lightgreen'
				//definindo por diretiva personalizada o funcionamento de um elemento. sem receber parâmetro			
			}
		}
	}
}

</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
