import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            counter: 0,
            sports: {
                football: [
                    {
                        gameId: '1',
                        time: 'Uto. 22:00',
                        pairs: [
                            {
                                name: 'Chelsea',
                                id: '1'
                            },
                            {
                                name: 'Manchester Utd.',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.55'
                            }, {
                                tip: 'x',
                                odd: '2.55'
                            }, {
                                tip: '2',
                                odd: '3.55'
                            },
                        ],
                        numberOfGames: '3'
                    }, {
                        gameId: '2',
                        time: 'Uto. 21:00',
                        pairs: [
                            {
                                name: 'Zvezda',
                                id: '1'
                            },
                            {
                                name: 'Partizan',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '2.55'
                            }, {
                                tip: 'x',
                                odd: '3.05'
                            }, {
                                tip: '2',
                                odd: '2.55'
                            },
                        ],
                        numberOfGames: '3'
                    },
                ], basketball: [
                    {
                        gameId: '2',
                        time: 'Uto. 21:00',
                        pairs: [
                            {
                                name: 'Zvezda',
                                id: '1'
                            },
                            {
                                name: 'Partizan',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.55'
                            }, {
                                tip: 'x',
                                odd: '2.55'
                            }, {
                                tip: '2',
                                odd: '3.55'
                            },
                        ],
                        numberOfGames: '3'
                    }
                ]
            }
        };
    },
    getters: {
        pickedSport(state) {
            return state.sports;
        },
    }
});

export default store;