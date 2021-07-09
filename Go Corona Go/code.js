var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b42de87b-72c2-419f-9dfd-be681b2740df","86069583-2edb-4753-a3d1-51e6a75a137b","b7e3e777-8dc2-4ddd-b02e-ae7d5aebdd2a","c681fde2-7283-41e6-b8b0-c4c3fa23fbda","dd0468a0-86ce-461a-8a6f-e6b4872ade7b","ff3d423b-782e-4219-a7be-5c6bd5adcedb","2499071f-92ef-4823-a450-3024ed9c0a69","4a4d9707-053c-4761-a076-c8a91f92f963","2f795b8d-c89b-4773-a8a5-774fadd89c02"],"propsByKey":{"b42de87b-72c2-419f-9dfd-be681b2740df":{"name":"corona1","sourceUrl":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png"},"86069583-2edb-4753-a3d1-51e6a75a137b":{"name":"corona2","sourceUrl":"assets/api/v1/animation-library/gamelab/QlASZ_b6ro5ayl24.MEPiWwjrdbFB3sB/category_germs/gameplaywacky_06.png","frameSize":{"x":399,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":"QlASZ_b6ro5ayl24.MEPiWwjrdbFB3sB","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QlASZ_b6ro5ayl24.MEPiWwjrdbFB3sB/category_germs/gameplaywacky_06.png"},"b7e3e777-8dc2-4ddd-b02e-ae7d5aebdd2a":{"name":"corona3","sourceUrl":"assets/api/v1/animation-library/gamelab/ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p/category_germs/gameplaywacky_05.png","frameSize":{"x":397,"y":372},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":372},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p/category_germs/gameplaywacky_05.png"},"c681fde2-7283-41e6-b8b0-c4c3fa23fbda":{"name":"me","sourceUrl":"assets/api/v1/animation-library/gamelab/pprrkT8zHUyC6q2DoLBo92Y_4r4kkTCW/category_people/blue_shirt_book.png","frameSize":{"x":136,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"pprrkT8zHUyC6q2DoLBo92Y_4r4kkTCW","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pprrkT8zHUyC6q2DoLBo92Y_4r4kkTCW/category_people/blue_shirt_book.png"},"dd0468a0-86ce-461a-8a6f-e6b4872ade7b":{"name":"house","sourceUrl":"assets/api/v1/animation-library/gamelab/SKK0dX5AGBTXkrDyUiOhw8DW.1cIqu2T/category_buildings/building_23.png","frameSize":{"x":267,"y":284},"frameCount":1,"looping":true,"frameDelay":2,"version":"SKK0dX5AGBTXkrDyUiOhw8DW.1cIqu2T","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":267,"y":284},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SKK0dX5AGBTXkrDyUiOhw8DW.1cIqu2T/category_buildings/building_23.png"},"ff3d423b-782e-4219-a7be-5c6bd5adcedb":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":600,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"hGAsXWF6G1CPql3NLsmFw4q5SdjYwXpV","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":400},"rootRelativePath":"assets/ff3d423b-782e-4219-a7be-5c6bd5adcedb.png"},"2499071f-92ef-4823-a450-3024ed9c0a69":{"name":"ground","sourceUrl":"assets/api/v1/animation-library/gamelab/B7nUqE7MHvtM.bH.nFWaMiZcfScwjIfx/category_backgrounds/farm_land.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"B7nUqE7MHvtM.bH.nFWaMiZcfScwjIfx","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/B7nUqE7MHvtM.bH.nFWaMiZcfScwjIfx/category_backgrounds/farm_land.png"},"4a4d9707-053c-4761-a076-c8a91f92f963":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":600,"y":676},"frameCount":1,"looping":true,"frameDelay":12,"version":"swVt8KiowFcE382pD8UPGXmVboBUKXTh","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":676},"rootRelativePath":"assets/4a4d9707-053c-4761-a076-c8a91f92f963.png"},"2f795b8d-c89b-4773-a8a5-774fadd89c02":{"name":"living_room_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ysHVw5mmZbMIqwDVXi7C.B4OuPqNMHVm/category_backgrounds/living_room.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ysHVw5mmZbMIqwDVXi7C.B4OuPqNMHVm","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ysHVw5mmZbMIqwDVXi7C.B4OuPqNMHVm/category_backgrounds/living_room.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Lives = 5;

var innerhouse = createSprite(-200, 200, 400, 400);
innerhouse.setAnimation("living_room_1");

var me1 = createSprite(-200, 200, 10, 10);
me1.setAnimation("animation_2");
me1.scale=0.9;
var ground = createSprite(200, 200, 400, 400);
ground.setAnimation("ground");

var gameover = createSprite(-400, 200, 400, 400);
gameover.setAnimation("animation_1");

var me = createSprite(25, 200, 10, 10);
me.setAnimation("me");
me.scale=0.25;

var corona1 = createSprite(100, 25, 10, 10);
corona1.setAnimation("corona1");
corona1.scale=0.10;

var corona2 = createSprite(200, 350, 10, 10);
corona2.setAnimation("corona2");
corona2.scale=0.12;

var corona3 = createSprite(300, 25, 10, 10);
corona3.setAnimation("corona3");
corona3.scale=0.10;

var house = createSprite (370, 200 ,10, 10);
house.setAnimation("house");
house.scale=0.40;

var boundary1 = createSprite(200, 400, 400, 10);
boundary1.shapeColor=("white");
var boundary2 = createSprite(200, 0, 400, 10);
boundary2.shapeColor=("white");

corona1.velocityY=15;
corona2.velocityY=15;
corona3.velocityY=15;

function draw() {

  background("white");
  
drawSprites();

textSize(25);
text("Lives:"+Lives, 320, 25);

if (me.x===25){
  fill("red");
  textSize(25);
  text("Reach home Before\n     you get corona", 100, 350);
}

if (keyDown("RIGHT_ARROW")){
  me.x=me.x+10;
}

if (keyDown("LEFT_ARROW")){
  me.x=me.x-10;
}


if (me.isTouching(corona1)||me.isTouching(corona2)||me.isTouching(corona3)){
  me.x=10;
  me.y=200;
  Lives = Lives-1;
}

if (Lives===0){
  gameover.x=200;
  gameover.y=200;
  me.destroy();
  corona1.destroy();
  corona2.destroy();
  corona3.destroy();
  house.destroy();
  text("Wear Mask When\nYou Are Out Of Your House\nOr Else:", 50,50);
} 

if (me.x>360){
  textSize(25);
  text("You Win", 180, 250);
  innerhouse.x=200;
  innerhouse.y=200;
  me1.x=200;
  me1.y=200;
  ground.destroy();
  me.destroy();
  corona1.destroy();
  corona2.destroy();
  corona3.destroy();
  house.destroy();
}

createEdgeSprites();
corona1.bounceOff(boundary1);
corona1.bounceOff(boundary2);
corona2.bounceOff(boundary1);
corona2.bounceOff(boundary2);
corona3.bounceOff(boundary1);
corona3.bounceOff(boundary2);
me.bounceOff(edges);

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
