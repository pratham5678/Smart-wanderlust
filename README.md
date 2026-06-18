# 🌍 Smart Wanderlust

## Cloud-Native Travel Recommendation Platform

Smart Wanderlust is a cloud-native travel platform developed using a **Microservices Architecture**. The application demonstrates modern software engineering practices by integrating **Docker**, **Kubernetes**, **Prometheus**, and **Grafana** for deployment, orchestration, and monitoring.

This project showcases how multiple independent services can communicate through an API Gateway while being deployed and monitored in a Kubernetes environment.

---

## ✨ Features

* 👤 User Management
* 📅 Booking Management
* 🏖️ Travel Recommendation System
* 🌐 API Gateway
* 💾 MongoDB Integration
* 🐳 Docker Containerization
* ☸️ Kubernetes Deployment
* 📊 Prometheus Metrics Collection
* 📈 Grafana Dashboard Monitoring
* 🔄 Microservices Architecture

---

## 🛠️ Technology Stack

| Category         | Technologies          |
| ---------------- | --------------------- |
| Frontend         | React.js              |
| Backend          | Node.js, Express.js   |
| Database         | MongoDB               |
| Containerization | Docker                |
| Orchestration    | Kubernetes (Minikube) |
| Monitoring       | Prometheus            |
| Visualization    | Grafana               |
| Version Control  | Git & GitHub          |
| CI/CD            | Jenkins               |

---

## 📂 Project Structure

```
Smart-wanderlust/

├── frontend/
├── gateway/
├── services/
│   ├── user-service/
│   ├── booking-service/
│   └── recommendation-service/
│
├── k8s/
│
├── docker-compose.yml
├── deployment.yaml
├── prometheus.yaml
├── Jenkinsfile
├── package.json
├── package-lock.json
└── README.md
```
# 🚀 How to Run This Project

## 1. Clone the Repository

```bash
git clone https://github.com/pratham5678/Smart-wanderlust.git

cd Smart-wanderlust
```

---

## 2. Install Dependencies

Install dependencies for each component.

### Frontend

```bash
cd frontend
npm install
```

### Gateway

```bash
cd ../gateway
npm install
```

### User Service

```bash
cd ../services/user-service
npm install
```

### Booking Service

```bash
cd ../booking-service
npm install
```

### Recommendation Service

```bash
cd ../recommendation-service
npm install
```

---

## 3. Start MongoDB

Ensure MongoDB is running locally or inside Docker.

---

## 4. Run with Docker Compose (Recommended)

```bash
docker-compose up --build
```

This starts all required services automatically.

---

## 5. Run with Kubernetes

Start Minikube:

```bash
minikube start
```

Deploy all Kubernetes resources:

```bash
kubectl apply -f k8s/
```

Check pods:

```bash
kubectl get pods
```

Check services:

```bash
kubectl get svc
```

---

## 6. Verify Monitoring

### Prometheus

Port-forward Prometheus:

```bash
kubectl port-forward -n monitoring svc/prometheus-server 9090:80
```

Open:

```
http://localhost:9090
```

Search metrics such as:

```
gateway_requests_total
booking_created_total
recommendation_requests_total
```

---

### Grafana

Port-forward Grafana:

```bash
kubectl port-forward -n monitoring svc/grafana 3000:80
```

Open:

```
http://localhost:3000
```

Login with your Grafana credentials and import or create dashboards using Prometheus as the data source.

---

## 7. Verify Services

Check that the metrics endpoints are accessible:

```
http://localhost:3000/metrics
http://localhost:3001/metrics
http://localhost:3002/metrics
http://localhost:3003/metrics
```

---

## Prerequisites

* Node.js 18+
* npm
* Docker
* Kubernetes (Minikube)
* kubectl
* Helm
* MongoDB
* Git

---

## Repository

```
git clone https://github.com/pratham5678/Smart-wanderlust.git
```

After cloning and following the above steps, the complete Smart Wanderlust cloud-native application can be deployed with monitoring using Prometheus and Grafana.

---


## 🏗️ Architecture

```
                    React Frontend
                           │
                           │
                    API Gateway
                           │
      ┌────────────┬─────────────┬────────────┐
      │            │             │
 User Service  Booking Service  Recommendation Service
      │            │             │
      └────────────┴─────────────┘
                    │
                 MongoDB
                    │
            Prometheus Server
                    │
             Grafana Dashboard
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/pratham5678/Smart-wanderlust.git

cd Smart-wanderlust
```

---

## Install Dependencies

```bash
npm install
```

or install dependencies inside each service individually.

---

## Run with Docker

```bash
docker-compose up --build
```

---

## Deploy with Kubernetes

Apply all Kubernetes manifests:

```bash
kubectl apply -f k8s/
```

Check deployments:

```bash
kubectl get deployments
```

Check pods:

```bash
kubectl get pods
```

Check services:

```bash
kubectl get svc
```

---

## 📊 Monitoring

Prometheus scrapes metrics from all microservices through their `/metrics` endpoints.

Example metrics:

* gateway_requests_total
* booking_created_total
* recommendation_requests_total

---

## 📈 Grafana Dashboard

Grafana is connected to Prometheus to visualize:

* Request Count
* CPU Usage
* Memory Usage
* Node.js Runtime Metrics
* Application Metrics
* Service Health

---

## 📦 Microservices

### Gateway

Acts as the central entry point and routes requests to backend services.

### User Service

Handles user registration and management.

### Booking Service

Manages travel bookings and booking-related operations.

### Recommendation Service

Provides travel recommendations for users.

---

## 🔍 Monitoring Endpoints

Each service exposes metrics through:

```
/metrics
```

which are scraped by Prometheus and visualized in Grafana.

---

## 🎯 Key Concepts Demonstrated

* Microservices Architecture
* REST API Development
* Docker Containerization
* Kubernetes Orchestration
* API Gateway Pattern
* Prometheus Monitoring
* Grafana Visualization
* Cloud-Native Application Development
* DevOps Practices
* Jenkins CI/CD Basics

---

## 🚀 Future Enhancements

* JWT Authentication
* Role-Based Access Control
* AI-Powered Travel Recommendations
* Payment Gateway Integration
* Email Notifications
* Redis Caching
* Horizontal Pod Autoscaling
* Kubernetes Ingress Controller
* GitHub Actions CI/CD Pipeline

---

## 📸 Screenshots

You can add screenshots of:

* Application Home Page
* Kubernetes Pods
* Kubernetes Services
* Prometheus Targets
* Grafana Dashboard
* Docker Containers

---

## 👨‍💻 Author

**Pratham**

B.Tech Student | Cloud Computing | DevOps | Full Stack Development

GitHub: https://github.com/pratham5678

---

## ⭐ Support

If you found this project useful, please consider giving it a **⭐ Star** on GitHub.

Contributions, feedback, and suggestions are always welcome.
