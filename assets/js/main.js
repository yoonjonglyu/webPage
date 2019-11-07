// author - Isa(류윤종)

// toggle hamberger menu
const HAMBERGER = $('.header_ham');

/**
 * @param  event
 */
function handleHamberMenu(event){
    if(event.target.className !== "header_ham_box"){
        HAMBERGER.classList.add('active');
    } else{
        HAMBERGER.classList.remove('active');
    }
}

HAMBERGER.addEventListener('click', handleHamberMenu);
