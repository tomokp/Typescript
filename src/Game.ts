class Game {
    //global attr for canvas
    //readonly attributes must be initialized in the constructor
    private readonly canvas: HTMLCanvasElement; // find the right type
    private readonly ctx: CanvasRenderingContext2D; // find the right type

    //some global player attributes
    private readonly player: string = "Player1";
    private readonly score: number = 400;
    private readonly lives: number = 3;
    private readonly highscores: Array<any>; //TODO: do not use 'any': write an interface!
    private readonly asteroids: Array<any>;
    private readonly meteorLink: string = "assets/images/SpaceShooterRedux/PNG/Meteors/";
    i: number;
    public constructor(canvasId: HTMLCanvasElement) {
        //construct all canvas
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        //set the context of the canvas
        this.ctx = this.canvas.getContext('2d');
        this.ctx.font = "100px minecraft";
        this.ctx.fillStyle = "red";
        this.ctx.textAlign = "center";
        this.ctx.fillText("", this.canvas.width/2, this.canvas.height/2);
        this.highscores = [
            {
                playerName: 'Loek',
                score: 40000
            },
            {
                playerName: 'Daan',
                score: 34000
            },
            {
                playerName: 'Rimmert',
                score: 200
            }
        ]
        this.asteroids = [
            {
                stoneLink: this.meteorLink+"meteorBrown_big1.png"
            },
            {
                stoneLink: this.meteorLink+"meteorBrown_big2.png"
            },
            {
                stoneLink: this.meteorLink+"meteorBrown_big3.png"
            },
            {
                stoneLink: this.meteorLink+"meteorBrown_big4.png"
            },
            {
                stoneLink: this.meteorLink+"meteorBrown_med1.png"
            },
            {
                stoneLink: this.meteorLink+"meteorBrown_med3.png"
            },
            {
                stoneLink: this.meteorLink+"meteorBrown_small1.png"
            },
            {
                stoneLink: this.meteorLink+"meteorBrown_small2.png"
            },
            {
                stoneLink: this.meteorLink+"meteorBrown_tiny1.png"
            },
            {
                stoneLink: this.meteorLink+"meteorBrown_tiny2.png"
            },
            {
                stoneLink: this.meteorLink+"meteorGrey_big1.png"
            },
            {
                stoneLink: this.meteorLink+"meteorGrey_big2.png"
            },
            {
                stoneLink: this.meteorLink+"meteorGrey_big3.png"
            },
            {
                stoneLink: this.meteorLink+"meteorGrey_big4.png"
            },
            {
                stoneLink: this.meteorLink+"meteorGrey_med1.png"
            },
            {
                stoneLink: this.meteorLink+"meteorGrey_med2.png"
            },
            {
                stoneLink: this.meteorLink+"meteorGrey_small1.png"
            },
            {
                stoneLink: this.meteorLink+"meteorGrey_small2.png"
            },
            {
                stoneLink: this.meteorLink+"meteorGrey_tiny1.png"
            },
            {
                stoneLink: this.meteorLink+"meteorGrey_tiny2.png"
            },
        ]

        // all screens: uncomment to activate
        this.start_screen();
        // this.level_screen();
        // this.title_screen();

    }
    //-------- Splash screen methods ------------------------------------
    /**
    * Function to initialize the splash screen
    */
    public start_screen() {
        //1. add 'Asteroids' text
        if(screenNumber==0){
        this.writeAsteroidHeading();
        this.writeIntroText();
        this.placeIntroStone();
        this.placeIntroPlayBar(); 
        //2. add 'Press to play' text
        //3. add button with 'start' text
        //4. add Asteroid image
    }
    else if(screenNumber==1){
        console.log("ja");
        this.placeScoreText();
        this.drawThreeLifes();
        this.placeSpaceShip();
        this.fiveRandomAsteroids();
        console.log(this.randomNumber(-1000, 1000));
    }
    else if(screenNumber==2){
        console.log("dit is pagina 3");
        this.placeEndScoreText();
        this.placeHighText();
        this.placeHighScoreZero();
        this.placeHighScoreOne();
        this.placeHighScoreTwo();
    }
}
    
    public writeAsteroidHeading(){
        this.drawText("Asteroids", 150, "white", this.canvas.width/2, this.canvas.height/6);
    }

    public writeIntroText(){
        this.drawText("PRESS PLAY TO START", 40, "white", this.canvas.width/2, this.canvas.height/2.5);
    }

    public placeIntroStone(){
        let introStone = new Image();
        introStone.src = "assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png";
        this.ctx.textAlign = "center";
        introStone.addEventListener("load", () =>{
            this.ctx.drawImage(introStone, (this.canvas.width - 100)/2, (this.canvas.height + 100)/2, );
        })
    }

    public placeIntroPlayBar(){
        let introBar = new Image();
        introBar.src = "assets/images/SpaceShooterRedux/PNG/UI/buttonRed.png";
        this.ctx.textAlign = "center";
        addEventListener("click", initt);
        introBar.addEventListener("load", () =>{
            this.ctx.drawImage(introBar, (this.canvas.width - 225)/2, (this.canvas.height + 450)/2, );
            this.placeBarText();
        });
    }

    public placeBarText() {
        this.drawText("Play", 20, "black", this.canvas.width/2, (this.canvas.height + 505)/2);
        
    }

    public placeScoreText() {
        this.drawText(`Your score: ${this.score}`, 25, "white", this.canvas.width-150, 50);
        
        
    }

    public drawThreeLifes() {
        for(this.i=0; this.i<4 ; this.i++){
            this.drawLifes(this.i);
        }
    }

    public placeSpaceShip() {
        this.drawImage("assets/images/SpaceShooterRedux/PNG/playerShip2_red.png", this.canvas.width/2, this.canvas.height/2);
    }

    public randomAsteroid() {
        this.drawImage(this.asteroids[this.randomNumber(0, 19)].stoneLink, (this.canvas.width/2)+(this.randomNumber(-800, 800)), (this.canvas.height/2)+(this.randomNumber(-500, 500)));
    }

    public fiveRandomAsteroids() {
        for(this.i=0; this.i<6 ; this.i++){
            this.randomAsteroid();
        }
    }
    public placeEndScoreText() {
        this.drawText(`Your score is: ${this.score}`, 80, "white", this.canvas.width/2, (this.canvas.height/2)-200);
    }

    public placeHighText() {
        this.drawText("HIGHSCORES", 40, "white", this.canvas.width/2, (this.canvas.height/2)-100);
    }

    public placeHighScoreZero() {
        this.drawText(`1: ${this.highscores[0].playerName} - ${this.highscores[0].score}`, 25, "white", this.canvas.width/2, (this.canvas.height/2)-50);
    }

    public placeHighScoreOne() {
        this.drawText(`2: ${this.highscores[1].playerName} - ${this.highscores[1].score}`, 25, "white", this.canvas.width/2, (this.canvas.height/2)-10);
    }

    public placeHighScoreTwo() {
        this.drawText(`3: ${this.highscores[2].playerName} - ${this.highscores[2].score}`, 25, "white", this.canvas.width/2, (this.canvas.height/2)+30);
    }




    //-------- level screen methods -------------------------------------
    /**
    * Function to initialize the level screen
    */
    public level_screen() {
        //1. load life images
        //2. draw current score
        //3. draw random asteroids
        //4. draw player spaceship
    }

    //-------- Title screen methods -------------------------------------

    /**
    * Function to initialize the title screen
    */
    public title_screen() {
        //1. draw your score
        //2. draw all highscores
    }

    //-------Generic canvas functions ----------------------------------

    /**
    * Renders a random number between min and max
    * @param {number} min - minimal time
    * @param {number} max - maximal time
    */
    public randomNumber(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }

    public drawText(text: string, size: number, color: string, placeY: number, placeX: number) {
        this.ctx.font = size+"px minecraft";
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, placeY, placeX);
    }

    public drawImage(source: string, placeY: number, placeX: number){
        let newImage = new Image();
        newImage.src = source;
        newImage.addEventListener("load", () =>{
        this.ctx.drawImage(newImage, placeY, placeX);
        })
    }
    
    public drawLifes(numberOfLifes: number){
        let placeLife = new Image();
        placeLife.src = "assets/images/SpaceShooterRedux/PNG/UI/playerLife2_red.png";
        this.ctx.textAlign = "center";
        placeLife.addEventListener("load", () =>{
            this.ctx.drawImage(placeLife, numberOfLifes*50, 50);
        })
        
    }
}

declare var screenNumber: number;
eval("screenNumber = 0;");
//this will get an HTML element. I cast this element in de appropriate type using <>
let initt = function () {
    if(screenNumber==0){
        console.log(screenNumber);
        screenNumber++;
        console.log(screenNumber);
        const context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        const Asteroids = new Game(<HTMLCanvasElement>document.getElementById('canvas'));
    }
    else if(screenNumber==1){
        console.log(screenNumber);
        screenNumber++;
        console.log(screenNumber);
        const context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        const Asteroids = new Game(<HTMLCanvasElement>document.getElementById('canvas'));
    }
    else{
        console.log("nee");
    }
    

    

};

let init = function () {
    const Asteroids = new Game(<HTMLCanvasElement>document.getElementById('canvas'));
};
//add loadlistener for custom font types
window.addEventListener('load', init);
