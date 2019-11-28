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

// modal handler
let modalItem = '';


/**
 * @param  string
 */
function openModal(target){
    const MODAL = $('.modal');
    modalItem = $(target);

    MODAL.classList.add('active');
    modalItem.classList.add('active');

    return modalItem;
}

function closeModal(){
  const MODAL = $('.modal');

  MODAL.classList.remove('active');
  modalItem.classList.remove('active');

  return true;
}

// href page
const HEADER = $('header');
const CONTAINER = $("#container");
const ROOT = location.href; //"https://yoonjonglyu.github.io/webPage";

function pageLink(url){
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }
  
  async function asyncCall(url){
    console.log('loading');
    let result = await pageLink(url);
    CONTAINER.innerHTML = result;
    
  }

  /**
   * 
   * @param  event
   * @return  {string}
   */
  function linkHref(event){
      if(event.target.nodeName === "A" && event.target.dataset.target !== undefined){
        let url = ROOT+"/view/"+event.target.dataset.target+".html";
        asyncCall(url);
      } else if(event.target.parentElement.dataset.target !== undefined) {
        let url =  ROOT+"/view/"+event.target.parentElement.dataset.target+".html";
        asyncCall(url);
      }
  }

    /**
   * 
   * @param  event
   * @return  {string}
   */
  function linkHrefSub(event){
    if(event.target.nodeName === "A" && event.target.dataset.target !== undefined){
      let url = ROOT+"/sub/"+event.target.dataset.target+".html";
      asyncCall(url);
    } else if(event.target.parentElement.dataset.target !== undefined) {
      let url = ROOT+"/sub/"+event.target.parentElement.dataset.target+".html";
      asyncCall(url);
    }
}


  HEADER.addEventListener('click', linkHref); // header menu href
  CONTAINER.addEventListener('click', linkHrefSub); // content href

  (function init() { // 시작함수
    asyncCall("https://yoonjonglyu.github.io/webPage/view/index.html"); // 메인 컨텐츠 불러오기
  })();

  