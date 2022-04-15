var app = new PIXI.Application(600, 600, { backgroundColor: 0x1099bb });
document.getElementById("view").appendChild(app.view);

var gameState = {};
var startTime = {};

const AX = 3.25;
const AY = 3.25;
const BX = 1.45;
const BY = 3.25;
const CX = 1.45;
const CY = 1.45;
const DX = 3.25;
const DY = 1.45;
const BossX = 2;
const BossY = 2;

const B1 = new PIXI.Sprite(new PIXI.Texture.from('Img/1.png'));
const B2 = new PIXI.Sprite(new PIXI.Texture.from('Img/2.png'));
const B3 = new PIXI.Sprite(new PIXI.Texture.from('Img/3.png'));

//ArenaFloor
const arenaFloor = new PIXI.Container();
app.stage.addChild(arenaFloor);
arenaFloor.addChild(new PIXI.Sprite(new PIXI.Texture.from('Img/Floor.png')));

arenaFloor.x = app.screen.width / 2;
arenaFloor.y = app.screen.height / 2;
arenaFloor.pivot.x = arenaFloor.width / 2;
arenaFloor.pivot.y = arenaFloor.height / 2;

function addSpriteToContainer(container, sprite, x, y) {
    container.addChild(sprite);
    container.x = app.screen.width / x;
    container.y = app.screen.height / y;
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;
}

function addArrowSpriteToContainer(container, x, y) {
    container.addChild(new PIXI.Sprite(new PIXI.Texture.from('Img/BossArrow.png')));
    container.x = app.screen.width / x;
    container.y = app.screen.height / y;
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;
    if(gameState.bossArrowRotation == 1)
        container.rotation = 3.135;
    if(gameState.bossArrowRotation  == 2)
        container.rotation = 4.7;
    if(gameState.bossArrowRotation  == 3)
        container.rotation = 0;
    if(gameState.bossArrowRotation  == 4)
        container.rotation = 1.57;
}

function clearActiveSprites(){
    ringPositionA.destroy({children:true, texture:true, baseTexture:false});
    ringPositionB.destroy({children:true, texture:true, baseTexture:false});
    ringPositionC.destroy({children:true, texture:true, baseTexture:false});
    ringPositionD.destroy({children:true, texture:true, baseTexture:false});
    arrow.destroy({children:true, texture:true, baseTexture:false});

    ringPositionA = new PIXI.Container();
    ringPositionB = new PIXI.Container();
    ringPositionC = new PIXI.Container();
    ringPositionD = new PIXI.Container();
    arrow = new PIXI.Container();

    app.stage.addChild(ringPositionA);
    app.stage.addChild(ringPositionB);
    app.stage.addChild(ringPositionC);
    app.stage.addChild(ringPositionD);
    app.stage.addChild(arrow);

}

function displayGameState(gameState){
    if(gameState.phase == 1){
        ringPositionA = new PIXI.Container();
        ringPositionB = new PIXI.Container();
        ringPositionC = new PIXI.Container();
        ringPositionD = new PIXI.Container();
               
        if(gameState.posASafe == true)
            addSpriteToContainer(ringPositionA,new PIXI.Sprite(new PIXI.Texture.from('Img/CircleEmpty.png')),AX,AY);
        else
            addSpriteToContainer(ringPositionA,new PIXI.Sprite(new PIXI.Texture.from('Img/CircleFull.png')),AX,AY);        
        if(gameState.posBSafe == true)
            addSpriteToContainer(ringPositionB,new PIXI.Sprite(new PIXI.Texture.from('Img/CircleEmpty.png')),BX,BY);
        else
            addSpriteToContainer(ringPositionB,new PIXI.Sprite(new PIXI.Texture.from('Img/CircleFull.png')),BX,BY);
        if(gameState.posCSafe == true)
            addSpriteToContainer(ringPositionC,new PIXI.Sprite(new PIXI.Texture.from('Img/CircleEmpty.png')),CX,CY);
        else
            addSpriteToContainer(ringPositionC,new PIXI.Sprite(new PIXI.Texture.from('Img/CircleFull.png')),CX,CY);
        if(gameState.posDSafe == true)
            addSpriteToContainer(ringPositionD,new PIXI.Sprite(new PIXI.Texture.from('Img/CircleEmpty.png')),DX,DY);
        else
            addSpriteToContainer(ringPositionD,new PIXI.Sprite(new PIXI.Texture.from('Img/CircleFull.png')),DX,DY);

        app.stage.addChild(ringPositionA);
        app.stage.addChild(ringPositionB);
        app.stage.addChild(ringPositionC);
        app.stage.addChild(ringPositionD);
    }   
    if(gameState.phase == 2){
        NumberA = new PIXI.Container();
        NumberB = new PIXI.Container();
        NumberC = new PIXI.Container();
        NumberD = new PIXI.Container();
        NumberBoss = new PIXI.Container();

        if(gameState.ANumber == 1)
            addSpriteToContainer(NumberA,new PIXI.Sprite(new PIXI.Texture.from('Img/1.png')),AX,AY);
        if(gameState.ANumber == 2)
            addSpriteToContainer(NumberA,new PIXI.Sprite(new PIXI.Texture.from('Img/2.png')),AX,AY);
        if(gameState.ANumber == 3)
            addSpriteToContainer(NumberA,new PIXI.Sprite(new PIXI.Texture.from('Img/3.png')),AX,AY);

        if(gameState.BNumber == 1)
            addSpriteToContainer(NumberB,new PIXI.Sprite(new PIXI.Texture.from('Img/1.png')),BX,BY);
        if(gameState.BNumber == 2)
            addSpriteToContainer(NumberB,new PIXI.Sprite(new PIXI.Texture.from('Img/2.png')),BX,BY);
        if(gameState.BNumber == 3)
            addSpriteToContainer(NumberB,new PIXI.Sprite(new PIXI.Texture.from('Img/3.png')),BX,BY);

        if(gameState.CNumber == 1)
            addSpriteToContainer(NumberC,new PIXI.Sprite(new PIXI.Texture.from('Img/1.png')),CX,CY);
        if(gameState.CNumber == 2)
            addSpriteToContainer(NumberC,new PIXI.Sprite(new PIXI.Texture.from('Img/2.png')),CX,CY);
        if(gameState.CNumber == 3)
            addSpriteToContainer(NumberC,new PIXI.Sprite(new PIXI.Texture.from('Img/3.png')),CX,CY);

        if(gameState.DNumber == 1)
            addSpriteToContainer(NumberD,new PIXI.Sprite(new PIXI.Texture.from('Img/1.png')),DX,DY);
        if(gameState.DNumber == 2)
            addSpriteToContainer(NumberD,new PIXI.Sprite(new PIXI.Texture.from('Img/2.png')),DX,DY);
        if(gameState.DNumber == 3)
            addSpriteToContainer(NumberD,new PIXI.Sprite(new PIXI.Texture.from('Img/3.png')),DX,DY);

        if(gameState.BossNumber == 1)
            addSpriteToContainer(NumberBoss,new PIXI.Sprite(new PIXI.Texture.from('Img/1.png')),BossX,BossY);
        if(gameState.BossNumber == 2)
            addSpriteToContainer(NumberBoss,new PIXI.Sprite(new PIXI.Texture.from('Img/2.png')),BossX,BossY);
        if(gameState.BossNumber == 3)
            addSpriteToContainer(NumberBoss,new PIXI.Sprite(new PIXI.Texture.from('Img/3.png')),BossX,BossY);

        app.stage.addChild(NumberA);
        app.stage.addChild(NumberB);
        app.stage.addChild(NumberC);
        app.stage.addChild(NumberD);
        app.stage.addChild(NumberBoss);
    }

    arrow = new PIXI.Container();
    addArrowSpriteToContainer(arrow,2,2);
    app.stage.addChild(arrow);
}

function CreateGameStart(){
    gameState = {
        phase: 1,
        round: 1,
        posASafe:true, 
        posBSafe:false, 
        posCSafe:true, 
        posDSafe:false, 
        ANumber: 0,
        BNumber: 0,
        CNumber: 0,
        DNumber: 0,
        BossNumber: 0,
        posAfinalAnswer: 0,
        posBfinalAnswer: 0,
        posCfinalAnswer: 0,
        posDfinalAnswer: 0,
        bossArrowRotation: Math.floor(Math.random() * 4) + 1
    }; 

    if(Math.floor(Math.random() * 2) + 1 == 1){
        gameState.posASafe = false;
        gameState.posBSafe = true;
        gameState.posCSafe = false;
        gameState.posDSafe = true;
    }

    displayGameState(gameState);
    console.log(gameState);
    startTime = +new Date();
}
CreateGameStart();

//After animations show
function createNumbers(){
    addSpriteToContainer(positionA,A1,AX,AY);
    addSpriteToContainer(positionB,B2,BX,BY);
    addSpriteToContainer(positionC,C1,CX,CY);
    addSpriteToContainer(positionD,D3,DX,DY);
    addSpriteToContainer(boss,Boss1,BossX,BossY);
    addArrowSpriteToContainer(arrow,2,2,4);
}
//createNumbers();

function updateGameState(){
    if(gameState.phase == 1){
        if(gameState.round < 3){
            gameState.round+=1;
            gameState.posASafe = !gameState.posASafe;
            gameState.posBSafe = !gameState.posBSafe;
            gameState.posCSafe = !gameState.posCSafe;
            gameState.posDSafe = !gameState.posDSafe;
            gameState.bossArrowRotation += 1;
            if(gameState.bossArrowRotation > 4)
                gameState.bossArrowRotation = 1;
        }
        else
        {
            gameState.phase = 2;
            gameState.round = 1;
            determineSolution();
        }
    }
    if(gameState.phase == 2){
    }
}

function determineSolution(){
    gameState.BossNumber = Math.floor(Math.random() * 3) + 1
    var finalRotation = gameState.bossArrowRotation - gameState.BossNumber + 1

    var rotateLeft = 0;
    if(gameState.BossNumber == 3)
        rotateLeft = 2;
    if(gameState.BossNumber == 2)
        rotateLeft = 1;
    if(gameState.BossNumber == 1)
        rotateLeft = 0;

    var finalRotation = gameState.bossArrowRotation - rotateLeft;

    if(finalRotation < 1)
        finalRotation += 4;
    if(finalRotation > 4)
        finalRotation -= 4;

    markOppositeSideFailure(finalRotation);
}

function markOppositeSideFailure(finalRotation){
    if(finalRotation == 1)
    {
        gameState.posASafe = false;
        gameState.ANumber = Math.floor(Math.random() * 3) + 1
        gameState.posBSafe = false;
        gameState.BNumber = Math.floor(Math.random() * 3) + 1
    }
    if(finalRotation == 2)
    {
        gameState.posBSafe = false;
        gameState.BNumber = Math.floor(Math.random() * 3) + 1
        gameState.posCSafe = false;
        gameState.CNumber = Math.floor(Math.random() * 3) + 1
    }
    if(finalRotation == 3)
    {
        gameState.posCSafe = false;
        gameState.CNumber = Math.floor(Math.random() * 3) + 1
        gameState.posDSafe = false;
        gameState.DNumber = Math.floor(Math.random() * 3) + 1
    }
    if(finalRotation == 4)
    {
        gameState.posASafe = false;
        gameState.ANumber = Math.floor(Math.random() * 3) + 1
        gameState.posDSafe = false;
        gameState.DNumber = Math.floor(Math.random() * 3) + 1
    }
}

app.ticker.add((delta) => {
    if(getTime() > 1000){
        clearActiveSprites();
        updateGameState();
        console.log(gameState);
        displayGameState(gameState);
        resetTimer();
    }
});


////////////////////////Timers////////////////////////
function getTime() {
    var now = +new Date();
    return now - startTime;
}

function resetTimer(){
    startTime = +new Date();
}