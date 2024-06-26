var audio = new Audio();
var playpause = document.getElementById("play");
var img = document.getElementById("image");
var forbtn = document.getElementById("forward");
var backbtn = document.getElementById("backward");
var cover = document.getElementById("cover");
var info = document.getElementById("info");

audio = new Audio("Raatan Lambiyan.mp3");
let count=1;
function togglePlayPause() {
   if (audio.paused || audio.ended) {
      img.src = "pause.png";
      audio.play();
   } else {
      img.src = "play.png";
      audio.pause();
   }
}
function forward(){
      count++;
      if(count>8){
         count=1;
      }
      switch(count){
         case 2:
            audio.pause();
            audio = new Audio("Kesariya.mp3");
            info.children[0].textContent="Kesariya";
            info.children[1].textContent="Arijit Singh - Brahmastra";
            cover.src="https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg";
            audio.play();
         break;
         case 3:
         audio.pause(); 
         audio = new Audio("Mehbooba.mp3");
         info.children[0].textContent="Mehbooba";
         info.children[1].textContent="Ananya Bhat - KGF-2";
         cover.src="https://i.scdn.co/image/ab67616d0000b2739769f73f6d9b9e5fda774c54";
         audio.play();
         break;
         
         case 4:
         audio.pause();
         audio = new Audio("Apna-Bana-Le.mp3");
         info.children[0].textContent="Apna Bana Le";
         info.children[1].textContent="Arijit Singh - Bhediya";
         cover.src="https://c.saavncdn.com/815/Bhediya-Hindi-2022-20221206124543-500x500.jpg";
         audio.play();
         break;
         
         case 5:
         audio.pause(); 
         audio = new Audio("Maan Meri Jaan.mp3");
         info.children[0].textContent="Maan Meri Jaan";
         info.children[1].textContent="King";
         cover.src="https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-500x500.jpg";
         audio.play();
         break;
         case 6:
         audio.pause(); audio = new Audio("Deva Deva.mp3");
         info.children[0].textContent="Deva Deva";
         info.children[1].textContent="Arijit Singh - Brahmastra";
         cover.src="https://c.saavncdn.com/044/Deva-Deva-From-Brahmastra-Hindi-2022-20220812225424-500x500.jpg";
         audio.play();
         break;
         case 7:
         audio.pause(); audio = new Audio("Tum mere.mp3");
         info.children[0].textContent="Tum mere";
         info.children[1].textContent="Darshan Raval";
         cover.src="https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_2034329153.jpg";
         audio.play();
         break;
         case 8:
         audio.pause();
         audio = new Audio("O Bedardeya.mp3");
         info.children[0].textContent="O Bedardeya";
         info.children[1].textContent="Arijit Singh - Tu Juthi Me Makkar";
         cover.src="https://c.saavncdn.com/903/Tu-Jhoothi-Main-Makkaar-Hindi-2023-20230316165419-500x500.jpg";
         audio.play();
         break;
      }
}
function backward(){
   count--;
   if(count<1){
      count=8;
   }
   console.log("inside backward function");
   console.log(count);
      switch(count){
         case 1:
            audio.pause();
            audio = new Audio("Raatan Lambiyan.mp3");
            info.children[0].textContent="Raatan Lambiyan";
            info.children[1].textContent="Jubin Nautiyal - Shershah";
            cover.src="https://c.saavncdn.com/222/Raataan-Lambiyan-From-Shershaah--Hindi-2021-20210729181107-500x500.jpg";
            audio.play();
         break;
         case 2:
            audio.pause();
            audio = new Audio("Kesariya.mp3");
            info.children[0].textContent="Kesariya";
            info.children[1].textContent="Arijit Singh - Brahmastra";
            cover.src="https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg";
            audio.play();
         break;
         case 3:
         audio.pause(); 
         audio = new Audio("Mehbooba.mp3");
         info.children[0].textContent="Mehbooba";
         info.children[1].textContent="Ananya Bhat - KGF-2";
         cover.src="https://i.scdn.co/image/ab67616d0000b2739769f73f6d9b9e5fda774c54";
         audio.play();
         break;
         
         case 4:
         audio.pause();
         audio = new Audio("Apna-Bana-Le.mp3");
         info.children[0].textContent="Apna Bana Le";
         info.children[1].textContent="Arijit Singh - Bhediya";
         cover.src="https://c.saavncdn.com/815/Bhediya-Hindi-2022-20221206124543-500x500.jpg";
         audio.play();
         break;
         
         case 5:
         audio.pause(); 
         audio = new Audio("Maan Meri Jaan.mp3");
         info.children[0].textContent="Maan Meri Jaan";
         info.children[1].textContent="King";
         cover.src="https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-500x500.jpg";
         audio.play();
         break;
         case 6:
         audio.pause(); audio = new Audio("Deva Deva.mp3");
         info.children[0].textContent="Deva Deva";
         info.children[1].textContent="Arijit Singh - Brahmastra";
         cover.src="https://c.saavncdn.com/044/Deva-Deva-From-Brahmastra-Hindi-2022-20220812225424-500x500.jpg";
         audio.play();
         break;
         case 7:
         audio.pause(); audio = new Audio("Tum mere.mp3");
         info.children[0].textContent="Tum mere";
         info.children[1].textContent="Darshan Raval";
         cover.src="https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_2034329153.jpg";
         audio.play();
         break;
         case 8:
         audio.pause();
         audio = new Audio("O Bedardeya.mp3");
         info.children[0].textContent="O Bedardeya";
         info.children[1].textContent="Arijit Singh - Tu Juthi Me Makkar";
         cover.src="https://c.saavncdn.com/903/Tu-Jhoothi-Main-Makkaar-Hindi-2023-20230316165419-500x500.jpg";
         audio.play();
         break;
   }
}

function btn1(){
            audio.pause();
            audio = new Audio("Raatan Lambiyan.mp3");
            info.children[0].textContent="Raatan Lambiyan";
            info.children[1].textContent="Jubin Nautiyal - Shershah";
            cover.src="https://c.saavncdn.com/222/Raataan-Lambiyan-From-Shershaah--Hindi-2021-20210729181107-500x500.jpg";
            audio.play();
}
function btn2(){
   audio.pause();
            audio = new Audio("Kesariya.mp3");
            info.children[0].textContent="Kesariya";
            info.children[1].textContent="Arijit Singh - Brahmastra";
            cover.src="https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg";
            audio.play();
}
function btn3(){
         audio.pause(); 
         audio = new Audio("Mehbooba.mp3");
         info.children[0].textContent="Mehbooba";
         info.children[1].textContent="Ananya Bhat - KGF-2";
         cover.src="https://i.scdn.co/image/ab67616d0000b2739769f73f6d9b9e5fda774c54";
         audio.play();
}
function btn4(){
   audio.pause();
   audio = new Audio("Apna-Bana-Le.mp3");
   info.children[0].textContent="Apna Bana Le";
   info.children[1].textContent="Arijit Singh - Bhediya";
   cover.src="https://c.saavncdn.com/815/Bhediya-Hindi-2022-20221206124543-500x500.jpg";
   audio.play();
}
function btn5(){
   audio.pause(); 
         audio = new Audio("Maan Meri Jaan.mp3");
         info.children[0].textContent="Maan Meri Jaan";
         info.children[1].textContent="King";
         cover.src="https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-500x500.jpg";
         audio.play();
}
function btn6(){
   audio.pause(); audio = new Audio("Deva Deva.mp3");
         info.children[0].textContent="Deva Deva";
         info.children[1].textContent="Arijit Singh - Brahmastra";
         cover.src="https://c.saavncdn.com/044/Deva-Deva-From-Brahmastra-Hindi-2022-20220812225424-500x500.jpg";
         audio.play();
}
function btn7(){
   audio.pause(); audio = new Audio("Tum mere.mp3");
         info.children[0].textContent="Tum mere";
         info.children[1].textContent="Darshan Raval";
         cover.src="https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_2034329153.jpg";
         audio.play();
}
function btn8(){
   audio.pause();
         audio = new Audio("O Bedardeya.mp3");
         info.children[0].textContent="O Bedardeya";
         info.children[1].textContent="Arijit Singh - Tu Juthi Me Makkar";
         cover.src="https://c.saavncdn.com/903/Tu-Jhoothi-Main-Makkaar-Hindi-2023-20230316165419-500x500.jpg";
         audio.play();
}