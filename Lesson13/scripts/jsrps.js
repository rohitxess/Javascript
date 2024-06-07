  /* computer randomly selects a move
         compare the moves to get the results
         display the results in a pop up 

        
         we need to convert back the JSON into object to get the values */

         let score = {
            wins: 0,
            losses: 0,
            ties: 0
        };
        
        updateScoreElement();

       

        function reset(){
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
           // console.log(window.confirm);

           if (confirm('Are you sure you want to reset the score?')){
                document.querySelector('.js-result').innerHTML = '';
                document.querySelector('.js-moves').innerHTML = '';
                console.log(`Wins: ${score.wins = 0}, Losses: ${score.losses = 0}  Ties: ${score.ties = 0}`);
            } else {
                return;
            }
           // document.querySelector('.window.confirm').innerHTML = 'Yes';
         
        }
        /* gets out the value from local storage */

        let isAutoPlaying = false;
        let intervalId;
        // adding eventListner for player - rock, paper, scissor 

        document.querySelector('.jsRock-button').addEventListener('click', () => {
            playerMove('Rock');
        });

        document.querySelector('.jsPaper-button').addEventListener('click', () => {
            playerMove('Paper');
        });

        document.querySelector('.jsScissors-button').addEventListener('click', () => {
            playerMove('Scissors');
        });

     /* document.querySelector('.js-reset-button').addEventListener('click', () => {
            reset();
        }); */

        //keydown 
        
        document.body.addEventListener('keydown', (event) => {
            //console.log(event.key);
            if (event.key === 'r'){
                playerMove('Rock');
            } else if (event.key === 'p'){
                playerMove('Paper');
            } else if (event.key === 's'){
                playerMove('Scissors');
            } else if (event.key === 'a'){
                autoPlay();
            } else if (event.key === " "){
                reset();
            }
        });

        // adding eventListner for autoplay 

        const autoplayButton = document.querySelector('.jsautoPlay');
        autoplayButton.addEventListener('click', autoPlay);

        function autoPlay(){
            if(!isAutoPlaying){
                intervalId = setInterval (() =>{
                const pMove = computerMove(); // function as a value 
                playerMove(pMove);
            }, 1000);
            isAutoPlaying = true;
            } else{
                clearInterval(intervalId);
                isAutoPlaying = false;
            }       
            const playStop = document.querySelector('.auto-playbutton');
            playStop.innerHTML === 'Auto Play' ? playStop.innerHTML = 'Stop Playing' : playStop.innerHTML = 'Auto Play';
            
        }

        function playerMove(pMove){
            
            const cMove = computerMove();
            
            let result = '';
            
            if(pMove === 'Rock'){
                if (cMove === 'Rock'){
                result ='Tie';
                } else if (cMove  === 'Paper'){
                result = 'You loose';
                } else if (cMove === 'Scissors'){
                result = 'You Win';
                } 
            } else if (pMove === 'Paper'){
                if (cMove === 'Rock'){
                result ='You Win';
                } else if (cMove  === 'Paper'){
                result = 'Tie';
                } else if (cMove === 'Scissors'){
                result = 'You loose';
                }
            } else if (pMove === 'Scissors'){
                if (cMove === 'Rock'){
                result ='You loose';
                } else if (cMove  === 'Paper'){
                result = 'You Win';
                } else if (cMove === 'Scissors'){
                result = 'Tie';
                }
            }

            // storing the game plays in the score object 

            if (result == 'You Win'){
                score.wins += 1;
            } else if (result == 'You loose'){
                score.losses +=1;
            } else if (result == 'Tie'){
                score.ties +=1;
            }

           /* alert(`You picked ${pMove}. Computer picked up ${cMove}. ${result}
            Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`); */

            updateScoreElement();

            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML = 
            `You Choose: <img src="png/${pMove}.png" alt="" class="resultImg"> - Computer Choose: <img src="png/${cMove}.png" alt="" class="resultImg">` // html generator 
        }

        function updateScoreElement(){

            document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}  Ties: ${score.ties}`;
    
        }

        /* computer move */

            function computerMove(){
            
            const randomNumber = Math.random();
            let cMove = '';
            
            if(randomNumber >= 0 && randomNumber <= 1/3){
                cMove = 'Rock';
            } else if (randomNumber >= 1/3 && randomNumber <= 2/3){
                cMove = 'Paper';
            } else if (randomNumber >=2/3 && randomNumber < 1)
            {
                cMove = 'Scissors'
            }
            return cMove;
        }