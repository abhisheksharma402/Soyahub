function navSlide()
{
    // selection of any element having a class is done by query selector method.
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.nav-list');
    var navLinks = document.querySelectorAll('.nav-list li');

    
    burger.addEventListener('click', function(){
        // toggle nav
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach(function(link,index){
            // console.log(index);
            //if no animation is there on the "link" element, it will add the animation. 
            // hence, the animation would be in function throughout the time till user is on the website.
            if(link.style.animation)
                link.style.animation = '';
            else 
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
        })
        // toggling the "toggle" class on element with 'burger' class.
        burger.classList.toggle('toggle');
    });
}



navSlide();