import{A as p,S as f,i as l}from"./assets/vendor-db5ad915.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g=p.create({baseURL:"https://pixabay.com",params:{key:"42310325-d8e2b88bd4f4d7db9639050a5",image_type:"photo",orientation:"horizontal",safesearch:!0}});let h=new f(".image-link",{captionsData:"alt",captionDelay:250});const y=document.querySelector(".form"),b=document.querySelector(".input-name"),n=document.querySelector(".loader"),c=document.querySelector(".gallery");y.addEventListener("submit",L);async function L(i){i.preventDefault();const r=b.value.trim();if(r===""){l.show({title:"Error",message:"Please enter a search query"});return}n.classList.add("visible");try{const o=(await g.get("/api/",{params:{q:r}})).data;w(o.hits)}catch(s){console.log("Error fetching data:",s)}finally{n.classList.remove("visible")}}function v(i,r,s,o,e,t,a){return`<li class="photo">
  <div class="photo-card">
    <a class="image-link" data-lightbox="image" href="${r}">
    <img class="gallery-image" data-source="${r}"  src="${i}" alt="${s}"></img>
    </a>
    </div>
      <div class="description">
        <p class="description-item"> Likes ${o}</p>
        <p class="description-item"> Views ${e}</p>
        <p class="description-item"> Comments ${t}</p>
        <p class="description-item"> Downloads ${a}</p>

    </div>
  </li>`}function w(i){c.innerHTML="",i.length===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",messageSize:"25"}),i.forEach(r=>{const{webformatURL:s,largeImageURL:o,tags:e,likes:t,views:a,comments:d,downloads:m}=r,u=v(s,o,e,t,a,d,m);c.insertAdjacentHTML("beforeend",u)}),h.refresh()}
//# sourceMappingURL=commonHelpers.js.map
