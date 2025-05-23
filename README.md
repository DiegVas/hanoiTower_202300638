# Manual de Usuario - Torres de Hanoi
![image](https://github.com/user-attachments/assets/8d42040b-8d44-42d3-9d9f-2c7a54bd6eae)
**Autor:** Diego Vásquez  
**Cárne:** 202300638

## Introducción

Las Torres de Hanoi es un juego de lógica que consiste en mover una pila de discos de diferentes tamaños de una torre a otra, siguiendo reglas específicas. El objetivo es trasladar todos los discos desde la primera torre hasta la tercera torre.

## Configuración Inicial

Al iniciar el juego, se le presentará una interfaz donde deberá configurar la dificultad seleccionando el número de discos con los que desea jugar.

### Selección de Discos

- **Rango disponible**: 3 a 8 discos
- **Recomendación**: 
  - Principiantes: 3-4 discos
  - Intermedio: 5-6 discos
  - Avanzado: 7-8 discos

Una vez seleccionado el número de discos, presione el botón "Iniciar Juego" para comenzar la partida.

![image](https://github.com/user-attachments/assets/f2d5a1c9-0639-4cc4-a5b6-a5806cc5b0d0)


## Interfaz de Juego

### Elementos de la Pantalla

La interfaz de juego presenta los siguientes elementos:

- **Tres Torres**: Representadas como columnas verticales
  - Torre Izquierda (Origen): Contiene todos los discos al inicio
  - Torre Central (Auxiliar): Torre de apoyo para los movimientos
  - Torre Derecha (Destino): Torre objetivo donde debe quedar la pila completa

- **Discos**: Representados con diferentes colores y tamaños
  - Cada disco tiene un tamaño único
  - Los discos más grandes aparecen en tonos más oscuros
  - Los discos más pequeños aparecen en tonos más claros

- **Contador de Movimientos**: Muestra el número de movimientos realizados
- **Botón Reiniciar**: Permite comenzar una nueva partida

![image](https://github.com/user-attachments/assets/5aaf1ac2-1bb2-4d26-9177-04266121d7c2)


## Mecánica de Juego

### Reglas Fundamentales

1. **Solo se puede mover un disco a la vez**
2. **Un disco más grande nunca puede colocarse sobre uno más pequeño**
3. **Solo se puede mover el disco que está en la parte superior de cada torre**

### Controles de Arrastre

**Seleccionar Disco:**
- Haga clic sobre el disco que desea mover (debe ser el disco superior de la torre)
- El disco seleccionado se resaltará visualmente

**Mover Disco:**
- Mantenga presionado el botón del ratón sobre el disco seleccionado
- Arrastre el disco hacia la torre destino
- Suelte el botón del ratón para colocar el disco

**Movimiento Válido:**
- Si el movimiento es válido, el disco se colocará en la nueva posición
- Si el movimiento es inválido, el disco regresará a su posición original

![image](https://github.com/user-attachments/assets/544affb3-d728-4260-bfe1-c2b4eb31788c)


## Estrategia y Consejos

### Estrategia Básica

1. **Mueva el disco más pequeño cada dos movimientos**
2. **Alterne entre mover el disco pequeño y hacer el único movimiento legal posible**
3. **Para números impares de discos**: mueva el disco pequeño hacia la derecha
4. **Para números pares de discos**: mueva el disco pequeño hacia la izquierda

### Consejos Útiles

- **Planifique con anticipación**: Visualice varios movimientos antes de ejecutarlos
- **Use la torre central**: La torre del medio es crucial para reorganizar los discos
- **Paciencia**: No se apresure, piense cada movimiento cuidadosamente

## Finalización del Juego

### Condición de Victoria

El juego se completa exitosamente cuando todos los discos han sido trasladados a la torre derecha (destino) manteniendo el mismo orden: el disco más grande en la base y el más pequeño en la parte superior.

### Mensaje de Victoria

Al completar el juego, aparecerá un mensaje de felicitación que incluye:
- **¡Felicitaciones! Has ganado**
- **Número de movimientos realizados**
- **Número mínimo de movimientos posibles**
- **Opciones para jugar nuevamente**

![image](https://github.com/user-attachments/assets/4d6658e1-dabe-4d19-8a65-4f1d232fe1b4)


### Número Mínimo de Movimientos

El número mínimo de movimientos necesarios para completar el juego es **2^n - 1**, donde n es el número de discos:

- 3 discos: 7 movimientos mínimos
- 4 discos: 15 movimientos mínimos
- 5 discos: 31 movimientos mínimos
- 6 discos: 63 movimientos mínimos
- 7 discos: 127 movimientos mínimos
- 8 discos: 255 movimientos mínimos

# Solucion de movimientos minimos

Existe la opcion de mostrar el algoritmo para saber como llegar a los movimientos minimos al darle, le mostrara los pasos para realizar la cantidad minima de movimientos.

![image](https://github.com/user-attachments/assets/7b3820c4-b81d-441c-912b-06f450638634)


## Reiniciar Partida

En cualquier momento durante el juego puede:

1. **Presionar "Reiniciar"**: Regresa a la configuración inicial con el mismo número de discos
2. **Cambiar dificultad**: Volver al menú principal para seleccionar un número diferente de discos

## Resolución de Problemas

### Problemas Comunes

**El disco no se mueve:**
- Verifique que esté seleccionando el disco superior de la torre
- Asegúrese de mantener presionado el botón del ratón mientras arrastra

**Movimiento no válido:**
- Recuerde que no puede colocar un disco grande sobre uno pequeño
- Solo puede mover un disco a la vez

**El juego no responde:**
- Actualice la página web
- Verifique su conexión a internet

## Beneficios Educativos

Las Torres de Hanoi ayudan a desarrollar:
- **Pensamiento lógico y secuencial**
- **Habilidades de planificación**
- **Paciencia y perseverancia**
- **Comprensión de algoritmos recursivos**

¡Disfrute del desafío y ejercite su mente con este clásico juego de lógica!
