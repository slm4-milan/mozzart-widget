import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            activeSport: 'football',
            selectedTip: null,
            sports: {
                football: [
                    {
                        gameId: '1',
                        time: 'Uto. 20:00',
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
                        numberOfGames: '350'
                    }, {
                        gameId: '2',
                        time: 'Uto. 20:00',
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
                        numberOfGames: '364'
                    }, {
                        gameId: '3',
                        time: 'Uto. 21:00',
                        pairs: [
                            {
                                name: 'Arsenal',
                                id: '1'
                            },
                            {
                                name: 'Everton',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.33'
                            }, {
                                tip: 'x',
                                odd: '5.25'
                            }, {
                                tip: '2',
                                odd: '8.50'
                            },
                        ],
                        numberOfGames: '360'
                    }, {
                        gameId: '4',
                        time: 'Uto. 21:00',
                        pairs: [
                            {
                                name: 'Liverpool',
                                id: '1'
                            },
                            {
                                name: 'Wolves',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.12'
                            }, {
                                tip: 'x',
                                odd: '9.00'
                            }, {
                                tip: '2',
                                odd: '17.00'
                            },
                        ],
                        numberOfGames: '312'
                    }, {
                        gameId: '5',
                        time: 'Uto. 21:00',
                        pairs: [
                            {
                                name: 'Fiorentina',
                                id: '1'
                            },
                            {
                                name: 'Juventus',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.75'
                            }, {
                                tip: 'x',
                                odd: '4.00'
                            }, {
                                tip: '2',
                                odd: '4.33'
                            },
                        ],
                        numberOfGames: '359'
                    }, {
                        gameId: '6',
                        time: 'Uto. 21:00',
                        pairs: [
                            {
                                name: 'Torino',
                                id: '1'
                            },
                            {
                                name: 'Roma',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '3.50'
                            }, {
                                tip: 'x',
                                odd: '3.75'
                            }, {
                                tip: '2',
                                odd: '2.00'
                            },
                        ],
                        numberOfGames: '333'
                    }, {
                        gameId: '7',
                        time: 'Uto. 22:00',
                        pairs: [
                            {
                                name: 'Real Madrid',
                                id: '1'
                            },
                            {
                                name: 'Betis',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.50'
                            }, {
                                tip: 'x',
                                odd: '5.00'
                            }, {
                                tip: '2',
                                odd: '5.50'
                            },
                        ],
                        numberOfGames: '318'
                    }, {
                        gameId: '8',
                        time: 'Uto. 22:00',
                        pairs: [
                            {
                                name: 'Barcelona',
                                id: '1'
                            },
                            {
                                name: 'Villarreal',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '2.00'
                            }, {
                                tip: 'x',
                                odd: '4.00'
                            }, {
                                tip: '2',
                                odd: '3.50'
                            },
                        ],
                        numberOfGames: '364'
                    },
                ], basketball: [
                    {
                        gameId: '9',
                        time: 'Uto. 18:30',
                        pairs: [
                            {
                                name: 'Levski',
                                id: '1'
                            },
                            {
                                name: 'Spartak',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.35'
                            }, {
                                tip: 'x',
                                odd: '15.00'
                            }, {
                                tip: '2',
                                odd: '3.50'
                            },
                        ],
                        numberOfGames: '18'
                    }, {
                        gameId: '10',
                        time: 'Uto. 19:00',
                        pairs: [
                            {
                                name: 'Telekom',
                                id: '1'
                            },
                            {
                                name: 'Bayern',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '2.70'
                            }, {
                                tip: 'x',
                                odd: '14.00'
                            }, {
                                tip: '2',
                                odd: '1.55'
                            },
                        ],
                        numberOfGames: '94'
                    }, {
                        gameId: '11',
                        time: 'Uto. 19:30',
                        pairs: [
                            {
                                name: 'Panathnainakos',
                                id: '1'
                            },
                            {
                                name: 'Larisa',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.03'
                            }, {
                                tip: 'x',
                                odd: '28.00'
                            }, {
                                tip: '2',
                                odd: '12.00'
                            },
                        ],
                        numberOfGames: '92'
                    }, {
                        gameId: '12',
                        time: 'Uto. 20:00',
                        pairs: [
                            {
                                name: 'New York (W)',
                                id: '1'
                            },
                            {
                                name: 'Minnesota (W)',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.70'
                            }, {
                                tip: 'x',
                                odd: '15.00'
                            }, {
                                tip: '2',
                                odd: '2.30'
                            },
                        ],
                        numberOfGames: '11'
                    }, {
                        gameId: '13',
                        time: 'Uto. 21:30',
                        pairs: [
                            {
                                name: 'Ada',
                                id: '1'
                            },
                            {
                                name: 'Antibes',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.55'
                            }, {
                                tip: 'x',
                                odd: '14.50'
                            }, {
                                tip: '2',
                                odd: '2.70'
                            },
                        ],
                        numberOfGames: '18'
                    }, {
                        gameId: '14',
                        time: 'Uto. 22:00',
                        pairs: [
                            {
                                name: 'Seattle',
                                id: '1'
                            },
                            {
                                name: 'Atlanta',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.30'
                            }, {
                                tip: 'x',
                                odd: '16.00'
                            }, {
                                tip: '2',
                                odd: '4.00'
                            },
                        ],
                        numberOfGames: '38'
                    }, {
                        gameId: '15',
                        time: 'Uto. 22:30',
                        pairs: [
                            {
                                name: 'Boston',
                                id: '1'
                            },
                            {
                                name: 'Denver',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.33'
                            }, {
                                tip: 'x',
                                odd: '15.00'
                            }, {
                                tip: '2',
                                odd: '2.40'
                            },
                        ],
                        numberOfGames: '93'
                    }, {
                        gameId: '16',
                        time: 'Uto. 23:00',
                        pairs: [
                            {
                                name: 'Golden State',
                                id: '1'
                            },
                            {
                                name: 'Dallas',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.75'
                            }, {
                                tip: 'x',
                                odd: '13.00'
                            }, {
                                tip: '2',
                                odd: '2.20'
                            },
                        ],
                        numberOfGames: '83'
                    },
                ]
            },

        };
    },
    mutations: {
        activateSport(state, sport) {
            state.activeSport = sport;
        },

        setTip(state, tip) {
            state.selectedTip = tip;
        },
    },
    getters: {
        activeSport(state) {
            return state.activeSport;
        },

        activeSportPairs(state, getters) {
            return state.sports[getters.activeSport];
        },
        getSelectedTip(state) {
            return state.selectedTip;
        },

    }
});

export default store;