# To Do List:

L'objectiu d'aquest exercici és crear una aplicació de llista de tasques utilitzant TypeScript i TDD. L'aplicació ha de tenir les següents característiques:

- Permetre afegir una tasca a la llista.

- Permetre marcar una tasca com a completada.

- Permetre eliminar una tasca de la llista.

- Mostrar la llista de tasques.

---------------------------

## Estructura:

- Clase Task:
        
        1. Constructor:
                - name => Nombre (string)
                - id => Numero id (number)
                - isDone => pendiente/completada (boolean)

        3. toDTO => Método que muestra los datos de un objeto task

        4. changeStatus => Método que permite cambiar el estado de la task pendiente/completada

- Clase TaskList:

        1. Constructor:
                - list => Array que contendrá los Task creados.

        2. add => Método que añade un objeto task a la array list.

        3. delete => Método que permite eliminar un objeto task de la array.

        4. mapList => Método que mapea y muestra la lista de tasks actual.