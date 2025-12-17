# Cancer Detective

![Cancer Detective logo](cancer-detective-pro/data/grafs/gral/logo-xl.svg)

This project is a web application for cancer detection. The application is structured into two main directories: `__MACOSX` and `cancer-detective-pro`.

## Directory Structure

- `__MACOSX`: This is a system directory created by macOS when you compress files. It contains metadata about the files in the `cancer-detective-pro` directory and is not typically used in the application code.

- `cancer-detective-pro`: This is the main directory for the web application. It contains several subdirectories, each corresponding to a different page or feature of the website. Each of these directories contains an `index.html` file, which is typically the main HTML file that a web server will serve when a client navigates to the directory's URL.

  - `introduction`: This directory contains the `index.html` file which includes content about understanding cancer cells and their functioning. It uses various CSS classes for styling and layout.

  - `resources`: This directory contains the `index.html` file which provides additional information about cancer cells and related resources. It includes links to external resources and images.

  - `about`: This directory contains the `index.html` file which provides information about the team members involved in the project. It includes links to their profiles and images.

  - `data`: This directory contains various resources used across the website. It includes a css subdirectory with the `style.css` file for global styling.

## Running the Application

The application is containerized using Docker. To run the application, you need to have Docker and Docker Compose installed on your machine.

1. Build the Docker image: `docker-compose -f docker-compose.yml up --build`. You only need to do this once.
2. Run the Docker container: `docker-compose up`
3. Access the application at `http://localhost:8080`

Please note that any changes made to the files in the `cancer-detective-pro` directory will be reflected in the running application.
