<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr />
		<p>{{ cpfRecebido | cpf | inverter }}</p>
		<!-- 
			O uso do pipeline ( | ), o Vue sabe que deve chamar um filtro 
			Pode-se encadiar vários filtros sequenciais, separando por pipeline
			o filtro inverter, está registrado de forma global no main.js
			-->
		<input type="text" :value="cpfRecebido | cpf" />
		<!-- 
			v-bind também suportar os filtros 
			v-model NÃO SUPORTA
			-->
		<hr />
		<Frutas />
		<hr />
		<div>
			<h2>SACOLÃO</h2>
			<ul>
				<li v-for="f in frutas" :key="f">
					{{ f }}
				</li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="addFruta" />
		</div>
	</div>
</template>

<script>
import Frutas from "./Frutas"
import mixFrutas from "./FrutasMixin"

export default {
	components: {Frutas},
	mixins: [mixFrutas],
	filters:{
		cpf(valor){
			
			const arr = `${valor}`.split('') //split vazio, separa todos os cartacteres recebidos em 1 elemento individual dentro do arreio. `${valor}` garante que independente do tipo de entrada o valor será transformando em string.
			arr.splice(3,0,'.') //3ª posição, Zero não retirou nenhum caracter, adicionou um ponto.
			arr.splice(7,0,'.') //colocado na posição 7 e não na 6, pq o splice anterior já acrescentou um ponto.
			arr.splice(11,0,'-')
			return arr.join('') //unificando o arreio outra vez em uma única string
		}

	},
	data(){
		return{
			cpfRecebido: '60070080090',			
		}
	},
	
	
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
input {
	font-size: 2.5rem;
}
</style>
