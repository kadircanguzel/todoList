var todolist=[{item:"Javascript Öğren",deger:"checked"}, {item:"Python Öğren",deger:""}, {item:"C# Öğren",deger:""}];
var ulobje=document.querySelector("ul");

listele();

function listele()
{
    ulobje.innerHTML="";
    todolist.forEach(element => {
        ulobje.innerHTML+=` <li><input type="checkbox" ${element.deger}>${element.item}</input></li>`;
    });
}

var iceriktxt=document.getElementById("yenitext");
function ekle()
{
 
    todolist.push({item:iceriktxt.value,deger:""});
    listele();
}