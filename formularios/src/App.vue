<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<input type="text" v-model.trim="usuario.email" />
					<!-- Existe 3 modificadores do v-model: Trim, lazy e Number 
						Tirm retira os espaços em branco do início e fim
					-->
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model.lazy="usuario.senha" />
					<!-- Existe 3 modificadores do v-model: Trim, lazy e Number 
						Lazy: Espera que o foco do componente seja perdido para fazer two way data bind
					-->
				</Rotulo>
				<Rotulo nome="Idade">
					<input type="number" v-model.number="usuario.idade" />
					<!-- Existe 3 modificadores do v-model: Trim, lazy e Number 
						Number: garante que o valor será um número, se no campo monitorado for um número.
					-->
				</Rotulo>
				<Rotulo nome="Mensagem">
					<textarea
						name=""
						cols="30"
						rows="5"
						v-model.lazy="mensagem"
					></textarea>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span class="mr-4"
						><input
							type="checkbox"
							value="reproduzivel"
							v-model="caracteristicas"
						/>
						Reproduzível</span
					>
					<span
						><input
							type="checkbox"
							value="intermitente"
							v-model="caracteristicas"
						/>
						Intermitente</span
					>
					<!--
						Qdo se tem um checkbox pode-se tratar os dados usando um array
						toda vez que o componente for checado, o valor dele será inserido no array e retirado qdo for retirado o check
						-->
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span class="mr-4"
						><input type="radio" value="Web" v-model="produto" /> Web</span
					>
					<span class="mr-4"
						><input type="radio" value="Mobile" v-model="produto" />
						Mobile</span
					>
					<span
						><input type="radio" value="Outro" v-model="produto" /> Outro</span
					>
					<!-- 
						Qdo se associa a mesma propriedade, sendo que a propriedade não é uma lista, o Vue 
						interpreta o funcionamento de um radiobotton
					-->
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select v-model="prioridade">
						<option
							v-for="p in prioridades"
							:key="p.codigo"
							:value="p.codigo"
							:selected="prioridade"
						>
							{{ p.codigo }} - {{ p.nome }}
						</option>
					</select>
					<!--
						usando o v-model, com uma variável externa no select, consegue-se além de iniciar como desejar, ter controle dos atributos do combobox por ela
						Por padrão o combobox armazena nos options o TEXTO, mas alterando o :value pode-se internamente armazenar o dado q desejar.
						:selected tanto pode receber uma informação externa qto uma interna, usando por exemplo: :selected="p.codigo === 3"
						-->
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<Escolha v-model="escolha" />
				</Rotulo>
				<hr />
				<!-- PREVENT o evento submit deixará de recarregar a página -->
				<button @click.prevent="enviar">Enviar</button>
			</form>

			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{ usuario.email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ usuario.senha }}</span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span>{{ usuario.idade }}</span>
				</Rotulo>
				<Rotulo nome="Mensagem">
					<span style="white-space: pre">{{ mensagem }}</span>
					<!-- 
						Por padrão a tag span retira espaços e quebras de linhas, mas a utilização de:
							style="white-space: pre"
						preserva os espaços e quebras
					-->
				</Rotulo>
				<Rotulo nome="Marque as Opções">
					<span>
						<!--
						Como está vindo uma lista é preciso tratar com FOR
						-->
						<ul>
							<li v-for="c in caracteristicas" :key="c">{{ c }}</li>
						</ul>
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span>{{ produto }}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>{{ prioridade }}</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>{{ escolha }}</span>
				</Rotulo>
				<hr />
				<!-- PREVENT o evento submit deixará de recarregar a página -->
				<button @click.prevent="enviar">Voltar</button>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },
	methods:{
		enviar(){
			this.enviado = !this.enviado
		}
	},
	data() {
		return {
			mensagem: '',
			caracteristicas: [],
			produto: 'Web',
			prioridade: 1,
			escolha: true,
			enviado: false,
			prioridades: [
					{codigo: 1, nome:'Baixa'},
					{codigo: 2, nome:'Moderado'},
					{codigo: 3, nome:'Alta'}
				],
				usuario: {
				email: '',
				senha: '',
				idade: 25
				//qdo se define um obj não é preciso criar as propriedade para se fazer um v-bind, porém é mais fácil de fazer manutenção se os definir.
				//outro fator é que se uma propriedade precisa ser definida, todas as outras tbm devem ser definidas
			}
		}
	}
}
</script>

<style>
body {
	background-color: #ECECEC;
}

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #fff;
	background-color: rgb(41, 66, 90);
	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
	color: rgba(53, 52, 52, 0.667);
	padding: 0px 2px 20px 2px;
}

.painel {
	flex: 1;
	background: rgb(137, 193, 238);
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #fff;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: rgb(41, 66, 90);
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
	color: #FFF;
}

.painel button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #e78e19;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 10px;
	padding: 0;
}

.mr-4 {
	margin-right: 10px;
}
</style>
