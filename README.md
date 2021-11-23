# AE4_Ajax

1. En esta actividad debes desarrollar un formulario completo, sin envío al servidor, que sirva para dar de alta un pedido de una pizza dentro de una web de una pizzería.

Los campos del formulario son los siguientes:

- Nombre
- Dirección
- Teléfono
- Email
- Un radio button con el tamaño de la pizza, pudiendo ser pequeña, mediana o grande
- 4 Checkbox con los diferentes ingredientes de la pizza
- Un botón de procesar el pedido

Todos los campos tienen que estar rellenos de tipo texto deben de estar rellenos para que sean válidos, además debe de elegir obligatoriamente un tamaño de la pizza y al menos un ingrediente para ella.

2. El campo teléfono y email deben de tener un formato adecuado, deben de hacerse las validaciones oportunas con JavaScript (Expresiones regulares).

Además, el nombre no puede empezar por minúsculas.

3. Al pulsar el botón de procesar el pedido, se mostrará el precio total del pedido calculándolo en base a los siguientes parámetros:

- 5€ para la pizza pequeña
- 10€ para la pizza mediana
- 15€ para la pizza grande
- Cada ingrediente elegido tendrá un valor de 1€