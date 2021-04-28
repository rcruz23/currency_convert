# currency_convert
## conversión de monedas y guardado de histórico en base

* #### prerrequisitos
    * Tener instalado ambiente LAMP, WAMP, XAMPP que corresponda al sistema
    * Tener instalado node js
    * Tener instalado composer
    * Tener instalado git
    * Tener levantado el servicio de la base de datos mysql


### Pasos para instalación

* abrir consola/terminal del sistema y situarse en directorio que cuente con permisos de lectura/escritura.

* realizar la clonación del proyecto:
```powershell
git clone https://github.com/rcruz23/currency_convert.git
```

* ingresar a la carpeta del proyecto clonado:
```powershell
cd currency_convert
```

* ejecutar el comando para la instalación de dependencias symfony:
```powershell
composer install
```

* ejecutar el comando para la instalación de dependencias node:
```powershell
yarn install
```


* dentro del directorio raíz (currency_convert) abrir el archivo `.env` y ubicar la siguiente línea:

`DATABASE_URL="mysql://root:@127.0.0.1:3306/db_currency"`

esto corresponde a la url de la base de datos con nombre `db_currency`, por default configurada para un ambiente `localhost` en el puerto 3306 con usuario `root` sin contraseña, en caso de tener configuración distinta, favor de actualizar los datos correspondientes y guardar los cambios.



* ejecutar el siguiente comando para la creación de la base de datos:
```powershell
php bin/console doctrine:database:create
```

* ejecutar el siguiente comando para la creación de las tabla en la base de datos:
```powershell
php bin/console doctrine:migrations:migrate
```

* se mostrará el siguiente mensaje y presionamos ENTER para continuar:
```powershell
WARNING! You are about to execute a migration in database "db_currency" that could result in schema changes and data loss. Are you sure you wish to continue? (yes/no) [yes]:
```

* ejecutamos el siguiente comando para levantar el proyecto symfony:
```powershell
symfony server:start
```

* abrir una nueva consola/terminal del sistema y situarse en directorio del proyecto. Una vez ahí ejecutamos el siguiente comando para levantar el servidor de react:
```powershell
yarn encore dev --watch
```


* abrir el navegador web y dirigirse a la siguiente url:

`http://localhost:8000/conversion/moneda`

se mostrará pantalla para realizar conversión de moneda USD/PLN a "MXN", "ERN", "DZD", "CDF", "MAD", "SYP". En la parte superior se tiene barra de navegación para las pantallas "Historial" y "Convertir".

**NOTA:** dentro de la carpeta `assets/helpers` se encuentra el archivo `getCurrency.js`, donde se tiene la constante `url` con dirección de la API pública para conversión de moneda. En caso de ser requerido, se puede cambiar el parámetro `apiKey` para consumo de la API. De igual forma se puede comentar esta constante y activar la línea con la url que apunta a `localhost` para simular el consumo y respuesta con datos de prueba al ambiente local.