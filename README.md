
# Creative Academic Portfolio

## Project Overview

This project is a **Creative Academic Portfolio** website that showcases academic projects and achievements. The web app is designed to highlight creativity in learning and can be deployed as a static web app using Azure. It features a clean and responsive design that effectively presents information in an engaging manner.

## Final Project Structure

```bash
Creative-Academic-Portfolio/
│
├── index.html            # Main HTML file for the portfolio
├── styles.css           # CSS file for styling the web app
├── script.js            # JavaScript file for interactive features
└── .github/
    └── workflows/
        └── azure-static-web-app.yml  # GitHub Actions workflow file for Azure deployment
```

## Prerequisites

- **Azure Student Subscription**: Ensure you have valid student subscription.
- **Git**: Install Git to manage your repository.

## How to Test Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/Creative-Academic-Portfolio.git
   cd Creative-Academic-Portfolio
   ```

2. **Open the `index.html` file**:
   You can open the `index.html` file directly in your web browser or use a local server:
   - If you have Live Server VS code extension installed, you can right click the file and choose:
     ```bash
     Open in live server
     ```

3. **Visit the Local Server**:
   Open your browser and go to `http://localhost:5000` (or `http://localhost:8080` depending on the server you are using) to view your web app.

## How to Deploy in Azure

### Creating a Static Web App

1. **Log in to the Azure Portal**:
   Go to [Azure Portal](https://portal.azure.com).

2. **Create a New Static Web App**:
   - Click on "Create a resource".
   - Search for "Static Web App" and select it.
   - Click on the "Create" button.

3. **Fill in the Details**:
   - **Name**: Provide a name for your app.
   - **Subscription**: Choose your Azure subscription.
   - **Resource Group**: Create a new resource group or select an existing one.
   - **Region**: Choose the region closest to you.
   - **Plan Type**: Select **Free**.
   - **Deployment Details**:
     - **Source**: Select **GitHub**.
     - **Repository**: Choose your repository from GitHub.
     - **Branch**: Select the branch you want to deploy (typically `main`).

4. **Review and Create**:
   - Review your settings and click "Create" to deploy your static web app.

### Connecting to GitHub

1. **Create a GitHub Account**:
   - If you don't have a GitHub account, create one at [GitHub](https://github.com/join).

2. **Create a New Repository**:
   - Go to your GitHub profile and click on "New".
   - Name your repository (e.g., `Creative-Academic-Portfolio`).
   - Initialize with a README if desired.
   - Click "Create repository".

3. **Push Your Code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

## Testing the Output

After deployment, you can visit your new static web app:

## Testing the Output

After deployment, you can visit your new static web app:

1. **Visit the Deployed Web App**:
   - Once the deployment is complete, Azure will provide you with a URL (e.g., `https://your-app-name.azurestaticapps.net`).
   - Navigate to that URL in your web browser to see your live site.

2. **Update the HTML File**:
   - Make changes to `index.html` or any other files in your local repository.
   - Commit the changes and push them to GitHub.
   ```bash
   git add index.html
   git commit -m "Updated the portfolio"
   git push origin main
   ```

3. **Check for Automatic Updates**:
   - The Azure static web app should automatically update with your changes after a few moments.

## Deleting Resources

To delete your Azure resources after testing:

1. **Go to the Azure Portal**:
   - Find the Static Web App you created.
2. **Delete the Resource Group**:
   - Click on the resource group and select "Delete".
   - Confirm the deletion to remove all resources associated with it.


