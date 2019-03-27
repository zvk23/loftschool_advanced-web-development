export default (function() {
	const anchorsLinks = document.querySelectorAll(".js-anchor-link");

	function windowScrollTo(direction,offset) {
		let 
            animationsDuration = 500,
            framesCount = 30,
            fps = animationsDuration / framesCount,
            notBodyBottomReached = true;

			let coordY = (direction == 'down') ? offset : (window.pageYOffset - offset);

            if(direction == 'down') {
                let scroller = setInterval(function() {
                    let 
                        scrollBy = coordY / framesCount;
                    
                    notBodyBottomReached = window.innerHeight + window.pageYOffset < document.body.offsetHeight;

                    if(offset - window.pageYOffset > scrollBy && notBodyBottomReached){
                        window.scrollBy(0, scrollBy);
                    } else {
                        window.scrollTo(0, coordY);
                        clearInterval(scroller);
                    }
                    }, fps);
                } else if (direction == 'up') {
                    notBodyBottomReached = window.innerHeight + window.pageYOffset < document.body.offsetHeight + 200;

                    let scroller = setInterval(function() {
                        let 
                            scrollBy = -coordY / framesCount;
                        
                        if(offset - window.pageYOffset < scrollBy && notBodyBottomReached){
                            window.scrollBy(0, scrollBy);
                        } else {
                            window.scrollTo(0, offset);
                            clearInterval(scroller);
                        }
                    }, fps);
                }
            }

	return {
		init: () => {
			anchorsLinks.forEach(anchor => {
				anchor.addEventListener("click", function(e) {
					e.preventDefault();

					let 
                        section = document.querySelector(`[data-anchor-section=${this.dataset.anchor}-anchor]`),
						offset = section.offsetTop,
						windowScroll = window.pageYOffset;

					if (offset > windowScroll) {
						windowScrollTo("down", offset);
					} else if (offset < windowScroll) {
						windowScrollTo("up", offset);
					}
				});
			});
		}
	};
})();
