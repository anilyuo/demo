
Node.js Application Deployment on AWS ECS with TLS
This project focuses on deploying a Node.js application to an AWS Elastic Container Service (ECS) cluster, with an Application Load Balancer (ALB) and TLS encryption enabled for secure communication.
Local Development

Git: Git was used for version control during local development. The code was regularly committed and pushed to a remote GitHub repository. This allowed for collaborative development, version tracking, and code reviews.
Node.js Code: The Node.js application code was modified slightly to ensure proper execution within the Docker container environment. Specifically, changes were made to access the bin folder inside the container. This folder typically contains executable files or scripts required by the application.

Docker

Dockerfile: A Dockerfile was created to define the build instructions for the Docker image. It specifies the base image (e.g., Node.js Alpine), copies the application code, installs dependencies using npm install, and sets the entry point for the container (e.g., node 000.js).
Docker Image: The Docker image was built using the docker build command, and it was tagged with a suitable name and version (e.g., demo:latest).
Docker Registry: The built Docker image was pushed to a ECR registry for easy access and deployment. This step ensures that the Docker image is available for deployment to the ECS cluster.

Infrastructure

Terraform: Infrastructure as Code (IaC) principles were followed using Terraform to provision and manage the necessary AWS resources. Terraform allows you to define and manage your infrastructure in a declarative way, making it easier to create, update, and delete resources in a consistent and repeatable manner.
ECS Cluster: Terraform code was written to create an ECS cluster, which is a logical grouping of EC2 instances that run containerized applications. The ECS cluster provides a highly scalable and reliable environment for running Docker containers.
ECS Service: An ECS service was defined to specify the desired number of task instances and the deployment configuration. The service defines how many copies of the application should be running and how they should be updated (e.g., rolling updates or blue/green deployments).
Application Load Balancer (ALB): An ALB was provisioned to distribute incoming traffic across the ECS tasks. The ALB acts as a single point of entry for the application, providing load balancing, routing, and health checks for the tasks.
Target Group: A target group was created to register the ECS tasks as targets for the ALB. The ALB forwards traffic to the registered targets in the target group.
Security Groups: Appropriate security groups were configured to control inbound and outbound traffic to the ECS cluster and the ALB. Security groups act as virtual firewalls, allowing or denying traffic based on specified rules.

TLS Encryption

SSL/TLS Certificate: An SSL/TLS certificate was generated using OpenSSL  for secure communication over HTTPS. The certificate is used to establish a secure connection between clients and the application.
Private Key: A private key file was created or obtained from the certificate authority to be used in conjunction with the SSL/TLS certificate. The private key is used for encryption and decryption of data during the TLS handshake.
ALB Configuration: The ALB was configured to use the SSL/TLS certificate and private key for TLS encryption, ensuring secure communication between clients and the application. This step involves associating the certificate and key with the ALB listener.

Deployment

Docker Image Deployment: The Docker image is deployed to the ECS cluster using the aws ecs update-service command. This command updates the ECS service with the latest Docker image
Load Balancing: The ALB forwards incoming HTTPS traffic to the ECS service, distributing the load across the running tasks based on the configured routing rules and health checks.
TLS Termination: The ALB terminates the TLS connection and forwards the decrypted traffic to the ECS tasks within the secure environment. This ensures that the communication between the ALB and the tasks is not encrypted, reducing the overhead of encryption/decryption on the tasks themselves.
![demo-1](https://github.com/anilyuo/demo/assets/168365194/331bd589-527b-4411-80f2-b9d1e1179b59)

Prerequisites

AWS Account
Terraform
Docker
Git
OpenSSL (for generating SSL/TLS certificates)
