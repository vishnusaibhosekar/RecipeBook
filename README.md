# RecipeBook

RecipeBook is a web application for sharing and discovering recipes. It uses a React frontend and a Django backend, with Docker for containerization and AWS for deployment.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Features](#features)
- [License](#license)

## Overview

RecipeBook allows users to browse, search, and view recipes. Users can add new recipes with details like ingredients, instructions, and images. The application is deployed on AWS, with the frontend hosted on S3 and the backend on an EC2 instance.

## Tech Stack

- **Frontend:** React, Bootstrap
- **Backend:** Django, Django REST Framework
- **Containerization:** Docker, Docker Compose
- **Deployment:** AWS (S3, EC2)
- **Database:** JSON file as database

## Architecture

The application is structured into two main parts:

1. **Frontend:**
   - Built with React.
   - Hosted on AWS S3.
2. **Backend:**
   - Built with Django and Django REST Framework.
   - Containerized using Docker.
   - Hosted on AWS EC2.

## Installation

### Prerequisites

- Docker
- Docker Compose
- AWS CLI

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/RecipeBook.git
   cd RecipeBook
   ```

2. **Set up the frontend:**

   ```sh
   cd frontend
   npm install
   npm run build
   ```

3. **Set up the backend:**

   ```sh
   cd ../backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

4. **Run the application locally:**
   ```sh
   docker-compose up -d
   ```

## Deployment

### Frontend

1. **Build the frontend:**

   ```sh
   cd frontend
   npm run build
   ```

2. **Deploy to S3:**
   ```sh
   aws s3 sync build/ s3:recipe-sharing-fe
   ```

### Backend

1. **SSH into your EC2 instance and navigate to the project directory:**

   ```sh
   ssh -i your-key.pem ec2-user@your-ec2-instance.amazonaws.com
   cd /path/to/your/project
   ```

2. **Build and run the Docker containers:**
   ```sh
   docker-compose up -d --build
   ```

## Screenshots

<TODO>

## Features

- Browse recipes
- Search recipes
- View detailed recipes
- Add new recipes
