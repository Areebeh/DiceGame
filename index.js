var random_number1 = Math.floor(Math.random()*6+1);

var random_number_image1 = "dice" +random_number1+ ".png" ;

var random_number_source1 = "images/"+random_number_image1 ;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , random_number_source1);




var random_number2 = Math.floor(Math.random()*6+1);

var random_number_image2 = "dice" +random_number2+ ".png" ;

var random_number_source2 = "images/"+random_number_image2 ;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , random_number_source2);

if (random_number1 > random_number2){
    document.querySelector("h1").innerHTML = "🏁 PLAYER 1 WIN"
}
else if(random_number2 > random_number1){
    document.querySelector("h1").innerHTML = "PLAYER 2 WIN 🏁"
}
else {
    document.querySelector("h1").innerHTML = "DRAW"
}