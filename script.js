
// background
function background1() {
    document.getElementById("bg").style.backgroundImage =
        "url(images/background-home-desktop.jpg)";
    remove();
    remove_btn();
    document.getElementById("ahome").classList.add("active");
    document.getElementById("btn1").classList.add("border");
}
function background2() {
    document.getElementById("bg").style.backgroundImage =
        "url(images/background-destination-desktop.jpg)";
    remove();
    remove_btn();
    document.getElementById("adestination").classList.add("active");
    document.getElementById("btn2").classList.add("border");
}
function background3() {
    document.getElementById("bg").style.backgroundImage =
        "url(images/background-crew-desktop.jpg)";
    remove();
    remove_btn();
    document.getElementById("acrew").classList.add("active");
    document.getElementById("btn3").classList.add("border");
}
function background4() {
    document.getElementById("bg").style.backgroundImage =
        "url(images/background-technology-desktop.jpg)";
    remove();
    remove_btn();
    document.getElementById("atechnology").classList.add("active");
    document.getElementById("btn4").classList.add("border");
}
//remove active class
function remove() {
    document.getElementById("ahome").classList.remove("active");
    document.getElementById("adestination").classList.remove("active");
    document.getElementById("acrew").classList.remove("active");
    document.getElementById("atechnology").classList.remove("active");
}
//remove button 
function remove_btn() {
    document.getElementById("btn1").classList.remove("border");
    document.getElementById("btn2").classList.remove("border");
    document.getElementById("btn3").classList.remove("border");
    document.getElementById("btn4").classList.remove("border");
}
// destinattion page-2
function mars() {
    remove_des();
    document.getElementById("dest1").classList.add("active");
    remove_desb();
    add_desb1();
}
function moon() {
    remove_des();
    document.getElementById("dest2").classList.add("active");
    remove_desb();
    add_desb2();
}
function europa() {
    remove_des();
    document.getElementById("dest3").classList.add("active");
    remove_desb();
    add_desb3();
}
function titan() {
    remove_des();
    document.getElementById("dest4").classList.add("active");
    remove_desb();
    add_desb4();
}
//remove_des
function remove_des() {
    document.getElementById("dest1").classList.remove("active");
    document.getElementById("dest2").classList.remove("active");
    document.getElementById("dest3").classList.remove("active");
    document.getElementById("dest4").classList.remove("active");
}
function remove_desb() {
    let mars = document.querySelectorAll("#marsb");
    let moon = document.querySelectorAll("#moonb");
    let europa = document.querySelectorAll("#europab");
    let titan = document.querySelectorAll("#titanb");
    for (let bu of mars) {
        bu.classList.remove("border");
    }
    for (let au of moon) {
        au.classList.remove("border");
    }
    for (let cu of europa) {
        cu.classList.remove("border");
    }
    for (let du of titan) {
        du.classList.remove("border");
    }
}
function add_desb1() {
    let mars = document.querySelectorAll("#marsb");
    for (let bu of mars) {
        bu.classList.add("border");
    }
}
function add_desb2() {
    let moon = document.querySelectorAll("#moonb");
    for (let au of moon) {
        au.classList.add("border");
    }
}
function add_desb3() {
    let europa = document.querySelectorAll("#europab");
    for (let cu of europa) {
        cu.classList.add("border");
    }
}
function add_desb4() {
    let titan = document.querySelectorAll("#titanb");
    for (let du of titan) {
        du.classList.add("border");
    }
}
// crew page-3 
function commander() {
    remove_crew();
    document.getElementById("crew1").classList.add("active");
    remove_color();
    add_color1();
}
function engineer() {
    remove_crew();
    document.getElementById("crew2").classList.add("active");
    remove_color();
    add_color2();
}
function pilot() {
    remove_crew();
    document.getElementById("crew3").classList.add("active");
    remove_color();
    add_color3();
}
function specialist() {
    remove_crew();
    document.getElementById("crew4").classList.add("active");
    remove_color();
    add_color4();
}

function remove_crew() {
    document.getElementById("crew1").classList.remove("active");
    document.getElementById("crew2").classList.remove("active");
    document.getElementById("crew3").classList.remove("active");
    document.getElementById("crew4").classList.remove("active");
}
function remove_color() {
    let co = document.querySelectorAll("#commanderb");
    let en = document.querySelectorAll("#engineerb");
    let pi = document.querySelectorAll("#pilotb");
    let sp = document.querySelectorAll("#specialistb");

    for (let cob of co) {
        cob.classList.remove("bcolour");
    }
    for (let enb of en) {
        enb.classList.remove("bcolour");
    }
    for (let pib of pi) {
        pib.classList.remove("bcolour");
    }
    for (let spb of sp) {
        spb.classList.remove("bcolour");
    }
}
function add_color1() {
    let co = document.querySelectorAll("#commanderb");
    for (let cob of co) {
        cob.classList.add("bcolour");
    }
}
function add_color2() {
    let en = document.querySelectorAll("#engineerb");
    for (let enb of en) {
        enb.classList.add("bcolour");
    }
}
function add_color3() {
    let pi = document.querySelectorAll("#pilotb");
    for (let pib of pi) {
        pib.classList.add("bcolour");
    }
}
function add_color4() {
    let sp = document.querySelectorAll("#specialistb");
    for (let spb of sp) {
        spb.classList.add("bcolour");
    }
}
//  technology

function capsule() {
    remove_tech();
    document.getElementById("tec1").classList.add("active");
    remove_btech();
    add_btech1();
}
function spaceport() {
    remove_tech();
    document.getElementById("tec2").classList.add("active");
    remove_btech();
    add_btech2();
}
function vehicle() {
    remove_tech();
    document.getElementById("tec3").classList.add("active");
    remove_btech();
    add_btech3();
}

function remove_tech() {
    document.getElementById("tec1").classList.remove("active");
    document.getElementById("tec2").classList.remove("active");
    document.getElementById("tec3").classList.remove("active");
}
function remove_btech() {
    let lee = document.querySelectorAll("#capsuleb");
    let hic = document.querySelectorAll("#spaceportb");
    let ort = document.querySelectorAll("#vehicleb");

    for (let blee of lee) {
        blee.classList.remove("btech");
    }
    for (let bhic of hic) {
        bhic.classList.remove("btech");
    }
    for (let bort of ort) {
        bort.classList.remove("btech");
    }
}
function add_btech1() {
    let lee = document.querySelectorAll("#capsuleb");
    for (let blee of lee) {
        blee.classList.add("btech");
    }
}
function add_btech2() {
    let hic = document.querySelectorAll("#spaceportb");
    for (let bhic of hic) {
        bhic.classList.add("btech");
    }
}
function add_btech3() {
    let ort = document.querySelectorAll("#vehicleb");
    for (let bort of ort) {
        bort.classList.add("btech");
    }
}
//  mobile menu
// function drop() {
//     let x = true;
//     if (x == true) {
//         document.getElementById("mob_b").style.backgroundImage="url('images/icon-close.svg')";
//         x = false;
//     }
//     else {
//          document.getElementById("mob_b").style.backgroundImage="url('images/icon-hamburger.svg')";
//     }
// }
let mob = document.getElementById("mob_b");
let x = true;
mob.addEventListener("click", () => {
    document.getElementById("mob_m").classList.toggle("active");
    //back-img
    if (x) {
        document.getElementById("mob_b").classList.remove("ham");
        document.getElementById("mob_b").classList.add("cross");
        x = !x;
    }
    else {
        document.getElementById("mob_b").classList.remove("cross");
        document.getElementById("mob_b").classList.add("ham");
        x = !x;
    }
})



