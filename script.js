function questions() {
    var shower = document.getElementById("shower").value;
    var bath = document.getElementById("bath").value;
    var dishes = document.getElementById("dishes").value;
    var dishwasher = document.getElementById("dishwasher").value;
    var washing = document.getElementById("washing").value;
    var toilet = document.getElementById("toilet").value;
    var hygiene = document.getElementById("hygiene").value;

    var showergal = shower * 2
    var bathgal = bath * 36
    var dishesgal = dishes * 3
    var dishwashergal = dishwasher * 6
    var washinggal = washing * 15
    var toiletgal = toilet * 3
    var hygienegal = hygiene * 2
    var galtotal = showergal + bathgal + dishesgal + dishwashergal + washinggal + toiletgal + hygienegal
    var human = galtotal / 11
    var humans = Math.round(human)
    var galtotaltext = showergal + bathgal + dishesgal + dishwashergal + washinggal + toiletgal + hygienegal + " gallons of water per day, which is the amount of water in "

    document.getElementById("total").innerHTML = "You use about ";
    document.getElementById("gal").innerHTML = galtotaltext;
    document.getElementById("humans").innerHTML = humans;
    document.getElementById("bodies").innerHTML = "human bodies.";

    if (galtotal > 110) {
        document.getElementById("end").innerHTML = "That is a lot of water! You use more water than average per day. Is there anything you can do to reduce your water use?";
    }

    if (galtotal < 80) {
        document.getElementById("end").innerHTML = "You are doing great! You use less water than average per day. Keep up the good work.";
    }

    if (galtotal >= 80 && galtotal <= 110) {
        document.getElementById("end").innerHTML = "You use an average amount of water per day. You are doing good but there is still room for improvement.";
    } 
}

$(document).ready(function () {
  
    //init scrolling parallax
    $(window).scroll(function(e){
        var scrolled = $(window).scrollTop();
        if(scrolled < 750){
            parallax()
        }
    });
  
    //define parallax function
    function parallax(){
      var scrolled = $(window).scrollTop();
      $('#parallax').css('background-positionY',(scrolled * -0.5)+'px');
    };
    
  });
