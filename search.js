function openSlideMenu(){
    document.getElementById("slide-menu").style.width = '250px';
    document.getElementById("main-content").style.marginLeft = '250px';

}
function closeSlideMenu(){
    document.getElementById("slide-menu").style.width = '0px';
    document.getElementById("main-content").style.marginLeft = '0px';
}

function check(val){

changeDisplay("Берилий Be",4,val,"Be");
changeDisplay("Магнезий Mg",12,val,"Mg");
changeDisplay("Калций Ca",20,val,"Ca");
changeDisplay("Стронций Sr",38,val,"Sr");
changeDisplay("Барий Ba",56,val,"Ba");
changeDisplay("Бор B",5,val,"B");
changeDisplay("Алуминий Al",13,val,"Al");
changeDisplay("Галий Ga",31,val,"Ga");
changeDisplay("Индий In",49,val,"In");
changeDisplay("Въглерод C",6,val,"C");
changeDisplay("Силиций Si",14,val,"Si");
changeDisplay("Германий Ge",32,val,"Ge");
changeDisplay("Калай Sn",50,val,"Sn");
changeDisplay("Азот N",7,val,"N");
changeDisplay("Фосфор P",15,val,"P");
changeDisplay("Арсен As",33,val,"As");
changeDisplay("Антимон Sb",51,val,"Sb");
changeDisplay("Кислород O",8,val,"O");
changeDisplay("Сяра S",16,val,"S");
changeDisplay("Селен Se",34,val,"Se");
changeDisplay("Телур Te",52,val,"Te");
changeDisplay("Флуор F",9,val,"F");
changeDisplay("Хлор Cl",17,val,"Cl");
changeDisplay("Бром Br",35,val,"Br");
changeDisplay("Йод I",53,val,"I");
}

/*function changeDisplay2(el,s,id) {
if (s==""){document.getElementById(id).style.display = "none";
  return;
}
	s = s.toLowerCase();
  el=el.toLowerCase();
  var n = el.search(s);
  document.getElementById("test").innerHTML = n;
  document.getElementById(id).style.display = "block";
  if(n>-1){
  document.getElementById(id).style.display = "block";
}else{
	document.getElementById(id).style.display = "none";
}
}*/

function changeDisplay(el,p,s,id) {
if (s==""){document.getElementById(id).style.display = "none";
  return;
}
	s = s.toLowerCase();
  el=el.toLowerCase();
  var n = el.search(s);
  /*document.getElementById("test").innerHTML = n;*/
  /*document.getElementById(id).style.display = "block";*/
  if(n>-1||p==parseInt(s)){
  document.getElementById(id).style.display = "block";
}else{
	document.getElementById(id).style.display = "none";
}
}

function closeSearch(){
  document.getElementById("Be").style.display = "none";
  document.getElementById("Mg").style.display = "none";
  document.getElementById("Ca").style.display = "none";
  document.getElementById("Sr").style.display = "none";
  document.getElementById("Ba").style.display = "none";
  document.getElementById("B").style.display = "none";
  document.getElementById("Al").style.display = "none";
  document.getElementById("Ga").style.display = "none";
  document.getElementById("In").style.display = "none";
  document.getElementById("C").style.display = "none";
  document.getElementById("Si").style.display = "none";
  document.getElementById("Ge").style.display = "none";
  document.getElementById("Sn").style.display = "none";
  document.getElementById("N").style.display = "none";
  document.getElementById("P").style.display = "none";
  document.getElementById("As").style.display = "none";
  document.getElementById("Sb").style.display = "none";
  document.getElementById("O").style.display = "none";
  document.getElementById("S").style.display = "none";
  document.getElementById("Se").style.display = "none";
  document.getElementById("Te").style.display = "none";
  document.getElementById("F").style.display = "none";
  document.getElementById("Cl").style.display = "none";
  document.getElementById("Br").style.display = "none";
  document.getElementById("I").style.display = "none";
}
