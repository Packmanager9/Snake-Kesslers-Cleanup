//blaster

let maxspeed = 3.5
let shots = 0
let timerone = 0
let boxdrop = 0

let foodeaten = 0

let snakebody = []

let xmomentum = 0

let ymomentum = 0

window.addEventListener('DOMContentLoaded', (event) =>{

    class Circle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0) {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
        }
        draw(context){
            context.lineWidth =22;
            context.strokeStyle = this.color
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)
            context.stroke();
        }
        move(){
            this.x += this.xmom
            this.y += this.ymom

        }
    }

    class Rectangle {
        constructor(top, left, width, height, color) {
            this.top = top
            this.left = left
            this.width = width
            this.height = height
            this.color = color
        }
        draw(context){
            context.fillStyle = this.color
            context.fillRect(this.left, this.top, this.width, this.height)
        }
    }

    let tinysquares = []

    let square = new Rectangle(100, 100, 100, 100, "#FF00FF")


    let majig = document.getElementById("dog-image-container");
    let eaten = document.getElementById("eaten");
    eaten.innerText = "0"
    let tutorial_canvas = document.getElementById("tutorial");
    let tutorial_canvas_context = tutorial_canvas.getContext('2d');

    tutorial_canvas.style.background =  "#000000"

    let ship = new Circle(999,999,50,"#abcedf")




    var e = window.event;

    let bullets = []


    let ship2 = new Circle(999,999,2,"#ffffff")

    let shotz = []
    let shotcount = 9

    let ship231 = new Circle(1960,100,10,"#ffffff")
    shotz.push(ship231)
    let ship232 = new Circle(1960,200,10,"#ffffff")
    shotz.push(ship232)
    let ship233 = new Circle(1960,300,10,"#ffffff")
    shotz.push(ship233)
    let ship234 = new Circle(1960,400,10,"#ffffff")
    shotz.push(ship234)
    let ship235 = new Circle(1960,500,10,"#ffffff")
    shotz.push(ship235)
    let ship2312 = new Circle(1960,600,10,"#ffffff")
    shotz.push(ship2312)
    let ship2322 = new Circle(1960,700,10,"#ffffff")
    shotz.push(ship2322)
    let ship2332 = new Circle(1960,800,10,"#ffffff")
    shotz.push(ship2332)
    let ship2342 = new Circle(1960,900,10,"#ffffff")
    shotz.push(ship2342)
    let ship2352 = new Circle(1960,1000,10,"#ffffff")
    shotz.push(ship2352)



    document.onkeydown = function(event) {

        
        switch (event.keyCode) {
           case 65:  

           if(xmomentum <= 0){
           ymomentum = 0 
           xmomentum = -maxspeed
        }
              break;
           case 87:

                if(ymomentum <= 0){
xmomentum = 0
ymomentum = -maxspeed
                }
              break;
           case 68 :

                if(xmomentum >= 0){ 
                    ymomentum = 0
           xmomentum = maxspeed
                }
              break;
              case 83:
                  if(ymomentum >= 0){
                  xmomentum = 0
                  ymomentum = maxspeed
        }
                 break;
                 case 32:
      
                 bullets = []
                 shots = 0
                     shotcount = 9
                    break;
        }
    };

    window.setInterval(function(){ 

        if(( parseInt(eaten.innerText) >= 250) && (boxdrop < 1)){

            square.width -= 20
            square.height -= 20
            boxdrop +=1
        }
        if(( parseInt(eaten.innerText) >= 450) && (boxdrop < 2)){

            square.width -= 20
            square.height -= 20
            boxdrop +=1
        }
        if(( parseInt(eaten.innerText) >= 600) && (boxdrop < 3)){

            square.width -= 20
            square.height -= 20
            boxdrop +=1
        }
        if(( parseInt(eaten.innerText) >= 700) && (boxdrop < 4)){

            square.width -= 20
            square.height -= 20
            boxdrop +=1
        }
        if(( parseInt(eaten.innerText) >= 750) && (boxdrop < 5)){

            square.width -= 20
            square.height -= 20
            boxdrop +=1
        }



        tutorial_canvas_context.clearRect(0, 0, tutorial_canvas.width, tutorial_canvas.height)


        if((boxdrop >= 5) && (tinysquares.length == 0)){
        tutorial_canvas_context.font = "210px Helvetica";
        tutorial_canvas_context.strokeText("Cleanup Complete", 100, 250);
    }
 //console.log(ship2.x, ship2.y)
      ship2.move()



context.beginPath(); 
context.moveTo(ship.x, ship.y); 

      ship.x += xmomentum
      ship.y += ymomentum

     snakebody.pop()

      if(foodeaten > snakebody.length){
        snakebody.unshift([ship.x, ship.y])
        snakebody.unshift([ship.x, ship.y])
       }
    //   if(foodeaten > snakebody.length){
    //     snakebody.push([ship.x, ship.y])
    //   }

      for (let f = 0; f < snakebody.length; f++){


        context.lineTo(snakebody[f][0], snakebody[f][1]); 

        if(f > 7){
            if(((ship2.x+ship2.radius)  > snakebody[f][0] ) && ((ship2.x-ship2.radius) < snakebody[f][0]) && ((ship2.y+ship2.radius)  > snakebody[f][1])&&((ship2.y-ship2.radius)  < snakebody[f][1])){
              death()
            }

        }
      }



    //   if(foodeaten*2< snakebody.length){
    //     let smallersquare = new Rectangle(Math.random()*2000, Math.random()*2000, 35, 35, "#FF00FF")
    //     if(tinysquares.length < 75){
    //         tinysquares.push(smallersquare)
    //      }

    //   }



    ship2.radius = maxspeed

      ship2.x = ship.x
      ship2.y = ship.y



    if (((ship2.x) < (square.left+square.width) )   &&   (ship2.x > square.left)   && ((ship2.y > square.top) && (ship2.y < (square.top+square.height)) )){
            death()
        }
context.lineWidth = 25; 
context.strokeStyle = '#00FF00';  
context.stroke();  
        ship.draw(tutorial_canvas_context)   
        ship2.draw(tutorial_canvas_context)   
    
   for (let k = 0; k < bullets.length; k++){

    
    bullets[k].move()
    bullets[k].draw(tutorial_canvas_context)

    if (((bullets[k].x) < (square.left+square.width) )   &&   (bullets[k].x > square.left)   && ((bullets[k].y > square.top) && (bullets[k].y < (square.top+square.height)) )){
      //  eaten.innerText = parseInt(eaten.innerText) + 1
        square.color = getRandomLightColor()
        
        if((Math.floor(Math.random()*100)) > 80){
        let smallersquare = new Rectangle(square.top, square.left, 35, 35, "#FF00FF")
        if(tinysquares.length < 75){
            tinysquares.push(smallersquare)
         }
    }
}

   }

   timerone += 1


   if((timerone%6800) < 1700 ){
    square.top += 1

} else if ((timerone%6800) < 3400 ){

square.left += 1

}else if ((timerone%6800) < 5100 ){

square.top -= 1

}else if ((timerone%6800) < 6800 ){

square.left -= 1

}
// for(let f = 0 ; f< tinysquares.length; f++){
// if((timerone%6800) < 1700 ){
//     if((Math.floor(Math.random()*100)) > 80){
//     tinysquares[f].top += 1
//     }
// } else if ((timerone%6800) < 3400 ){
//     if((Math.floor(Math.random()*100)) > 80){
//     tinysquares[f].left += 1
//     }
// }else if ((timerone%6800) < 5100 ){
//     if((Math.floor(Math.random()*100)) > 80){
//     tinysquares[f].top -= 1
//     }
// }else if ((timerone%6800) < 6800 ){
//     if((Math.floor(Math.random()*100)) > 80){
//     tinysquares[f].left -= 1
//     }
// }
//  }

for (let i = 0; i < tinysquares.length; i++){
    tinysquares[i].left += (((Math.random()*20)-10))
    tinysquares[i].top += (((Math.random()*20)-10))

    if(  tinysquares[i].left < 0 ){
        tinysquares[i].left = 1
    }

    if(  tinysquares[i].top < 0 ){
        tinysquares[i].top = 1
    }
    if(  tinysquares[i].left > tutorial_canvas.width ){
        tinysquares[i].left = tutorial_canvas.width - 1
    }

    if(  tinysquares[i].top > tutorial_canvas.height ){
        tinysquares[i].top = tutorial_canvas.height - 1
    }

        

    tinysquares[i].draw(tutorial_canvas_context)
    for (let k = 0; k < bullets.length; k++){

   //    bullets[k].move()
        bullets[k].draw(tutorial_canvas_context)
    
        if (((bullets[k].x)  < ( tinysquares[i].left+ tinysquares[i].width) )   &&   (bullets[k].x >  tinysquares[i].left)   && ((bullets[k].y >  tinysquares[i].top) && (bullets[k].y < ( tinysquares[i].top+square.height)) )){
           
            tinysquares[i].color = getRandomLightColor()
            
          //  let smallersquare = new Rectangle(tinysquares[i].top+(((Math.random()*200)-100)), tinysquares[i].left+(((Math.random()*200)-100)),  tinysquares[i].width*((Math.random()*1.1)+.33),  tinysquares[i].height*((Math.random()*1.1)+.33), getRandomLightColor())
        
        

          if((Math.floor(Math.random()*100)) > 80){
          let smallersquare = new Rectangle(tinysquares[i].top+(((Math.random()*200)-100)), tinysquares[i].left+(((Math.random()*200)-100)),  tinysquares[i].width*.90,  tinysquares[i].height*.90, getRandomLightColor())
         
         if(tinysquares.length < 75){
            tinysquares.push(smallersquare)
         }

        }
        }
    
       }
    
}

if (ship.x > tutorial_canvas.width){
    ship.x = tutorial_canvas.width - 1
 
    xmomentum *= -1
    death()
}
if (ship.y > tutorial_canvas.height){
    ship.y = tutorial_canvas.height - 1

    ymomentum *=-1

    death()
}

if (ship.x < 0){
    ship.x = 1
    xmomentum *= -1
    death()
}
if (ship.y < 0){
    ship.y =  1
    ymomentum *=-1
    death()
}

        square.draw(tutorial_canvas_context)

        for (let g = shotcount; g >= 0; g--){
            shotz[g].draw(tutorial_canvas_context)
        }

        let count = 0


        for (let q = 0; q < tinysquares.length; q++){
   
   if (((ship.y-(ship.radius +(22/2))) < (tinysquares[q].top +tinysquares[q].height)) &&  ((ship.y+((ship.radius +(22/2))) ) > tinysquares[q].top ) && (( (ship.x+(ship.radius +(22/2))) > tinysquares[q].left ) &&( ship.x-(ship.radius +(22/2)) < (tinysquares[q].left+tinysquares[q].width)))) {                
    tinysquares.splice(count, 1);
    eaten.innerText = parseInt(eaten.innerText) + 1
    foodeaten +=1
    maxspeed += 0.01
   }
count += 1
}
 }, 12)
 let isDrawing = false;
 let x = 0;
 let y = 0;
 
 const myPics = document.getElementById('tutorial');
 const context = myPics.getContext('2d');
 
 // The x and y offset of the canvas from the edge of the page
 const rect = myPics.getBoundingClientRect();
 
 // Add the event listeners for mousedown, mousemove, and mouseup
 myPics.addEventListener('mousedown', e => {
   x = e.clientX - rect.left;
   y = e.clientY - rect.top;
   //isDrawing = true;


if (shotcount >= 0){
   bullets[shots] = new Circle(ship.x,ship.y,11,"#ffffff")

   s = Math.abs(ship.x - x)
   b = Math.abs(ship.y - y)







   g = s*s/b*b
   h = b*b/s*s


   n = g*g
   m = h*h 



   d = Math.sqrt((m+n))

   p = d/25

   g = g/p

   h = h/p

   gg = h+g

   hh = g*h

//    if(b < 1){

    
//     b -= 1
//  }
//  if(b > -1){
 
  
//     b += 1
//  }
//  if(s < -1){

  
//  s -= 1
// }
// if(s > 1){


//  s += 1
// }

// b *= 100
// s *= 100

//console.log((Math.abs(b)*Math.abs(s)))


   for (let k = 0; (Math.abs(b)+Math.abs(s)) > 19; k++ ){
    b = b*.9999
    s = s*.9999
   }
   for (let k = 0; (Math.abs(b)+Math.abs(s)) < 19; k++ ){
    b = b/.9999
    s = s/.9999
   }

// j = b / 100
// w = s / 100

// if(j > w){
//     b = b *j
//     s = s*j
// } else {
//     b = b *w
//     s = s*w
// }

   console.log(gg/hh, gg, hh,g,h,s,b)
   console.log((Math.abs(b)*Math.abs(s)))

   if(x > ship.x){
    //ship2.ymom = g
    bullets[shots].xmom = s
    }
    if(x < ship.x){
   // ship2.ymom = g
   bullets[shots].xmom = -s
    }
    if(y< ship.y){
        bullets[shots].ymom = -b
   // ship2.xmom = h
    }
    if(y> ship.y){
        bullets[shots].ymom = b
   // ship2.xmom = h
    }
   

    //bullets[shots].ymom = s
    //bullets[shots].xmom = b










    shots +=1
 }

    shotcount--
 });
 
 myPics.addEventListener('mousemove', e => {
   if (isDrawing === true) {
     drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
     x = e.clientX - rect.left;
     y = e.clientY - rect.top;
   }
 });
 
 window.addEventListener('mouseup', e => {
   if (isDrawing === true) {
     drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
     x = 0;
     y = 0;
     isDrawing = false;
   }
 });
 
 function drawLine(context, x1, y1, x2, y2) {
   context.beginPath();
   context.strokeStyle = 'red';
   context.lineWidth = 1;
   context.moveTo(x1, y1);
   context.lineTo(x2, y2);
   context.stroke();
   context.closePath();
 }


 function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)+0];
    }
    return color;
  }

function getRandomLightColor() {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 10)+6];
   }
   return color;
 }

 function death(){
    snakebody = []
    foodeaten = 0
    ship.x = 1000
    ship.y = 1000
    ship2.x = 1000
    ship2.y = 1000
    eaten.innerText = 0
    boxdrop = 0
    tinysquares = []
    bullets = []
    shots = 0
    shotcount = 9
    xmomentum = 0
    ymomentum = 0
    timerone = 0
    maxspeed =3.5
    square = new Rectangle(100, 100, 100, 100, "#FF00FF")
 }

})





