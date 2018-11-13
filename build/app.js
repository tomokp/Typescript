class Game {
    constructor(canvasId) {
        this.player = "Player1";
        this.score = 400;
        this.lives = 3;
        this.meteorLink = "assets/images/SpaceShooterRedux/PNG/Meteors/";
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.font = "100px minecraft";
        this.ctx.fillStyle = "red";
        this.ctx.textAlign = "center";
        this.ctx.fillText("", this.canvas.width / 2, this.canvas.height / 2);
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
        ];
        this.asteroids = [
            {
                stoneLink: this.meteorLink + "meteorBrown_big1.png"
            },
            {
                stoneLink: this.meteorLink + "meteorBrown_big2.png"
            },
            {
                stoneLink: this.meteorLink + "meteorBrown_big3.png"
            },
            {
                stoneLink: this.meteorLink + "meteorBrown_big4.png"
            },
            {
                stoneLink: this.meteorLink + "meteorBrown_med1.png"
            },
            {
                stoneLink: this.meteorLink + "meteorBrown_med3.png"
            },
            {
                stoneLink: this.meteorLink + "meteorBrown_small1.png"
            },
            {
                stoneLink: this.meteorLink + "meteorBrown_small2.png"
            },
            {
                stoneLink: this.meteorLink + "meteorBrown_tiny1.png"
            },
            {
                stoneLink: this.meteorLink + "meteorBrown_tiny2.png"
            },
            {
                stoneLink: this.meteorLink + "meteorGrey_big1.png"
            },
            {
                stoneLink: this.meteorLink + "meteorGrey_big2.png"
            },
            {
                stoneLink: this.meteorLink + "meteorGrey_big3.png"
            },
            {
                stoneLink: this.meteorLink + "meteorGrey_big4.png"
            },
            {
                stoneLink: this.meteorLink + "meteorGrey_med1.png"
            },
            {
                stoneLink: this.meteorLink + "meteorGrey_med2.png"
            },
            {
                stoneLink: this.meteorLink + "meteorGrey_small1.png"
            },
            {
                stoneLink: this.meteorLink + "meteorGrey_small2.png"
            },
            {
                stoneLink: this.meteorLink + "meteorGrey_tiny1.png"
            },
            {
                stoneLink: this.meteorLink + "meteorGrey_tiny2.png"
            },
        ];
        this.start_screen();
    }
    start_screen() {
        if (screenNumber == 0) {
            this.writeAsteroidHeading();
            this.writeIntroText();
            this.placeIntroStone();
            this.placeIntroPlayBar();
        }
        else if (screenNumber == 1) {
            console.log("ja");
            this.placeScoreText();
            this.drawThreeLifes();
            this.placeSpaceShip();
            this.fiveRandomAsteroids();
            console.log(this.randomNumber(-1000, 1000));
        }
        else if (screenNumber == 2) {
            console.log("dit is pagina 3");
            this.placeEndScoreText();
            this.placeHighText();
            this.placeHighScoreZero();
            this.placeHighScoreOne();
            this.placeHighScoreTwo();
        }
    }
    writeAsteroidHeading() {
        this.drawText("Asteroids", 150, "white", this.canvas.width / 2, this.canvas.height / 6);
    }
    writeIntroText() {
        this.drawText("PRESS PLAY TO START", 40, "white", this.canvas.width / 2, this.canvas.height / 2.5);
    }
    placeIntroStone() {
        let introStone = new Image();
        introStone.src = "assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png";
        this.ctx.textAlign = "center";
        introStone.addEventListener("load", () => {
            this.ctx.drawImage(introStone, (this.canvas.width - 100) / 2, (this.canvas.height + 100) / 2);
        });
    }
    placeIntroPlayBar() {
        let introBar = new Image();
        introBar.src = "assets/images/SpaceShooterRedux/PNG/UI/buttonRed.png";
        this.ctx.textAlign = "center";
        addEventListener("click", initt);
        introBar.addEventListener("load", () => {
            this.ctx.drawImage(introBar, (this.canvas.width - 225) / 2, (this.canvas.height + 450) / 2);
            this.placeBarText();
        });
    }
    placeBarText() {
        this.drawText("Play", 20, "black", this.canvas.width / 2, (this.canvas.height + 505) / 2);
    }
    placeScoreText() {
        this.drawText(`Your score: ${this.score}`, 25, "white", this.canvas.width - 150, 50);
    }
    drawThreeLifes() {
        for (this.i = 0; this.i < 4; this.i++) {
            this.drawLifes(this.i);
        }
    }
    placeSpaceShip() {
        this.drawImage("assets/images/SpaceShooterRedux/PNG/playerShip2_red.png", this.canvas.width / 2, this.canvas.height / 2);
    }
    randomAsteroid() {
        this.drawImage(this.asteroids[this.randomNumber(0, 19)].stoneLink, (this.canvas.width / 2) + (this.randomNumber(-800, 800)), (this.canvas.height / 2) + (this.randomNumber(-500, 500)));
    }
    fiveRandomAsteroids() {
        for (this.i = 0; this.i < 6; this.i++) {
            this.randomAsteroid();
        }
    }
    placeEndScoreText() {
        this.drawText(`Your score is: ${this.score}`, 80, "white", this.canvas.width / 2, (this.canvas.height / 2) - 200);
    }
    placeHighText() {
        this.drawText("HIGHSCORES", 40, "white", this.canvas.width / 2, (this.canvas.height / 2) - 100);
    }
    placeHighScoreZero() {
        this.drawText(`1: ${this.highscores[0].playerName} - ${this.highscores[0].score}`, 25, "white", this.canvas.width / 2, (this.canvas.height / 2) - 50);
    }
    placeHighScoreOne() {
        this.drawText(`2: ${this.highscores[1].playerName} - ${this.highscores[1].score}`, 25, "white", this.canvas.width / 2, (this.canvas.height / 2) - 10);
    }
    placeHighScoreTwo() {
        this.drawText(`3: ${this.highscores[2].playerName} - ${this.highscores[2].score}`, 25, "white", this.canvas.width / 2, (this.canvas.height / 2) + 30);
    }
    level_screen() {
    }
    title_screen() {
    }
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    drawText(text, size, color, placeY, placeX) {
        this.ctx.font = size + "px minecraft";
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, placeY, placeX);
    }
    drawImage(source, placeY, placeX) {
        let newImage = new Image();
        newImage.src = source;
        newImage.addEventListener("load", () => {
            this.ctx.drawImage(newImage, placeY, placeX);
        });
    }
    drawLifes(numberOfLifes) {
        let placeLife = new Image();
        placeLife.src = "assets/images/SpaceShooterRedux/PNG/UI/playerLife2_red.png";
        this.ctx.textAlign = "center";
        placeLife.addEventListener("load", () => {
            this.ctx.drawImage(placeLife, numberOfLifes * 50, 50);
        });
    }
}
eval("screenNumber = 0;");
let initt = function () {
    if (screenNumber == 0) {
        console.log(screenNumber);
        screenNumber++;
        console.log(screenNumber);
        const context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const Asteroids = new Game(document.getElementById('canvas'));
    }
    else if (screenNumber == 1) {
        console.log(screenNumber);
        screenNumber++;
        console.log(screenNumber);
        const context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const Asteroids = new Game(document.getElementById('canvas'));
    }
    else {
        console.log("nee");
    }
};
let init = function () {
    const Asteroids = new Game(document.getElementById('canvas'));
};
window.addEventListener('load', init);
//# sourceMappingURL=app.js.map