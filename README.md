# Henryz-portfolio
This repository contains a modern responsive portfolio website built using the MERN stack (MongoDB, Express.js, React, Node.js). The project showcases advanced technologies, including CICD, docker and kubernetes, also formspree integration and react icon and boxicons. 

---

## Features
- **Responsive Design**: Works seamlessly across devices of all sizes.
- **Project Showcase**: Highlights completed and ongoing projects.
- **Contact Form**: Uses Formspree to handle inquiries without the need for a backend.
- **Automated Deployment**: Integrates CI/CD for efficient updates and builds.

---

## Technologies
- **Frontend**: React.js
- **Contact Form**: Formspree
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **CI/CD Pipeline**: GitHub Actions
- **Hosting**: Render

---

## CI/CD Pipeline
This project uses a CI/CD pipeline to automate the build and deployment process:
1. **Push Code**: GitHub Actions is triggered whenever code changes are pushed to the repository.
2. **Build Docker Image**: The pipeline automatically builds the updated Docker image.
3. **Push to Docker Hub**: The image is pushed to Docker Hub (`chibuzor1/dapp4:latest`) for easy access.
4. **Deploy**: The latest image is pulled and deployed to Render or Kubernetes.

This process ensures seamless updates and reliable deployments.

---

## Installation
To run the project locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/CHIBUZOR-1/Henryz-portfolio.git
   ```
2. Navigate to the project directory:
   ```
   cd portfolio-app
   ```
3. Build the Docker Image
   ```
   docker build -t your-dockerhub-username/dapp4:latest .
   ```
4. Run The Docker Container:
   ```
   docker run -p 80:80 your-dockerhub-username/dapp4:latest
   ```
5. Push the Docker Image to Docker Hub
   ```
   docker push your-dockerhub-username/dapp4:latest
   ```
## Contribution
1. Fork the repository.
2. Create a new branch:
   ```
   git checkout -b feature-name
   ```
## License
This project is licensed under the MIT License. See the LICENSE file for details.
