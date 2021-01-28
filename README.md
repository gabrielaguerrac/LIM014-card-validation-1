# Proyecto: Card Validation
Este proyecto trata de la validación de una tarjeta usando el mecanismo de Luhn, y notificando si es válida o no
mediante mensajes. 

## Índice

* [1. Definición del producto](#1-Usuarios)
* [2. Imagen final del proyecto](#2-imagen-final-del-proyecto)
* [3. Prototipos](#3-Prototipos)
* [4. Objetivos de aprendizaje](#4-objetivos-de-aprendizaje)
* [5. Consideraciones generales](#5-consideraciones-generales)


***

## 1. Definición del Producto

* Quiénes son los principales usuarios de producto.
   Personas que desean validar una tarjeta de inivtación, la cual tiene el formato de una credit card
* Cuáles son los objetivos de estos usuarios en relación con tu producto.
   Validar una tarjeta de invitación para poder comprar antes que el resto (como una pre venta)
* Cómo crees que el producto que estás creando está resolviendo sus problemas.
   Al tener un mecanismo de validez se puede acreditar si es una tarjeta oficial y seguir con el proceso.


## 2. Imagen final del proyecto

Pantalla de Inicio
<img width="1424" alt="PantallaInicio" src="https://user-images.githubusercontent.com/67443691/106008030-ea6e9f80-6084-11eb-90d2-e503ce30af68.png">

Pantalla Card Válida
<img width="1424" alt="CardValidationTrue" src="https://user-images.githubusercontent.com/67443691/106008427-4507fb80-6085-11eb-94cc-0d39c37c6843.png">

Pantalla card Invalida
<img width="1424" alt="TarInvalid" src="https://user-images.githubusercontent.com/67443691/106010099-1428c600-6087-11eb-9f8d-f8713ac2ce53.png">

## 3. Prototipos
Antes de hacer el prototipo en papel, busqué páginas de compra por internet con tarjeta de crédito.
Las que más llamaron mi atención fueron:
   Samsung(https://www.samsung.com/us/smartphones/galaxy-s21-5g/?page=home)
   Apple (https://www.apple.com/es/shop/buy-iphone/iphone-12)

### Prototipo en papel
En los prototitpos iniciales para este proyecto consideré un espacio para el detalle de una compra usando una tarjeta de crédito, ya que la idea era de 
un formulario de compra. Sin embargo luego me pareció más interesante simular una invitación con un número que se valida con el algoritmo de Luhn y
el enmascaramiento, es por ello que esta sección no fue considerada en la implementación final. A pesar de ello mantuve la idea de los formularios
que había visto en apple y samsung, de cambiar el background cuando es inválido.

Prototipo Inicio
<img width="1424" alt="Prototipo " src="https://user-images.githubusercontent.com/67443691/106086699-ae712400-60f0-11eb-9177-4dd8f2e33b75.jpeg">

Prototipo si es válida o no
<img width="1424" alt="Prototipo Inicio" src="https://user-images.githubusercontent.com/67443691/106086552-5f2af380-60f0-11eb-9487-c851cfb91348.jpeg">

## 4.Imagen final del protoipo
Para el prototipo final usé Figma.

<img width="896" alt="Captura de Pantalla 2021-01-28 a la(s) 10 58 20" src="https://user-images.githubusercontent.com/67443691/106164355-dc3d8380-6157-11eb-8e86-c98dd2ae8432.png">


## 5. Objetivos de aprendizaje
Objetivos de aprendizaje que he considerado alcanzar.

### HTML y CSS

* [ X ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ X ] Uso de selectores de CSS.
* [ X ] Construir tu aplicación respetando el diseño realizado (maquetación).

  **Comentario:** Considero que aún tengo dificultad maquetando lo del diseño, ya que temo que 
   lo que considero en el diseño sea complejo y me tome más tiempo de lo que espero.

### DOM

* [ X ] Uso de selectores del DOM.
* [ X ] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

  **Comentario:** En este proyecto usé selectores del DOM así como eventos del DOM.
  El selector que más usé fue getElementById. Usé dos eventos: click y keyup. Sin embargo para manipular el dom usé classList

### JavaScript

* [ X ] Manipulación de strings.
* [ X ] Uso de condicionales (if-else | switch | operador ternario)
* [ X ] Uso de bucles (for | for..in | for..of | while)
* [ X ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ X ] Declaración correcta de variables (const & let)

**Comentario:** Usé algunos métodos de strign como split() y reverse(). Bucles de for para recorrer los elementos de un arreglo.
Funciones isValida y maskify que tenían un parámetro cada una, recibían argumentos del index.js y retornaban una variable con un valor
al index. Usé constantes para almacenar elementos del DOM y variables let dentro las funciones tante de validator.js como del index.js

### Testing

* [ X ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

<img width="680" alt="Captura de Pantalla 2021-01-28 a la(s) 10 33 14" src="https://user-images.githubusercontent.com/67443691/106160965-671c7f00-6154-11eb-8a54-ddf7ae7e8dfc.png">


### Estructura del código y guía de estilo

* [ X ] Organizar y dividir el código en módulos (Modularización)
* [ X ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ X ] Uso de linter (ESLINT)



### Git y GitHub

* [ X ] Uso de comandos de git (add | commit | pull | status | push)
* [ X ] Manejo de repositorios de GitHub (clone | fork | gh-pages)

**Comentario:** En este proyecto no usé pull porque no necesité pasar nada del repositorio remoto al local.

### UX

* [ X ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ X ] Crear prototipos para obtener feedback e iterar.
* [ X ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)


## 6. Criterios de aceptación mínimos del proyecto

Usa solo caracteres numéricos (dígitos) en la tarjeta a validar [0-9].

**Comentario:** El background del input se pone rojo cuando se ingresa una letra, por ejemplo.











