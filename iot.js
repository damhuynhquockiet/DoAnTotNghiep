// thông tin firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCLHFRWZxdGt4TsP4S1dMY3suW6sWNkAa0",
    authDomain: "tieu-viet-thong-bao-cao.firebaseapp.com",
    databaseURL: "https://tieu-viet-thong-bao-cao-default-rtdb.firebaseio.com",
    projectId: "tieu-viet-thong-bao-cao",
    storageBucket: "tieu-viet-thong-bao-cao.appspot.com",
    messagingSenderId: "861859562419",
    appId: "1:861859562419:web:3a1da3bd2ace58be1f41c6",
    measurementId: "G-KSC869S007"
  };

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//buttons created
var btnon1 = document.getElementById("btnon1");
var btnoff1 = document.getElementById("btnoff1");
var btnon2 = document.getElementById("btnon2");
var btnoff2 = document.getElementById("btnoff2");
var btnon3 = document.getElementById("btnon3");
var btnoff3 = document.getElementById("btnoff3");

//light_1
btnon1.onclick = function()
{
  document.getElementById("light_1").src = "/img/light_bulb.png"
  database.ref("/lab1").update({
    "light_1" : 1
  });
}
btnoff1.onclick = function()
{
  document.getElementById("light_1").src = "/img/light_bulb_off.png"
  database.ref("/lab1").update({
    "light_1" : 0
  });
}

database.ref("/lab1/light_1").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("light_1").src = "/img/light_bulb.png";
  else
    document.getElementById("light_1").src = "/img/light_bulb_off.png";
  });
//transfer
btnon3.onclick = function()
{
  document.getElementById("transfer").src = "/img/transfer_on.png"
  database.ref("/lab1").update({
    "transfer" : 1
  });
}
btnoff3.onclick = function()
{
  document.getElementById("transfer").src = "/img/transfer_off.png"
  database.ref("/lab1").update({
    "transfer" : 0
  });
}

database.ref("/lab1/transfer").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("transfer").src = "/img/transfer_on.png";
  else
    document.getElementById("transfer").src = "/img/transfer_off.png";
  });

//light_2
btnon2.onclick = function()
{
  document.getElementById("light_2").src = "/img/light_bulb.png"
  database.ref("/lab1").update({
    "light_2" : 1
  });
}
btnoff2.onclick = function()
{
  document.getElementById("light_2").src = "/img/light_bulb_off.png"
  database.ref("/lab1").update({
    "light_2" : 0
  });
}

database.ref("/lab1/light_2").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("light_2").src = "/img/light_bulb.png";
  else
    document.getElementById("light_2").src = "/img/light_bulb_off.png";
  });
//pump_1
database.ref("/lab1/pump_1").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("pump_1").src = "/img/wateringplant_on.jpg";
  else
    document.getElementById("pump_1").src = "/img/wateringplant.png";
  });
//pump_2
database.ref("/lab1/pump_2").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("pump_2").src = "/img/wateringplant_on.jpg";
  else
    document.getElementById("pump_2").src = "/img/wateringplant.png";
  });
//fan_1
database.ref("/lab1/fan_1").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("fan_1").src = "/img/fan_on.png";
  else
    document.getElementById("fan_1").src = "/img/fan_off.png";
  });
//fan_2
database.ref("/lab1/fan_2").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("fan_2").src = "/img/fan_on.png";
  else
    document.getElementById("fan_2").src = "/img/fan_off.png";
  });
//mist
database.ref("/lab1/mist").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("mist").src = "/img/snow_on.png";
  else
    document.getElementById("mist").src = "/img/snow_off.png";
  });
//roof
database.ref("/lab1/roof").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("roof").src = "/img/roof_on.png";
  else
    document.getElementById("roof").src = "/img/roof_off.png";
  });
//
    database.ref("/lab1/nhietdo1").on("value", function(snapshot)
    {var temp1 = snapshot.val();
    document.getElementById("nhietdo1").innerHTML = temp1;
    });

    database.ref("/lab1/doam1").on("value", function(snapshot)
    {var humidity1 = snapshot.val();
    document.getElementById("doam1").innerHTML = humidity1;
    });

    database.ref("/lab1/doamdat1").on("value", function(snapshot)
    {var soil1 = snapshot.val();
    document.getElementById("doamdat1").innerHTML = soil1;
    });

    database.ref("/lab1/anhsang").on("value", function(snapshot)
    {var lux = snapshot.val();
    document.getElementById("anhsang").innerHTML = lux;
    });
//
    database.ref("/lab1/nhietdo2").on("value", function(snapshot)
    {var temp2 = snapshot.val();
    document.getElementById("nhietdo2").innerHTML = temp2;
    });

    database.ref("/lab1/doam2").on("value", function(snapshot)
    {var humidity2 = snapshot.val();
    document.getElementById("doam2").innerHTML = humidity2;
    });

    database.ref("/lab1/doamdat2").on("value", function(snapshot)
    {var soil2 = snapshot.val();
    document.getElementById("doamdat2").innerHTML = soil2;
    });

//buttons (navigators) to change room
function openPage(pageName, element, color) 

{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    let ele = document.getElementById(pageName);
    ele.style.display = "block";
    ele.style.backgroundRepeat = 'no-repeat';
    ele.style.backgroundSize = '100% 100%';
    switch (ele.id) {
        case 'Bedroom':
            document.body.style.setProperty('background-color', 'lightblue');
            // ele.style.backgroundImage = 'url("./img/bed.jpg")';
            break;
        case 'Livingroom':
            document.body.style.setProperty('background-color', 'lightgrey');
            //ele.style.backgroundImage = 'url("./img/liv.jpg")';
            break;
        case 'Kitchen':
            document.body.style.setProperty('background-color', 'white');
            //ele.style.backgroundImage = 'url("./img/hinhnen.jpg")';
            break;
    }
    element.style.backgroundColor = color;
}