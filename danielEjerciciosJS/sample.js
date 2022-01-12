// funcion para insertar datos
function insertData(e,data='No data'){

for (let i=0;i<data.length;i++){

  let label=document.createElement('label');
  let innerP=document.createElement('p');
  if(i==0){
    label.innerHTML='original';
  }else{
    label.innerHTML='modificado';
  }

  e.appendChild(label);
  innerP.innerHTML=`[${data[i]}]`;
  innerP.classList.add(`${i}`)
  e.appendChild(innerP);
  console.log(innerP);
  }

}

// funcion para crear el elemento
function createElemento(valor){
    let element=document.querySelector(valor);
  return element;
}


// BTN clear all
document.querySelector('.clear').addEventListener('click',()=>{
  document.querySelectorAll('p').forEach((item) => {
  item.innerHTML='';
  });
});


// Primer Ejercicio
let array="1,3,'a',[1,2]";
document.querySelector('.btnA')
.addEventListener('click',()=>{insertData(createElemento('.item-a'),[array])});

// Segundo Ejercicio
document.querySelector('.btnB')
.addEventListener('click', ()=>{
    let data=sampleTwo();
    insertData(createElemento('.item-b'),[data]);
})

const sampleTwo=()=>{
		let array=[];

		do{
			data=prompt('insert aplhanumeric/numeric.\nTo quit type "q"')
			array.push(data);
		} while (data.toLowerCase()!='q')
    array.pop();
		return ((!array||array.length===1)?'No values': array);
}

//Tercer Ejercicio
document.querySelector('.btnC')
.addEventListener('click',()=>{
  let data=sampleThree();
  insertData(createElemento('.item-c'),data)
  });

const sampleThree=()=>{
// Mostrar los números ingresados por el usuario multiplicados por 2

		let array=[];

		do{
			data=prompt('insert aplhanumeric/numeric.\nTo quit type "q"')
			array.push(data);
		} while (data.toLowerCase()!='q')

    let arrayOriginalNumeros=array.map(e=>e).filter(data=>Number(data));
		array=array.map(data=>Number(data)*2).filter(data=>Number(data));

    let totalData=[arrayOriginalNumeros,array]

		return totalData;
}

// Cuarto ejercicio

document.querySelector('.btnD')
.addEventListener('click',()=>{
  let data=primoNoPrimo();
  insertData(createElemento('.item-d'),data)
  });

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

      let nuevoArray=array.map(e=>e).filter(c=>primo(c));


  		return [array,nuevoArray];

  }


// Quinto ejercicio
document.querySelector('.btnE')
.addEventListener('click',()=>{
  let data=validate(prompt('inserte data'));
  insertData(createElemento('.item-e'),[data])
  });

let validate=(checkData=[])=>{
  	return checkData.length==1? 'Hay un elemento':'No hay Data o más de un elemento';
  };


// Sexto ejercicio
document.querySelector('.btnF')
.addEventListener('click',()=>{
  let data=arrayWithNotNumbers();
  insertData(createElemento('.item-f'),data)
  });

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
    let originalArray=[...array];
  	array=array.filter(c=>validateNumber(c));

  	return [originalArray,array];
  }


// Septimo Ejercicio


document.querySelector('.btnG')
.addEventListener('click',()=>{
  let array=[];
  do{
    data=prompt('insert aplhanumeric/numeric.\nTo quit type "q"');

    array.push(Number(data));
  } while (data.toLowerCase()!='q')

  let resultado=array.filter(e=>Number(e));
  let ordenado=ordenArray([...resultado]);

  insertData(createElemento('.item-g'),[resultado,ordenado]);
  });


function ordenArray(array){

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


// Segunda Etapa

class Persona {
	constructor(nombre,apellido,dni){
		this.nombre=nombre||'Unknow';
		this.apellido=apellido||'Unknow';
		this.dni=dni;
	}
	dniEsPar(){
    if(this.dni==0){
      return 'Indeterminado';
    } else{
		return this.dni%2==0?true:false;}
	}
	nombreCompleto(){
		return `${this.nombre} ${this.apellido} `;
	}
}

function dict(persona){
	// creo un objecto
let [nombre,apellido,dni]=persona;
let data=new Persona(nombre,apellido,Number(dni));
	// agrego data usando los methods del objeto

	data.dniEsPar=data.dniEsPar();

	data.nombreCompleto=data.nombreCompleto();

	// borro lo pedido
	delete data.nombre;
	delete data.apellido;


	// anexo al localStorage

	localStorage.setItem('user',JSON.stringify(data));

  return data;
};


function getData(){
  let data=[];
  document.querySelectorAll('input').forEach(e => {
    if(e.value!=''){
    data.push(e.value);
  }else{
    e.value=null;
    data.push(e.value);
  }

  });

return data;
}

document.getElementById('createPersona').addEventListener('click', ()=>{
  let persona=getData();
  let person=dict(persona);

  let $div=document.createElement('div');
  let $h2=document.createElement('h2'),
      $h3=document.createElement('h3');
      resetBtn=document.createElement('input');


  $h2.innerHTML=`Persona: ${person.nombreCompleto}`;
  $h3.innerHTML=person.dniEsPar=='Indeterminado'?'El DNI es Indeterminado':(person.dniEsPar?'El DNI es par':'El DNI es impar');
  resetBtn.type='reset';
  resetBtn.value='Reset!';

  $div.appendChild($h2);
  $div.appendChild($h3);
  $div.id='clear';
  document.getElementById('data').appendChild(resetBtn).addEventListener('click',()=>{
    let inputSets=document.querySelectorAll('input');
      inputSets.forEach((item) => {
      item.value!='Reset!'?item.value='':item.parentNode.removeChild(item);
    });

  });
  document.querySelector('.displayPersona').appendChild($div);

  document.querySelector('.btnClear').addEventListener('click', ()=>{
    let set=document.getElementById('clear');
    set.remove();
    console.log(set);
  })

})
