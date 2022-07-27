    
    const $h1 = $("<h1>").addClass("h1").text("Roman Tafelski")
    $("body").append($h1)
    const $h4 = $("<h4>").addClass("h4").text("Student at General Assembly").appendTo("body")
   
   
    const $aboutMe = $("<div>").addClass("aboutMe").text("About Me").appendTo("body")
    const $intro = $("<p>").text("Hello. Thank you for stopping by my site! Here you can find some information about me and see some of the projects that I have worked on. There are also links to my LinkedIn and Github so they are readily available and easily accessible. If you have any questions please see the contact page and I will reply as soon as possible. Thanks for visiting!").addClass("intro").appendTo(".Roman")
    
    
    
    $("<button>").addClass("menuButton").text("Menu").appendTo("body")
    $(".menu").hide()
    const dropDown = () => {
        $(".menu").show("slow")
    }
    $('.menuButton').on("click", dropDown)
    //https://www.w3schools.com/jquery/event_hover.asp
    $(".menuButton").hover(() => {
        $("button").css("color", "rgb(91, 51, 120)")
    }, () => {
        $("button").css("color", "rgb(195, 194, 194)")
    })
