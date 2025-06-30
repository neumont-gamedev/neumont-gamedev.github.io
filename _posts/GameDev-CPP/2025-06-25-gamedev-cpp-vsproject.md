---
title: C++ VS Project Setup
date: 2025-06-23 12:45:00 +/-TTTT
categories: [GameDev,C++]
tags: [gamedev,c++]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/gamedev/cpp/vsproject
---
_This guide will provide step-by-step instructions on how to create a Visual Studio C++ Solution and multiple Projects. The projects will be split between a game executable and a engine static library._

# Update Visual Studio

Make sure you have **Visual Studio Enterprise 2022** installed and that
it is up to date.

- Open **Visual Studio** and click **Continue without code**.

![A screenshot of a computer program AI-generated content may be
incorrect.](image1.png){width="1.7339971566054244in"
height="1.9014851268591426in"}
![](image2.png){width="1.531463254593176in"
height="0.3021259842519685in"}

- If there are any updates, the **bell** icon on the bottom right will
  be red.

  - If there is, click the **bell** icon and perform any updates by
    clicking **Update on close**.

![](image3.png){width="1.5094335083114612in"
height="0.23462707786526685in"} ![A screenshot of a black background
with white text AI-generated content may be
incorrect.](image4.png){width="1.9314107611548557in"
height="0.6751388888888888in"}

# Create Visual Studio Solution

- Open **Visual Studio** and **Create a new project**.

![](image5.png){width="1.6168832020997375in"
height="1.6907699037620298in"}

- Create an **Empty Project**.

  - To reduce project types listed, filter the projects by setting
    **Language** to **C++** and **Project type** to **Console**.

![A screenshot of a computer AI-generated content may be
incorrect.](image6.png){width="3.6786253280839896in"
height="1.0226257655293087in"}

- Name your **Project** and **Solution**.

  - In this example, the **Solution** name is "CSC196".

  - In this example, the **Project** name is "Game".

- Uncheck **Place solution and project in the same directory**

  - The **Project** needs to be in its own folder.

  - Click **Create** to create the project.

![](image7.png){width="4.343514873140857in"
height="2.898733595800525in"}

- The **Solution** and **Project** will be created at the specified
  location.

![A screenshot of a computer AI-generated content may be
incorrect.](image8.png){width="2.3031332020997377in"
height="1.1105380577427821in"}

# Create Project Directory Structure

*The Game Engine project will contain a variety of files and folders to
build the game. Keeping the project organized is important as the
project will grow in size and complexity.*

- Open the folder in **Windows Explorer** that the **Solution** is
  contained in.

  - A shortcut to go to the **Solution** directory is to right-click on
    the **Solution** and select **Open Folder in File Explorer***.*

![A screenshot of a computer Description automatically generated with
medium
confidence](image9.png){width="2.8380107174103237in"
height="0.8504768153980753in"} ![A screenshot of a computer Description
automatically generated with medium
confidence](image10.png){width="3.187788713910761in"
height="0.7727974628171479in"}

- Add the following folders:

  - **Binaries -** contains the built .exe and .lib files from the
    projects.

  - **Build** -- contains .exe/.dll files and game assets (.wav, images,
    models).

  - **Intermediate** - contains the temporary object files (.obj) from
    the projects.

  - **Source** - contains source code and projects.

![](image11.png){width="2.1074945319335083in"
height="1.6890583989501313in"}

- The **Game** project will be moved into the Source folder.

- In **Visual Studio** click on the **Game** project in the **Solution
  Explorer**, press **Delete** to remove the project.

  - Save the project if prompted.

![A screenshot of a computer program AI-generated content may be
incorrect.](image12.png){width="2.247904636920385in"
height="1.3274267279090113in"} ![A screenshot of a computer AI-generated
content may be
incorrect.](image13.png){width="1.8217858705161856in"
height="0.9754035433070866in"}

- In **Windows Explorer**, move the **Game** folder into the **Source**
  folder.

![A screen shot of a computer AI-generated content may be
incorrect.](image14.png){width="2.360320428696413in"
height="1.0979461942257218in"}

- In **Visual Studio**, right-click the Solution in the **Solution
  Explorer** and select **Add\>Existing Project...**

![A screenshot of a computer AI-generated content may be
incorrect.](image15.png){width="5.842715441819773in"
height="2.768423009623797in"}

- Find the project file (Game.vcxproj) and click **Open**.

![A screenshot of a computer AI-generated content may be
incorrect.](image16.png){width="2.4400754593175855in"
height="1.0480850831146107in"}

- The **Project** will now be included in the **Solution**.

![A screenshot of a computer program AI-generated content may be
incorrect.](image17.png){width="2.5763746719160103in"
height="1.067435476815398in"}

# Update the Game Project

*The Game project is a project that will contain the code for the game
and creates an executable (.exe) that can be run.*

- The **Solution** will contain default **Filters** (folders) for the
  **Game** project.

- Remove and Rename the Filters as follows:

  - Remove **Resource Files**.

  - Remove **Header Files**.

  - Rename **Source Files** to "Source".

![A screenshot of a computer Description automatically
generated](image18.png){width="2.7157075678040243in"
height="1.8309142607174103in"} ![A screenshot of a computer program
AI-generated content may be
incorrect.](image19.png){width="2.9647659667541557in"
height="1.8035115923009624in"}

- Add a **Main.cpp** to the **Source** filter.

  - Right click on the **Source** filter and select **Add\>New Item...**

![](image20.png){width="5.688554243219597in"
height="0.4746839457567804in"}

- Name the file Main.cpp and click **Add**.

![](image21.png){width="6.29684820647419in"
height="0.6364074803149606in"}

- Typically the source file that contains the **main()** function is
  called **Main.cpp**.

- The **main()** function is the entry point for the application, where
  the program will start.

![](image22.png){width="2.37461832895888in"
height="1.1962029746281715in"}

- Add the following code to display the classic "Hello World!"

#include \<iostream\>

int main()

{

std::cout \<\< \"Hello, World!\\n\";

}

- Run (F5) the project to ensure it is working

![A picture containing text, font, screenshot Description automatically
generated](image23.png){width="2.4829800962379704in"
height="0.5126793525809273in"}

# Add an Engine Static Library

- In **Visual Studio**, right-click the Solution in the **Solution
  Explorer** and select **Add\>New Project...**

![A screenshot of a computer program AI-generated content may be
incorrect.](image24.png){width="5.612326115485565in"
height="3.2240890201224848in"}

- Find and select the **Windows Desktop Wizard**, click **Next**.

![](image25.png){width="4.312398293963255in"
height="1.2468350831146107in"}

- Set the **Project name** to "Engine"

- Click the **Location** **...** button to select the location for the
  project.

  - Navigate to the **Source** folder.

![A black screen with white text AI-generated content may be
incorrect.](image26.png){width="4.741489501312336in"
height="1.114452099737533in"}

![A screenshot of a computer AI-generated content may be
incorrect.](image27.png){width="1.7902099737532808in"
height="0.8682524059492563in"}

- Click **Select Folder**.

![](image28.png){width="5.783214129483815in"
height="0.46182305336832896in"}

- Click **Create**.

![A black and grey square AI-generated content may be
incorrect.](image29.png){width="1.45001968503937in"
height="0.34479330708661415in"}

- Set the **Application type** to **Static Library (.lib)** and check
  the **Empty Project**

![A screenshot of a computer Description automatically generated with
medium
confidence](image30.png){width="2.804705818022747in"
height="1.406132983377078in"}

- There will now be an **Engine Project** and **Game Project** in the
  **Solution**.

![A screenshot of a computer program AI-generated content may be
incorrect.](image31.png){width="2.5461931321084865in"
height="2.761130796150481in"}

- Remove and Rename the Filters as follows:

  - Remove **Resource Files**.

  - Rename **Header Files** to "Include".

  - Rename **Source Files** to "Source".

![A black and white screen with white text AI-generated content may be
incorrect.](image32.png){width="2.8155293088363953in"
height="0.9591371391076116in"}

- Add an **Engine.cpp** to the **Source** filter in the **Engine
  Project**.

  - Right click on the **Source** filter and select **Add\>New Item...**

![](image20.png){width="5.688554243219597in"
height="0.4746839457567804in"}

- Name the .cpp file "Engine.cpp"

![](image33.png){width="6.366503718285214in"
height="0.6222222222222222in"}

- This will create an **Engine.cpp** file to the **Engine Project**.

  - No code will be added to this file, it is needed to build the
    **Solution**.

![A screenshot of a computer AI-generated content may be
incorrect.](image34.png){width="2.694472878390201in"
height="1.261606517935258in"}

# Add Reference to Engine

*A reference to the Engine library project needs to be add to the Game
project. This will allow the Game project to use code generated in the
Engine library project.*

- Right-click on the **Game References** in the **Game Project** and
  select **Add Reference...**

![A screenshot of a computer AI-generated content may be
incorrect.](image35.png){width="5.0122276902887135in"
height="0.8364424759405075in"}

- Select **Engine** and click **OK** to add the **Engine Project**
  library to the **Game Project**.

![A screenshot of a computer AI-generated content may be
incorrect.](image36.png){width="6.5in"
height="1.0472222222222223in"}

![A black and white text AI-generated content may be
incorrect.](image37.png){width="2.997608267716535in"
height="0.6341087051618548in"}

# Create a Git Repository

- Click **Add to Source Control** located at the bottom right of the
  **Visual Studio IDE**.

- Select **Git**.

![A screenshot of a computer Description automatically generated with
medium
confidence](image38.png){width="3.760941601049869in"
height="0.645923009623797in"}

- Your credentials should be set if you have used **Git** with **Visual
  Studio** before.

- The **Repository** name can be left with the default **Solution** name
  CSC196 or can be changed.

- Uncheck the **Private** repository so it can be accessed, it is
  important to do this step for grading.

- Click **Create and Push** to create the repository and push the
  current project onto **GitHub**.

![A screenshot of a computer Description automatically
generated](image39.png){width="3.7871751968503937in"
height="2.612988845144357in"}

- Navigate to your **GitHub** repository page to ensure it has been
  created.

  - It may take a couple of minutes to appear when created.

![A screenshot of a computer Description automatically generated with
medium
confidence](image40.png){width="3.735890201224847in"
height="1.7039009186351706in"}

# Save changes to GitHub

*Changes to the Solution can be committed to GitHub from inside Visual
Studio.*

- Save the changes to the project to the remote repository (**GitHub**).

  - Select the **Git Changes** tab at the bottom of the **Solution
    Explorer**.

![](image41.png){width="2.792055993000875in"
height="0.21878062117235345in"}

- If the **Git Changes** tab isn't visible, open it with **View\>Git
  Changes** (Ctrl+0, Ctrl+G).

![](image42.png){width="3.2921259842519683in"
height="0.9688856080489939in"}

- Enter a message (description of what was done) for the commit.

- Click **Commit All***.*

![](image43.png){width="2.5632906824146984in"
height="1.0728707349081366in"}

- Press the **Push** button to push the changes to the remote repository
  (**GitHub**)

![](image44.png){width="2.6045450568678916in"
height="0.987341426071741in"}

- A status message will be displayed

![A screenshot of a computer AI-generated content may be
incorrect.](image45.png){width="2.6297386264216973in"
height="0.8192869641294838in"}


