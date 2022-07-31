const $h1 = $("<h1>").addClass("h1").text("Roman Tafelski")
$("body").append($h1)
const $h4 = $("<h4>").addClass("h4").text("Student at General Assembly").appendTo("body")

const $resume = $("<h1>").addClass("resumeHeader").text("Resume").appendTo("body")

const $romans = $("<h2>").addClass("jobLocation").attr("id","romans").text("Roman's Pools Manager/Sales Associate").appendTo("body")

const $romansList = $("<ul>").addClass("jobDescription").attr("id", "romansDescription").text("My responsibilities at Roman's Pools as a manager included: ").appendTo("#romans")

const $romansBP1 = $("<li>").addClass("jobDescription").attr("id", "romansBP").text("Ordering and scheduling delivery for products sold at my location.")


const $cottageInn = $("<h2>").addClass("jobLocation").attr("id", "cottageInn").text("Cottage Inn Pizza Delivery").appendTo("body")
const $ups = $("<h2>").addClass("jobLocation").attr("id", "ups").text("UPS Package Handler").appendTo("body")



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
