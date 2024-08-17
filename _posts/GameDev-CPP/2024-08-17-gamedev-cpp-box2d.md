---
title: C++ Box2D Install
date: 2024-08-17 10:00:00 +/-TTTT
categories: [GameDev,C++]
tags: [gamedev,c++]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/gamedev/cpp/box2d
---
_This guide will provide step-by-step instructions on how to add Box2D to a Visual Studio C++ project._

<div align="left">
<img src="box2d-logo.png" alt="Logo" width="100%"/>
</div>


### About Box2D ###
**Box2D** is a free open source 2-dimensional physics simulator engine written in C++ by Erin Catto (Blizzard) and published under the MIT license. **Box2D** performs constrained rigid body simulation. It can simulate bodies composed of convex polygons, circles, and edge shapes. Bodies are joined with joints and acted upon by forces. The engine also applies gravity, friction, and restitution. The games created with **Box2D** include Angry Birds, Limbo, and Shovel Knight as well as the Unity game engine.

<div align="left">
<img src="box2d-angrybirds.jpg" alt="AngryBirds" width="75%"/>
<img src="box2d-limbo.jpg" alt="Limbo" width="75%"/>
<img src="box2d-shovelknight.jpg" alt="ShovelKnight" width="75%"/>
<img src="box2d-unity.jpg" alt="Unity" width="75%"/>
</div>

### Download Box2D ###
+ Download the code for **Box2D** [https://box2d.org/](https://box2d.org/)
  + Click on the **GitHub** icon
<div align="left">
<img src="box2d-github-link.jpg" alt="Download" width="45%"/>
</div>

  + Click on the **Box2D** repository (repo for short)
<div align="left">
<img src="box2d-github-repo.jpg" alt="Repo" width="45%"/>
</div>

  + Click on **Code** and **Download ZIP**
<div align="left">
<img src="box2d-github-download.jpg" alt="Download Zip" width="50%"/>
</div>
   
+ Move the **box2d-main.zip** file into the **ThirdParty** folder
+ Unzip the **box2d-main.zip** file
<div align="left">
<img src="box2d-zip.jpg" alt="Zip" width="70%"/>
</div>

+ Delete the **box2d-main.zip** file after unzipping, it is no longer needed
  
### Build Box2D ###

The build instructions are in the **Building** section on the **Box2D GitHub** page. Instructions all also shown in this guide below.

> It is recommended to follow the instructions from this guide as they provide more details.
{: .prompt-tip }
<div align="left">
<img src="box2d-building.jpg" alt="Building" width="50%"/>
</div>

#### Install CMake ####
_CMake is a tool to create the build environment for a project. It is used to package a project and then create the project files for the build environment (Visual Studio) and platform (Windows/Linux)._

+ Download the latest release of **CMake**: [https://cmake.org/](https://cmake.org/)
<div align="left">
<img src="box2d-cmake-download.jpg" alt="CMake Download" width="70%"/>
</div>

+ Run the downloaded file to install **CMake**
<div align="left">
<img src="box2d-cmake-install.jpg" alt="CMake Install" width="70%"/>
</div>
<div align="left">
<img src="box2d-cmake-installer.jpg" alt="CMake Installer" width="50%"/>
</div>

+ Make sure to enable **Add CMake to the PATH environment variable**
  + This will make include the **CMake** directory in the **PATH** allowing **CMake** to be run from anywhere on the computer
<div align="left">
<img src="box2d-cmake-path.jpg" alt="CMake Path" width="50%"/>
</div>

#### Build Box2D ####

+ Run the **Build.bat** in the extracted box2d-main folder
  + This is a _batch file_ and will run a set of commands to build the **Box 2D Visual Studio Solution** using **CMake**

<div align="left">
<img src="box2d-cmake-build.jpg" alt="Box2D Build" width="60%"/>
</div>
<div align="left">
<img src="box2d-console-build.jpg" alt="Box2D Build" width="60%"/>
</div>

#### Run Box2D ####
+ Once the build is complete, **Visual Studio** will be launched with the **Box2D** solution
<div align="left">
<img src="box2d-solution-explorer.jpg" alt="Box2D Solution Explorer" width="60%"/>
</div>

+ Build and Run the **Box2D  samples** project
<div align="left">
<img src="box2d-program.jpg" alt="Box2D Program" width="60%"/>
</div>

+ Run some of the different **tests** to see the features and functionality of **Box2D**
<div align="left">
<img src="box2d-tests.jpg" alt="Box2D Tests" width="60%"/>
</div>

> Save a screenshot of **Box2D** running in **Visual Studio** as it will be required for the submission of the assignment.
{: .prompt-tip }
