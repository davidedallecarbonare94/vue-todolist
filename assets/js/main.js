/* 
Istruzioni:
Create una todo list usando VueJS. Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS. Se non sapere che fare, di seguito trovate uno screenshot.
Funzionalitá:
La nostra todo list avrá alcune tasks di default predefinite
L'utente puó inserire nuove tasks
Cliccando sulla "X" l'utente puó cancellare una task
Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
Inoltre L'utente vuole poter modificare una task giá inserita
ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera. Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
*/

const app = new Vue({
    el: "#root",
    data: {
        completedTasks: '',
        newTask: '',
        tasks: [
            "Defeat Kaido", 
            "Defeat Big Mom", 
            "Find the One Piece", 
            "Become the King of Pirates", 
        ],
    },
    methods: {
        addTask() {
           if (this.newTask = "") {
                alert("Non puoi diventare il Re dei Pirati se non ti impegni!")
            } 
            this.tasks.push(this.newTask)
            this.newTask = ""
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
        },
        /* moveToComplete(index) {
            this.tasks.push(this.completedTasks)
            this.tasks.splice(index, 1)
            console.log(this.completedTasks);
        } */
        


    },
    mounted() {
        document.addEventListener("keyup", (element) => {
            if (element.key === "Enter") {
                this.addTask()
            }
        })
    }
   


})
