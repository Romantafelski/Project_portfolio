    
    const $h1 = $("<h1>").addClass("h1").text("Roman Tafelski")
    $("body").append($h1)
    const $h4 = $("<h4>").addClass("h4").text("Student at General Assembly").appendTo("body")
   
   
    const $aboutMe = $("<div>").addClass("aboutMe").text("About Me").appendTo("body")
    const $aboutMeText = $("<p>").text("My name is Roman Tafelski. I graduated from Howell High School in Howell, Mi. I enjoy gaming and having game night with my friends. I am engaged to my fiance Chloe, we will be getting married in December. We have been together since senior year of highschool (8 years). We have 2 dogs (Lola and Gus), a cat (Stitch), and a leopard gecko (Benni). During my life I played soccer for 15 years. I played varisty soccer for 3 years and was co-captain my senior year. I grew up with 2 parents and a sister, with a 14 year stint where my great grandmother lived with us. Thanks for taking the time to learn about me! ").addClass("text").appendTo(".aboutMe")
    
    
    
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
