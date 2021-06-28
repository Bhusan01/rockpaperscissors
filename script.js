choices = document.querySelectorAll('.choice')
rstart = document.querySelector('.restart-btn');
modal = document.querySelector('.modal')
result = document.querySelector('#result')
score = document.querySelector('.score')
results = {
    player: 0,
    computer: 0
}
function play(event) {
    rstart.style.display = 'block'
    const comp = computer()
    const play = event.target.id
    const winner =  getWinner(play, comp)
    showWinner(winner, comp)
}
function computer() {
    ran  = Math.random()
    if (ran < 0.34) {
        return "rock"
    }else if(ran >= 0.67 ) {
        return "scissors"
    }
    else{
        return "paper"
    }
}
function getWinner(p, c) {
    if (p == c) {
        return "draw"
    }else if(p == "rock") {
        if (c == "paper") {
            return "computer"
        }else{
            return "player"
        }
    }else if(p == "scissors") {
        if (c == "rock") {
            return "computer"
        }else{
            return "player"
        }
    }else if(p == "paper") {
        if (c == "scissors") {
            return "computer"
        }else{
            return "player"
        }
    }
}   
function showWinner(winner, computerChoice) {
   
    if (winner == "computer") {
        results.computer++
        score.innerHTML = `
        <p> player: ${results.player}</p>
        <p> computer: ${results.computer}</p>`
        result.innerHTML = 
            `<h1>you lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"</i>
            <p> computer chose <strong>
            ${computerChoice}
            </strong> </p>
            `
    }else if(winner == "player") {
        results.player++
        score.innerHTML = `
        <p> player: ${results.player}</p>
        <p> computer: ${results.computer}</p>`
        result.innerHTML = 
        `<h1 class="text-win">you win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"</i>
        <p> computer chose <strong>
        ${computerChoice}
        </strong> </p>
        `
    }else{
        result.innerHTML = 
        `<h1>draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"</i>
        <p> computer chose <strong>
        ${computerChoice}
        </strong> </p>
        `
    }
    modal.style.display = 'block'
}

function restart() {
    results.player = 0
    results.computer = 0
    score.innerHTML = `
    <p> player: ${results.player}</p>
    <p> computer: ${results.computer}</p>`
    rstart.style.display = 'none'
}
function clearWindow(event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}

choices.forEach(element => { element.addEventListener('click', play)
});
window.addEventListener('click', clearWindow
)
rstart.addEventListener('click', restart)