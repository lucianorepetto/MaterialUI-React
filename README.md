# Material UI & React
Este proyecto se creo con el objetivo de aplicar los conocimientos de [**Material UI**] con [**Reactjs**]

Material-Ui es un API de React para la creación de interfaces con Material Design. Es comunmente utilizado por sus diseños sencillos y elegantes. 
Es por esto que quiero leer y comprender mejor Material-UI y probarlo con ReactJS.

## Objetivos con material UI
* Crear un componente
* Crear un tema
* Crear componentes con estilos
* Crear componentes con eventos
* Crear componentes con estilos globales
* Crear componentes con estilos condicionales
* Crear componentes con estilos de clases
* Crear componentes con estilos de clases condicionales

## Recursos

* [Material UI Documentation](https://mui.com/material-ui/getting-started/overview/)
* [MUI Learning resources](https://mui.com/material-ui/getting-started/learn/#free)
* [Similar proyect](https://mui.com/store/previews/minimal-dashboard/)

## From MUI Learning resources
En el sitio web de Material-UI, hay muchos ejemplos de cómo usar los componentes y videos.

### Los que hice o haré:
* [Material UI v5 Crash Course video by Laith Harb](https://www.youtube.com/watch?v=o1chMISeTC0)
* [React + Material UI - From Zero to Hero](https://www.youtube.com/playlist?list=PLDxCaNaYIuUlG5ZqoQzFE27CUOoQvOqnQ)
* [Next.js 11 Setup with Material UI v5](https://www.youtube.com/watch?v=IFaFFmPYyMI) by Leo Roese
* [Material UI v5 Crash Course + Intro to React (2022 Edition)](https://www.youtube.com/watch?v=_W3uuxDnySQ) by Anthony Sistilli
* [Material UI v5 Tutorial Playlist](https://www.youtube.com/playlist?list=PLlR2O33QQkfXnZMMZC0y22gLayBbB1UQd) by Nikhil Thadani (Indian Coders)
* [The Clever Dev](https://www.youtube.com/channel/UCb6AZy0_D1y661PMZck3jOw) by Jon M

> **Note**
>  Esta lista fue copiada de [MUI Learning resources](https://mui.com/material-ui/getting-started/learn/#free) y puede contener tutoriales agregados.
>  Se recomienda leer la [documentación original de MUI](https://mui.com/material-ui/getting-started/overview/)

## Retos y soluciones
* Actualización de estilos globals de los botones
Extrayendo solo lo necesario de Boton.styles en App.js, podemos reemplazar esa implementación mediante la importación de makeStyles desde Material-Ui y establecer la clase MuiButton-containedPrimary.

* Selección de temas de Material-UI
Para evitar el mismo problema con el retraso de la carga de la aplicación, puede utilizar makeStyles. El objetivo de este reto es solucionar el problema de renderizado tardío solo en el Componente Header. El tema usará Material-Ui para administrar los estilos guardados en el objeto.