new Vue({

    el: '#app',
    data: {
        running: false,
        countAttack: 0,
        freeAttackSpecial: 0,
        countAttackSpecial: 0,
        countHeal: 0,
        freeHeal: 0,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },

    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
                //é uma condicional, sem o famoso if, que retorna true apenas se uma das condições for verdadeira 
        },


        isZeroAttack() {
            return this.countAttack == 0
        },
        isZeroAttackSpecial() {
            return this.countAttackSpecial == 0
        },
        isZeroHeal() {
            return this.countHeal == 0
        }

    },


    methods: {

        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.countAttack = 5
            this.countAttackSpecial = 0
            this.countHeal = 0
            this.freeHeal = 0
            this.freeAttackSpecial = 0
            this.logs = []
        },

        rules(prop) {

            switch (prop) {
                case 'countAttack':
                    this.countAttack -= 1
                    this.freeAttackSpecial += 1
                    this.freeHeal += 1
                    break;

                case 'countAttackSpecial':
                    this.countAttackSpecial -= 1
                    break;

                case 'countHeal':
                    this.countHeal -= 1
                    this.countAttack += 1 //cada cura gera 1 ataque a mais
                    break;

                default:
                    break;
            }


            if (this.freeHeal == 3) {
                this.freeHeal = 0
                this.countHeal = 1
            }

            if (this.freeAttackSpecial == 5) {
                this.freeAttackSpecial = 0
                this.countAttackSpecial = 1
            }


        },

        attack(especial) {
            // função de ataque geral, sendo condicional ter um espeical ou não
            // valor de ataque vai ser randômico, para isso, usa-se uma função externa para ter um clean code
            this.hurt('monsterLife', 10, 20, especial, 'Jogador', 'Monstro', 'player')
            if (this.monsterLife > 0) {
                //se o montro morrer antes, não justifica o ataque no player
                this.hurt('playerLife', 10, 25, false, 'Monstro', 'Jogador', 'monster') // monstro não tem ataque especial
            }

        },

        hurt(prop, min, max, especial, source, target, cls) {
            // calcular a ferida (hurt) causado pelo ataque

            const plus = especial ? 5 : 0 // verificando se é um ataque especial e adicionando um valor
            const hurt = this.getRandom(
                    min + plus,
                    max + plus
                ) // com o cálculo do ferimento aplica-se ao valor de life do monstro e do jogador

            this[prop] = Math.max(this[prop] - hurt, 0)
                // usa-se Math.max, para que se o valor calculado seja menor que zero, pegue o valor 0, ou seja, o maior valor dentro da lista
                // usa-se this[prop] para atribruir dinâmicamente o cálculo de hurt ao monstro e ao jogador, dependendo de como o parâmetro PROP é preenchido


            //registrando o log
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)

            //computando as jogadas restantes
            if (!especial && prop == 'monsterLife') {
                //Ou seja, foi uma ataque simples no monstro
                this.rules('countAttack')
            } else if (especial) {
                this.rules('countAttackSpecial')
            }

        },
        healAndHurt() {

            this.healPlayer(10, 20) //curando mais que o ataque, para que o botão tenha realmente validade
            this.hurt('playerLife', 5, 15, false, 'Monstro', 'Jogador', 'monster') //aplicando ataque do monstro


        },
        healPlayer(min, max) {
            // curando o player 
            const healPlayer = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + healPlayer, 100) //capturando o valor menor executado de cura, não permitindo que passe de 100
            this.registerLog(`Jogador ganhou força de ${healPlayer}.`, 'player')
            this.rules('countHeal')
        },

        getRandom(min, max) {
            // gerar um valor randômico entre um valor mín e máx
            // Math.random() gera um valor randômico entre 0 e 1
            // multiplicar por um valor da diferença entre o (max - min)
            // mais o valor o mín, só que como a Math.random() é double e a conta (max - min) + min nunca chega ao máx valor, pode-se chegar ao valor máx através de arrendodamento
            const value = Math.random() * (max - min) + min
            return Math.round(value)

        },
        registerLog(text, cls) {
            //text - é o texto que será escrito, já o cls é a classe que irá separar os ataques do monstro ao do usuário
            // unshift >>> coloca a informação na primeira posição do array
            // push >> coloca na última posição do array
            this.logs.unshift({ text, cls })
        }

    },
    watch: {
        // monitorar a função de hasResult para qdo houver um resultado, alterar os botões exibidos
        // os Watches devem ter o mesmo nome da propriedade ou função monitorada
        hasResult(value) {
            if (value) this.running = false
        },
        hideDivRules() {
            console.log(this.hideDivRules)
        }
    }

})