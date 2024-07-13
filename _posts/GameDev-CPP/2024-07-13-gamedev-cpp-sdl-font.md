---
title: C++ SDL Font Install
date: 2024-07-13 10:00:00 +/-TTTT
categories: [GameDev,C++]
tags: [gamedev,c++]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/gamedev/cpp/sdl
---
_This guide will provide step-by-step instructions on how to add True Type Font to the Simple DirectMedia Layer (SDL) library in a Visual Studio C++ project._

### About True Type Font ###
**TrueType** is an outline font standard developed by Apple in the late 1980s as a competitor to Adobe's
Type 1 fonts used in PostScript. It has become the most common format for fonts on the classic Mac OS,
macOS, and Microsoft Windows operating systems.

### Download SDL True Type Font ###
+ Download the SDL_ttf (True Type Font) library
  + [https://github.com/libsdl-org/SDL_ttf/releases](https://github.com/libsdl-org/SDL_ttf/releases)
  + Download ```SDL2_ttf-devel-2.22.2-VC.zip```
<div align="left">
<img src="sdl-font-download.jpg" alt="Download" width="65%"/>
</div>

+ Unzip the downloaded .zip file
<div align="left">
<img src="sdl-font-unzip.jpg" alt="Zip" width="65%"/>
</div>
+ Copy the **SDL2 TTF** ```include``` and ```lib``` directory to the **ThirdParty/SDL2** folder
  + This will add the True Type Font files to SDL2
<div align="left">
<img src="sdl-font-unzip-dir.jpg" alt="Zip" width="65%"/>
<img src="sdl-font-unzip-dest.jpg" alt="Zip" width="65%"/>
</div>

### Add SDL True Type Font to the Solution Project(s) ###
> If the **Solution** contains multiple **Projects**, the following steps will need to be done for each project. This is because each project needs the path to the **SDL2 TTF** includes and libraries.
> <div align="left">
> <img src="sdl-projects.jpg" alt="Projects" width="75%"/>
> </div>
{: .prompt-warning }

> SDL2 should've already been setup with the include directories and library directories for the projects, the only step necessary is to add the .lib library in the project properties.
{: .prompt-tip }

#### Add SDL True Type Font Library ####
+ Open the **Project Properties** that SDL will be used in
  + Right-click the **Project** and select **Properties**
 <div align="left">
<img src="sdl-project.jpg" alt="Project" width="75%"/>
<img src="sdl-properties.jpg" alt="Properties" width="75%"/>
</div>

+ Add the SDL2 TTF .lib files that the project needs to function.
  + **Additional Dependencies** is located in **Librarian>General** or **Linker>General**
  + Add ```sdl2_ttf.lib```

```
sdl2_ttf.lib
```
<div align="left">
<img src="sdl-font-lib.jpg" alt="Lib" width="70%"/>
</div>

#### Add SDL True Type Font Dynamic Link Library (dll) ####
+ Create a folder in the **Solution** directory called "Build"
  + This step might have already been done previously
  + The **Build** folder will contain the **SDL TTF** dll (dynamic link library) files.
<div align="left">
<img src="sdl-build.jpg" alt="Build" width="70%"/>
</div>

+ Copy the **sdl2_ttf.dll** file from the **ThirdParty\sdl2\lib\x64** directory to the **Build** folder.
  + The project is a x64 project (64-bit application).
<div align="left">
<img src="sdl-font-dll.jpg" alt="DLL" width="70%"/>
<img src="sdl-font-dll-build.jpg" alt="DLL" width="70%"/>
</div>

### Add Fonts to the Build ###
+ Find fonts to use in the program
  + This site has free fonts that can be downloaded: [https://www.1001freefonts.com/](https://www.1001freefonts.com/)
  + Place the .ttf font into the **Build** folder
<div align="left">
<img src="sdl-font-build.jpg" alt="Build" width="70%"/>
</div>

### Add TTF Fonts to the Renderer ###
+ In the Renderer.h header, include the **SDL TTF** header
```
#include <SDL_ttf.h>
```
+ Add the code to initialize and quit **SDL TTF** in the **Initialize()** and **Shutdown()** method

```
bool Renderer::Initialize()
{
	// initialize SDL
	if (SDL_Init(SDL_INIT_VIDEO) < 0)
	{
		std::cerr << "Error initializing SDL: " << SDL_GetError() << std::endl;
		return false;
	}
	if (TTF_Init() < 0)
	{
		std::cerr << "Error initializing SDL TTF: " << SDL_GetError() << std::endl;
		return false;
	}

	return true;
}
```
```
void Renderer::Shutdown()
{
	SDL_DestroyRenderer(m_renderer);
	SDL_DestroyWindow(m_window);
	TTF_Quit();
}
```