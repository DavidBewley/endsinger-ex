var app = new PIXI.Application(600, 600, { backgroundColor: 0x1099bb });
document.getElementById("view").appendChild(app.view);

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

const background = new PIXI.Sprite(new PIXI.Texture.from('Img/Floor.png'));
const arrowSprite = new PIXI.Sprite(new PIXI.Texture.from('Img/BossArrow.png'));
const A1 = new PIXI.Sprite(new PIXI.Texture.from('Img/1.png'));
const A2 = new PIXI.Sprite(new PIXI.Texture.from('Img/2.png'));
const A3 = new PIXI.Sprite(new PIXI.Texture.from('Img/3.png'));
const B1 = new PIXI.Sprite(new PIXI.Texture.from('Img/1.png'));
const B2 = new PIXI.Sprite(new PIXI.Texture.from('Img/2.png'));
const B3 = new PIXI.Sprite(new PIXI.Texture.from('Img/3.png'));
const C1 = new PIXI.Sprite(new PIXI.Texture.from('Img/1.png'));
const C2 = new PIXI.Sprite(new PIXI.Texture.from('Img/2.png'));
const C3 = new PIXI.Sprite(new PIXI.Texture.from('Img/3.png'));
const D1 = new PIXI.Sprite(new PIXI.Texture.from('Img/1.png'));
const D2 = new PIXI.Sprite(new PIXI.Texture.from('Img/2.png'));
const D3 = new PIXI.Sprite(new PIXI.Texture.from('Img/3.png'));
const Boss1 = new PIXI.Sprite(new PIXI.Texture.from('Img/1.png'));
const Boss2 = new PIXI.Sprite(new PIXI.Texture.from('Img/2.png'));
const Boss3 = new PIXI.Sprite(new PIXI.Texture.from('Img/3.png'));
const AC = new PIXI.Sprite(new PIXI.Texture.from('Img/CircleFull.png'));
const BC = new PIXI.Sprite(new PIXI.Texture.from('Img/CircleFull.png'));
const CC = new PIXI.Sprite(new PIXI.Texture.from('Img/CircleFull.png'));
const DC = new PIXI.Sprite(new PIXI.Texture.from('Img/CircleFull.png'));
const AE = new PIXI.Sprite(new PIXI.Texture.from('Img/CircleEmpty.png'));
const BE = new PIXI.Sprite(new PIXI.Texture.from('Img/CircleEmpty.png'));
const CE = new PIXI.Sprite(new PIXI.Texture.from('Img/CircleEmpty.png'));
const DE = new PIXI.Sprite(new PIXI.Texture.from('Img/CircleEmpty.png'));

const arenaFloor = new PIXI.Container();
const positionA = new PIXI.Container();
const positionB = new PIXI.Container();
const positionC = new PIXI.Container();
const positionD = new PIXI.Container();
const ringPositionA = new PIXI.Container();
const ringPositionB = new PIXI.Container();
const ringPositionC = new PIXI.Container();
const ringPositionD = new PIXI.Container();
const boss = new PIXI.Container();
const arrow = new PIXI.Container();

function addSpriteToContainer(container, sprite, x, y) {
    container.addChild(sprite);
    container.x = app.screen.width / x;
    container.y = app.screen.height / y;
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;
}

function addArrowSpriteToContainer(container, x, y, rotation) {
    container.addChild(arrowSprite);
    container.x = app.screen.width / x;
    container.y = app.screen.height / y;
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;
    if(rotation == 1)
        container.rotation = 3.135;
    if(rotation == 2)
        container.rotation = 4.7;
    if(rotation == 3)
        container.rotation = 0;
    if(rotation == 4)
        container.rotation = 1.57;
}

app.stage.addChild(arenaFloor);
arenaFloor.addChild(background);

arenaFloor.x = app.screen.width / 2;
arenaFloor.y = app.screen.height / 2;
arenaFloor.pivot.x = arenaFloor.width / 2;
arenaFloor.pivot.y = arenaFloor.height / 2;

app.stage.addChild(positionA);
app.stage.addChild(positionB);
app.stage.addChild(positionC);
app.stage.addChild(positionD);
app.stage.addChild(ringPositionA);
app.stage.addChild(ringPositionB);
app.stage.addChild(ringPositionC);
app.stage.addChild(ringPositionD);
app.stage.addChild(boss);
app.stage.addChild(arrow);

function CreateGameStart(){
    addSpriteToContainer(ringPositionA,AC,AX,AY);
    addSpriteToContainer(ringPositionB,BE,BX,BY);
    addSpriteToContainer(ringPositionC,CC,CX,CY);
    addSpriteToContainer(ringPositionD,DE,DX,DY);
    addArrowSpriteToContainer(arrow,2,2,4);
}
CreateGameStart();

//After animations show
function createRings(){
    addSpriteToContainer(positionA,A1,AX,AY);
    addSpriteToContainer(positionB,B2,BX,BY);
    addSpriteToContainer(positionC,C1,CX,CY);
    addSpriteToContainer(positionD,D3,DX,DY);
    addSpriteToContainer(boss,Boss1,BossX,BossY);
    addArrowSpriteToContainer(arrow,2,2,4);
}
//createRings();

app.ticker.add((delta) => {
});