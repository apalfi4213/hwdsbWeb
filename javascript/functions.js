/*
 * Name: Junior Developer
 * Date: March-June 2019
 * Description: JavaScript functions used for myHome Website
 */

function openNav() {
    document.getElementById("mySidenav").style.paddingTop = "15px";
    document.getElementById("mySidenav").style.paddingLeft = "10px";
    document.getElementById("mySidenav").style.paddingRight = "10px";
    document.getElementById("mySidenav").style.overflow = "auto";
    document.getElementById("mySidenav").style.transition = "0.5s";
    if ($(window).width() >= 1250) {
        document.getElementById("mySidenav").style.width = "20%";
    }
    else {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    }
    if (document.getElementById("mySidenav2").style.width >= "20%") {
        document.getElementById("mySidenav2").style.width = "0%";
        document.getElementById("mySidenav2").style.borderWidth = "0px";
        document.getElementById("mySidenav2").style.overflow = "hidden";
        document.getElementById("mySidenav2").style.transition = "0";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.paddingTop = "0px";
    document.getElementById("mySidenav").style.paddingLeft = "0px";
    document.getElementById("mySidenav").style.paddingRight = "0px";
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("mySidenav").style.textAlign = "unset";
    document.getElementById("mySidenav").style.overflow = "hidden";
    document.getElementById("mySidenav").style.transition = "0";
    document.getElementsByTagName("BODY")[0].style.overflow = "unset";
}

function openNav2() {
    document.getElementById("mySidenav2").style.overflow = "auto";
    document.getElementById("mySidenav2").style.transition = "0.5s";
    if ($(window).width() >= 1250) {
        document.getElementById("mySidenav2").style.width = "20%";
        document.getElementById("mySidenav2").style.textAlign = "left";
    }
    else {
        document.getElementById("mySidenav2").style.width = "100%";
        document.getElementById("mySidenav2").style.textAlign = "center";
        document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    }
    if (document.getElementById("mySidenav").style.width >= "20%") {
        document.getElementById("mySidenav").style.paddingTop = "0px";
        document.getElementById("mySidenav").style.paddingLeft = "0px";
        document.getElementById("mySidenav").style.paddingRight = "0px";
        document.getElementById("mySidenav").style.width = "0%";
        document.getElementById("mySidenav").style.textAlign = "unset";
        document.getElementById("mySidenav").style.overflow = "hidden";
        document.getElementById("mySidenav").style.transition = "0";
    }
    if ($(window).width() < 1250 && document.getElementById("mySidenav2").style.width == "20%") {

    }
}

function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0%";
    document.getElementById("mySidenav2").style.borderWidth = "0px";
    document.getElementById("mySidenav2").style.overflow = "hidden";
    document.getElementById("mySidenav2").style.transition = "0";
    document.getElementsByTagName("BODY")[0].style.overflow = "unset";
}

function openNotice() {
    document.getElementById("myNotice").style.height = "100%";
    document.getElementById("myNotice").style.width = "100%";
}

function closeNotice() {
    document.getElementById("myNotice").style.height = "0%";
    document.getElementById("myNotice").style.width = "0%";
}

function openHelper() {
    document.getElementById("myHelper").style.height = "100%";
    document.getElementById("myHelper").style.width = "100%";
    document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
}

function closeHelper() {
    document.getElementById("myHelper").style.height = "0%";
    document.getElementById("myHelper").style.width = "0%";
    document.getElementsByTagName("BODY")[0].style.overflow = "unset";
}

function openElSchools() {
    document.getElementById("myElSchools").style.height = "100%";
    document.getElementById("myElSchools").style.width = "100%";
    document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    document.getElementById("mySidenav2").style.width = "0%";
    document.getElementById("mySidenav2").style.borderWidth = "0px";
    document.getElementById("mySidenav2").style.overflow = "hidden";
    document.getElementById("mySidenav2").style.transition = "0";
}

function closeElSchools() {
    document.getElementById("myElSchools").style.height = "0%";
    document.getElementById("myElSchools").style.width = "0%";
    document.getElementsByTagName("BODY")[0].style.overflow = "unset";
    document.getElementById("mySidenav2").style.overflow = "auto";
    document.getElementById("mySidenav2").style.transition = "0.5s";
    if ($(window).width() >= 1250) {
        document.getElementById("mySidenav2").style.width = "20%";
        document.getElementById("mySidenav2").style.textAlign = "left";
    }
    else {
        document.getElementById("mySidenav2").style.width = "100%";
        document.getElementById("mySidenav2").style.textAlign = "center";
    }
    if (document.getElementById("mySidenav").style.width >= "20%") {
        document.getElementById("mySidenav").style.paddingTop = "0px";
        document.getElementById("mySidenav").style.paddingLeft = "0px";
        document.getElementById("mySidenav").style.paddingRight = "0px";
        document.getElementById("mySidenav").style.width = "0%";
        document.getElementById("mySidenav").style.textAlign = "unset";
        document.getElementById("mySidenav").style.overflow = "hidden";
        document.getElementById("mySidenav").style.transition = "0";
    }
    if ($(window).width() < 1250 && document.getElementById("mySidenav2").style.width == "20%") {

    }
}

function openSecSchools() {
    document.getElementById("mySecSchools").style.height = "100%";
    document.getElementById("mySecSchools").style.width = "100%";
    document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    document.getElementById("mySidenav2").style.width = "0%";
    document.getElementById("mySidenav2").style.borderWidth = "0px";
    document.getElementById("mySidenav2").style.overflow = "hidden";
    document.getElementById("mySidenav2").style.transition = "0";
}

function closeSecSchools() {
    document.getElementById("mySecSchools").style.height = "0%";
    document.getElementById("mySecSchools").style.width = "0%";
    document.getElementsByTagName("BODY")[0].style.overflow = "unset";
    document.getElementById("mySidenav2").style.overflow = "auto";
    document.getElementById("mySidenav2").style.transition = "0.5s";
    if ($(window).width() >= 1250) {
        document.getElementById("mySidenav2").style.width = "20%";
        document.getElementById("mySidenav2").style.textAlign = "left";
    }
    else {
        document.getElementById("mySidenav2").style.width = "100%";
        document.getElementById("mySidenav2").style.textAlign = "center";
    }
    if (document.getElementById("mySidenav").style.width >= "20%") {
        document.getElementById("mySidenav").style.paddingTop = "0px";
        document.getElementById("mySidenav").style.paddingLeft = "0px";
        document.getElementById("mySidenav").style.paddingRight = "0px";
        document.getElementById("mySidenav").style.width = "0%";
        document.getElementById("mySidenav").style.textAlign = "unset";
        document.getElementById("mySidenav").style.overflow = "hidden";
        document.getElementById("mySidenav").style.transition = "0";
    }
    if ($(window).width() < 1250 && document.getElementById("mySidenav2").style.width == "20%") {

    }
}

var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.height === "0px") {
            content.style.height = "unset";
            content.style.padding = "18px";
        } else {
            content.style.height = "0px";
            content.style.padding = "0px";
        }
    });
}

$("[data-toggle=popover]")
    .popover({ html: true })

function toggleCheck() {
    if (document.getElementById("myCheckbox").checked === true) {
        document.getElementById("css").setAttribute('href', "css/dark.css")
    } else {
        document.getElementById("css").setAttribute('href', "css/theme.css")
    }
}

/*
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "xml/test.xml",
        //url: "https://www.applytoeducation.com/Applicant/attSearchXML.aspx?fid=d0a3a28f-c393-43ea-b40d-f033f508d9ed&jcid=ae480160-2405-4566-adcf-ad7af9021942&ep=00000000-0000-0000-0000-000000000000&lc=en&aid=00884c05-6cb1-4a4f-8bb0-6b408ad48fca&maf=0",
        dataType: "xml",
        success: xmlParser
    });
});
*/

/*
function xmlParser(xml) {
    var numItems1; var numItems2; var numItems3; var numItems4; var numItems5; var numItems6;
    numItems1 = $('#News span').length;
    numItems5 = $('#Events span').length;
    numItems2 = $('#Forms span').length;
    numItems4 = $('#ServiceReq span').length;
    numItems6 = $('#Resources span').length;
    if (numItems1 > 5) {
        document.getElementById("link1").style.display = "block";
    }
    if (numItems5 > 5) {
        document.getElementById("link5").style.display = "block";
    }
    if (numItems2 > 5) {
        document.getElementById("link2").style.display = "block";
    }
    if (numItems4 > 5) {
        document.getElementById("link4").style.display = "block";
    }
    if (numItems6 > 5) {
        document.getElementById("link6").style.display = "block";
    }
    $(xml).find("job").each(function () {
        numItems3 = $('#JobPosts span').length;
        if (numItems3 < 5) {
            $("#showPosts").append('<a href="' + $(this).find("url").text() + '"><span>' + $(this).find("title").text() + '</span></a>');
            document.getElementById("link3").style.display = "none";
        }
        else {
            $("#collapse3").append('<a href="' + $(this).find("url").text() + '"><span>' + $(this).find("title").text() + '</span></a>');
            document.getElementById("link3").style.display = "block";
        }
    });
}
*/

/* Temporary Solution for Principal Showcase */
var numItems1; var numItems2; var numItems3; var numItems4; var numItems5; var numItems6;
numItems1 = $('#News span').length;
numItems3 = $('#JobPosts span').length;
numItems5 = $('#Events span').length;
numItems2 = $('#Forms span').length;
numItems4 = $('#ServiceReq span').length;
numItems6 = $('#Resources span').length;
if (numItems1 > 5) {
    document.getElementById("link1").style.display = "block";
}
if (numItems3 > 5) {
    document.getElementById("link3").style.display = "block";
}
if (numItems5 > 5) {
    document.getElementById("link5").style.display = "block";
}
if (numItems2 > 5) {
    document.getElementById("link2").style.display = "block";
}
if (numItems4 > 5) {
    document.getElementById("link4").style.display = "block";
}
if (numItems6 > 5) {
    document.getElementById("link6").style.display = "block";
}

//window.onload = openNotice();