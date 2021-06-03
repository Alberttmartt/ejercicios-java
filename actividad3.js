
alert("Calculo de su sueldo quincenal y mensual"); 

var SalarioDiario = prompt("Ingresa tu salario diario"); 

var DiasLaboradosQ = 15; 
var DiasLaboradosM = 30;

var SueldoBrutoQ = SalarioDiario * DiasLaboradosQ;
var SueldoBrutoM = SalarioDiario * DiasLaboradosM;

var ISR_quincenal = SueldoBrutoQ * 0.30;
var ISR_mensual = SueldoBrutoM * 0.30;



var IMSS_quincenal = SueldoBrutoQ * 0.10;
var IMSS_quincenal = SueldoBrutoM * 0.10;


var Impuestos_Q = ISR_quincenal + IMSS_quincenal;
var Impuestos_M = ISR_mensual + ISR_mensual;

var SueldoNetoQ = SueldoBrutoQ - Impuestos_Q; 
var SueldoNetoM = SueldoBrutoM - Impuestos_M;

alert(" salario quincenal bruto es: " + SueldoBrutoQ);
alert(" salario mensual bruto  es: " + SueldoBrutoM);
alert(" salario neto quincenal es: " + SueldoNetoQ);
alert(" salario neto mensual es: " + SueldoNetoM); 






