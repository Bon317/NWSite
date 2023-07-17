//text pop in
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
           // entry.target.classList.remove('show');
        }
    });
});

//auto scroll
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var counter = 2;
setInterval(function(){
    if(!toggled){
        if(document.getElementById("container-03-00").classList.contains("show")){
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 6){
                counter = 1;
            }
        }
    }
}, 9000);

//paudse button
var toggled = false;
function togflip(){
    if(!toggled){
        console.log("here");
        toggled = true;
        document.getElementById("pause-btn").style.background = '#40D3DC';
        document.getElementById("pause-bar1").style.background = '#000000';
        document.getElementById("pause-bar2").style.background = '#000000';
    }
    else if(toggled) {
        console.log("here2");
        toggled = false
        document.getElementById("pause-btn").style.background = 'none';
        document.getElementById("pause-bar1").style.background = '#40D3DC';
        document.getElementById("pause-bar2").style.background = '#40D3DC';
    }
}
btn = document.getElementById("pause-btn");
btn.addEventListener('click', function onClick(event) {
    togflip();
});


//denise more page
moreBtn = document.getElementById('more-btn');
moreBtn.addEventListener('click', function onClick(event) {
    document.getElementById('more-page').style.display = 'flex';
    document.getElementById('navigation-manual').style.display = 'none';
    if(!toggled){
        togflip();
    }
});

lessBtn = document.getElementById('less-btn');
lessBtn.addEventListener('click', function onClick(event) {
    document.getElementById('more-page').style.display = 'none';
    document.getElementById('navigation-manual').style.display = 'flex';
    if(toggled){
        togflip();
    }
})


//amanda more page
moreBtn = document.getElementById('amanda-more-btn');
moreBtn.addEventListener('click', function onClick(event) {
    document.getElementById('amanda-more-page').style.display = 'flex';
    document.getElementById('navigation-manual').style.display = 'none';
    if(!toggled){
        togflip();
    }
});

lessBtn = document.getElementById('amanda-less-btn');
lessBtn.addEventListener('click', function onClick(event) {
    document.getElementById('amanda-more-page').style.display = 'none';
    document.getElementById('navigation-manual').style.display = 'flex';
    if(toggled){
        togflip();
    }
})


//angela more page
moreBtn = document.getElementById('angela-more-btn');
moreBtn.addEventListener('click', function onClick(event) {
    document.getElementById('angela-more-page').style.display = 'flex';
    document.getElementById('navigation-manual').style.display = 'none';
    if(!toggled){
        togflip();
    }
});

lessBtn = document.getElementById('angela-less-btn');
lessBtn.addEventListener('click', function onClick(event) {
    document.getElementById('angela-more-page').style.display = 'none';
    document.getElementById('navigation-manual').style.display = 'flex';
    if(toggled){
        togflip();
    }
})