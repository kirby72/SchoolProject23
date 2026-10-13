# SchoolProject23

# How To

If you are modifying code files, follow these terminal steps. If this is your first time, make sure you have Git installed on your computer.

# One-Time Setup: Copy the Project to Your Computer

Open your terminal (or Command Prompt) and run:
bash
git clone <PASTE_OUR_REPOSITORY_URL_HERE>
cd <OUR_PROJECT_FOLDER_NAME>
Use code with caution.

 # 2. The Daily Routine: Update the Repository

Every time you want to add your changes, open your terminal inside the project folder and run these three commands in order:
bash
# Step 1: Stage all your new and modified files
git add .

# Step 2 Update your files to whatever s on github!!!!!
git pull origin main

# Step 3: Save your changes locally with a descriptive note
git commit -m "Briefly explain what you changed or added"

# Step 4: Send your changes to our GitHub repository
git push origin main
Use code with caution.
(Note: If you are working on a specific branch instead of main, replace main with your branch name, like git push origin feature-login).

⚠️ CRITICAL STEP: Pull Before You Push!

Before you start working each day, always run this command to download any changes your teammates made. This prevents annoying code conflicts:
bash
git pull origin main
Use code with caution.
