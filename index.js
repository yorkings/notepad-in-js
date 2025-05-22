const notelist = JSON.parse(localStorage.getItem('notelist'));

renderList();
function renderList(){
    let notebook = "";
    for(i=0;i<notelist.length;i++){
        const todo=notelist[i];
        const{name,date}=todo;
        const html=`
         <div>${name}</div>
         <div>${date}</div>
         <button onclick="
            notelist.splice(${i},1);
            renderList();" class='delete'>
            delete
         </button>
        `;
        notebook +=html;
    }
    document.querySelector(".js-list").innerHTML= notebook;
    localStorage.setItem('notelist',JSON.stringify(notelist))
    console.log(localStorage)
}

function addNote(){
    const inputelement=document.querySelector(".js-name-input");
    const name=inputelement.value;
    const dateinputelement=document.querySelector(".js-date-input");
    const date=dateinputelement.value
    notelist.push({name,date});
    console.log(notelist);
    inputelement.innerHTML= " ";
    dateinputelement.innerHTML= " ";
    renderList()
}