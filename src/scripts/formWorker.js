export default (() => {

    let voidСheck = (form) => {
        let 
            inputs = form.querySelectorAll('.js-form-input'),
            emptyArray = [];
        
        inputs.forEach(input => {
            input.closest('.feedback-form__input-block').classList.remove('is-error');
            if ( input.value == "") {
                console.log('empty');
                emptyArray.push(input)
                input.closest('.feedback-form__input-block').classList.add('is-error');
            }
        });

        if (emptyArray.length > 0) {
        } else {
            let xhr = new XMLHttpRequest;
            console.log('xhr', xhr);
            form.submit()
        }
    }

    return {
        init(formSelector) {
            let 
                form = document.querySelector(formSelector);

            form.addEventListener('submit', function(e) {
                e.preventDefault();
                voidСheck(this)
            })
        }
    }
})();