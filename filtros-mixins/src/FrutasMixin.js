export default {
    data() {
        return {
            fruta: '',
            frutas: ['Banana', 'Maçã', 'Melão']
        }
    },
    methods: {
        addFruta() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }


    //havendo conflito no componente onde o mixin está sendo usado, seja de atributo, propriedade ou função
    //terá prioridade o atributo, propriedade ou função do componente que está invocando o mixin
    //esta é uma ótima forma de reaproveitar código, já que cada chamada do mixin gera uma estancia nova e independente
}