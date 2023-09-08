## Instruction To Run The Project

### Step 1: Download and Extract the Project

1. Click on the "Code" button at the top of the GitHub repository page.
2. Select the "Download ZIP" option from the dropdown menu.
3. Navigate to your local download folder and unzip the downloaded ZIP file (usually named "project-master").

### Step 2: Open the Project in VS Code 

#### Option 1: Using VS Code

1. Right-click on the folder containing the project files (e.g., "frontend" or "backend").
2. Select "Open with VS Code" from the context menu.

#### Option 2: Using Git Bash and VS Code

1. Open Git Bash.
2. Navigate to the folder containing the project files using the `cd` command (e.g., `cd path/to/project`).
3. Type `code .` and press Enter. This command will open the folder in Visual Studio Code.

Choose the method that best suits your preference to open the project folders ("frontend" and "backend") inside Visual Studio Code for development.

### Step 3: Open Two PowerShell Terminals

1. In Visual Studio Code, go to the top menu.
2. Select "Terminal" and then "New Terminal."
3. This will open a single PowerShell terminal by default.
4. To open a second PowerShell terminal, click the "Split Terminal" button on the top right corner of the terminal pane.

### Step 4: Navigate to Project Folders

Inside the first terminal, navigate to the "frontend" folder using the command:
```powershell
cd frontend
```

Inside the second terminal, go to the "backend" folder using the following command:
```powershell
cd backend
```

### Step 5 : Installing Dependencies

Inside the first PowerShell terminal (frontend folder), enter the following command to install dependencies:
```powershell
npm install

```
Inside the second PowerShell terminal (backend folder), enter the following command to install backend dependencies using npm:
```powershell
npm install
```

### Step 6 : Running Backend Server

Inside the second PowerShell terminal (backend folder), run the following command to start your backend server:
```powershell
npm start
```

### Step 6 : Opening User Interface

Inside the first PowerShell terminal (frontend folder), run the following command to start the user interface:
```powershell
npm start
```








