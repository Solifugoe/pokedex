Vue.createApp({
    data() {
        return {
            pokemons: []
        }
    },
    methods: {
        async getPokemons() {
            this.pokemons = []; // Limpiar el array de pokemons existentes
            for (let i = 0; i < 500; i++) {
                const valor = Math.floor(Math.random() * 905);
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + valor, {
                    method: 'GET'
                });
                const dataPokemon = await response.json();
                this.pokemons.push(dataPokemon);
            }
        }
    }
}).mount('#app');
