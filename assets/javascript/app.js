$(document).ready(function () {
    //functions for materialize
    $(".dropdown-trigger").dropdown({
        alignment: 'left',
        coverTrigger: false,
        inDuration: 200,
        outDuration: 400
    });
    //populating content
    function populateIntro() {
        var introTitle = $("<p id='intro-headText'><span class='black-text'>Hello World</span>!</p>");
        var introContent = $("<p id='intro-text'>My name is <span class='indigo-text'>Banadzem Valery</span>. <br>I'm a <span class='indigo-text'>full stack web developer </span><span>in San Francisco</span></p>");
        var introDiv = $("<div class='content'></div>");
        introDiv.attr("value", 1);
        introDiv.append(introTitle).append(introContent);
        return introDiv;
    }

    function populateAbout() {
        var aboutTitle = $("<p id='about-headText'><span class='indigo-text'>About Me</span>:</p>");
        var aboutContent = $("<p id='about-text'> My Name is Banadzem Berinyny Valery and I am from Cameroon.I became interested in coding after I moved to san Francisco in 2015 and started learning to code .My dream is to build applications that make life easier for people in my country. I have started first by building a classified listing website called buyamsellam.com for my country Cameroon. I am also building a ride share blog site for my country as well. On my Portfolio are a series of apps I have built.</p>")
        var aboutDiv = $("<div class='content'></div>");
        aboutDiv.attr("value", 2);
        aboutDiv.append(aboutTitle).append(aboutContent);
        return aboutDiv;
    }

    function populateContact() {
        var contactTitle = $("<p id='contact-headText' class='indigo-text'>Contact</p>");
        var contactContent1 = $("<p class='contact-text' class='left-align'>Social Media: </p>");
        var contactContent2 = $("<p class='contact-text' class='left-align' style='padding-bottom: 5%'>Email: <br><span class='red-text'><a href='www.gmail.com'>tikavalery@gmail.com</a></span></p>")
        var imgrow = $("<div class='row'></div>");
        var githubImgDiv=$("<div class='col s6'><a href='https://github.com/tikavalery' target='_blank'><img class='responsive-img ourImage' src='assets/images/githublogo.jpg'></a></div>");
        var linkedinImgDiv=$("<div class='col s6'><a href='https://www.linkedin.com/in/valery-banadzem-9321b9176/' target='_blank'><img class='responsive-img ourImage' src='assets/images/linkedinlogo.jpg'></a></div>");
        imgrow.append(githubImgDiv).append(linkedinImgDiv);
        var contactDiv = $("<div class='content'></div>");
        contactDiv.attr("value",4);
        contactDiv.append(contactTitle).append(contactContent1).append(imgrow).append(contactContent2);
        return contactDiv;
    }

    function populatePortfolio() {
        var portfolioTitle = $("<p id='portfolio-headText' class='indigo-text'>Portfolio</p>");
        //make cards from materialize card
        var projcard1 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/psychic.jpg'><span style='font-size:1.40em;' class='card-title white-text indigo'>Psychic Game</span></div><div class='card-content'><p class='card-textcontent'>A game for guessing the letters the computer is thinking about</p></div><a style='font-size:1.40em;padding:10px;' class='indigo-text' href='https://tikavalery.github.io/Psychic-Game-Homework/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/tikavalery/Psychic-Game-Homework' target='_blank'>GitHub</a></p></div></div>");
        var projcard2 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/crystal.jpg'><span style='font-size:1.40em;' class='card-title white-text indigo'>Crystal Collector Game</span></div><div class='card-content'><p class='card-textcontent'>A game to collect crystal to amount to a predifined number </p></div><a style='font-size:1.40em;padding:10px;' class='indigo-text' href='https://tikavalery.github.io/unit-4-game/.' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/tikavalery/unit-4-game' target='_blank'>GitHub</a></p></div></div>");
        var projcard3 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/aficatrivia.jpg'><span style='font-size:1.40em;' class='card-title white-text indigo'>Trivia Game</span></div><div class='card-content'><p class='card-textcontent'>A Trivia question game about capitals in Africa</p></div><a style='font-size:1.40em;padding:10px;' class='indigo-text' href='https://tikavalery.github.io/Trivia-Game/.' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/tikavalery/Trivia-Game' target='_blank'>GitHub</a></p></div></div>");
        var projcard4 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/gif.jpg'><span style='font-size:1.40em;' class='card-title white-text indigo'>Giphy</span></div><div class='card-content'><p class='card-textcontent'>A web page using the GIPHY API to generate button categories which then generate gifs</p></div><a style='font-size:1.40em;padding:10px;' class='indigo-text' href='https://tikavalery.github.io/Giphy/ ' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/tikavalery/Giphy' target='_blank'>GitHub</a></p></div></div>");
        var projcard5 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/brickgame.jpg'><span style='font-size:1.40em;' class='card-title white-text indigo'>Project1</span></div><div class='card-content'><p class='card-textcontent'>A Target game while destroying obstacle bricks </p></div><a style='font-size:1.40em;padding:10px;' class='indigo-text' href='https://tikavalery.github.io/Project1/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/tikavalery/Project1' target='_blank'>GitHub</a></p></div></div>");

        var cardrow = $("<div class='row'></div>");
        cardrow.append(projcard1).append(projcard2).append(projcard3);
        var cardrow2 = $("<div class='row'></div>");
        cardrow2.append(projcard4).append(projcard5);
        var portfolioDiv = $("<div class='content'></div>");
        portfolioDiv.attr("value",3);
        portfolioDiv.append(portfolioTitle).append(cardrow);
        portfolioDiv.append(cardrow2);
        return portfolioDiv;
    }

    function changeDiv(cValue,valueNew,newDiv){
        if(cValue != valueNew){
            $("div[value=" + cValue + "]").fadeOut(1000,function(){
                newDiv.fadeIn(500);
            });
        }
    }
    var currentValue = 1;
    var intro = populateIntro();
    var about = populateAbout();
    var portfolio = populatePortfolio();
    var contact = populateContact();
    $("#attachDiv").append(intro).append(about).append(portfolio).append(contact);
    //when user first loads page, only show intro
    
    about.hide();
    portfolio.hide();
    contact.hide();
    //click functions
    $("#homePage").click(function(){
        changeDiv(currentValue,1,intro);
        currentValue = 1;
    })
    $("#topTitle").click(function(){
        $("#homePage").trigger('click');
    })
    $("#aboutPage").click(function(){
        changeDiv(currentValue,2,about);
        currentValue = 2;
    })
    $("#portfolioPage").click(function(){
        changeDiv(currentValue,3,portfolio);
        currentValue = 3;
    })
    $("#contactPage").click(function(){
        changeDiv(currentValue,4,contact);
        currentValue = 4;
    })
})