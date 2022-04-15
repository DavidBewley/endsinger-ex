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
        arrow = new PIXI.Container();
               
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
        addArrowSpriteToContainer(arrow,2,2);

        app.stage.addChild(ringPositionA);
        app.stage.addChild(ringPositionB);
        app.stage.addChild(ringPositionC);
        app.stage.addChild(ringPositionD);
        app.stage.addChild(arrow);
    }   
}

function CreateGameStart(){
    gameState = {
        phase: 1,
        round: 1,
        posASafe:true, 
        posBSafe:false, 
        posCSafe:true, 
        posDSafe:false, 
        bossArrowRotation: 1
    }; 

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
        }
        else
        {
            gameState.phase = 2;
            gameState.round = 1;
        }
    }
}

app.ticker.add((delta) => {
    if(getTime() > 3000){
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