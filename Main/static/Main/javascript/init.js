$(document).ready(function(){
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown(
        {
            "coverTrigger" : false,
            "constrainWidth" : false,
        }
    );
    $('#zones .collapsible').collapsible(
        {
            "onOpenStart" : function() {
                $("#zones .collapsible").collapsible('close');
            },
            "accordion" : false
        }
    );
    $('#clubInformation .collapsible').collapsible(
        {
            "accordion" : false
        }
    );
    $('.modal').modal(
        {
            "preventScrolling":true
        }
    );
    $('#clubInformation.modal').modal(
        {
            "preventScrolling":true,
            "onCloseStart": function() {
                $("#clubInformation .collapsible").collapsible('close');
            }
        }
    );

    var mq = window.matchMedia("(max-width: 1000px)");
    if (mq.matches) {
        $('.slider').slider(
        {
                'height': 300,
                "indicators": true,
                "duration": 50
        });
    }
    else {
        $('.slider').slider(
        {
                'height':700,
                "indicators" : true,
                "duration" : 50
        });
    }
    var mq = window.matchMedia( "(max-width: 1000px)" );
    if (mq.matches) {
      $('.row').removeClass('flex');
    }

});

$(window).on('load', function () {
    $(".preLoader").fadeOut();
    $(".hideAll").fadeIn("hideAll");
});

$(document).ready(function(){

    setTimeout(function(){$("#quote").fadeIn();},300);
});
let count = 1;
setTimeout(function(){
    if(count%2==1)
    {
        $("#quote").fadeOut();
        setTimeout(function(){$("#quote").html("Be patient ..");$("#quote").fadeIn();},1000);
    }
    else
    {
        $("#quote").fadeOut();
        setTimeout(function(){$("#quote").html("Good things take time ..");$("#quote").fadeIn();},1000);
    }
    count+=1;
}
,4000);