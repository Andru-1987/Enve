// Ejercicio de prompt y alert


function pedirMostrarData(){
  	
 	let array=[];

	for (let i=0; i<5;i++){
		let data=prompt(`insert data ${i}: `);
		array.push(data);
	};

	localStorage.setItem('Ingresado', array );
	array.forEach((c,index) => alert (`El valor ${index} es: ${c}`));

};





const sampleTwo=()=>{
	
		let array=[];

		do{
			data=prompt('insert aplhanumeric/numeric.\nTo quit type "q"')
			array.push(data);
		} while (data.toLowerCase()!='q')

		return ((!array||array.length===1)?alert('No values'): alert(array));
}



const sampleThree=()=>{
// Mostrar los números ingresados por el usuario multiplicados por 2

		let array=[];

		do{
			data=prompt('insert aplhanumeric/numeric.\nTo quit type "q"')
			array.push(data);
		} while (data.toLowerCase()!='q')

		array=array.map(data=>Number(data)*2).filter(data=>Number(data));

		alert(array);
}


const primoNoPrimo=()=>{
 // Mostrar los elementos del array que son primos

		let array=[];

		do{
			data=prompt('insert aplhanumeric/numeric.\nTo quit type "q"')
			array.push(data);
		} while (data.toLowerCase()!='q')

		array=array.map(data=>Number(data)).filter(data=>Number(data));
		


		let primo=(num)=>{
			if (num==0||num==1||num==4){
				return false
			}
			for(let i=2; num/2>i;i++){
				if(num%i == 0){
					return false
				}
			}
			return true
		}

		alert('Prime elements:\n'+array.filter(c=>primo(c)));

}



  // Devolver si existe un elemento dentro del array

  let validate=(checkData=[])=>{
  	return checkData.length==0? alert('No data'):alert('Data true');
  }




function arrayWithNotNumbers(){
	// Display not numeric data

	let validateNumber=(num)=>{

		let regexp =/[\d].*/g;
		if (regexp.test(num)==true){
			return false
		} else{
			return true
		}
	}

	let array=[];

	do{
		data=prompt('insert aplhanumeric/numeric.\nTo quit type "q"')
		array.push(data);
	} while (data.toLowerCase()!='q')

	array=array.filter(c=>validateNumber(c));

	alert('Not numeric values\n'+array);
}






function sorting(array){

// Insertion method
	let len=array.length;

	for (let i=1;i<len;i++){
		let valCur=array[i];
		let j=i-1;
		while( (j>-1) && (valCur < array[j])){
			array[j+1]=array[j];
			j--;
		}
		array[j+1]=valCur;
	}

	return array;
}

// puede ser este método que es el que más recuerdo 

let testArray=[1,-8,3,4,5,2,3,5,2,100,22,3,1,2];
alert(sorting(testArray));



// --------------------------------------------------------------

// request the following data from one user:


// ES6


class Persona {
	constructor(nombre,apellido,dni){
		this.nombre=nombre;
		this.apellido=apellido;
		this.dni=dni;
	}
	dniEsPar(){
		return this.dni%2==0?true:false;
	}
	nombreCompleto(){
		return `${this.nombre} ${this.apellido} `;
	}
}

// Constructores functionales.. por ahora voy a usar clases

// function Person(nombre,apellido,dni){
// 	this.nombre=nombre,
// 	this.apellido=apellido,
// 	this.dni=dni,

// 	this.dniEsPar=function (){
// 		return this.dni%2?true:false;
// 	},

// 	this.nombreCompleto=function(){
// 		return `${this.nombre} ${this.apellido} `;
// 	}
// };



function dict(){
	// creo un objecto

	let data=new Persona;

	for(let keys in data){
		if (keys=='dni'){
			data[keys]=Number(prompt(`insert: ${keys}`));	
		} else{
		data[keys]=prompt(`insert: ${keys}`);
		}

	}
	// agrego data usando los methods del objeto

	data.dniEsPar=data.dniEsPar();
	data.nombreCompleto=data.nombreCompleto();

	// borro lo pedido
	delete data.nombre;
	delete data.apellido;

	alert(data.nombreCompleto)
	alert(`the id is pair: ${data.dniEsPar}`);


	// anexo al localStorage
	
	localStorage.setItem('user',JSON.stringify(data));

	alert(JSON.parse(localStorage.getItem('user')).nombreCompleto);
};



