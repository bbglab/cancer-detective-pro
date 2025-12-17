# Cancer Detective

![Cancer Detective logo](cancer-detective-pro/data/grafs/gral/logo-xl.svg)

This project is a web application for cancer detection. The application is structured into two main directories: `__MACOSX` and `cancer-detective-pro`.

## Directory Structure

### Root Level

- `__MACOSX`: System directory created by macOS when compressing files. Contains metadata and is not used in the application code.
- `cancer-detective-pro`: Main directory for the web application.
- `docker-compose.yml`: Docker Compose configuration file for running the application.
- `Dockerfile`: Docker image configuration.
- `nginx.conf`: Nginx server configuration.
- `CONTRIBUTING.md`: Guidelines for contributing to the project.

### cancer-detective-pro Directory

The main application directory contains the following structure:

- `index.html`: Main landing page of the application.

- **Language Directories**: The application supports multiple languages, each with its own directory:
  - `ca/`: Catalan version
  - `en/`: English version
  - `es/`: Spanish version

  Each language directory contains the same structure with localized content:
  - `index.html`: Language-specific home page
  - `introduction/`: Content about understanding cancer cells and their functioning
  - `analysis/`: Interactive cancer mutation analysis tools
  - `resources/`: Additional information and external resources
  - `about/`: Information about the team members and the project

- `data/`: Shared resources used across the website
  - `css/`: Stylesheets for global styling and theming
    - `style.css`, `home.css`, `quiz.css`, `responsive.css`, etc.
  - `js/`: JavaScript files for interactive features
    - `script.js`, `quiz.js`, `gens.js`, `lottie.js`, etc.
  - `grafs/`: Graphics, images, and animations
    - `cells/`: Cell-related graphics
    - `fotos/`: Team member photos
    - `gral/`: General graphics and logos
    - `js/`: JSON files for Lottie animations

- `mutations_db/`: Database and tools for cancer mutations
  - Contains Jupyter notebooks for processing mutation data
  - Database files for lung and skin cancer mutations
  - Scripts to randomize and reformat mutation data

## Running the Application

The application is containerized using Docker. To run the application, you need to have Docker and Docker Compose installed on your machine.

1. Build the Docker image: `docker-compose -f docker-compose.yml up --build`. You only need to do this once.
2. Run the Docker container: `docker-compose up`
3. Access the application at `http://localhost:8080`

Please note that any changes made to the files in the `cancer-detective-pro` directory will be reflected in the running application.
