$("body").addClass("background")
    

const $h1 = $("<h1>").addClass("h1").text("Roman Tafelski")
$("body").append($h1)
const $h4 = $("<h4>").addClass("h4").text("Student at General Assembly").appendTo("body")

const $resume = $("<h1>").addClass("resumeHeader").text("Resume").appendTo("body")


const $romans = $("<h2>").addClass("jobLocation").attr("id","romans").text("Roman's Pools Manager/Sales Associate").appendTo("body")

const $romansP = $("<p>").addClass("jobDescription").attr("id", "romansDescription").text("As a sales associate my responsibilities were to help customers in the store, analyze information and relay information to customers in a way that he or she will understand, restock the sales floor as well as cash customers out.  My responsibilities as a manager were to oversee work of other employees, count registers, manage inventory stock, and provide assistance to employees and customers. I was also responsible for handling any grievances brought from the customer.").appendTo("#romans")


const $ups = $("<h2>").addClass("jobLocation").attr("id", "ups").text("UPS Package Handler").appendTo("body")

const $upsP = $("<p>").addClass("jobDescription").attr("id", "upsDescription").text("My responsibilities were to show up on time, be flexible, sort packages and place them into the appropriate trailer, and to memorize zip codes so that I was able to place packages in the appropriate trailers.").appendTo("#ups")




const $cottageInn = $("<h2>").addClass("jobLocation").attr("id", "cottageInn").text("Cottage Inn Pizza Delivery").appendTo("body")
const $ciP = $("<p>").addClass("jobDescription").attr("id", "ciDescription").text("My responsibilities as a driver were to answer phone calls to take orders while in the store, to have a good knowledge of the area, and to arrive places in a timely yet safe manner.").appendTo("#cottageInn")

const $skills = $("<ul>").addClass("skills").text("Skills").appendTo("body")

const $skill1 = $("<li>").addClass("skillList").text("Time management").appendTo(".skills")
const $skill2 = $("<li>").addClass("skillList").text("Communication").appendTo(".skills")
const $skill3 = $("<li>").addClass("skillList").text("Ability to work under pressure").appendTo(".skills")
const $skill4 = $("<li>").addClass("skillList").text("Leadership").appendTo(".skills")
const $skill5 = $("<li>").addClass("skillList").text("Adaptability").appendTo(".skills")
const $skill6 = $("<li>").addClass("skillList").text("Decision making").appendTo(".skills")
const $skill7 = $("<li>").addClass("skillList").text("Proficient with Microsoft Office").appendTo(".skills")
const $skill8 = $("<li>").addClass("skillList").text("Mathematics").appendTo(".skills")

const $education = $("<h2>").addClass("education").text("Education").appendTo("body")
const $howellHigh = $("<h4>").addClass("school").text("Howell High School - Diploma").appendTo("body")
const $educationDescription1 = $("<p>").addClass("schoolDescription").text("Graduated with a 2.8 GPA").appendTo(".school")
const $educationDescription2 = $("<p>").addClass("schoolDescription").attr("id", "ga").text("General Assembly Immersive Program").appendTo(".school")




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