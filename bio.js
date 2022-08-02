    $("body").addClass("background")
    

    const $h1 = $("<h1>").addClass("h1").text("Roman Tafelski")
    $("body").append($h1)
    const $h4 = $("<h4>").addClass("h4").text("Student at General Assembly").appendTo("body")
   
   
    const $aboutMe = $("<div>").addClass("aboutMe").text("About Me").appendTo("body")
    const $aboutMeText = $("<p>").text("Hello, my name is Roman Tafelski. I am a student studying in the immersive General Assembly online program. I enjoy learning and developing a deeper understanding of coding languages. I love creatigng code to take a complex idea and turn it into something that is simple and easy to use. Throughout this course I am hoping to gain a wider knowledge base and strengthen what I already know. When I am not coding I enjoy playing video games or hanging out with my fiance and our pets.").addClass("text").appendTo("body")
    
    
    
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

    const $change = $("<button>").addClass("changeBackground").text("Don't like the background? Change it!").appendTo("body")

    const removal = () => {
      $("body").toggleClass()
    }
    $(".changeBackground").on("click", removal)