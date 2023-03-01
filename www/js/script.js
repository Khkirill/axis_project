// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 49.57990603779965, lng: 34.561343571163995 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;
//MAP END

$(document).ready(function(){
    // NAV START

    //NAV FOR DESKTOP
    $("#btn-main").click(function () {
        $("div.hideshow").hide();
        $("#main-part").show();

        $("#group-btn-toggle").find("button").removeClass("active");
        $("#btn-main").addClass("active");


    });

    $("#btn-projects").click(function () {
        $("div.hideshow").hide();
        $("#projects-part").show();

        $("#group-btn-toggle").find("button").removeClass("active");
        $("#btn-projects").addClass("active");


    });

    $("#btn-products").click(function () {
        $("div.hideshow").hide();
        $("#products-part").show();

        $("#group-btn-toggle").find("button").removeClass("active");
        $("#btn-products").addClass("active");


    });

    $("#btn-services").click(function () {
        $("div.hideshow").hide();
        $("#services-part").show();

        $("#group-btn-toggle").find("button").removeClass("active");
        $("#btn-services").addClass("active");


    });

    $("#btn-partners").click(function () {
        $("div.hideshow").hide();
        $("#partners-part").show();

        $("#group-btn-toggle").find("button").removeClass("active");
        $("#btn-partners").addClass("active");


    });


    //NAV FOR MOBILE
    $("#btn-main2").click(function () {
        $("div.hideshow").hide();
        $("#main-part").show();

        $("#group-btn-toggle2").find("button").removeClass("active");
        $("#btn-main2").addClass("active");

        $("#navbarToggleExternalContent").removeClass("show");
    });

    $("#btn-projects2").click(function () {
        $("div.hideshow").hide();
        $("#projects-part").show();

        $("#group-btn-toggle2").find("button").removeClass("active");
        $("#btn-projects2").addClass("active");

        $("#navbarToggleExternalContent").removeClass("show");
    });

    $("#btn-products2").click(function () {
        $("div.hideshow").hide();
        $("#products-part").show();

        $("#group-btn-toggle2").find("button").removeClass("active");
        $("#btn-products2").addClass("active");

        $("#navbarToggleExternalContent").removeClass("show");
    });

    $("#btn-services2").click(function () {
        $("div.hideshow").hide();
        $("#services-part").show();

        $("#group-btn-toggle2").find("button").removeClass("active");
        $("#btn-services2").addClass("active");

        $("#navbarToggleExternalContent").removeClass("show");
    });

    $("#btn-partners2").click(function () {
        $("div.hideshow").hide();
        $("#partners-part").show();

        $("#group-btn-toggle2").find("button").removeClass("active");
        $("#btn-partners2").addClass("active");

        $("#navbarToggleExternalContent").removeClass("show");
    });
    //NAV END

    //MAIL AND PHONE BUTTONS
    $("#btn-mail").click(function () {
        $("#btn-mail").parent().empty().html("<b>axiscore@ukr.net</b>").removeClass("d-grid").removeClass("gap-2").removeClass("col-9").addClass("col");
    });

    $("#btn-phone").click(function () {
        $("#btn-phone").parent().empty().html("<p><b>(+38)-068-795-13-41</b></p><p><b>(+38)-095-363-75-88</b></p><p><b>(+38)-063-107-00-51</b></p>").removeClass("d-grid").removeClass("gap-2").removeClass("col-9").addClass("col").addClass("px-0");

    });

    //FOR MOBILE
    $("#btn-mail2").click(function () {
        $("#btn-mail2").parent().empty().html("<b>axiscore@ukr.net</b>").removeClass("d-grid").removeClass("gap-2").removeClass("col-9").addClass("col");
    });

    $("#btn-phone2").click(function () {
        $("#btn-phone2").parent().empty().html("<p><b>(+38)-068-795-13-41</b></p><p><b>(+38)-095-363-75-88</b></p><p><b>(+38)-063-107-00-51</b></p>").removeClass("d-grid").removeClass("gap-2").removeClass("col-9").addClass("col").addClass("px-0");

    });
    //END M&P

    //PROJECTS SOURCE TOGGLE
    $("#projects-src-1").click(function () {
        $("div.hideshow-projects").hide();
        $("#projects-source-1").show();

        $("#group-ps-toggle").find("button").removeClass("active");
        $("#projects-src-1").addClass("active");
    });

    $("#projects-src-2").click(function () {
        $("div.hideshow-projects").hide();
        $("#projects-source-2").show();

        $("#group-ps-toggle").find("button").removeClass("active");
        $("#projects-src-2").addClass("active");
    });

    $("#projects-src-3").click(function () {
        $("div.hideshow-projects").hide();
        $("#projects-source-3").show();

        $("#group-ps-toggle").find("button").removeClass("active");
        $("#projects-src-3").addClass("active");
    });


    //COMPANY EXAMPLES TOGGLE
    $("#company3-btn").click(function () {
        $("#partners-source-1").hide();
        $("#company3-examples").show();
    });

    $("#company4-btn").click(function () {
        $("#partners-source-1").hide();
        $("#company4-examples").show();
    });


    $("#company3-back-btn").click(function () {
        $("#company3-examples").hide();
        $("#partners-source-1").show();
    });

    $("#company4-back-btn").click(function () {
        $("#company4-examples").hide();
        $("#partners-source-1").show();
    });
});