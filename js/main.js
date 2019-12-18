enchant()

fetch(
  "https://script.google.com/macros/s/AKfycbzcY3aEn2ovKGtc9HA87smGV34KDo52qHVGTq395_9iqVylKPSg/exec",
)
.then(res => res.json())
.then(result => {
  URL = [];
  ImageDATAS = result;
  for (var i = 0; i < ImageDATAS.length; i++) {
    URL[i] = ImageDATAS[i].url
  }
  console.log(ImageDATAS);
  Load(a[0],a[1]);
},);

var a = [];

function Load(width,height){
  a = [width,height];
  console.log(a);
  console.log(URL);
  ASSETS = URL;
  var game = new Core(width, height);
  game.preload(ASSETS);
  game.fps = 10;
  game.onload = function(){
    var StartScene = function(){
      var scene = new Scene();
      var Start = new Sprite(505,505);
      Start.image = game.assets[ImageDATAS[0].url];
      scene.addChild(Start);
      var Text = new Label();
      Text.font  = "60px monospace";
      Text.color = "black";
      Text.width = 505;
      Text.height = 60;
      Text.text = "画像表示のみ";
      scene.addChild(Text);
      var Image = 0;
      scene.on("touchstart",function(){
        Text.text = "画像表示 " + ImageDATAS[Image].url;
        Start.image = game.assets[ImageDATAS[Image].url];
        Image++;
        if(Image==ImageDATAS.length) Image = 0;
      })
      return scene;
    };
    game.replaceScene(StartScene());
  }
  game.start();
}
