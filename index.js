let dialog = document.getElementsByTagName("el-dialog")[0];
dialog.outerHTML = `<div class="el-dialog">
<h3 class="dialog-header">${dialog.title}</h3>
<span class="dialog-body">${dialog.children[0].textContent}</span><span class="dialog-footer">
  <button class="el-button">${dialog.children[1].children[0].textContent}</button>
  <button class="el-button el-button-${dialog.children[1].children[1].attributes[0].value}">${dialog.children[1].children[1].textContent}</button>
</span></div>`;


let dialog2 = document.getElementsByClassName("el-dialog")[1];
let h3 = document.createElement("h3");
h3.setAttribute("class","dialog-header");
h3.innerHTML = dialog2.dataset.title;
dialog2.insertBefore(h3,dialog2.children[0]);