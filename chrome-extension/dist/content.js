console.log("Test321 Extension content script loaded");const o=document.createElement("div");o.id="test321-indicator";o.style.cssText=`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  z-index: 10000;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  pointer-events: none;
`;o.title="Test321 Extension Active";document.addEventListener("DOMContentLoaded",()=>{document.body.appendChild(o),setTimeout(()=>{o.style.opacity="0.3"},3e3)});document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.appendChild(o)}):(document.body.appendChild(o),setTimeout(()=>{o.style.opacity="0.3"},3e3));chrome.runtime.onMessage.addListener((e,i,t)=>{if(console.log("Content script received message:",e),e.action==="highlightText"){const d=window.getSelection();if(d&&d.toString()){const s=d.getRangeAt(0),n=document.createElement("span");n.style.backgroundColor="#ffeb3b",n.style.padding="2px 4px",n.style.borderRadius="3px",n.className="test321-highlight";try{s.surroundContents(n),t({success:!0,text:d.toString()})}catch(c){console.error("Error highlighting text:",c),t({success:!1,error:c.message})}}else t({success:!1,error:"No text selected"})}e.action==="changeBackgroundColor"&&(document.body.style.backgroundColor=e.color,document.body.style.transition="background-color 0.5s ease",t({success:!0,color:e.color})),e.action==="resetBackgroundColor"&&(document.body.style.backgroundColor="",t({success:!0})),e.action==="getPageInfo"&&t({title:document.title,url:window.location.href,domain:window.location.hostname,textContent:document.body.innerText.substring(0,200)+"..."})});document.addEventListener("keydown",e=>{if(e.ctrlKey&&e.shiftKey&&e.key==="T"){e.preventDefault(),chrome.runtime.sendMessage({action:"showNotification",title:"Keyboard Shortcut",message:`Test321 Extension activated on ${document.title}`});const i=document.createElement("div");i.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(74, 222, 128, 0.1);
      z-index: 9999;
      pointer-events: none;
      animation: flash 0.5s ease-out;
    `;const t=document.createElement("style");t.textContent=`
      @keyframes flash {
        0% { opacity: 1; }
        100% { opacity: 0; }
      }
    `,document.head.appendChild(t),document.body.appendChild(i),setTimeout(()=>{document.body.removeChild(i),document.head.removeChild(t)},500)}});window.test321Extension={version:"1.0.0",active:!0,highlightText:()=>{chrome.runtime.sendMessage({action:"highlightText"})}};
