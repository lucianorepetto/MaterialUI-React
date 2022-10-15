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

* [Material UI overview](https://mui.com/material-ui/getting-started/overview/)
* [Similar proyect](https://mui.com/store/previews/minimal-dashboard/)

## Retos y soluciones
* Actualización de estilos globals de los botones
Extrayendo solo lo necesario de Boton.styles en App.js, podemos reemplazar esa implementación mediante la importación de makeStyles desde Material-Ui y establecer la clase MuiButton-containedPrimary.

* Selección de temas de Material-UI
Para evitar el mismo problema con el retraso de la carga de la aplicación, puede utilizar makeStyles. El objetivo de este reto es solucionar el problema de renderizado tardío solo en el Componente Header. El tema usará Material-Ui para administrar los estilos guardados en el objeto.