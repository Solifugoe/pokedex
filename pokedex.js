Vue.createApp({
    data() {
        return {
            pokemons: []
        }
    },
    methods: {
        async getPokemons() {
            this.pokemons = []; // Limpiar el array de pokemons existentes
            for (let i = 1; i < 500; i++) {
             
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, {
                    method: 'GET'
                });
                const dataPokemon = await response.json();
                this.pokemons.push(dataPokemon);
            }
        }
    }
}).mount('#app');
