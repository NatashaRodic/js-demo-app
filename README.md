# Static App with Docker

### 1. Build the Docker Image

In the root directory of the project, build the Docker image with the following command:

```bash
docker build -t static-app .
```

### 2. Run the Docker Container

Run the Docker container on an available port, e.g., 8081:

```bash
docker run -d -p 8081:80 static-app
```

### 3. Access the App

Once the container is running, open your web browser and go to:

```bash
http://localhost:8081
```
