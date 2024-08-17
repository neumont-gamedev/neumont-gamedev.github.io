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

+ Rename the **box2d-main** folder to **box2d**
+ Delete the **box2d-main.zip** file after unzipping, it is no longer needed
<div align="left">
<img src="box2d-folder.jpg" alt="Folder" width="70%"/>
</div>

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

### Add Box2D Library ###

#### Add Box2D Include Directories ####
>The includes need to be done in all **Projects** in the **Solution**.
{: .prompt-warning }

+ Open the **Project Properties** that **Box2D** will be used in
  + Right-click the **Project** and select **Properties**
 <div align="left">
<img src="box2d-projects.jpg" alt="Project" width="75%"/>
<img src="box2d-properties.jpg" alt="Properties" width="75%"/>
</div>

+ Add the directory of the **Box2D** include folder to the **Additional Include Directories**.
  + **Additional Include Directories** is located in **C/C++>General**.
  + Add ```$(SolutionDir)ThirdParty\box2d\include```

```
$(SolutionDir)ThirdParty\box2d\include
```
<div align="left">
<img src="box2d-include.jpg" alt="Include" width="75%"/>
</div>

#### Add Box2D Library Directories and Library (.lib)
> The Box2D Library Directories and Library (.lib) only need to be completed on the project that is the application (Game). Do not perform the steps with the library project (Engine). If it is done on both, there will be a warning reported when built.
{: .prompt-warning }

+ In the **box2d** directory in **ThirdParty** create a folder called "lib"
  + This will store the .lib file needed for the projects
<div align="left">
<img src="box2d-lib-directory.jpg" alt="Library" width="70%"/>
</div>

+ To make it easier to find, the box2d.lib will be copied to the new **lib** directory
  + Go to the ```ThirdParty\box2d\build\src\Debug``` folder and copy the ```box2d.lib``` to the ```ThirdParty\box2d\lib``` folder
<div align="left">
<img src="box2d-build-lib.jpg" alt="Library" width="70%"/>
<img src="box2d-lib-dir-lib.jpg" alt="Library" width="70%"/>
</div>

+ Add the directory of the **Box2D** library folder in **Project Properties**
  + **Additional Library Directories** is located in **Librarian>General** or **Linker>Input**
  + Add ```$(SolutionDir)ThirdParty\box2d\lib```

```
$(SolutionDir)ThirdParty\box2d\lib
```
<div align="left">
<img src="box2d-library.jpg" alt="Library" width="70%"/>
</div>
 <br> 

+ Add the **Box2D** .lib files that the project needs to function
  + **Additional Dependencies** is located in **Librarian>General** or **Linker>General**
  + Add ```box2d.lib```

```
box2d.lib
```
<div align="left">
<img src="box2d-lib.jpg" alt="Lib" width="70%"/>
</div>

### Create Physics Class ###
+ Create a new **Filter** called "Physics" in the **Engine** project
<div align="left">
<img src="box2d-physics-filter.jpg" alt="Lib" width="70%"/>
</div>

+ Add a ```Physics.h``` header and ```Physics.cpp``` source file in the ```Engine\Source\Physics``` folder
<div align="left">
<img src="box2d-physics-h.jpg" alt="Lib" width="80%"/>
</div>
<div align="left">
<img src="box2d-physics-files.jpg" alt="Lib" width="70%"/>
</div>

#### Physics.h ####
+ Add the following code for the Physics.h header

```
#include <box2d/box2d.h>
#include <memory>

class Physics
{
public:
	Physics() = default;

	bool Initialize();
	void Shutdown();

	void Update(float dt);

private:
	b2WorldId m_worldId;
};
```

#### Physics.cpp ####
+ Add the following code for the Physics.cpp source code

```
#include "Physics.h"

bool Physics::Initialize()
{
	b2WorldDef worldDef = b2DefaultWorldDef();
	worldDef.gravity = b2Vec2{ 0.0f, -10.0f };
	m_worldId = b2CreateWorld(&worldDef);

	return true;
}

void Physics::Shutdown()
{
	b2DestroyWorld(m_worldId);
}

void Physics::Update(float dt)
{
	b2World_Step(m_worldId, 1.0f / 60.0f, 4);
}
```

### Add Physics to the Engine ###
+ In the ```Engine.h``` header include the ```Physics.h``` header
+ Add the **Physics** class to the **Engine** class and create an accessor method

```
Physics& GetPhysics() { return *m_physics; }

std::unique_ptr<Physics> m_physics;
```

+ In the ```Engine.cpp``` source file, create, initialize, shutdown and update the **Physics** class

```
m_physics = std::make_unique<Physics>();

m_physics->Initialize();

m_physics->Shutdown();

m_physics->Update(m_time->GetDeltaTime());
```