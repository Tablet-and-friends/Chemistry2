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
changeDisplay("Талий Ti",81,val,"Ti");
changeDisplay("Въглерод C",6,val,"C");
changeDisplay("Силиций Si",14,val,"Si");
changeDisplay("Германий Ge",32,val,"Ge");
changeDisplay("Калай Sn",50,val,"Sn");
changeDisplay("Олово Pb",82,val,"Pb");
changeDisplay("Азот N",7,val,"N");
changeDisplay("Фосфор P",15,val,"P");
changeDisplay("Арсен As",33,val,"As");
changeDisplay("Антимон Sb",51,val,"Sb");
changeDisplay("Бисмут Bi",83,val,"Bi");
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
  document.getElementById("Ti").style.display = "none";
  document.getElementById("C").style.display = "none";
  document.getElementById("Si").style.display = "none";
  document.getElementById("Ge").style.display = "none";
  document.getElementById("Sn").style.display = "none";
  document.getElementById("Pb").style.display = "none";
  document.getElementById("N").style.display = "none";
  document.getElementById("P").style.display = "none";
  document.getElementById("As").style.display = "none";
  document.getElementById("Sb").style.display = "none";
  document.getElementById("Bi").style.display = "none";
  document.getElementById("O").style.display = "none";
  document.getElementById("S").style.display = "none";
  document.getElementById("Se").style.display = "none";
  document.getElementById("Te").style.display = "none";
  document.getElementById("F").style.display = "none";
  document.getElementById("Cl").style.display = "none";
  document.getElementById("Br").style.display = "none";
  document.getElementById("I").style.display = "none";
}

function checkGame(){
  var elmnt = document.getElementById("scroll");
  var x = elmnt.scrollLeft;
var img=document.getElementById("q");
  var a1=document.getElementById("a1");
var a2=document.getElementById("a2");
/*document.getElementById ("demo").style.visibility ="visible";*/
if (x>430&&x<460) {
  document.getElementById ("demo").innerHTML ="Кой е този елемент?";
  document.getElementById ("demo").style.color ="blue";
  return;
}
if (a1.getAttribute("data-pos")==q.getAttribute("data-pos"))
{
  /*document.getElementById ("demo").innerHTML=a1.getAttribute("data-pos");*/
  if (x<892/2) {
    document.getElementById ("demo").innerHTML ="Ура! Да живее трудът!";
    document.getElementById ("demo").style.color ="green";
  }
  else {
    document.getElementById ("demo").innerHTML ="Грешка ;(";
    document.getElementById ("demo").style.color ="red";
  }
  /*document.getElementById ("demo").innerHTML =x;*/
  return;
}
else {
  if (x>892/2) {
    document.getElementById ("demo").innerHTML ="Ура! Да живее трудът!";
    document.getElementById ("demo").style.color ="green";
  }
  else {
    document.getElementById ("demo").innerHTML ="Грешка ;(";
    document.getElementById ("demo").style.color ="red";
  }
  /*document.getElementById ("demo").innerHTML =x;*/
  return;
}

}

function shufflePics(){
var p=[
"assets/IIA/Ba_Picture.jpg",
"assets/IIA/Be_Picture.jpg",
"assets/IIA/Ca_Picture.jpg",
"assets/IIA/Mg_Picture.jpg",
"assets/IIA/Sr_Picture.jpg",
"assets/IIIA/Al_Picture.jpg",
"assets/IIIA/B_Picture.jpg",
"assets/IIIA/Ga_Picture.jpg",
"assets/IIIA/In_Picture.jpg",
"assets/IIIA/Ti_Picture.jpg",
"assets/IVA/C_Picture.jpg",
"assets/IVA/Ge_Picture.jpg",
"assets/IVA/Si_Picture.jpg",
"assets/IVA/Sn_Picture.jpg",
"assets/VA/As_Picture.jpg",
"assets/VA/N_Picture.jpg",
"assets/VA/P_Picture.png",
"assets/VA/Sb_Picture.jpg",
"assets/VIA/O_Picture.jpg",
"assets/VIA/S_Picture.jpg",
"assets/VIA/Se_Picture.jpg",
"assets/VIA/Te_Picture.jpg",
"assets/VIIA/Br_Picture.png",
"assets/VIIA/Cl_Picture.jpg",
"assets/VIIA/F_Picture.jpg",
"assets/VIIA/I_Picture.jpg",
      ];
var n=[
  "Барий","Берилий","Калций","Магнезий","Стронций","Алуминий","Бор","Галий","Индий","Талий","Въглерод","Германий","Силиций","Калай","Арсен","Азот","Фосфор","Антимон","Кислород","Сяра","Селен","Телур","Бром","Хлор","Флуор","Йод"
];

    document.getElementById("scroll").scrollLeft=446;
      var r=Math.floor(Math.random()*25);
      var rndPos=Math.floor(Math.random()*2);
      if (rndPos>0) {
        document.getElementById("a1").innerHTML =n[r];
        document.getElementById("a1").setAttribute("data-pos",r);
        var secP;
        do {
          secP=Math.floor(Math.random()*3);
            }
while (secP==r);
        document.getElementById("a2").innerHTML =n[secP];
        document.getElementById("a2").setAttribute("data-pos",secP);
      }
      else {
        document.getElementById("a2").innerHTML =n[r];
        document.getElementById("a2").setAttribute("data-pos",r);
        var secP;
        do {
          secP=Math.floor(Math.random()*25);
            }
while (secP==r);
        document.getElementById("a1").innerHTML =n[secP];
        document.getElementById("a1").setAttribute("data-pos",secP);
      }
      document.getElementById("q").setAttribute("data-pos",r);
      return p[r];
}
