import{S as u,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(s){return Promise.reject(new Error("Missing VITE_PIXABAY_API_KEY. Add your Pixabay API key to the .env file."))}const a=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new u(".gallery-link",{captionsData:"alt",captionDelay:250});function m(s){const o=s.map(r=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${r.largeImageURL}">
                        <img
                            class="gallery-image"
                            src="${r.webformatURL}"
                            alt="${r.tags}"
                        />
                    </a>

                    <div class="gallery-info">
                        <p class="gallery-info-item">
                            <b>Likes</b>
                            ${r.likes}
                        </p>

                        <p class="gallery-info-item">
                            <b>Views</b>
                            ${r.views}
                        </p>

                        <p class="gallery-info-item">
                            <b>Comments</b>
                            ${r.comments}
                        </p>

                        <p class="gallery-info-item">
                            <b>Downloads</b>
                            ${r.downloads}
                        </p>
                    </div>
                </li>
            `).join("");a.innerHTML=o,y.refresh()}function d(){a.innerHTML=""}function g(){c.classList.add("is-visible")}function p(){c.classList.remove("is-visible")}const h=document.querySelector(".form-input"),b=document.querySelector(".form");b.addEventListener("submit",s=>{if(s.preventDefault(),h.value.trim()===""){l.error({title:"Error",message:"Please enter a search query!"});return}d(),g(),f().then(r=>{if(r.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}m(r.hits)}).catch(r=>{l.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{p()})});
//# sourceMappingURL=index.js.map
