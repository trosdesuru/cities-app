![Cities Image](project/app/public/logo/cities.png)
# Migración a MongoDB Atlas

## Descripción
Esta rama tiene como objetivo migrar la base de datos que actualmente está en local a **MongoDB Atlas**, un servicio de base de datos en la nube. Esto permitirá mejorar la escalabilidad, el rendimiento y la fiabilidad del sistema.

## Fases del proceso

### 1. **Configuración de MongoDB Atlas**
   - Crear una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Configurar un nuevo clúster de MongoDB Atlas.
   - Configurar las reglas de acceso IP y crear un usuario con privilegios adecuados.

### 2. **Migración de datos desde la base de datos local**
   - Exportar la base de datos local a un archivo `dump` usando `mongodump`.
   - Subir el archivo de volcado a MongoDB Atlas utilizando `mongorestore` o la herramienta de importación de Atlas.

### 3. **Configuración de la conexión a MongoDB Atlas en la aplicación**
   - Actualizar las variables de entorno para que apunten a la nueva base de datos en MongoDB Atlas.
   - Cambiar la cadena de conexión a la base de datos en el código de la aplicación.
   - Verificar que la conexión se realiza correctamente.

### 4. **Verificación y pruebas**
   - Probar la conexión a la base de datos desde la aplicación.
   - Realizar pruebas de lectura/escritura en la base de datos para asegurarse de que los datos se almacenan y recuperan correctamente.
   - Verificar el rendimiento en diferentes entornos (desarrollo, staging, producción).

### 5. **Documentación y limpieza**
   - Actualizar la documentación para reflejar el cambio a MongoDB Atlas.
   - Eliminar cualquier dato sensible de la base de datos local y asegurar que la nueva configuración esté segura.

## Pruebas
- **Prueba de conexión**: Verificar que la aplicación se conecta correctamente a MongoDB Atlas.
- **Prueba de lectura/escritura**: Realizar operaciones CRUD para asegurarse de que los datos se guardan y recuperan correctamente de la nueva base de datos.
- **Pruebas de rendimiento**: Verificar el tiempo de respuesta de la base de datos en diferentes operaciones.
- **Pruebas de escalabilidad**: Simular el uso a gran escala para verificar el rendimiento del clúster de MongoDB Atlas.

## Notas Importantes
- **Seguridad**: Asegurarse que las credenciales de acceso a MongoDB Atlas estén configuradas correctamente en las variables de entorno y nunca se suban a repositorios públicos.
- **Migración de datos**: Verificar que todos los datos locales se hayan migrado correctamente antes de cambiar la conexión a producción.
- **Fase BETA**: Como parte del proceso de migración, es recomendable hacer pruebas exhaustivas en un entorno de staging antes de realizar el cambio en producción.
- **Monitoreo**: Después de la migración, es recomendable habilitar el monitoreo en MongoDB Atlas para detectar posibles problemas de rendimiento.

## Estado del desarrollo
- [ ] Configuración de MongoDB Atlas completada.
- [ ] Migración de datos realizada.
- [ ] Conexión a MongoDB Atlas configurada en la aplicación.
- [ ] Pruebas de conexión y CRUD realizadas con éxito.
- [ ] Documentación actualizada.
