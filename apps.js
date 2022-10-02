    $("body").addClass("background")
    
    const $h1 = $("<h1>").addClass("h1").text("Roman Tafelski<br/> Student at General Assembly")
    $("body").append($h1)
    const $h4 = $("<h4>").addClass("h4").text("Student at General Assembly").appendTo("body")
   
   
    const $Roman = $("<div>").addClass("Roman").text("Roman").appendTo("body")

    const $change = $("<button>").addClass("changeBackground").text("Don't like the background? Change it!").appendTo("body")

    const removal = () => {
      $("body").toggleClass()
    }
    $(".changeBackground").on("click", removal)
    
    
    
    $("<button>").addClass("menuButton").text("Menu").appendTo("body")
    $(".menu").hide()
    const dropDown = () => {
        $(".menu").toggle("slow")
    }
    $('.menuButton').on("click", dropDown)
    //https://www.w3schools.com/jquery/event_hover.asp
    $(".menuButton").hover(() => {
        $("button").css("color", "rgb(91, 51, 120)")
    }, () => {
        $("button").css("color", "rgb(195, 194, 194)")
    })


    

 
    
