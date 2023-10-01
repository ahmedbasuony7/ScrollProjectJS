

//  set date 
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// close links 
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    //linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;

    }else{
        linksContainer.style.height = 0;
    }

});


// fixed navbar 

const navBar =  document.getElementById('nav');
const  topLink = document.querySelector('.top-link');



window.addEventListener('scroll',function(){
    const scrollHeight = window.scrollY;
    const navHeight  = navBar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navBar.classList.add('fixed-nav');
    }else{
        navBar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }

});

// scroll smooth 
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        // prevent default
        e.preventDefault();

        // navigate to specification
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        
        // calculate the heights 
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixNav = navBar.classList.contains("fixed-nav");

        
        let position = element.offsetTop - navHeight;
        console.log(position);

        if(!fixNav){
            position = position - navHeight ;
        }

        if(navHeight>82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left : 0,
            top : position,
        });
    })
});



