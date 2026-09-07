import{a as u,S as f,i as n}from"./assets/vendor-B4VkUtbg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const m="57502012-ee4b45b608b98ab265fc038c4",y="https://pixabay.com/api/";function d(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(y,{params:o}).then(e=>e.data).catch(e=>{console.error("Error fetching images:",e)})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),p=new f(".gallery-link",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(e=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${e.largeImageURL}">
                        <img
                            class="gallery-image"
                            src="${e.webformatURL}"
                            alt="${e.tags}"
                        />
                    </a>

                    <div class="gallery-info">
                        <p class="gallery-info-item">
                            <b>Likes</b>
                            ${e.likes}
                        </p>

                        <p class="gallery-info-item">
                            <b>Views</b>
                            ${e.views}
                        </p>

                        <p class="gallery-info-item">
                            <b>Comments</b>
                            ${e.comments}
                        </p>

                        <p class="gallery-info-item">
                            <b>Downloads</b>
                            ${e.downloads}
                        </p>
                    </div>
                </li>
            `).join("");l.innerHTML=o,p.refresh()}function h(){l.innerHTML=""}function b(){c.classList.add("is-visible")}function L(){c.classList.remove("is-visible")}const v=document.querySelector(".form-input"),w=document.querySelector(".form");w.addEventListener("submit",s=>{s.preventDefault();const o=v.value.trim();if(o===""){n.error({title:"Error",message:"Please enter a search query!"});return}h(),b(),d(o).then(e=>{if(e.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(e.hits)}).catch(e=>{n.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
