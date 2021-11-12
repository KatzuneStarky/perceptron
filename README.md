# Clasificador de puntos con dos neuronas en la capa de salida
## Hacer un programa que determine clasifique puntos. Los puntos se agrupan en torno a dos centros fijos en el plano, (1,3) y (3,1).

- Adan Enrique Ramirez Cisneros
- Universidad Autonoma de Baja California Sur
- Departamento Academico de Sistemas Computacionales
- Carrera: Ingenieria en Desarrollo de Software

## Debe entrenarse la red con puntos aleatorios cercanos y luego probarse con varios más.

# Como funciona el programa
## p5Objects\clasificadorN.js

## p5Objects\points.js

Constructor de los puntos que se pintan en los ciruclos correspondientes los cuales se pintan en X, Y como entrenamiento de la neurona la variable "tipoPunto" es usada para que se dictamine el tipo de color que llevaran

```js
class Puntos {
    constructor(x, y, tipoPunto = 1) {
      this.x = x;
      this.y = y;
      this.tipoPunto = tipoPunto;
    }
  
    draw() {
      push();
      strokeWeight(5);
      if (this.tipoPunto === 1){
        stroke(47, 231, 81);
      }else if (this.tipoPunto === 2){
        stroke(231, 87, 47);
      }else{
        stroke(0, 0, 0);
      }
      point(this.x, this.y);
      pop();
    }
  }
```  