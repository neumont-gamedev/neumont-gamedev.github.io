---
title: C++ Raylib Install
date: 2026-03-27 12:45:00 +/-TTTT
categories: [GameDev,C++]
tags: [gamedev,c++]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/gamedev/cpp/raylib
---
![test](image1.png)

## Install Raylib

There are two method to get the **raylib** code and project. Choose
either one.

### Method 1 - Download

- Install raylib quick start from
  <https://github.com/raylib-extras/raylib-quickstart>.

- Click the dropdown menu and select **Download ZIP.**

![image](image3.png)

- Place the .zip file in the desired location and unzip the file.

![image](image4.png)

### Method 2 -- Clone Repository

- Alternately, a **clone** can be made of the repository.

- Navigate to the directory to install the project in **Windows
  Explorer**.

![](image5.png)

- Type "cmd" in the **Windows Explorer address bar** and press
  **Enter**.

  - This will open a **command prompt** in that directory.

![image](image6.png)

![image](image7.png)

- Copy the **GitHub** repository URL link from the dropdown menu.

![image](image8.png)

<https://github.com/raylib-extras/raylib-quickstart.git>

- In the command prompt, type "git clone " and paste the URL.

example: git clone
<https://github.com/raylib-extras/raylib-quickstart.git>

![image](image9.png)

- This will clone (copy) the raylib quick start files to the computer.

## Create the Raylib Solution

- Raylib will create a **Solution** and **Project** based on the folder
  name it is contained in, rename the folder to the desired **Solution**
  and **Project** name.

![](image10.png)
![](image11.png)

- In the newly named folder, double-click the
  "build-VisualStudio2022.bat" to create the **Visual Studio Solution**.

![](image12.png)

- The **Solution** file is now created for **Visual Studio**.

![](image13.png)

- Double-click the **Solution** (.sln) file to open the **Solution** in
  **Visual Studio**.

- The **Solution** with the new **Project** will appear.

  - The new **Project** is where all the new code will located. The
    **raylib** project is a **Static Library** and contains **raylib**
    engine code.

![](image14.png)

- Click the run button (F5) and a window will appear with text and an
  image.

![](image16.png)

## Add to Source Control

- Click the **Add to Source Control** at the bottom right of **Visual
  Studio**.

![](image17.png)

- Select **Git**.

![](image18.png)

- Set the parameters for the project and ensure the **Visibility** is
  set to **Public**.

  - Most, if not all, the parameters should be automatically set.

- Click **Create and Push**.

![](image19.png)

- Use **Git Changes** to **commit** and **push** code changes when
  necessary.

![](image20.png)

## Install raygui

**raygui** is a simple and easy-to-use immediate-mode-gui library. This
will allow the creation and usage of GUI elements in our project.

There are two method to get the **raygui** code and project. Choose
either one.

### Method 1 - Download

- Install **raygui** from <https://github.com/raysan5/raygui>.

- Click the dropdown menu and select **Download ZIP.**

![](image21.png)

- Place the **raygui-master.zip** file in the project folder and unzip
  the file.

![image](image22.png)

- Delete the **raygui-master.zip** and rename the **raygui-master**
  folder to **raygui**.

![](image23.png)

### Method 2 -- Clone Repository

- Alternately, a **clone** can be made of the repository.

- Navigate to the project directory to install the project in **Windows
  Explorer**.

![](image24.png)

- Type "cmd" in the **Windows Explorer address bar** and press
  **Enter**.

  - This will open a **command prompt** in that directory.

![image](image6.png)

![](image25.png)

- Copy the **GitHub** repository URL link from the dropdown menu.

![](image26.png)

<https://github.com/raysan5/raygui.git>

- In the command prompt, type "git clone " and paste the URL.

example: git clone <https://github.com/raysan5/raygui.git>

![image](image9.png)

- This will clone (copy) the rayqui files to the directory.

![image](image27.png)
