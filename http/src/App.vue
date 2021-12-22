<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
			<b-alert show dismissible v-for="m in mensagens" :key="m.texto"
			:variant='m.tipo'>{{ m.texto }}</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input
					type="text"
					size="lg"
					v-model="usuario.nome"
					placeholder="Informe o Nome"
				></b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input
					type="email"
					size="lg"
					v-model="usuario.email"
					placeholder="Informe o E-mail"
				></b-form-input>
			</b-form-group>

			<b-button @click="salvar" variant="primary" size="lg">Salvar</b-button>
			<b-button @click="obterUsuarios" variant="success" size="lg" class="ml-2"
				>Listar Usuários</b-button
			>
		</b-card>
		<hr />
		<b-list-group>
			<b-list-group-item
				v-for="(user, id) in usuarios"
				:key="id"
				v-show="exibirLista"
			>
				<strong>Nome:</strong> {{ user.nome }} <br />
				<strong>E-mail:</strong> {{ user.email }} <br />
				<strong>ID:</strong> {{ id }} <br />
				<b-button variant='warning' size='lg' @click='carregar(id)' class="mr-2">Alterar</b-button>
				<b-button variant='danger' size='lg' @click='excluir(id)'>Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			usuarios: [],
			id: null,
			mensagens: [],
			usuario: {
				nome: '',
				email: ''
			},
			exibirLista: false
		}

	}, 
	methods:{
		limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
		},
		salvar(){

			const metodo = this.id ? 'patch' : 'post' //verficando se vai atualizar ou inserir novo
			const finalUrl = this.id ? `/${this.id}.json` : '.json' //se pacth precisa do id
			const msg = this.id ? 'Registro alterado com sucesso!' : 'Registro salvo com sucesso!'

			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
			.then(
				() => {
					this.limpar()
					this.mensagens.push({
						tipo: 'success',
						texto: msg
					})
					//carregando a nova lista 
					this.obterUsuarios()					
				}
			)
			.catch(
				() => {
					this.limpar()
					this.mensagens.push({
							tipo: 'danger',
							texto:'Houve um problema ao salvar o registro do usuário!'
						})
				}
			)
			//de forma dinâmica alterando ou incluindo novo usuário
		},		
		obterUsuarios() {
			//pra requisições tipo GET não é necessário explicitar, tipo... this.$http.get
			this.$http(':5200/api/filas')
			.then(
				resp => {
					this.usuarios = resp.data
					this.exibirLista = true
				}
			)
			.catch(
				() => {
					this.limpar()
					this.mensagens.push({
							tipo: 'danger',
							texto:'Houve um problema ao listar os usuários!'
						})
				}
			)
		},
		carregar(id){
			this.id = id
			this.usuario = { ...this.usuarios[id]}
			//função squad para carregar todos os elementos do arraio, pelo id de referencia
		},
		excluir(id){

			this.$http.delete(`/usuarios/${id}.json`)
			.then(
				() => {
					//primeiro limpa o formulário e depois listar outra vez
					this.limpar()
					//enviando mensagem
					this.mensagens.push({
						tipo: 'success',
						texto: 'Registro deletado com sucesso!'
					})
					//carregando a nova lista 
					this.obterUsuarios()
				}
			)
			.catch(
				() => {
					this.limpar()
					this.mensagens.push({
							tipo: 'danger',
							texto:'Houve um problema ao excluir o usuário!'
						})
				}
			)
		}
	}

}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
