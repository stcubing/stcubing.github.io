// cool function that updates the active thingo or changes it on the nav
const updateState = (section_id) => {
    // commit sodoku on active thingo, remove green thing lol
    document.querySelector(".active").classList.remove('active');
    // adds shit baased on parameter
    document.querySelector(`[href='#${section_id}']`).classList.add('active');
}



const spacing_lol = 500

window.addEventListener('scroll' , () => {
    const scrollTop = window.scrollY;
    var scrollpos = this.scrollY;
    // console.log(scrollpos);
    
    // selecting the aboutme section lol
    let title = document.querySelector("#title").getBoundingClientRect()
    let aboutme = document.querySelector("#aboutme").getBoundingClientRect()
    let mywork = document.querySelector("#mywork").getBoundingClientRect()


    if (title.top < spacing_lol && title.bottom > spacing_lol) {
        // console.log('In title sequence');
        updateState("title")
    } else if (aboutme.top < spacing_lol && aboutme.bottom > spacing_lol) {
        // console.log('In about me');
        updateState("aboutme")
    } else if (mywork.top < spacing_lol && mywork.bottom > spacing_lol) {
        // console.log('In work section');
        updateState("mywork")
    } else {
        console.log('In none of those that are in the nav lol');
    }

    
});



document.addEventListener('DOMContentLoaded', () => {

    

    const time = document.getElementById("trn-insert");
    const tFormat = { weekday: "long", hour: "numeric", minute: "numeric", second: "numeric" };
    function SydClock() {
        let offset = "+11";
    
        var d = new Date();
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var newDate = new Date(utc + (3600000 * offset));
    
        time.innerText = newDate.toLocaleString("en-US", tFormat);
    
        // setTimeout(SydClock, 60000);
        setTimeout(SydClock, 1000);
    }
    SydClock();

    let myIndex = 0
    let myVideos = [
        'assets/ball.mp4',
        'assets/testing_1.webm',
    ]
    let srcType = [
        'video/mp4',
        'video/webm'
    ]

    function switchVideo() {
    myIndex += 1
    if (myIndex >= myVideos.length)
        myIndex = 0
    document.getElementById("showreelvid").src = myVideos[myIndex]
    document.getElementById("showreelvid").type = srcType[myIndex]
    }


    // const diamond = document.getElementsByClassName('bluedia');

    // diamond.addEventListener("click", function(){
    //     console.log('CLicked');
    // });


}, false);











// window.addEventListener('scroll', reveal);

// function reveal() {
//     var reveals = document.querySelectorAll('.reveal');

//     for(var i = 0; i < reveals.length; i++) {
//         var windowheight = window.innerHeight;
//         var revealtop = reveals[i].getBoundingClientRect().top;
//         var revealpoint = 150;

//         if(revealtop < windowheight - revealpoint {
//             reveals[i].classList.add('revealup');
//         })
//     }
// }
