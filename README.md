# Proyecto: Card Validation
Este proyecto trata de la validación de una tarjeta usando el mecanismo de Luhn, y notificando si es válida o no
mediante mensajes. 

## Índice

* [1. Usuarios](#1-Usuarios)
* [2. Imagen final del proyecto](#2-imagen-final-del-proyecto)
* [3. Prototipos](#3-Prototipos)
* [4. Objetivos de aprendizaje](#4-objetivos-de-aprendizaje)
* [5. Consideraciones generales](#5-consideraciones-generales)


***

## 1. Usuarios

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

(https://user-images.githubusercontent.com/67443691/106086699-ae712400-60f0-11eb-9177-4dd8f2e33b75.jpeg)



(https://user-images.githubusercontent.com/67443691/106086552-5f2af380-60f0-11eb-9487-c851cfb91348.jpeg)


## 4. Objetivos de aprendizaje
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

### JavaScript

* [ X ] Manipulación de strings.
* [ X ] Uso de condicionales (if-else | switch | operador ternario)
* [ X ] Uso de bucles (for | for..in | for..of | while)
* [ X ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ X ] Declaración correcta de variables (const & let)

### Testing

* [ X ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ X ] Organizar y dividir el código en módulos (Modularización)
* [ X ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ X ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [ X ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ X ] Crear prototipos para obtener feedback e iterar.
* [ X ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)


## 5. Criterios de aceptación mínimos del proyecto

Usa solo caracteres numéricos (dígitos) en la tarjeta a validar [0-9].

### Definición del producto

En el `README.md`, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz.

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con tu producto.
* Cómo crees que el producto que estás creando está resolviendo sus problemas.

### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:

* Insertar el número que queremos validar.
* Ver el resultado si es válido o no.
* Ocultar todos los dígitos de su número de tarjeta menos los últimos
4 caracteres.
* No debe poder ingresar un campo vacío.

### UX (Diseño de experiencia de usuario)

Antes de iniciar a codear, debes entender el problema que quieres solucionar y
cómo tu aplicación lo soluciona.

* Trabaja tu primer prototipo con papel y lápiz (blanco y negro).
* Luego valida esta solución con una compañera (pedir feedback).
* Toma lo aprendido al momento de validar tu primer prototipo y desarrolla un
  nuevo prototipo usando alguna herramienta para diseño de prototipos
  ([Balsamiq](https://balsamiq.com/), [Figma](https://www.figma.com/),
  [Google Slides](https://www.google.com/intl/es/slides/about/), etc.)
Estos puntos los presentarás en el `README.md`.

### Scripts / Archivos

#### General

##### `README.md`

Debe contener lo siguiente:

* Un título con el nombre de tu proyecto.
* Un resumen de 1 o 2 líneas de qué se trata tu proyecto.
* La imagen final de tu proyecto.
* Investigación UX:
  1. Explicar quiénes son los usuarios y los objetivos en relación con el
    producto.
  2. Explicar cómo el producto soluciona los problemas/necesidades de dichos
    usuarios.
  3. Luego colocarás la foto de tu primer prototipo en papel.
  4. Agregar un resumen del feedback recibido indicando las mejoras a realizar.
  5. Imagen del prototipo final.




