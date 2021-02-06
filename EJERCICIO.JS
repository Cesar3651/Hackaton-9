function suma() {
	var num1=parseInt(document.getElementById('n1').value);
    var num2=parseInt(document.getElementById('n2').value);
    var res;
    res=num1+num2;
    alert("El resultado de la suma de los dos numeros es  "+res);
}
function promedio() {
	var num1=parseInt(document.getElementById('p1').value);
    var num3=parseInt(document.getElementById('p2').value);
    var num4=parseInt(document.getElementById('p3').value);
    var num2=parseInt(document.getElementById('p4').value);
    var prom;
    prom=(num1+num2+num4+num3)/4;
    alert("El promedio de tu nota es  "+prom);
}
function AREA() {
	var num1=parseInt(document.getElementById('A1').value);
    var num3=parseInt(document.getElementById('B1').value);
    var AREA;
    AREA=num1*num3
    alert("El area del rectangulo es "+AREA);
}
function AREAC() {
	var num1=parseInt(document.getElementById('C1').value);
    
    var AREA;
    AREA=num1*3.14
    alert("El area del circulo es "+AREA);
}
function AREAT() {
	var num1=parseInt(document.getElementById('A1').value);
    var num3=parseInt(document.getElementById('B1').value);
    var AREA;
    AREA=(num1*num3)/2
    alert("El area del triangulo es " +AREA );
}

function SUELDO() {
	var num1=parseInt(document.getElementById('HO1').value);
    var num3=parseInt(document.getElementById('SAL').value);
    var Ssem;
    Ssem=(num1*num3)
    alert("El sueldo semanal del trabajador es  " +Ssem );
}   
function Modista() {
	var num1=parseInt(document.getElementById('Mm').value);
    
    var conversion;
    conversion=num1*0.0254
    alert("La coversion de metros a pulgadas es  " +conversion );
}
function dolares(){
    var num1=parseInt(document.getElementById('Sol').value);
    cambio=num1/3.61  
    alert("El monto de conversion en dolares es  "+cambio);
}
function nacimiento(){
    var num1=parseInt(document.getElementById('Fecha').value);
    Fnaci=2021-num1  
    alert("La edad del empleado es    "+Fnaci );
}
function Mayoredad(){
    
    var edad1=parseInt(document.getElementById('e1').value);
    var edad2=parseInt(document.getElementById('e2').value);
    var edad3=parseInt(document.getElementById('e3').value);
    
    var Medad;
    if (edad1>edad2 & edad1>edad3)
    
    alert("Maria es la Mayor  "+Medad );
    if  (edad2>edad1 & edad2>edad3)
    alert("Jose es la Mayor  "+Medad );
    if  (edad3>edad1 & edad3>edad2)
    alert("Clara es la Mayor  "+Medad );
}
function bono(){
    
    var Bantiguedad=parseInt(document.getElementById('Aa').value);
  
    
    var Bantiguedad;
    if (Bantiguedad==1)
    alert("Tu bono es de 100 soles  " );
    if (Bantiguedad==2)
    alert("Tu bono es de 200 soles  " );
    if (Bantiguedad==3)
    alert("Tu bono es de 300 soles  " );
    if (Bantiguedad==4)
    alert("Tu bono es de 400 soles  " );
    if (Bantiguedad==5)
    alert("Tu bono es de 500 soles  " );
     else 
    alert("Tu bono es de 1000soles  ");}
    function notas() {
        var agregar, cont, cont1;
        var nota = new Number();
        cont = 0;
        cont1 = 0;
        do {
            document.write("Ingresar la nota del alumno :",'<BR/>');
            nota = Number(prompt());
            if ((nota<10.5)) {
                cont = cont+1;
            } else {
                cont1 = cont1+1;
            }
            document.write("Desea agregar una nueva nota?",'<BR/>');
            document.write("1. Si",'<BR/>');
            document.write("2. No",'<BR/>');
            agregar = prompt();
        } while (agregar!=2);
        document.write("Los aprobados son : ",cont1,'<BR/>');
        document.write("Los desaprobados son : ",cont,'<BR/>');
    }


     function colores() {
				var n = new Number();
				var rojo=parseInt(document.getElementById('r1').value);
                var verde=parseInt(document.getElementById('v2').value);
                var azul=parseInt(document.getElementById('a3').value);
    
				
				n = Number(prompt());
				verde = 0;
				blanco = 0;
				rojo = 0;
				while (n>0) {
					
					if (color>=1 && color<=3) {
						if (color==1) {
							verde = verde+1;
						} else {
							if (color==2) {
								blanco = blanco+1;
							} else {
								rojo = rojo+1;
							}
						}
						n = n-1;
					} else {
						alert("Ingresa un color correcto",'<BR/>');
					}
				}
				alert("El total de focos verdes es: ",verde,'<BR/>');
				alert("El total de focos blancos es: ",blanco,'<BR/>');
				alert("El total de focos rojos es: ",rojo,'<BR/>');
			}







    function voto(){
    
    var edad1=parseInt(document.getElementById('ev').value);
    
    
    var Evot;
    if (edad1>=18 )
    
    alert("Usted puede votar  "+Evot );
    else 
    alert("Usted no tiene la edad suficiente para votar")
    
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
