---
title: C++ SDL Image Install
date: 2024-07-31 10:00:00 +/-TTTT
categories: [GameDev,C++]
tags: [gamedev,c++]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/gamedev/cpp/sdl
---
_This guide will provide step-by-step instructions on how to add the Image library to the Simple DirectMedia Layer (SDL) library in a Visual Studio C++ project._

### Download SDL Image ###
+ Download the SDL_image library
  + [https://github.com/libsdl-org/SDL_image/releases](https://github.com/libsdl-org/SDL_image/releases)
  + Download ```SDL2_image-devel-2.8.2-VC.zip```
<div align="left">
<img src="sdl-image-download.jpg" alt="Download" width="65%"/>
</div>

+ Unzip the downloaded .zip file
<div align="left">
<img src="sdl-image-unzip.jpg" alt="Zip" width="65%"/>
</div>
+ Copy the **SDL2 Image** **include** and **lib** directory to the **ThirdParty/SDL2** folder
  + This will add the **SDL2 Image** files to **SDL2**
<div align="left">
<img src="sdl-image-unzip-dir.jpg" alt="Zip" width="65%"/>
<img src="sdl-dir-dest.jpg" alt="Zip" width="65%"/>
</div>

### Add SDL Image to the Solution Project(s) ###
> If the **Solution** contains multiple **Projects**, the following steps will need to be done for each project. This is because each project needs the path to the **SDL2 Image** includes and libraries.
> <div align="left">
> <img src="sdl-projects.jpg" alt="Projects" width="75%"/>
> </div>
{: .prompt-warning }

> SDL2 should've already been setup with the include directories and library directories for the projects, the only step necessary is to add the library (.lib) in the project properties.
{: .prompt-tip }

#### Add SDL Image Library ####

> The **sdl2_image.lib** only needs to be added to the project that is the application (Game). Do not add it to the library project (Engine). If it is added to both, there will be a warning reported when built.
{: .prompt-warning }

+ Open the **Project Properties** that SDL will be used in
  + Right-click the **Project** and select **Properties**
 <div align="left">
<img src="sdl-projects.jpg" alt="Project" width="75%"/>
<img src="sdl-properties.jpg" alt="Properties" width="75%"/>
</div>

+ Add the SDL2 Image .lib files that the project needs to function
  + **Additional Dependencies** is located in **Librarian>General** or **Linker>General**
  + Add ```sdl2_image.lib```

```
sdl2_image.lib
```
<div align="left">
<img src="sdl-image-lib.jpg" alt="Lib" width="70%"/>
</div>

#### Add SDL Image Dynamic Link Library (dll) ####
+ Create a folder in the **Solution** directory called "Build"
  + _This step may have already been completed earlier._
  + The **Build** folder will contain the **SDL Image** dll (dynamic link library) files.
<div align="left">
<img src="sdl-build.jpg" alt="Build" width="70%"/>
</div>

+ Copy the **sdl2_image.dll** file from the **ThirdParty\sdl2\lib\x64** directory to the **Build** folder.
  + The project is a x64 project (64-bit application).
<div align="left">
<img src="sdl-image-dll.jpg" alt="DLL" width="70%"/>
<img src="sdl-image-dll-build.jpg" alt="DLL" width="70%"/>
</div>

> If **SDL2 Image** was properly added, building and running the project will result in no errors.
{: .prompt-info }

### Add Images to the Build ###
+ Find image to use in the program
  + Place the .bmp, .jpg, or .png images into the **Build** folder
  + Assets are now placed in the **Assets** folder inside the **Build** folder
<div align="left">
<img src="sdl-image-build.jpg" alt="Build" width="70%"/>
</div>

### Update Code for SDL Images ###

#### Add Image header (.h) to the Renderer ####
+ In the **Renderer.h** header, include the **SDL Image** header
```
#include <SDL_image.h>
```

#### Initialize and Shutdown SDL Image ####
+ Add the code to initialize and quit **SDL Image** in the **Initialize()** and **Shutdown()** method to the Renderer

```
bool Renderer::Initialize()
{
	... (existing initialization code) ...

	// initialize Image SDL, supports BMP, JPG, and PNG
	if (IMG_Init(IMG_INIT_JPG | IMG_INIT_PNG) == 0)
	{
		std::cerr << "Error initializing SDL Image: " << SDL_GetError() << std::endl;
		return false;
	}
		
	return true;
}
```
```
void Renderer::Shutdown()
{
    ... (existing shutdown code) ...

    IMG_Quit();
}
```

### Create Texture Class ###

+ Create **Texture.h** file in the **Source/Renderer** directory
  + Make sure to add the neccessary #include or forward declarations
  + If doing a forward declaration on **SDL_Texture**, use **struct** instead of **class** as **SDL_Texture** is a **struct**

```
class Texture
{
public:
	Texture() = default;
	~Texture();

	bool Create(const std::string& filename, class Renderer& renderer);

	Vector2 GetSize();

	friend class Renderer;

private:
	struct SDL_Texture* m_texture{ nullptr };
};
```

+ Create **Texture.cpp** file
  + **Texture** will need to be a **friend class** of **Renderer** so it can access the **Renderer** private data **m_renderer**
  + You will need to add the neccessary #include

```
Texture::~Texture()
{
    // if texture exists, destroy texture
    if (...texture is not null...) SDL_DestroyTexture(m_texture);
}

bool Texture::Create(const std::string& filename, Renderer& renderer)
{
    // load image onto surface
    SDL_Surface* surface = IMG_Load(...get the c-string of filename...);
    if (...surface is null...)
    {
        std::cerr << "Could not load image: " << filename << std::endl;
        return false;
    }

    // create texture from surface, texture is a friend class of renderer
    m_texture = SDL_CreateTextureFromSurface(...look at parameters of function...);
    // once texture is created, surface can be freed up
    SDL_FreeSurface(surface);
    if (...m_texture is null...)
    {
        std::cerr << "Could not create texture: " << filename << std::endl;
        return false;
    }

    return true;
}

Vector2 Texture::GetSize()
{
    ASSERT(m_texture != nullptr);

    // query the texture for the size
    // https://wiki.libsdl.org/SDL2/SDL_QueryTexture
    SDL_Point size;
    SDL_QueryTexture(m_texture, NULL, NULL, ...pass address of size.x and size.y...);

    return ...Vector2 with size.x and size.y...;
}
```

> Add the **Texture.h** include in Engine.h.
{: .prompt-info }

### Add Draw Texture to Renderer Class ###

+ In the **Renderer.h**
  + Make **Texture** a **friend class** of the **Renderer**
  + Add a **DrawTexture()** function declaration

```
friend class Texture;
void DrawTexture(...forward declaration... Texture* texture, float x, float y, float angle...use default value 0.0f...);
```

+ In the **Renderer.cpp**
  + Include the **Texture.h**
    + Required since a **forward declaration** was used in the **Renderer.h**
  + Add **DrawTexture()** function

```
void Renderer::DrawTexture(Texture* texture, float x, float y, float angle)
{
	Vector2 size = ...get texture size...

	SDL_FRect destRect;
	destRect.x = x;
	destRect.y = y;
	destRect.w = ...size x...;
	destRect.h = ...size y...;

	// https://wiki.libsdl.org/SDL2/SDL_RenderCopyExF
	SDL_RenderCopyExF(m_renderer, texture->m_texture, NULL, &destRect, angle, NULL, SDL_FLIP_NONE);
}
```

#### Draw Texture in Main ####

+ In **main()** create a **Texture** before the while loop

```
// create texture, using shared_ptr so texture can be shared
std::shared_ptr<Texture> texture = std::make_shared<Texture>();
texture->Create(...texture filename... , ...renderer from engine...);
```

+ Draw the texture between the renderer **BeginFrame()** and **EndFrame()**

```
engine->GetRenderer().DrawTexture(...get() texture pointer..., 30, 30);
```

> Build and run the program and the image will show up on the screen at the set location.
{: .prompt-info }

<div align="left">
<img src="sdl-image-beast.jpg" alt="Lib" width="70%"/>
</div>