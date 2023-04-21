const rock = $('#rock');
const paper = $('#paper');
const scissor = $('#scissor');
var choices = ['rock','paper','scissor'];
var user_choice;
var user_points = 0 , computer_points = 0 , no_of_matches = 0;
$(document).ready(function(){
    $('#rock').on("click",function(){
        user_choice = choices[0];
        select_choice();
        game_start();
    });
    $('#paper').on("click",function(){
        user_choice = choices[1];
        // alert(user_choice);
        select_choice();
        game_start();
    });
    $('#scissor').on("click",function(){
        user_choice = choices[2];
        // alert(user_choice);
        select_choice();
        game_start();
    });
})
function select_choice(){
    var n = Math.floor(Math.random()*3);
    computer_choice =  choices[n];
    console.log(user_choice)
    console.log(choices[n]);
    animation();
    $(`#user_image`).css(`background-image`,`url(${user_choice}.JPG)`);
    $(`#computer_image`).css(`background-image`,`url(${computer_choice}.JPG)`);
}
function game_start(){
    if(user_choice =='rock' && computer_choice == 'scissor'){
        $('#user_image').css('border','green 5px solid');
        $('#computer_image').css('border','red 5px solid');
        user_points +=1;     
    }else if(user_choice == 'paper' && computer_choice =='rock'){
        $('#user_image').css('border','green 5px solid');
        $('#computer_image').css('border','red 5px solid');
        user_points +=1;
    }else if(user_choice == 'scissor' && computer_choice == 'paper'){
        $('#user_image').css('border','green 5px solid');
        $('#computer_image').css('border','red 5px solid');
        user_points +=1;
    }else if(user_choice == computer_choice){
        $('#user_image').css('border','yellow 5px solid');
        $('#computer_image').css('border','yellow 5px solid');
    }
    else{
        $('#user_image').css('border','red 5px solid');
        $('#computer_image').css('border','green 5px solid');
        computer_points +=1;
    }
    no_of_matches +=1;
    $('#user_score').html(`${user_points}`);
    $('#no_of_matches').html(`${no_of_matches}`);
    $('#computer_score').html(`${computer_points}`);

    if(user_points > computer_points){
        $('.you').css('background-color','green');
        $('.computer').css('background-color','red');
    }else if(user_points < computer_points){
        $('.you').css('background-color','red');
        $('.computer').css('background-color','green');
    }else if(user_points == computer_points){
        $('.you').css('background-color','yellow');
        $('.computer').css('background-color','yellow');
    }
}
function animation(){

    $('#user_choice').animate({
        margin : '0px 0px 0px +407px'
    },100);
    $('#computer_choice').animate({
        margin : '0px 0px 0px +146px'
    },100);
    $('.vs').animate({
        margin : '30px 0px 0px +144px'
    },100);
    
    $('#user_choice').animate({
        margin : '0px 0px 0px +500px'
    },500,"swing");
    $('#computer_choice').animate({
        margin : '0px 0px 0px +60px'
    },500,"swing");
    $('.vs').animate({
        margin : '30px 0px 0px +60px'
    },500,"swing");
}