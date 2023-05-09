console.log(String.raw`
          _____                    _____                    _____                    _____          
         /\    \                  /\    \                  /\    \                  /\    \         
        /::\____\                /::\    \                /::\    \                /::\    \        
       /:::/    /               /::::\    \               \:::\    \              /::::\    \       
      /:::/    /               /::::::\    \               \:::\    \            /::::::\    \      
     /:::/    /               /:::/\:::\    \               \:::\    \          /:::/\:::\    \     
    /:::/____/               /:::/__\:::\    \               \:::\    \        /:::/__\:::\    \    
   /::::\    \              /::::\   \:::\    \               \:::\    \      /::::\   \:::\    \   
  /::::::\____\________    /::::::\   \:::\    \               \:::\    \    /::::::\   \:::\    \  
 /:::/\:::::::::::\    \  /:::/\:::\   \:::\    \               \:::\    \  /:::/\:::\   \:::\    \ 
/:::/  |:::::::::::\____\/:::/  \:::\   \:::\____\_______________\:::\____\/:::/__\:::\   \:::\____\
\::/   |::|~~~|~~~~~     \::/    \:::\  /:::/    /\::::::::::::::::::/    /\:::\   \:::\   \::/    /
 \/____|::|   |           \/____/ \:::\/:::/    /  \::::::::::::::::/____/  \:::\   \:::\   \/____/ 
       |::|   |                    \::::::/    /    \:::\~~~~\~~~~~~         \:::\   \:::\    \     
       |::|   |                     \::::/    /      \:::\    \               \:::\   \:::\____\    
       |::|   |                     /:::/    /        \:::\    \               \:::\   \::/    /    
       |::|   |                    /:::/    /          \:::\    \               \:::\   \/____/     
       |::|   |                   /:::/    /            \:::\    \               \:::\    \         
       \::|   |                  /:::/    /              \:::\____\               \:::\____\        
        \:|   |                  \::/    /                \::/    /                \::/    /        
         \|___|                   \/____/                  \/____/                  \/____/         
see theme at https://github.com/0x4qE/hexo-theme-Kaze
`);const scrollWidth=document.body.scrollWidth||document.documentElement.scrollWidth;let darkControlButton=null;(darkControlButton=scrollWidth<=742?document.querySelector(".darkwidget"):document.querySelector(".darknavbar")).addEventListener("click",()=>{setDarkmode(reverseDarkModeSetting())});const smoothScrollToTop=()=>{let t=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;t>1?(window.requestAnimationFrame(smoothScrollToTop),scrollTo(0,Math.floor(.85*t))):scrollTo(0,0)};setTimeout(()=>{document.getElementById("scrollbutton").onclick=smoothScrollToTop},0);const reversePopButton=()=>{const t=document.getElementById("scrollbutton"),e=document.getElementById("menubutton"),o=document.getElementById("popbutton"),_=document.body.scrollWidth||document.documentElement.scrollWidth;"flex"===t.style.display?(t.style.bottom="32px",t.style.opacity="0",o.style.transform="none",setTimeout(()=>{t.style.display="none"},100)):(t.style.display="flex",o.style.transform="rotate(90deg)",setTimeout(()=>{t.style.bottom="85px",t.style.opacity="1"},100));const l=document.getElementById("mobiletoc");_<=862&&l&&("flex"===e.style.display?(e.style.right="32px",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},100)):(e.style.display="flex",setTimeout(()=>{e.style.right="85px",e.style.opacity="1"},100)));const n=document.querySelector(".darkwidget");_<=742&&("flex"===n.style.display?(n.style.bottom="32px",n.style.opacity="0",n.style.transform="none",setTimeout(()=>{n.style.display="none"},100)):(n.style.display="flex",o.style.transform="rotate(90deg)",setTimeout(()=>{n.style.bottom="138px",n.style.opacity="1"},100)))};function menuClick(t){const e=t.target,o=document.getElementById("mobiletoc");o&&(o.contains(e)||(o.style.display="none",document.body.removeChild(mask),document.removeEventListener("click",menuClick)))}setTimeout(()=>{document.getElementById("popbutton").onclick=reversePopButton},0);const clickMenuButton=()=>{const t=document.getElementById("mobiletoc");if(!t)return;t.style.display="block";const e=document.createElement("div");e.id="mask",document.body.appendChild(e),setTimeout(()=>{document.addEventListener("click",menuClick)},0)};setTimeout(()=>{document.getElementById("menubutton").onclick=clickMenuButton},0);