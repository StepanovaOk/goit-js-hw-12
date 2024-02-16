import{A as v,S as L,i as d}from"./assets/vendor-db5ad915.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u=v.create({baseURL:"https://pixabay.com",params:{key:"42310325-d8e2b88bd4f4d7db9639050a5",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1}});let w=new L(".image-link",{captionsData:"alt",captionDelay:250});const S=document.querySelector(".form"),m=document.querySelector(".input-name"),n=document.querySelector(".loader"),c=document.querySelector(".gallery"),p=document.querySelector(".load-btn");let f=1,l="";S.addEventListener("submit",q);async function q(o){o.preventDefault();const t=m.value.trim();if(t===""){d.show({title:"Error",message:"Please enter a search query"});return}t!==l&&(f=1,l=t),n.classList.add("visible");try{const a=(await u.get("/api/",{params:{q:t}})).data;g(a.hits)}catch(s){console.log("Error fetching data:",s)}finally{n.classList.remove("visible")}}p.addEventListener("click",E);async function E(){const o=m.value.trim();n.classList.add("visible");try{const s=(await u.get("/api/",{params:{q:o,page:f+=1}})).data;g(s.hits)}catch(t){console.log("Error fetching data:",t)}finally{n.classList.remove("visible")}}function P(o,t,s,a,e,r,i){return`<li class="photo">
  <div class="photo-card">
    <a class="image-link" data-lightbox="image" href="${t}">
    <img class="gallery-image" data-source="${t}"  src="${o}" alt="${s}"></img>
    </a>
    </div>
      <div class="description">
        <p class="description-item"> Likes ${a}</p>
        <p class="description-item"> Views ${e}</p>
        <p class="description-item"> Comments ${r}</p>
        <p class="description-item"> Downloads ${i}</p>

    </div>
  </li>`}function g(o){c.innerHTML="",o.length===0&&d.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",messageSize:"25"}),o.forEach(t=>{const{webformatURL:s,largeImageURL:a,tags:e,likes:r,views:i,comments:h,downloads:y}=t,b=P(s,a,e,r,i,h,y);c.insertAdjacentHTML("beforeend",b)}),w.refresh(),$()}function $(){p.style.visibility="visible"}
//# sourceMappingURL=commonHelpers.js.map
