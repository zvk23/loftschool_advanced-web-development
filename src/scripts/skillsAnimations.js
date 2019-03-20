let skillsAnimation = (function() {
    let 
        svgSection = document.querySelector('#skills-container'), 
        svgPaths = document.querySelectorAll('.js-skills-circle'),
        windowMargin = window.innerHeight / 3,
        svgRect = svgSection.getBoundingClientRect(),
        svgPos = svgRect.top,
        skillsItems = Array.prototype.slice.call(document.querySelectorAll('.js-skills-above'));

    return {
        grow: function (wScroll) {
            let 
                startAnimate = wScroll - svgPos + windowMargin;
            
            console.log('startAnimate', startAnimate);
        },

        init: function() {
        }
    }
})();

export default skillsAnimation;