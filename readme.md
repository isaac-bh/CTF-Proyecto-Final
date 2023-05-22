# Computación Tolerante a Fallas - Proyecto Final
## **Universidad de Guadalajara** - Centro Universitario de Ciencias Exactas e Ingenierias

### Este es un proyecto realizado para la materia de Computación Tolerante a Fallas - D06

---
### Alumnos 

- Benavides Hernandez Isaac Alain
- Lomeli Flores Jesus Isaac
- Romo Valadez Jonathan Joshua

---
## Introducción
Las aplicaciones que son construidas dia a dia utilizan miles de herramientas y dependencias para poder ejecutarse, y aunque nosotros como programadores realicemos pruebas exhaustivas a nuestra aplicación, las pruebas denotan la existencia de errores, más no su ausencia, por lo que la capacidad de que nuestra aplicación se recupere de un error inesperado es un gran extra, o incluso necesario en aplicaciones escenciales. Para el proyecto final nosotros desarrollamos una aplicación basada en microservicios, utilizando herramientas que fueron vistas a lo largo del semestre como lo son Docker, Kubernetes e Istio.

---
## Prerequisitos
Para poder ejecutar esta aplicación necesitas tener instalado: 
- Docker.
- Minikube para ambiente local.
- Kubectl para administrar el ambiente en la nube.
- Istioctl
- Python
- Node.js

Adicional a esto, si realizaras el despliegue en la nube necesitaras una cuenta con credito disponible en algun proveedor de servicios de Cloud Computing (AWS, Azure, GCP) nosotros en particular usamos Linode.

---
## Link a la aplicación: http://45.79.61.211/app/

---
## Contenido
Este proyecto consiste en una serie de microservicios montadas en la nube con Kubernetes, utilizando la malla de servicios de Istio para agregar algunas funcionalidades extra a la aplicación, como las metricas y estadisticas de salud, añadimos reglas especiales para que redirija a servicios diferentes dependiendo si un usuario esta en un celular o una computadora, además de que configuramos reintentos si las peticiones a un servicio fallan.



---
## Conclusión
Para concluir, los servicios desplegados en Kubernetes son increiblemente resilientes a fallos por el simple hecho de estar desplegados en esta plataforma, debido a el posible escalamiento y replicas configuradas, sin embargo, podemos añadir aún más funciones y servicios a estos, como lo hace Istio, la capacidad de añadir un logger, estadisticas, reglas de seguridad y algunas practicas de tolerancia a fallos como las que vimos en la practica de Quarkus hacen a Istio una herramienta muy util y sencilla de acoplar con aplicaciones ya existentes, debido a que no necesitas cambiar nada en código, si no que se inyectan los servicios utilizando contenedores como intermediarios entre el cliente y nuestra aplicación.
