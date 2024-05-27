

// app.js
const { createApp } = Vue

   createApp({
    data() {
        return {
            cercando: ``,
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                    
                }
            ],
            activeContactIndex: null,
            newMessage: '',
           
        }    
    },
    methods: {
        // Metodo per selezionare un contatto attivo
        selectContact(index) {
            this.activeContactIndex = index;
        },
        // Metodo per inviare un nuovo messaggio
        sendMessage() {
            if (this.newMessage.trim() !== '') {
                const date = new Date().toLocaleString();
                this.contacts[this.activeContactIndex].messages.push({
                    date: date,
                    message: this.newMessage,
                    status: 'sent'
                });
                // Simulazione della risposta dell'interlocutore dopo 1 secondo
                setTimeout(() => {
                    this.contacts[this.activeContactIndex].messages.push({
                        date: date,
                        message: 'Ok',
                        status: 'received'
                    });
                }, 1000);
                this.newMessage = ''; // Pulisci il campo di input dopo l'invio
            }
        },
        // Metodo per ottenere l'ultimo messaggio di un contatto
        getLastMessage(contact) {
            const lastMessage = contact.messages[contact.messages.length - 1];
            return lastMessage ? lastMessage.message : '';
        },
        sendMessage() {
            // Verifica se il campo di input del messaggio non è vuoto
            if (this.newMessage.trim() !== '') {
                // Aggiungi il messaggio inviato alla lista dei messaggi del contatto attivo
                const date = new Date().toLocaleString();
                this.contacts[this.activeContactIndex].messages.push({
                    date: date,
                    message: this.newMessage,
                    status: 'sent'
                });
        
                // Simula la risposta dell'interlocutore dopo 1 secondo
                setTimeout(() => {
                    this.contacts[this.activeContactIndex].messages.push({
                        date: date,
                        message: 'Ok',
                        status: 'received'
                    });
                }, 1000);
        
                // Pulisci il campo di input del messaggio
                this.newMessage = '';
            }
        },
        filteredContacts() {
            // Converti il testo di ricerca in minuscolo per una corrispondenza senza distinzioni tra maiuscole e minuscole
            const query = this.cercando.toLowerCase();
            // Filtra i contatti il cui nome contiene il testo di ricerca
            return this.contacts.filter(contact => contact.name.toLowerCase().includes(query));
        }
    }
}).mount(`#app`)
