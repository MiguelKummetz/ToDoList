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
                - isDone => pendiente/completada (boolean)

## Comandos:

- node app add + "name" => Crea y añade una Task con el nombre dado.
- node app done + "index" => Cambia el estado de la Task en la posición elegida.
- node app remove + "index" => Elimina la Task en la posición elegida.
- node app print => Muestra la lista por consola.

## Debug Tests:

- "npm run addTask" => Añade una Task a la lista con el nombre "TestName".
- "npm run doneTask" => Cambia el estao de la Task en la posición 1.
- "npm run removeTask" => Elimina la Task en la posición 1.
- "npm run printTask" => Muestra la lista por consola.