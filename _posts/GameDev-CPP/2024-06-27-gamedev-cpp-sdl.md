---
title: C++ SDL Install
date: 2024-06-27 12:45:00 +/-TTTT
categories: [GameDev,C++]
tags: [gamedev,c++]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/gamedev/cpp/sdl
---
<div align="center">
<img src="sdl-logo.svg" alt="Logo" width="65%"/>
</div>
_This guide provides step-by-step instructions to add the Simple DirectMedia Layer (SDL) library to a Visual Studio C++ project. You'll learn how to download and set up SDL, configure Visual Studio, and integrate SDL into your project. By the end, you'll be ready to use SDL in your Visual Studio C++ projects._

### About SDL ###
**Simple DirectMedia Layer (SDL)** is a cross-platform development library that provides low-level access to audio, keyboard, mouse, joystick, and graphics hardware via OpenGL and Direct3D. SDL is distributed as a Dynamic Link Library (DLL); the .dll file must be included to run your application.

### Download SDL ###
+ Go to the SDL website: [https://www.libsdl.org/](https://www.libsdl.org/)
  + Navigate to **Download SDL Releases**
  + Download the latest ```SDL3-devel-####-VC.zip```
<div align="left">
<img src="sdl-zip.jpg" alt="Version" width="65%"/>
</div>

+ Create a folder named **ThirdParty** in your **Source** directory. This folder will store external libraries used in your project.
<div align="left">
<img src="sdl-thirdparty-folder.jpg" alt="ThirdParty Folder" width="65%"/>
</div>

+ Move the downloaded .zip file into the **ThirdParty** folder and extract it.
  + Rename the extracted folder to "SDL3" for easier reference.
  + After extraction, delete the .zip file.
<div align="left">
<img src="sdl-unzip-dir.jpg" alt="Unzip" width="75%"/>
</div>

### Add SDL to the Solution Project(s) ###

#### Add SDL Include ####
+ Open the **Project Properties** for the project that will use SDL (e.g., **Engine**).
  + Right-click the project and select **Properties**.
 <div align="left">
<img src="sdl-projects.jpg" alt="Project" width="100%"/>
<img src="sdl-properties.jpg" alt="Properties" width="75%"/>
</div>

> In **Project Properties**, ensure **Configuration** is set to **All Configurations** and **Platform** is set to **All Platforms**.
> <div align="left">
> <img src="sdl-configuration.jpg" alt="Configurations" width="75%"/>
> </div>
{: .prompt-warning }

 
+ Add the SDL include directory to **Additional Include Directories** (**C/C++ > General**):
  + ```$(SolutionDir)Source\ThirdParty\SDL3\include```

```
$(SolutionDir)Source\ThirdParty\SDL3\include
```
<div align="left">
<img src="sdl-include.jpg" alt="Include" width="80%"/>
</div>
 
> If your solution contains multiple projects, repeat the **Additional Include Directories** step for each project that uses SDL.
> _This steps needs to be done on the **Game** project also._
{: .prompt-warning }

#### Add SDL Library ####
_The SDL library setup only applies to the **Engine** project._

+ Add the SDL library directory in **Project Properties** (**Librarian > General** or **Linker > Input**):
  + ```$(SolutionDir)Source\ThirdParty\SDL3\lib\$(PlatformTarget)```

```
$(SolutionDir)Source\ThirdParty\SDL3\lib\$(PlatformTarget)
```
<div align="left">
<img src="sdl-library.jpg" alt="Library" width="70%"/>
</div>
 
+ Add the required SDL .lib files to **Additional Dependencies** (**Librarian > General** or **Linker > General**):
  + ```sdl3.lib```

```
sdl3.lib
```
<div align="left">
<img src="sdl-lib.jpg" alt="Library" width="70%"/>
</div>

> If the SDL library is set up correctly, building the project (CTRL+B) should result in no errors.
{: .prompt-info }

#### Add SDL Dynamic Link Library (dll) ####
+ Create a folder named **Build** in your solution directory if it doesn't exist. This folder will store the SDL DLL files.
<div align="left">
<img src="sdl-build.jpg" alt="Build" width="80%"/>
</div>

+ Copy **sdl3.dll** from **ThirdParty\SDL3\lib\x64** to the **Build** folder. For 64-bit projects, use the x64 version of the DLL.
<div align="left">
<img src="sdl-dll.jpg" alt="DLL" width="100%"/>
<img src="sdl-dll-build.jpg" alt="DLL" width="100%"/>
</div>

+ In the **Game** project properties, set the **Working Directory** (**Debugging**) to the **Build** folder:
  + ```$(SolutionDir)Build```

```
$(SolutionDir)Build
```
<div align="left">
<img src="sdl-working.jpg" alt="Working" width="70%"/>
</div>

### Create SDL Window ###

+ In main() add the following code:

```
#include <SDL3/SDL.h>
#include <iostream>

int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);

    SDL_Window* window = SDL_CreateWindow("SDL3 Project", 1280, 1024, 0);
    if (window == nullptr) {
        std::cerr << "SDL_CreateWindow Error: " << SDL_GetError() << std::endl;
        SDL_Quit();
        return 1;
    }

    SDL_Renderer* renderer = SDL_CreateRenderer(window, NULL);
    if (renderer == nullptr) {
        std::cerr << "SDL_CreateRenderer Error: " << SDL_GetError() << std::endl;
        SDL_DestroyWindow(window);
        SDL_Quit();
        return 1;
    }

    SDL_Event e;
    bool quit = false;

    // Define a rectangle
    SDL_FRect greenSquare{ 270, 190, 200, 200 };

    while (!quit) {
        while (SDL_PollEvent(&e)) {
            if (e.type == SDL_EVENT_QUIT) {
                quit = true;
            }
        }

        SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255); // Set render draw color to black
        SDL_RenderClear(renderer); // Clear the renderer

        SDL_SetRenderDrawColor(renderer, 0, 255, 0, 255); // Set render draw color to green
        SDL_RenderFillRect(renderer, &greenSquare); // Render the rectangle

        SDL_RenderPresent(renderer); // Render the screen
    }

    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();

    return 0;
}
```