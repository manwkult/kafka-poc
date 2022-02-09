# Proyecto de Prueba de Concepto de Kafka

## 600K Transacciones

Este proyecto contiene la prueba de concepto para enviar y recibir con un alto performance a traves de kafka 600K transacciones

## Instrucciones para correr el proyecto localmente

Primeramente debemos de crear el contenedor de kafka & zookeeper

_Docker debera de estar instalado en la maquina_

[Install Docker Desktop on Windows](https://docs.docker.com/docker-for-windows/install/)

```bash
docker-compose up -d
```

Una vez arriba los contenedores vamos a correr el consumer y posteriormente el produccer del proyecto

```bash
npm run start:consumer
```

```bash
npm run start:producer
```