/*
var theipaddress = $("#ip").val();
var theport = $("#port").val();
var thename = $("#name").val();
var thebodycolours = $("#bodycolours").val();
var thetshirt = $("#tshirt").val();
var theshirt = $("#shirt").val();
var thepants = $("#pants").val();
var thehats = $("#hats").val();
var thehatversion = $("#hatversion").val();
*/ 
var save = function(arg){
  var theipaddress = $("#ip").val();
  var theport = $("#port").val();
  var thename = $("#name").val();
  var thebodycolours = $("#bodycolours").val();
  var thetshirt = $("#tshirt").val();
  var theshirt = $("#shirt").val();
  var thepants = $("#pants").val();
  var thehats = $("#hats").val();

  var theface = $("#face").val();
  var thehead = $("#head").val();

  var thehatversion = $("#hatversion").val();
  //////////////////////////
  switch(arg){
    default:
      alert("error");
    break;

      case "load":
      $("#ip").val(Cookies.get("ipaddress"));
      $("#port").val(Cookies.get("port"));
      $("#name").val(Cookies.get("username"));
      $("#bodycolours").val(Cookies.get("bodycolours"));
      $("#tshirt").val(Cookies.get("tshirt"));
      $("#shirt").val(Cookies.get("shirt"));
      $("#pants").val(Cookies.get("pants"));
      $("#hats").val(Cookies.get("hats"));

      $("#face").val(Cookies.get("face"));
      $("#head").val(Cookies.get("head"));

      $("#hatversion").val(Cookies.get("hatversion"));

      break;

      case "ipaddress":
        Cookies.set("ipaddress", theipaddress)
        alert("Saved input for the IP address (\"" + Cookies.get("ipaddress") + "\") to cookies.")
      break;

      case "port":
        Cookies.set("port", theport)
        alert("Saved input for the port (\"" + Cookies.get("port") + "\") to cookies.")
      break;

      case "username":
        Cookies.set("username", thename)
        alert("Saved input for the username (\"" + Cookies.get("username") + "\") to cookies.")
      break;

      case "bodycolours":
      Cookies.set("bodycolours", thebodycolours)
      alert("Saved input for the body colours (\"" + Cookies.get("bodycolours") + "\") to cookies.")
      break;

      case "tshirt":
      Cookies.set("tshirt", thetshirt)
      alert("Saved input for the t-shirt (\"" + Cookies.get("tshirt") + "\") to cookies.")
      break;

      case "shirt":
      Cookies.set("shirt", theshirt)
      alert("Saved input for the shirt (\"" + Cookies.get("shirt") + "\") to cookies.")
      break;

      case "pants":
      Cookies.set("pants", thepants)
      alert("Saved input for the pants (\"" + Cookies.get("pants") + "\") to cookies.")
      break;

      case "hats":
      Cookies.set("hats", thehats)
      alert("Saved input for the hats (\"" + Cookies.get("hats") + "\") to cookies.")
      break;

      case "face":
      Cookies.set("face", theface)
      alert("Saved input for the face (\"" + Cookies.get("face") + "\") to cookies.")
      break;

      case "head":
      Cookies.set("head", theface)
      alert("Saved input for the head (\"" + Cookies.get("head") + "\") to cookies.")
      break;

      case "hatversion":
      Cookies.set("hatversion", thehatversion)
      alert("Saved input for the hat version (\"" + Cookies.get("hatversion") + "\") to cookies.")
      break;
  }
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

var saveClick = function(){
  $("#saveip").click(function(){
    save("ipaddress");
  });

  $("#saveport").click(function(){
    save("port");
  });

  $("#saveusername").click(function(){
    save("username");
  });

  $("#savebodycolours").click(function(){
    save("bodycolours");
  });

  $("#savetshirt").click(function(){
    save("tshirt");
  });

  $("#saveshirt").click(function(){
    save("shirt");
  });

  $("#savepants").click(function(){
    save("pants");
  });

  $("#savehats").click(function(){
    save("hats");
  });

  $("#saveface").click(function(){
    save("face");
  });

  $("#savehead").click(function(){
    save("head");
  });



  $("#savehatversion").click(function(){
    save("hatversion");
  });


}
var today = new Date();
var writeFile = function(){
  var output = "CRITICAL ERROR. TELL JAD AND HE WILL BE REALLY SAD.";
  var script = [
    "--[[",
    " MISCELLANEOUS: Generated using bepis bud, by Jad C.",
    " CONTACT: If there is any errors with THE GENERATOR, contact Jad on Discord. jad#0875",
    " AUTHOR: Carrot#3803, John#2404 and Bitl",
    " WRITTEN ON: 4/16/2017 @ 8:23 PM CST",
    " GENERATED ON: " + today,
    "",
    " PLAYING AS: " + $("#name").val(),
    " CURRENT SERVER: " + $("#ip").val() + ":" + $("#port").val(),
    "--]]",
    "",
    "--// BEGIN CONFIG",
    "",
    "local serverip = \"" + $("#ip").val() + "\"",
    "local serverport = " + $("#port").val(),
    "local clientport = 0",
    "local name = \"" + $("#name").val() + "\"",
    "",
    "--// BEGIN FUNCTION CONFIG",
    "",
    "local suc, err = pcall(function()",
    "client = game:GetService(\"NetworkClient\")",
    "player = game:GetService(\"Players\"):CreateLocalPlayer(0) ",
    "player:SetSuperSafeChat(false)",
    "game:GetService(\"Visit\")",
    "end)",
    "",
    "--// BEGIN MISCELLANEOUS CONFIG",
    "local bodycolors = \"" + $("#bodycolours").val() + "\" -- Do not edit unless you know what you're doing! | The entire url (including the hash) goes here.",
    "local tshirt = \"" + $("#tshirt").val() +"\" -- Put in a T-Shirt asset ID from https://www.roblox.com/catalog/",
    "local shirt = \"" + $("#shirt").val() + "\" -- Put in a Shirt asset ID https://www.roblox.com/catalog/",
    "local pants = \"" + $("#pants").val() +"\" -- Put in a Pants asset ID https://www.roblox.com/catalog/",
    "local hats = {" + $("#hats").val() +"} -- Put in a Hat asset ID https://www.roblox.com/catalog/ | Maximum is 5 hats. Having more than 5 is not recommended, as your character can be fidgity.",
    "local face = \"" + $("#face").val() +"\"",
    "local head = \"" + $("#head").val() +"\"",
    "local hatversion = " + $("#hatversion").val() +" -- If some hats do not load, change this to 2.",
    "local charapp = \"\" -- Do not edit this!",
    "",
    "--// BEGIN CODE",
    "",
    "--|| Apply the character customization.",
    "",
    "if bodycolors ~= \"\" then",
    "charapp = charapp .. bodycolors .. \";\"",
    "end ",
    "",
    "if pants ~= \"\" then",
    "charapp = charapp .. \"http://www.roblox.com/asset?id=\" .. pants .. \";\"",
    "end",
    "",
    "if shirt ~= \"\" then",
    "charapp = charapp .. \"http://www.roblox.com/asset?id=\" .. shirt .. \";\"",
    "end",
    "",
    "if tshirt ~= \"\" then",
    "charapp = charapp .. \"http://www.roblox.com/asset?id=\" .. tshirt .. \";\"",
    "end",
    "",
    "if face ~= \"\" then",
    "charapp = charapp .. \"http://www.roblox.com/asset?id=\" .. face .. \";\"",
    "end",
    "",
    "if head ~= \"\" then",
    "charapp = charapp .. \"http://www.roblox.com/asset?id=\" .. head .. \";\"",
    "end",
    "",
    "if #hats > 0 then",
    "for i,v in pairs(hats) do",
    "charapp = charapp .. \"http://www.roblox.com/asset?id=\" .. v .. \"&version=\" .. hatversion .. \";\"",
    "end",
    "",
    "end",
    "",
    "player.CharacterAppearance = charapp",
    "player.Name = name",
    "function dieerror(errmsg)",
    "game:SetMessage(errmsg)",
    "wait(math.huge)",
    "end",
    "",
    "--|| Server succession / rejection configuration.",
    "",
    "if not suc then",
    "dieerror(err)",
    "end",
    "",
    "function connected(url, replicator)",
    "local marker = nil",
    "local suc, err = pcall(function()",
    "game:SetMessageBrickCount()",
    "marker = replicator:SendMarker()",
    "end)",
    "if not suc then",
    "dieerror(err)",
    "end",
    "marker.Received:connect(function()",
    "local suc, err = pcall(function()",
    "game:ClearMessage()",
    "end)",
    "if not suc then",
    "dieerror(err)",
    "end",
    "end)",
    "end",
    "",
    "function rejected()",
    "dieerror(\"You got rejected by a server! Try updating your client?\")",
    "end",
    "",
    "function failed(peer, errcode, why)",
    "dieerror(\"Failed [\".. peer.. \"], \".. errcode.. \": \".. why)",
    "end",
    "",
    "local suc, err = pcall(function()",
    "client.ConnectionAccepted:connect(connected)",
    "client.ConnectionRejected:connect(rejected)",
    "client.ConnectionFailed:connect(failed)",
    "client:Connect(serverip, serverport, clientport, 20)",
    "end)",
    "",
    "if not suc then",
    "local x = Instance.new(\"Message\")",
    "x.Text = err",
    "x.Parent = workspace",
    "wait(math.huge)",
    "end",
    "",
    "while true do",
    "wait(0.001)",
    "replicator:SendMarker()",
    "end"
  ];

  output = script.join("\r\n");
  return output;
}

var main = function(){
  save("load");
  saveClick();

  $("#generate").click(function(){
    var val = Math.floor(1000 + Math.random() * 9000);
    download("bepisbudserver_" + val +".txt",  writeFile())
  });
}

$(document).ready(main);
