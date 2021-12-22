<template>
	<div id="app">
		<h1>Super Quiz</h1>
		<transition name="flip" mode="out-in">
			<Question
				v-if="questionMode"
				:question="questions[currentQuestion]"
				@answered="showResult"
			/>
			<!-- escutando a emissão do compoente filho que por padrão passa o boolean e repassando ao método -->
			<Result v-else :result="result" @confirmed="nextQuestion" />
			<!-- escutando a emissão do compoente filho que por padrão passa o boolean e repassando ao método -->
		</transition>
	</div>
</template>

<script>
import questions from './util/questions' //usado como propriedade
import Question from './components/Question.vue'
import Result from './components/Result.vue'

export default {
	name: 'app',
	components: { Question, Result },
	data() {
		return {
			result: false,
			questionMode: true,
			questions, //usando componente como propriedade dentro do APP
			currentQuestion: 0
		}
	},
	methods: {
		showResult(result) {
			this.result = result
			this.questionMode = false
		},
		nextQuestion() {
			let r = Math.random() * this.questions.length //Match.random() calcula um número entre 0 e 1 aleatoriamente, multiplicado pelo tamanho do Array temos um novo número par índice.
			this.currentQuestion = parseInt(r) // como o resultado é um float e o índice aceita apenas Int, necessária a conversão.
			this.questionMode = true
		}
	}
}
</script>

<style>
body {
	background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
	font-family: "Oswald", sans-serif;
	color: #FFF;
	height: 100vh;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
}

#app h1 {
	font-weight: 200;
	font-size: 4rem;
}

@keyframes flip-out {
	from {
		transform: rotateY(0deg);
	}
	to {
		transform: rotateY(90deg);
	}
}
@keyframes flip-in {
	from {
		transform: rotateY(90deg);
	}
	to {
		transform: rotateY(0deg);
	}
}

.flip-enter-active {
	animation: flip-in 0.3s ease;
}
.flip-leave-active {
	animation: flip-out 0.3s ease;
}
</style>
