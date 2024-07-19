# RecipeBook

RecipeBook is a web application for sharing and discovering recipes. It utilizes React for the front end, Django for the backend, Docker for containerization, and AWS for deployment.

The application is live [here](http://recipe-sharing-fe.s3-website-us-west-2.amazonaws.com/).

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Deployment](#deployment)
- [Features](#features)

## Overview

RecipeBook allows users to share and explore recipes. Users can search for recipes, view detailed instructions, and add their own recipes. The application is containerized using Docker and deployed on AWS.

## Tech Stack

- **Frontend**: React, Bootstrap
- **Backend**: Django, Django REST framework
- **Database**: JSON file (acts as a simple database for demonstration purposes)
- **Deployment**: Docker, AWS (EC2 for backend, S3 for frontend)

## Architecture

![recipe_sharing_platform_architecture](https://gist.github.com/user-attachments/assets/6d7349b7-6dcb-48d9-bc8c-2f551c44167c)

The architecture consists of the following components:

- **Frontend**: Hosted on AWS S3, served via a static website.
- **Backend**: Hosted on AWS EC2, containerized using Docker.
- **API**: Provides endpoints for fetching and managing recipes.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/vishnusaibhosekar/RecipeBook.git
   cd RecipeBook
   ```

2. Install Docker if not already installed.

3. Build and run the Docker containers:

   ```bash
   cd backend
   sudo docker-compose up -d --build
   ```

4. Access the frontend at `http://localhost:3000` and the backend at `http://localhost:8000/api/recipes/`.

## Deployment

### Frontend

The frontend is deployed on AWS S3. Follow these steps to deploy the frontend:

1. Build the React app:

   ```bash
   cd frontend
   npm run build
   ```

2. Deploy to S3:

   - Create a new S3 bucket.

   ```bash
   aws s3 sync build/ s3://YOUR_S3_BUCKET_NAME
   ```

   - Select the newly created bucket.

   - Go to the "Properties" tab.

   - Scroll down to the "Static website hosting" section.

   - Click on "Edit".

   - Enable "Static website hosting".

   - Specify the "index document" (e.g., index.html).

   - Edit the "Bucket policy" to allow public read access.

### Backend

The backend is deployed on AWS EC2. Follow these steps to deploy the backend:

- SSH into your EC2 instance.

- Pull the latest code from the repository.

- Navigate to the backend directory and build the Docker container:

  ```bash
  cd backend
  sudo docker-compose up -d --build
  ```

- Ensure that your EC2 instance has the necessary security group rules to allow traffic on ports 80 and 8000.

## Features

- View a list of recipes.
- Search for recipes.
- View detailed instructions for each recipe.
- Add new recipes.

## License

This project is licensed under the MIT License.

## Contact

For any queries or feedback, please contact [vishnusaibhosekar](mailto:vishnusaibhosekar@gmail.com).

---

Feel free to replace placeholders like `URL_TO_YOUR_ARCHITECTURE_IMAGE` and `YOUR_S3_BUCKET_NAME` with actual values and add any additional information as needed.
