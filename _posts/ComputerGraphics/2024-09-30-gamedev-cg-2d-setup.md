---
title: Computer Graphics 2D Rasterization Setup
date: 2024-09-30 12:45:00 +/-TTTT
categories: [GameDev,ComputerGraphics]
tags: [gamedev,c++,computergraphics]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/gamedev/cg/project
---
_This guide will provide step-by-step instructions on how to create a Visual Studio C++ project for the Computer Graphics course. This project will use SDL to provide 2D rasterization. 2D rasterization is the process of converting geometric shapes, such as lines, circles, and polygons, into pixels on a screen. It involves taking mathematical descriptions of these shapes and determining which pixels should be illuminated to represent them accurately._

### Create C++ Solution/Project ###
+ Open **Visual Studio** and select **Create a new project**
<div align="left">
<img src="cg-vs-newproject.jpg" alt="Project" width="85%"/>
</div>

+ Create an **Empty Project** C++
<div align="left">
<img src="cg-vs-emptyproject.jpg" alt="Project" width="75%"/>
</div>

+ **Configure your new project**
  + Project Name: **2D**
  + Solution Name: **GAT350**
  + Uncheck **Place solution and project in the same directory**
  + Press **Create**
<div align="left">
<img src="cg-vs-configproject.jpg" alt="Project" width="75%"/>
</div>

  + The solution is now created
<div align="left">
<img src="cg-vs-solution.jpg" alt="Project" width="75%"/>
</div>

+ **Add Main.cpp**
  + Right-click on the project in **Solution Explorer**, select **Add>New Item**
  + Create **Main.cpp** and set the folder to a "Source" folder (the folder will be created if it doesn't exist)
  + **Main.cpp** will now be shown in the **Solution Explorer**
<div align="left">
<img src="cg-vs-main.jpg" alt="Project" width="95%"/>
</div>

  + Add the **main()** function to **Main.cpp**
  + Include the **iostream** and display the string ```"Hello, World!"``` in **main()**
  + Run the **Solution** and ensure that "Hello, World!" is displayed
<div align="left">
<img src="cg-vs-hello.jpg" alt="Project" width="75%"/>
</div>

### Download SDL ###
+ Go to the SDL website [https://www.libsdl.org/](https://www.libsdl.org/)
  + Go to the **Download SDL Releases**
  + Download the latest release ```SDL2-devel-####-VC.zip```
<div align="left">
<img src="sdl-zip.jpg" alt="Version" width="65%"/>
</div>

+ Create a folder in the Solution directory called "ThirdParty"
  + **ThirdParty** will contain libraries from external developers to be used in the project
<div align="left">
<img src="sdl-thirdparty-folder.jpg" alt="ThirdParty Folder" width="65%"/>
</div>

+ Move the downloaded .zip file into the **ThirdParty** folder and extract it
  + Rename the extracted folder to "SDL2" to make is easier to reference the folder
  + Once extracted, the .zip file can be deleted
<div align="left">
<img src="sdl-unzip-dir.jpg" alt="Unzip" width="65%"/>
</div>

### Add SDL to the Solution Project ###

#### Add SDL Include ####
+ Open the **Project Properties** that SDL will be used in
  + Right-click the **Project** and select **Properties**
 <div align="left">
<img src="sdl-project.jpg" alt="Project" width="75%"/>
<img src="sdl-properties.jpg" alt="Properties" width="78%"/>
</div>

> In the **Project Properties**, make sure that the **Configuration** is set to **All Configurations** and **Platform** is set to **All Platforms**.
> <div align="left">
> <img src="sdl-configuration.jpg" alt="Configurations" width="75%"/>
> </div>
{: .prompt-warning }

 
+ Add the directory of the SDL include folder to the **Additional Include Directories**.
  + **Additional Include Directories** is located in **C/C++>General**.
  + Add ```$(SolutionDir)ThirdParty\SDL2\include```

```
$(SolutionDir)ThirdParty\SDL2\include
```
<div align="left">
<img src="sdl-include.jpg" alt="Include" width="75%"/>
</div>
 
+ Once the directory is added to the list of included directories, the SDL header can be add to the files.
  + Add the following to a file ```#include <SDL.h>```
  + Update the **main()** function, SDL requires the arguments

```
int main(int argc, char* argv[])
```

#### Add SDL Library ####
+ Open the **Project Properties** that SDL will be used in
  + Right-click the **Project** and select **Properties**
 <div align="left">
<img src="sdl-project.jpg" alt="Project" width="75%"/>
<img src="sdl-properties.jpg" alt="Properties" width="78%"/>
</div>

+ Add the directory of the SDL library folder in **Project Properties**.
  + **Additional Library Directories** is located in **Librarian>General** or **Linker>Input**
  + Add ```$(SolutionDir)ThirdParty\SDL2\lib\$(PlatformTarget)```

```
$(SolutionDir)ThirdParty\SDL2\lib\$(PlatformTarget)
```
<div align="left">
<img src="sdl-library.jpg" alt="Library" width="70%"/>
</div>
 
+ Add the SDL .lib files that the project needs to function.
  + **Additional Dependencies** is located in **Librarian>General** or **Linker>General**
  + Add ```sdl2.lib``` and ```sdl2main.lib```

```
sdl2.lib
sdl2main.lib
```
<div align="left">
<img src="sdl-lib.jpg" alt="Library" width="70%"/>
</div>

> If the SDL library was properly added, building the project (CTRL+B) will result in no errors.
{: .prompt-info }

#### Add SDL Dynamic Link Library (dll) ####
+ Create a folder in the **Solution** directory called "Build".
  + The **Build** folder will contain the SDL dll (dynamic link library) files.
<div align="left">
<img src="sdl-build.jpg" alt="Build" width="70%"/>
</div>

+ Copy the **sdl2.dll** file from the **ThirdParty\sdl\lib\x64** directory to the **Build** folder.
  + The project is a x64 project (64-bit application).
<div align="left">
<img src="sdl-dll.jpg" alt="DLL" width="70%"/>
<img src="sdl-dll-build.jpg" alt="DLL" width="70%"/>
</div>

#### Set the Solution Working Directory ####
+ Set the **Working Directory** that the project will be run from in **Project Properties**.
  + **Working Directory** is located in **Debugging**.
  + Add ```$(SolutionDir)Build```

```
$(SolutionDir)Build
```
<div align="left">
<img src="sdl-working.jpg" alt="Working" width="70%"/>
</div>

### Create SDL Window ###

+ In main() add the following code:

```
#include <SDL.h>
#include <iostream>

int main(int argc, char* argv[])
{
    // initialize SDL
    if (SDL_Init(SDL_INIT_VIDEO) < 0)
    {
        std::cerr << "Error initializing SDL: " << SDL_GetError() << std::endl;
        return 1;
    }

    // create window
    // returns pointer to window if successful or nullptr if failed
    SDL_Window* window = SDL_CreateWindow("Game Engine",
        SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600,
        SDL_WINDOW_SHOWN);
    if (window == nullptr)
    {
        std::cerr << "Error creating SDL window: " << SDL_GetError() << std::endl;
        SDL_Quit();
        return 1;
    }

    // create renderer
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);

    while (true)
    {
        // clear screen
        SDL_SetRenderDrawColor(renderer, 0, 0, 0, 0);
        SDL_RenderClear(renderer);

        // show screen
        SDL_RenderPresent(renderer);
    }

    return 0;
}
```