import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            pagination: {
                activePage: 1,
                itemsPerPage: 2,
                totalPages: null,
            },
            windowWidth: '',
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
                ], tennis: [
                    {
                        gameId: '17',
                        time: 'Uto. 18:30',
                        pairs: [
                            {
                                name: 'Imamura M.',
                                id: '1'
                            },
                            {
                                name: 'Seelig K.',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '2.70'
                            }, {
                                tip: '2',
                                odd: '1.40'
                            },
                        ],
                        numberOfGames: '12'
                    }, {
                        gameId: '18',
                        time: 'Uto. 19:00',
                        pairs: [
                            {
                                name: 'Kawachi K.',
                                id: '1'
                            },
                            {
                                name: 'Addison A.',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '2.11'
                            },
                            {
                                tip: '2',
                                odd: '1.65'
                            },
                        ],
                        numberOfGames: '12'
                    }, {
                        gameId: '19',
                        time: 'Uto. 19:30',
                        pairs: [
                            {
                                name: 'Kumasaka T.',
                                id: '1'
                            },
                            {
                                name: 'Palan D.',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '3.00'
                            }, {
                                tip: '2',
                                odd: '1.33'
                            },
                        ],
                        numberOfGames: '12'
                    }, {
                        gameId: '20',
                        time: 'Uto. 20:00',
                        pairs: [
                            {
                                name: 'Park U.',
                                id: '1'
                            },
                            {
                                name: 'Cavrak K.',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.30'
                            },
                            {
                                tip: '2',
                                odd: '3.20'
                            },
                        ],
                        numberOfGames: '12'
                    }, {
                        gameId: '21',
                        time: 'Uto. 21:30',
                        pairs: [
                            {
                                name: 'Tanuma R.',
                                id: '1'
                            },
                            {
                                name: 'Suresh D.',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.22'
                            },
                            {
                                tip: '2',
                                odd: '3.80'
                            },
                        ],
                        numberOfGames: '12'
                    }, {
                        gameId: '22',
                        time: 'Uto. 22:00',
                        pairs: [
                            {
                                name: 'Ly H.',
                                id: '1'
                            },
                            {
                                name: 'Huang T.',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.12'
                            }, {
                                tip: '2',
                                odd: '5.30'
                            },
                        ],
                        numberOfGames: '12'
                    }, {
                        gameId: '23',
                        time: 'Uto. 22:30',
                        pairs: [
                            {
                                name: 'Descotte M.',
                                id: '1'
                            },
                            {
                                name: 'Bianchini E.',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.07'
                            }, {
                                tip: '2',
                                odd: '6.80'
                            },
                        ],
                        numberOfGames: '12'
                    }, {
                        gameId: '24',
                        time: 'Uto. 23:00',
                        pairs: [
                            {
                                name: 'Barroso A.',
                                id: '1'
                            },
                            {
                                name: 'Amoros P.',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.12'
                            }, {
                                tip: '2',
                                odd: '5.30'
                            },
                        ],
                        numberOfGames: '12'
                    },
                ], hockey: [
                    {
                        gameId: '25',
                        time: 'Uto. 20:00',
                        pairs: [
                            {
                                name: 'Laval R.',
                                id: '1'
                            },
                            {
                                name: 'Springfield T.',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '2.45'
                            }, {
                                tip: 'x',
                                odd: '4.1'
                            }, {
                                tip: '2',
                                odd: '2.30'
                            },
                        ],
                        numberOfGames: '57'
                    }, {
                        gameId: '26',
                        time: 'Uto. 20:00',
                        pairs: [
                            {
                                name: 'Stockton Heat',
                                id: '1'
                            },
                            {
                                name: 'Chicago W.',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '2.20'
                            }, {
                                tip: 'x',
                                odd: '4.10'
                            }, {
                                tip: '2',
                                odd: '2.60'
                            },
                        ],
                        numberOfGames: '57'
                    }, {
                        gameId: '27',
                        time: 'Uto. 21:00',
                        pairs: [
                            {
                                name: 'NY Rangers',
                                id: '1'
                            },
                            {
                                name: 'Tampa Bay',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '2.65'
                            }, {
                                tip: 'x',
                                odd: '3.80'
                            }, {
                                tip: '2',
                                odd: '2.25'
                            },
                        ],
                        numberOfGames: '57'
                    }, {
                        gameId: '28',
                        time: 'Uto. 21:00',
                        pairs: [
                            {
                                name: 'Shawinigan Cataractes',
                                id: '1'
                            },
                            {
                                name: 'Charlottetown Islanders',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '2.81'
                            }, {
                                tip: 'x',
                                odd: '4.12'
                            }, {
                                tip: '2',
                                odd: '2.00'
                            },
                        ],
                        numberOfGames: '57'
                    }, {
                        gameId: '29',
                        time: 'Uto. 21:00',
                        pairs: [
                            {
                                name: 'Laval Rocket',
                                id: '1'
                            },
                            {
                                name: 'Springfield Thunderbirds',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '2.43'
                            }, {
                                tip: 'x',
                                odd: '4.15'
                            }, {
                                tip: '2',
                                odd: '2.29'
                            },
                        ],
                        numberOfGames: '57'
                    }, {
                        gameId: '30',
                        time: 'Uto. 21:00',
                        pairs: [
                            {
                                name: 'Florida Everblades',
                                id: '1'
                            },
                            {
                                name: 'Toledo Walleye',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '2.18'
                            }, {
                                tip: 'x',
                                odd: '4.05'
                            }, {
                                tip: '2',
                                odd: '2.56'
                            },
                        ],
                        numberOfGames: '57'
                    }, {
                        gameId: '31',
                        time: 'Uto. 22:00',
                        pairs: [
                            {
                                name: 'Sweden U18 W',
                                id: '1'
                            },
                            {
                                name: 'USA U18 W',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '2.50'
                            }, {
                                tip: 'x',
                                odd: '3.00'
                            }, {
                                tip: '2',
                                odd: '2.00'
                            },
                        ],
                        numberOfGames: '57'
                    }, {
                        gameId: '32',
                        time: 'Uto. 22:00',
                        pairs: [
                            {
                                name: 'Sydney Ice Dogs',
                                id: '1'
                            },
                            {
                                name: 'Melbourne Ice',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.77'
                            }, {
                                tip: 'x',
                                odd: '5.35'
                            }, {
                                tip: '2',
                                odd: '3.05'
                            },
                        ],
                        numberOfGames: '57'
                    },
                ],
                volleyball: [
                    {
                        gameId: '33',
                        time: 'Uto. 18:30',
                        pairs: [
                            {
                                name: 'Belgium',
                                id: '1'
                            },
                            {
                                name: 'Chech R.',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '4.40'
                            }, {
                                tip: '2',
                                odd: '1.17'
                            },
                        ],
                        numberOfGames: '17'
                    }, {
                        gameId: '34',
                        time: 'Uto. 19:00',
                        pairs: [
                            {
                                name: 'Macedonia',
                                id: '1'
                            },
                            {
                                name: 'Romania',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '3.05'
                            },
                            {
                                tip: '2',
                                odd: '1.32'
                            },
                        ],
                        numberOfGames: '17'
                    }, {
                        gameId: '35',
                        time: 'Uto. 19:30',
                        pairs: [
                            {
                                name: 'Portugal W.',
                                id: '1'
                            },
                            {
                                name: 'Luxembourg W',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.01'
                            }, {
                                tip: '2',
                                odd: '10.90'
                            },
                        ],
                        numberOfGames: '17'
                    }, {
                        gameId: '36',
                        time: 'Uto. 20:00',
                        pairs: [
                            {
                                name: 'Poland',
                                id: '1'
                            },
                            {
                                name: 'Argentina',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.32'
                            },
                            {
                                tip: '2',
                                odd: '3.05'
                            },
                        ],
                        numberOfGames: '17'
                    }, {
                        gameId: '37',
                        time: 'Uto. 21:30',
                        pairs: [
                            {
                                name: 'Japan',
                                id: '1'
                            },
                            {
                                name: 'Netherlands',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.32'
                            },
                            {
                                tip: '2',
                                odd: '3.05'
                            },
                        ],
                        numberOfGames: '17'
                    }, {
                        gameId: '38',
                        time: 'Uto. 22:00',
                        pairs: [
                            {
                                name: 'France',
                                id: '1'
                            },
                            {
                                name: 'Italy',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.22'
                            }, {
                                tip: '2',
                                odd: '3.80'
                            },
                        ],
                        numberOfGames: '17'
                    }, {
                        gameId: '39',
                        time: 'Uto. 22:30',
                        pairs: [
                            {
                                name: 'Brazil',
                                id: '1'
                            },
                            {
                                name: 'Australia',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.02'
                            }, {
                                tip: '2',
                                odd: '9.90'
                            },
                        ],
                        numberOfGames: '17'
                    }, {
                        gameId: '40',
                        time: 'Uto. 23:00',
                        pairs: [
                            {
                                name: 'Serbia',
                                id: '1'
                            },
                            {
                                name: 'Bulgaria',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.75'
                            }, {
                                tip: '2',
                                odd: '2.25'
                            },
                        ],
                        numberOfGames: '17'
                    },
                ],
                handball: [
                    {
                        gameId: '41',
                        time: 'Uto. 20:00',
                        pairs: [
                            {
                                name: 'GOG',
                                id: '1'
                            },
                            {
                                name: 'Aalborg',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.60'
                            }, {
                                tip: 'x',
                                odd: '8.00'
                            }, {
                                tip: '2',
                                odd: '2.85'
                            },
                        ],
                        numberOfGames: '16'
                    }, {
                        gameId: '42',
                        time: 'Uto. 20:00',
                        pairs: [
                            {
                                name: 'Aix',
                                id: '1'
                            },
                            {
                                name: 'Montpellier',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '2.05'
                            }, {
                                tip: 'x',
                                odd: '8.00'
                            }, {
                                tip: '2',
                                odd: '2.05'
                            },
                        ],
                        numberOfGames: '16'
                    }, {
                        gameId: '43',
                        time: 'Uto. 21:00',
                        pairs: [
                            {
                                name: 'Cesson',
                                id: '1'
                            },
                            {
                                name: 'Dunkerque',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.60'
                            }, {
                                tip: 'x',
                                odd: '8.00'
                            }, {
                                tip: '2',
                                odd: '2.85'
                            },
                        ],
                        numberOfGames: '16'
                    }, {
                        gameId: '44',
                        time: 'Uto. 21:00',
                        pairs: [
                            {
                                name: 'Chambery',
                                id: '1'
                            },
                            {
                                name: 'Saran',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.10'
                            }, {
                                tip: 'x',
                                odd: '14.00'
                            }, {
                                tip: '2',
                                odd: '9.00'
                            },
                        ],
                        numberOfGames: '16'
                    }, {
                        gameId: '45',
                        time: 'Uto. 21:00',
                        pairs: [
                            {
                                name: 'Chartres',
                                id: '1'
                            },
                            {
                                name: 'St. Raphael',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '2.20'
                            }, {
                                tip: 'x',
                                odd: '8.00'
                            }, {
                                tip: '2',
                                odd: '1.90'
                            },
                        ],
                        numberOfGames: '16'
                    }, {
                        gameId: '46',
                        time: 'Uto. 21:00',
                        pairs: [
                            {
                                name: 'Istres',
                                id: '1'
                            },
                            {
                                name: 'Nancy',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.55'
                            }, {
                                tip: 'x',
                                odd: '8.50'
                            }, {
                                tip: '2',
                                odd: '2.95'
                            },
                        ],
                        numberOfGames: '16'
                    }, {
                        gameId: '47',
                        time: 'Uto. 22:00',
                        pairs: [
                            {
                                name: 'Limoges',
                                id: '1'
                            },
                            {
                                name: 'Nimes',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '3.40'
                            }, {
                                tip: 'x',
                                odd: '8.50'
                            }, {
                                tip: '2',
                                odd: '1.45'
                            },
                        ],
                        numberOfGames: '16'
                    }, {
                        gameId: '48',
                        time: 'Uto. 22:00',
                        pairs: [
                            {
                                name: 'Nantes',
                                id: '1'
                            },
                            {
                                name: 'Toulouse',
                                id: '2'
                            }
                        ],
                        offer: [
                            {
                                tip: '1',
                                odd: '1.22'
                            }, {
                                tip: 'x',
                                odd: '11.00'
                            }, {
                                tip: '2',
                                odd: '5.20'
                            },
                        ],
                        numberOfGames: '16'
                    },
                ],
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

        setWindowWidth(state, width) {
            state.windowWidth = width
        },

        setItemsPerPage(state, itemsPerPage) {
            state.pagination.itemsPerPage = itemsPerPage;
        },

        setNumOfPages(state, totalItems) {
            const remainder = totalItems % state.pagination.itemsPerPage;
            if (remainder > 0) {
                state.pagination.totalPages = Math.floor(totalItems / state.pagination.itemsPerPage) + 1;
            } else {
                state.pagination.totalPages = totalItems / state.pagination.itemsPerPage;
            }
        },
        setActivePage(state, pageNum) {
            state.pagination.activePage = pageNum;
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
        getWindowWidth(state) {
            return state.windowWidth;
        },
        getNumOfPages(state) {
            return state.pagination.totalPages
        },
        getActivePage(state) {
            return state.pagination.activePage;
        },

        getNumOfItemsPerPage(state) {
            return state.pagination.itemsPerPage
        },
    }
});

export default store;