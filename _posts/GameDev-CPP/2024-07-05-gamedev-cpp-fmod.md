---
title: C++ FMOD Install
date: 2024-06-27 8:00:00 +/-TTTT
categories: [GameDev,C++]
tags: [gamedev,c++]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/gamedev/cpp/fmod
---
![Light mode only](fmod-logo-light.svg){: .light }
![Dark mode only](fmod-logo-dark.png){: .dark }

_This guide will provide step-by-step instructions on how to add the FMOD library to a Visual Studio C++ project. You will learn how to download and set up FMOD, configure Visual Studio to recognize the library, and integrate FMOD into your project for enhanced multimedia capabilities. By the end of this guide, you will be ready to utilize FMOD in your Visual Studio C++ projects._

### About FMOD ###
**FMOD** is a proprietary sound effects engine and authoring tool for video games and applications. It is able to play and mix sounds of diverse formats on many operating systems. **FMOD** is used many popular game engines like Unity and Unreal Engine.

### Download FMOD ###
+ Go to the **FMOD** website (https://www.fmod.com/)[https://www.fmod.com/]
  + Go to the **Sign In** and sign up for an account if you don't have one
  + Go to the **Download**
<div align="left">
<img src="fmod-sign-in.jpg" alt="Sign-in" width="65%"/>
</div>

+ Download the **FMOD Engine** for Windows
<div align="left">
<img src="fmod-download.jpg" alt="Download" width="75%"/>
</div>

+ Install the downloaded **FMOD Engine** file (accepts all defaults)
<div align="left">
<img src="fmod-installer.jpg" alt="Installer" width="75%"/>
</div>

+ Create a folder in the Solution directory called "ThirdParty", if one doesn't exist
  + **ThirdParty** will contain libraries from external developers to be used in the project
+ Create a folder in the **ThirdParty** folder called "fmod"
<div align="left">
<img src="fmod-thirdparty.jpg" alt="ThirdParty" width="62%"/>
</div>

+ Navigate to where **FMOD** was installed on your computer
+ The default location (copy into **Windows Explorer**):
```
C:\Program Files (x86)\FMOD SoundSystem\FMOD Studio API Windows
```
+ In the **api** folder, copy the **core** folder into the **ThirdParty\fmod** folder
<div align="left">
<img src="fmod-api-core.jpg" alt="Api Core" width="65%"/>
<img src="fmod-thirdparty-core.jpg" alt="Api ThirdParty" width="65%"/>
</div>

### Add FMOD to the Solution Project(s) ###
> If the **Solution** contains multiple **Projects**, the following steps will need to be done for each project. This is because each project needs the path to the FMOD includes and libraries.
> <div align="left">
> <img src="fmod-projects.jpg" alt="Projects" width="75%"/>
> </div>
{: .prompt-warning }

> In the **Project Properties**, make sure that the **Configuration** is set to **All Configurations** and **Platform** is set to **All Platforms**.
> <div align="left">
> <img src="fmod-configuration.jpg" alt="Configurations" width="75%"/>
> </div>
{: .prompt-warning }

 
+ Add the directory of the FMOD include folder to the **Additional Include Directories**.
  + **Additional Include Directories** is located in **C/C++>General**.
  + Add ```$(SolutionDir)ThirdParty\fmod\core\inc```

```
$(SolutionDir)ThirdParty\fmod\core\inc
```
<div align="left">
<img src="fmod-include.jpg" alt="Include" width="75%"/>
</div>
 
+ Once the directory is added to the list of included directories, the **FMOD** header can be add to the files.
  + Add the following to a file 
```
#include <fmod.hpp>
```

> If the **FMOD** include directory was properly added, building the project (CTRL+B) will result in no errors.
{: .prompt-info }

#### Add FMOD Library ####
+ Add the directory of the FMOD library folder in **Project Properties**
  + **Additional Library Directories** is located in **Librarian>General** or **Linker>Input**
  + Add ```$(SolutionDir)ThirdParty\fmod\core\lib\$(PlatformTarget)```

```
$(SolutionDir)ThirdParty\fmod\core\lib\$(PlatformTarget)
```
<div align="left">
<img src="fmod-library.jpg" alt="Library" width="70%"/>
</div>
 
+ Add the **FMOD** .lib files that the project needs to function
  + **Additional Dependencies** is located in **Librarian>General** or **Linker>General**
  + Add ```fmod_vc.lib```

```
fmod_vc.lib
```
<div align="left">
<img src="fmod-lib.jpg" alt="Library" width="70%"/>
</div>

> If the **FMOD** library was properly added, building the project (CTRL+B) will result in no errors.
{: .prompt-info }

#### Add SDL Dynamic Link Library (dll) ####
+ Create a folder in the **Solution** directory called "Build"
  + This step might have already been done previously
  + The **Build** folder will contain the **FMOD** dll (dynamic link library) files.
<div align="left">
<img src="fmod-build.jpg" alt="Build" width="70%"/>
</div>

+ Copy the **fmod.dll** file from the **ThirdParty\fmod\core\lib\x64** directory to the **Build** folder.
  + The project is a x64 project (64-bit application).
<div align="left">
<img src="fmod-dll.jpg" alt="DLL" width="70%"/>
<img src="fmod-dll-build.jpg" alt="DLL" width="70%"/>
</div>

> The next step might have already been completed in a previous guide.
{: .prompt-tip }

+ Set the **Working Directory** that the project will be run from in **Project Properties**
  + **Working Directory** is located in **Debugging**
  + Add ```$(SolutionDir)Build```

```
$(SolutionDir)Build
```
<div align="left">
<img src="fmod-working.jpg" alt="Working" width="70%"/>
</div>


> If the **FMOD** library was properly added, building the project (CTRL+B) will result in no errors.
{: .prompt-info }

> The following warning may appear. Ignore the warning for now.
> 
> ```sdl2.lib(SDL2.dll) : warning LNK4006: __NULL_IMPORT_DESCRIPTOR already defined in fmod_vc.lib(fmod.dll); second definition ignored```
{: .prompt-warning }

### Create FMOD System ###

+ A sound (.wav) file will need to be added to the **Build** folder to work. For this example a sound file "test.wav" was added. Any available sound file can be used.
<div align="left">
<img src="fmod-build-wav.jpg" alt="Wav" width="70%"/>
</div>
+ You can download this file if needed: 
[test.wav](../../assets/downloads/test.wav)

+ In main() add the following code to create the audio system (place where systems are created):
```
	// create audio system
	FMOD::System* audio;
	FMOD::System_Create(&audio);

	void* extradriverdata = nullptr;
	audio->init(32, FMOD_INIT_NORMAL, extradriverdata);
```
+ In main() add the following code to load and play a sound (place before the main loop):
```
	FMOD::Sound* sound = nullptr;
	audio->createSound("test.wav", FMOD_DEFAULT, 0, &sound);

	audio->playSound(sound, 0, false, nullptr);
```
+ In main() inside the main loop add the following to update **FMOD**:
```
    audio->update();
```

> Build and run the **Solution** and the "test.wav" will be played at startup.
{: .prompt-info }
