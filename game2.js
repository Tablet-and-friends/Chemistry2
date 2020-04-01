var selected=-1;
var el=document.getElementsByClassName("element");
var boxes=document.getElementsByClassName("box");
var num = document.getElementsByClassName("number");
var n=[4,5,6,7,8,9,12,13,14,15,16,17,20,31,32,33,34,35,38,49,50,51,52,53,56,81,82,83];

function Load(){
  var names=["Берилий","Бор","Въглерод","Азот","Кислород","Флуор","Магнезий","Алуминий","Силиций","Фосфор","Сяра","Хлор","Калций","Галий","Германий","Арсен","Селен","Бром","Стронций","Индий","Калай","Антимон","Телур","Йод","Барий","Талий","Олово","Бисмут"];


  /*var num=document.getElementByClassName("box");*/

  for (var i = 0; i < num.length; i++) {
    do {
      rand=Math.floor(Math.random()*n.length);
    } while (
      rand==el[0].getAttribute("data-n")
    ||rand==el[1].getAttribute("data-n")
    ||rand==el[2].getAttribute("data-n")
    ||rand==el[3].getAttribute("data-n")
    ||rand==el[4].getAttribute("data-n")
                                          );
    num[i].innerHTML=n[rand];
    el[i].innerHTML=names[rand];
    /*num[i].setAttribute('data-n',rand);*/
    el[i].setAttribute('data-n',rand);
    }
    var a;
    var b;
    var c;
    var an;
    var bn;
    for (var i = 0; i < 10; i++) {
      a=Math.floor(Math.random()*el.length);
      b=Math.floor(Math.random()*el.length);
      c=el[a].innerHTML;
      an=el[a].getAttribute("data-n");
      bn=el[b].getAttribute("data-n");
      el[a].innerHTML=el[b].innerHTML;
      el[a].setAttribute("data-n",bn);
      el[b].setAttribute("data-n",an);
      el[b].innerHTML=c;

  }


}

function Buf(sel){

  if (sel==selected) {
    el[selected].style.color="blue";
    el[selected].style.border="2px solid black";
    selected=-1;
    return;
  }

  if (selected>-1) {
    el[selected].style.color="blue";
    el[selected].style.border="2px solid black";
  }
  selected=sel;
  el[selected].style.color="grey";
  el[selected].style.border="2px solid grey";

}

function Put(sel){
  for (var i = 0; i < el.length; i++) {
    if (el[selected].innerHTML==boxes[i].innerHTML&&i!=sel) {
      alert('Вече е използван!');
      return;
    }
  }
  if (selected>-1) {
    boxes[sel].innerHTML=el[selected].innerHTML;
    var b=el[selected].getAttribute("data-n");
    boxes[sel].setAttribute("data-n",b);
    boxes[sel].style.color="black";
    Buf(selected);
  }
}

function checkGame(){
  var er=0;
  for (var i = 0; i < boxes.length; i++) {
    if(n[boxes[i].getAttribute("data-n")]==num[i].innerHTML){
      boxes[i].style.background="#66ff66";
    }
    else{
      boxes[i].style.background="red";
      boxes[i].style.color="transparent";
      boxes[i].innerHTML="Елемент";

      er=er+1;
    }
  }
  if (er>0) {
    document.getElementById("message").innerHTML="Имаш " + er + "  грешки";
    document.getElementById("message").style.color="red";
  }
  else{
    document.getElementById("message").style.color="green";
    document.getElementById("message").innerHTML="Отлично!";
  }

}
