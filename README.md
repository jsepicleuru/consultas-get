# Web Service Cambio de destino en Remito

Web Service para cambiar realizar consultas a Ipoint sobre movimientos de caja, indicando parámetros de fecha de inicio y fin.


## Comandos útiles

Script para traerse los últimos cambios de GitHub, detener el contenedor, borrarlo, hacer el build y correrlo de nuevo:


```bash
 cd /usr/src/consultas-get ;
sudo git pull ;
sudo docker stop consultas-get-cnt ;
sudo docker rm consultas-get-cnt ;     
sudo docker build -t consultas-get . ;
sudo docker run -d --name consultas-get-cnt -p 8089:3000 --network=bridge --restart unless-stopped consultas-get ;
sudo docker image prune -a -f ;
cd .. ;
```

Para acceder a la consola dentro del container:

```bash
    sudo docker exec -it consultas-get-cnt sh
```

Una vez dentro de la consola: Consultar la lista de archivos disponibles:

```
    ls
```

Entrar al archivo de logs:

```
    cat consultas.log
```
