<template>
	<div>
		<h2>SACOLÃO</h2>
		<ul>
			<li v-for="f in frutas" :key="f">
				{{ f }}
			</li>
		</ul>
		<input type="text" v-model="fruta" @keydown.enter="addFruta" />
	</div>
</template>

<script>
import mixFrutas from "./FrutasMixin"

    export default {
        mixins: [mixFrutas],    
        
    }
</script>

<style scoped>
</style>
