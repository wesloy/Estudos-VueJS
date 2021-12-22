<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<Menu />
		<transition mode='out-in' enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">	
			<router-view/> <!-- Carregar qualquer rota enviado para o App -->
		</transition>
	</div>
</template>

<script>
import Menu from "./template/Menu";
export default {
	components: {Menu}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
