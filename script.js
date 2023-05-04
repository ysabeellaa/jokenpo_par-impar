let pcScore = 0;
let userScore = 0;

const userScore_span = document.getElementById('userScore')
const computerScore_span = document.getElementById('compScore')

const paperChoiceImage = document.getElementById('paperButton');
const rockChoiceImage = document.getElementById('rockButton');
const scissorsChoiceImage = document.getElementById('scissorsButton');

const result_p = document.getElementById('result')
const scores_p = document.getElementById('scores');

//traducaoJogadas
//vencedorPerdedorEmpate


function traducaoJogadas(jogada){
    switch(jogada){
        case "paper":
            return "papel";
        case "rock":
            return "pedra";
        case "scissors":
            return "tesoura";
    }
}

function vencedorPerdedorEmpate(){
    if(userScore > pcScore){
        scores_p.classList = ""
        scores_p.classList.add('green-win')
        scores_p.style.color = "#26ff63";
    }else if (userScore< pcScore){
        scores_p.classList = ""
        scores_p.classList.add('red-lose')
        scores_p.style.color = "#fc121b";
    }else{
        scores_p.classList = ""
        scores_p.style.color = "#ffffff";
    }
}

function logicaGeral(jogadaUsuario){
    let clickedButton = document.getElementById(`${jogadaUsuario}Button`);

    jogadaAleatoriaPc = ["paper", "rock", "scissors"];
    n = (Math.floor(Math.random()*3));
    jogadaPc = jogadaAleatoriaPc[n];
    console.log(jogadaUsuario + jogadaPc)

    switch(jogadaUsuario + jogadaPc){
        //user ganha
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            userScore++;
            userScore_span.innerHTML = userScore;
            vencedorPerdedorEmpate()
            clickedButton.classList.add('green-win');
            setTimeout( () => {clickedButton.classList.remove('green-win')}, 300);
            jogadaUsuario = traducaoJogadas(jogadaUsuario)
            jogadaPc = traducaoJogadas(jogadaPc);
            result_p.innerText = `Você jogou ${jogadaUsuario} e o computador jogou ${jogadaPc}, então você ganhou a rodada!`
            console.log("User ganha")
            break;
        //user perde
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            pcScore ++;
            computerScore_span.innerHTML = pcScore;
            vencedorPerdedorEmpate()
            clickedButton.classList.add('red-lose')
            setTimeout( () => {clickedButton.classList.remove('red-lose')}, 300);
            jogadaUsuario = traducaoJogadas(jogadaUsuario)
            jogadaPc = traducaoJogadas(jogadaPc)
            result_p.innerText = `Você jogou ${jogadaUsuario} e o computador jogou ${jogadaPc}, então você perdeu a rodada!`
            console.log("User perde")
            break;
        //empate
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
            jogadaUsuario = traducaoJogadas(jogadaUsuario)
            jogadaPc = traducaoJogadas(jogadaPc)
            result_p.innerText = `Você jogou ${jogadaUsuario} e o computador jogou ${jogadaPc}, então a rodada ficou empatada!`
            console.log("Empate")
            break;
            
    }

}


function principal(){
    paperChoiceImage.addEventListener("click", ()=> logicaGeral("paper"));
    rockChoiceImage.addEventListener("click", ()=> logicaGeral("rock"));
    scissorsChoiceImage.addEventListener("click", ()=> logicaGeral("scissors"));
}

//The @param tag provides the name, type, and description of a function parameter.


 /** 
 * @param {paper, rock, scissors} jogado 
 * @param {1, 0, -1} resultado 
 */

function botaoDestaque(jogado, resultado){
    const botaoClicado = docuemnt.getElementById(jogado + 'Button');
    if(resultado == 1){
        botaoClicado.classList.add("green-win");
         setTimeout(() => {
           botaoClicado.classList.remove("green-win")
         }, 500);
      } else if(resultado == -1){
        botaoClicado.classList.add("red-lose");
         setTimeout(() => {
           botaoClicado.classList.remove("red-glow")
         }, 500);
      }

}

principal()
