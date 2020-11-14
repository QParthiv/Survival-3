var archerZombie, bossZombie, normalZombie, giantZombie, wizardZombie, runnerZombie;
var archerZombieImage, bossZombieImage, normalZombieImage, giantZombieImage, wizardZombieImage, runnerZombieImage;
var player;
var zombieHealth;
var zombies;
var bgImg;


function preload() {
  archerZombieImage = loadImage("images/A_Zombie.png");
  bossZombieImage = loadImage("images/B_Zombie.png");
  normalZombieImage = loadImage("images/N_Zombie.png");
  giantZombieImage = loadImage("images/G_Zombie.png");
  wizardZombieImage = loadImage("images/W_Zombie.png");
  runnerZombieImage = loadImage("images/R_Zombie.png");

  bgImg = loadImage("images/game_bg.png");
}

function setup() {
  createCanvas(1500, 900);

  archerZombie = createSprite(50, 250, 20, 20);
  archerZombie.addImage(archerZombieImage);
  bossZombie = createSprite(0, 200, 20, 20);
  bossZombie.addImage(bossZombieImage);
  normalZombie = createSprite(0, 200, 20, 20);
  normalZombie.addImage(normalZombieImage);
  giantZombie = createSprite(100, 200, 20, 20);
  giantZombie.addImage(giantZombieImage);
  wizardZombie = createSprite(500, 200, 20, 20);
  wizardZombie.addImage(wizardZombieImage);
  runnerZombie = createSprite(200, 450, 20, 20);
  runnerZombie.addImage(runnerZombieImage);

  archerZombie.scale = 0.14;
  bossZombie.scale = 0.41;
  normalZombie.scale = 0.05;
  giantZombie.scale = 0.75;
  wizardZombie.scale = 0.06;
  runnerZombie.scale = 0.35;
}

function draw() {

  background(bgImg);

  archerZombie.visible = false;
  bossZombie.visible = false;
  normalZombie.visible = false;
  giantZombie.visible = false;
  wizardZombie.visible = false;
  runnerZombie.visible = false;

  turn = Math.random(1, 2);

  switch (turn) {
    case 1:
      console.log("nfifhwof");
      archerZombie.visible = true;
      /*archerZombie.velocityX = 1;
      if (archerZombie.x = 350) {
        archerZombie.velocityX = 0;
      }*/
      break;

    case 2:
      console.log("boss zombie");
      bossZombie.visible = true;
      /*bossZombie.velocityX = 0.5;
      if (bossZombie.x = 500) {
        bossZombie.velocityX = 0;
      }*/
      break;

    default:
  }

  drawSprites();
}