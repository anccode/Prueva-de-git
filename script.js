function calcularpeso(){
	let peso=document.getElementsByName("peso");
	let suma=0;
	for (var i = 0; i <peso.length; i++) {
		suma=suma+parseInt(peso[i].value);
	}
	promedio=suma/peso.length;
	salida="La suma de los pesos es: "+suma+"<br>";
	salida+="El promedio de los pesos es: "+promedio+"<br>";
	document.getElementById("resultado").innerHTML=salida;
}
function validar(){
	let p1=document.getElementById("p1").value;
	if(p1<0 || p1>=90){
		document.getElementById("p1").value=0;
		document.getElementById("p1").focus();
	}
	let p2=document.getElementById("p2").value;
	if(p2<0 || p2>=90){
		document.getElementById("p2").value=0;
		document.getElementById("p2").focus();
	}
	let p3=document.getElementById("p3").value;
	if(p3<0 || p3>=90){
		document.getElementById("p3").value=0;
		document.getElementById("p3").focus();
	}
	let p4=document.getElementById("p4").value;
	if(p4<0 || p4>=90){
		document.getElementById("p4").value=0;
		document.getElementById("p4").focus();
	}
	let p5=document.getElementById("p5").value;
	if(p5<0 || p5>=90){
		document.getElementById("p5").value=0;
		document.getElementById("p5").focus();
	}
	let p6=document.getElementById("p6").value;
	if(p6<0 || p6>=90){
		document.getElementById("p6").value=0;
		document.getElementById("p6").focus();
	}
	let p7=document.getElementById("p7").value;
	if(p7<0 || p7>=90){
		document.getElementById("p7").value=0;
		document.getElementById("p7").focus();
	}
}
function ShowSelected(){
    let producto = document.getElementById("productos");
    let selected = producto.options[producto.selectedIndex].text;
    document.getElementById("carrito").innerHTML=selected;
    let cod = document.getElementById("productos").value;
    let can = document.getElementById("cantidad").value; 
    let importe = document.getElementById("importe").value;
    document.getElementById("importe").innerHTML="S/."+ cod*can; 
    let igv = document.getElementById("igv").value;
    document.getElementById("igv").innerHTML="S/."+ ((cod*can)*18)/100; 
    let total= document.getElementById("total").innerHTML= "S/."+  ((cod*can)*118)/100;

}

function ordenar(){
	let peso=[];
	let pesos=document.getElementsByName("peso");
	for(var i =0; i < pesos.length; i++){
		peso[i]=parseInt(pesos[i].value);
	}
	menor = peso.sort();
	console.log(menor)
	or= "["+ menor +"]";
	document.getElementById("resultado1").innerHTML=or;
}

