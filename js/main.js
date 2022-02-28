
var windowHeight = $(window).height(); 
$("section").css("height",windowHeight);  

$(window).resize(function(){
    var windowHeight = $(window).height();
    $("section").css("height",windowHeight);
});



var pos = []; 

for(var i=1 ; i<7 ; i++){ 
    pos.push($('#section'+i).offset().top-80);
};
console.log(pos);



$(window).scroll(function(){
    var scrollH = $(window).scrollTop();
    


    if(scrollH < pos[1]){
        $('#remote a').removeClass('on');
        $('#remote a').eq(0).addClass('on');
    } 
    else if (scrollH >= pos[1] && scrollH < pos[2]){
        $('#remote a').removeClass('on');
        $('#remote a').eq(1).addClass('on');
    } 
    else if (scrollH >= pos[2] && scrollH < pos[3]){
        $('#remote a').removeClass('on');
        $('#remote a').eq(2).addClass('on');
    } 
    else if (scrollH >= pos[3] && scrollH < pos[4]){
        $('#remote a').removeClass('on');
        $('#remote a').eq(3).addClass('on');
    } 
    else if (scrollH >= pos[4] && scrollH < pos[5]){
        $('#remote a').removeClass('on');
        $('#remote a').eq(4).addClass('on');
    }
    else{
        $('#remote a').removeClass('on');
        $('#remote a').eq(5).addClass('on');
    }
});




$('#remote a').click(function(e){
    e.preventDefault();
   var ttt = this.hash;     //#해쉬값을 얻어온다
    console.log(ttt);
   
    $('html, body').animate({scrollTop:$(ttt).offset().top},500,'swing');
});


$('section .btnDown').on("click",function(){
    var aa = $(this).parents('section').index();

    $('html, body').animate({scrollTop:pos[aa+1]},500,'swing');

});



