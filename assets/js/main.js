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
const ROOT = "https://yoonjonglyu.github.io/webPage"; // location.href;

function pageLink(url){
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }
  
  async function asyncCall(url, data){
    console.log('loading');
    const result = await pageLink(url);
    history.pushState({data : data}, "isa", './'+data);
    CONTAINER.innerHTML = result;
  }

  async function asyncScirpt(url){
    console.log('soure loading');
    const result = await pageLink(url);
    CONTAINER.querySelector("script").innerHTML = result;
  }

  /**
   * 
   * @param  event
   * @return  {string}
   */
  function linkHref(event){
      if(event.target.nodeName === "A" && event.target.dataset.target !== undefined){
        let url = ROOT+"/view/"+event.target.dataset.target+".html";
        asyncCall(url, event.target.dataset.target);
      } else if(event.target.parentElement.dataset.target !== undefined) {
        let url =  ROOT+"/view/"+event.target.parentElement.dataset.target+".html";
        asyncCall(url, event.target.parentElement.dataset.target);
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
      asyncCall(url, event.target.dataset.target);
    } else if(event.target.parentElement.dataset.target !== undefined) {
      let url = ROOT+"/sub/"+event.target.parentElement.dataset.target+".html";
      asyncCall(url, event.target.parentElement.dataset.target);
    }
}

  function noReflash(){
    if(event.keyCode === 78 && event.ctrlKey === true){
      event.keyCode = 0;
      return false;
    }
    if(event.keyCode == 116)
    {
        event.keyCode = 0;
        return false;
    }
  }


  HEADER.addEventListener('click', linkHref); // header menu href
  CONTAINER.addEventListener('click', linkHrefSub); // content href
  document.onkeypress = noReflash;

  (function init() { // 시작함수
    asyncCall("https://yoonjonglyu.github.io/webPage/view/index.html", "index"); // 메인 컨텐츠 불러오기
  })();

  