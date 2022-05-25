function func_ej1(ej1_n1,ej1_n2,ej1_n3){
  // alert('me ejecuto dentro de una función') (comentario)
  ej1_n1= parseFloat(document.getElementById('ej1_n1').value); 

  ej1_n2= parseFloat(document.getElementById('ej1_n2').value); 
    
  ej1_n3= parseFloat(document.getElementById('ej1_n3').value); 
      
  //comparación
 
  if (ej1_n1 > ej1_n2 && ej1_n1 > ej1_n3)
   {                                             
     document.getElementById('ej1_resultado'). value = "el valor " +ej1_n1+ " es el más grande";
    
    }

 if (ej1_n2 > ej1_n1 && ej1_n2 > ej1_n3)

    {
       document.getElementById('ej1_resultado'). value = "el valor "+ej1_n2+ " es el más grande";
    
     }

 if (ej1_n3 > ej1_n2 && ej1_n3 > ej1_n1)

   {
     document.getElementById('ej1_resultado'). value = "el valor "+ej1_n3+ " es el más grande";
    
    }

}


function func_ej2(ejer2_v1,ejer2_v2,suma){

  ejer2_v1= parseFloat(document.getElementById('ejer2_v1').value); 
 
  ejer2_v2= parseFloat(document.getElementById('ejer2_v2').value); 

    suma = ejer2_v1 + ejer2_v2 
               
    document.getElementById('ej2_resultado'). value = "La suma es "+suma+ "";
  
}

function func_ej3(ej3_palabra,frase,ej3_cantidad) {  

  ej3_palabra= (document.getElementById('ej3_palabra').value);  //pq es palabra
    
  ej3_cantidad= parseFloat(document.getElementById('ej3_cantidad').value) //pq es num (parsefloat)
    
  frase= ""
    
  for ( index = 0; index < ej3_cantidad; index++) {
    frase= frase + ej3_palabra //contador (indicará cuantas veces se repetirá la palabra, en ese caso)
    
  }
  
  document.getElementById("ej3_resultado").value= frase  //el valor ( palabra-número) le da el valor a la variable frase
    
}


function func_ej4(cel,far) {

  far = parseFloat(ej4_fahren.value);
  cel = parseFloat(ej4_cel.value);

  if (cel != 0 && far == 0) {  //!= desigual
    far = (cel * 1.8) + 32
  
     document.getElementById('ej4_fahren').value = far
     document.getElementById('ej4_cel').value = 0
                  
    }else{
  
       cel = (far - 32)*(9/5) 
  
        document.getElementById('ej4_cel').value = cel
        document.getElementById('ej4_fahren').value = 0
  
      }
           
}     

function func_ej5(ej5_palabra) {
          
  ej5_palabra = (document.getElementById('ej5_palabra').value);
  ej5_result = parseFloat(document.getElementById('ej5_result').value);  // nota: La función parseFloat() analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante
            
  document.getElementById('ej5_result').value= "La palabra " +ej5_palabra+ " tiene " +ej5_palabra.length+ " letras."; 

}

function func_ej6(ej6_num,número) {
          
  ej6_num= document.getElementById('ej6_num').value; 
     
  ej6_result= document.getElementById('ej6_result').value; 
 
  número = ej6_num % 2; // módulo(%) 2 para indicar si el número ingresado es par.
 
  if (número == 0) {
 
    document.getElementById('ej6_result').value = "El número " +ej6_num+ " es PAR.";
                
 
   } else {  //{} apertura y cierre de else
 
     document.getElementById('ej6_result').value = "El número" +ej6_num+ " es IMPAR.";
                 
 
   } //cierre if
}

function func_ej7(ej7_num1,ej7_num2,mult,módulo1,módulo2,múltiplos,comparten,mult){

  let ej7_num1= parseInt(document.getElementById('ej7_num1').value); //parseInt= para números enteros. 
    
  let ej7_num2= parseInt(document.getElementById('ej7_num2').value);
    
  let mult = ""
  let comparten = true
  let múltiplos = 3
  var módulo1, módulo2
    
  while (múltiplos <= ej7_num1 && múltiplos <= ej7_num2 && comparten == true) {
          
   módulo1 = ej7_num1%múltiplos 
   módulo2 = ej7_num2%múltiplos 
    
  if (módulo1 == módulo2) {
    mult = mult + múltiplos + ","
    
    múltiplos = múltiplos + 3
    
   }else {
      comparten = false
    
   }
    
 }
    
  document.getElementById("ej7_result").value= múltiplos
          
}


function func_ej9(ej9_name,ej9_ape,ej9_age,ej9_city,ej9_frase){

  ej9_name= document.getElementById('ej9_name').value; //todo dentro de let
  ej9_ape= document.getElementById('ej9_ape').value;  //
  ej9_age= document.getElementById('ej9_age').value;   //
  ej9_city= document.getElementById('ej9_city').value;  //
      
  ej9_frase= document.getElementById('ej9_frase').value= "Mi nombre es " +ej9_name+ " " + ej9_ape+ ", tengo " +ej9_age+ " años. Nací en la ciudad de "+ej9_city+".";
      
}


function func_ej10(ej10_v1,ej10_v2,num){

  ej10_v1= parseInt(document.getElementById('ej10_v1').value); //parseInt= para números enteros. 
    
  ej10_v2= parseInt(document.getElementById('ej10_v2').value); 
    
  num = ""
       
  if (ej10_v1 > ej10_v2) {
    
    for (let index = ej10_v1 - 1; index > ej10_v2 ; index++) {
    
      num = num + index + ", ";
    }
    document.getElementById("ej10_result").value = num
  } 
    
  if (ej10_v2 > ej10_v1){
    
   for ( index = ej10_v1 + 1; ej10_v2 > index ; index++) {
     
      num = num + index + ", ";;
    }
   document.getElementById("ej10_result").value = num
 }
    
}