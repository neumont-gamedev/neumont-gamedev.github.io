---
title: C++ SDL Font Install
date: 2024-07-13 10:00:00 +/-TTTT
categories: [GameDev,C++]
tags: [gamedev,c++]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/gamedev/cpp/sdl
---
_This guide will provide step-by-step instructions on how to add True Type Font to the Simple DirectMedia Layer (SDL) library in a Visual Studio C++ project. This will enable the rendering of text (score, lives, ...) in the application._

### About True Type Font ###
**TrueType** is an outline font standard developed by Apple in the late 1980s as a competitor to Adobe's
Type 1 fonts used in PostScript. It has become the most common format for fonts on the MacOS and Microsoft Windows operating systems.

### Download SDL True Type Font ###
+ Download the latest SDL_ttf (True Type Font) library.
  + [https://github.com/libsdl-org/SDL_ttf/releases](https://github.com/libsdl-org/SDL_ttf/releases)
  + Download (or latest) ```SDL3_ttf-devel-3.2.2-VC.zip```
<div align="left">
<img src="sdl-font-download.jpg" alt="Download" width="65%"/>
</div>

+ Copy the .zip file to the ThirdParty folder and unzip the file.
<div align="left">
<img src="sdl-font-unzip.jpg" alt="Zip" width="65%"/>
</div>
+ Copy the **SDL3_TTF** ```include``` and ```lib``` directory to the existing **ThirdParty/SDL3** folder.
  + This will add the **SDL3 TTF** files to **SDL3**. The files will share the same locations.
<div align="left">
<img src="sdl-font-unzip-dir.jpg" alt="Zip" width="65%"/>
<img src="sdl-dir-dest.jpg" alt="Zip" width="65%"/>
</div>

+ The **SDL3_TTF** folder and .zip file can be deleted now.

### Add SDL True Type Font to the Solution Project(s) ###

> The **SDL3** library should've already been setup with the include directories and library directories for the projects in a previous tutorial, the only step necessary is to add the **SDL3_TTF** library (.lib) to the **Game** project properties.
{: .prompt-tip }

> If the **Solution** contains multiple **Projects**, the following steps will need to be done for each project. This is because each project needs the path to the **SDL3 TTF** includes.
> <div align="left">
> <img src="sdl-projects.jpg" alt="Projects" width="75%"/>
> </div>
{: .prompt-warning }

#### Add SDL True Type Font Library ####

> The **sdl3_ttf.lib** only needs to be added to the project that is the application (Game). Do not add it to the library project (Engine). If it is added to both, there will be a warning reported when built.
{: .prompt-warning }

+ Open the **Project Properties** that SDL libray will be added to (Game).
  + Right-click the **Project** and select **Properties**.
 <div align="left">
<img src="sdl-game-projects.jpg" alt="Project" width="75%"/>
<img src="sdl-properties.jpg" alt="Properties" width="75%"/>
</div>

> In **Project Properties**, ensure **Configuration** is set to **All Configurations** and **Platform** is set to **All Platforms**.
> <div align="left">
> <img src="sdl-configuration.jpg" alt="Configurations" width="75%"/>
> </div>
{: .prompt-warning }

+ Add the SDL library directory in **Project Properties** (**Librarian > General** or **Linker > Input**) to the **Additional Library Directories**:
  + ```$(SolutionDir)Source\ThirdParty\SDL3\lib\$(PlatformTarget)```

+ Add the **SDL3_TTF.lib** file.
  + **Additional Dependencies** is located in **Linker>Input**.
  + Add ```sdl3_ttf.lib```

```
sdl3_ttf.lib
```
<div align="left">
<img src="sdl-font-lib.jpg" alt="Lib" width="70%"/>
</div>

#### Add SDL True Type Font Dynamic Link Library (dll) ####

> The **Build** folder may have already been created in a previous tutorial.
{: .prompt-warning }

+ Create a folder in the **Solution** directory called "Build".
  + The **Build** folder will contain the **SDL TTF** dll (dynamic link library) files.
<div align="left">
<img src="sdl-build.jpg" alt="Build" width="70%"/>
</div>

+ Copy the **sdl3_ttf.dll** file from the **ThirdParty\sdl3\lib\x64** directory to the **Build** folder.
  + The project is a x64 project (64-bit application).
<div align="left">
<img src="sdl-font-dll.jpg" alt="DLL" width="70%"/>
<img src="sdl-font-dll-build.jpg" alt="DLL" width="70%"/>
</div>

> If **SDL3_TT2** was properly added, building and running the project will result in no errors.
{: .prompt-info }

### Add Fonts to the Build ###
+ Find fonts to use in the program
  + This site has free fonts that can be downloaded: [https://www.1001freefonts.com/](https://www.1001freefonts.com/)
  + Place the .ttf font into the **Build** folder
<div align="left">
<img src="sdl-font-build.jpg" alt="Build" width="70%"/>
</div>

### Update Code for SDL TTF Fonts ###

#### Add TTF Fonts to the Renderer ####
+ In the Renderer.h header, include the **SDL_TTF** header
```
#include <SDL3_ttf/SDL_ttf.h>
```

> In the `Renderer` class, the private data `m_renderer` needs to be accessible to the `Text` class. A `friend class` declaration allows that class to access the private members.
{: .prompt-info }

+ Add the `Text` class as a friend of the `Renderer` class. This was put in the private section of the `Renderer` class in the `Renderer.h`.
```
friend class Text;
```

+ Add the code to initialize and quit **SDL_TTF** in the **Initialize()** and **Shutdown()** method.

```
bool Renderer::Initialize() {
	if (!SDL_Init(SDL_INIT_VIDEO)) {
		std::cerr << "SDL_Init Error: " << SDL_GetError() << std::endl;
		return false;
	}
	
	if (!TTF_Init()) {
		std::cerr << "TTF_Init Error: " << SDL_GetError() << std::endl;
		return false;
	}
	
	return true;
}
```
```
void Renderer::Shutdown() {
	TTF_Quit();
	SDL_DestroyRenderer(m_renderer);
	SDL_DestroyWindow(m_window);
	SDL_Quit();
}
```

#### Create Font Class ####

+ Create a **Font.h** file in the **Source/Engine/Renderer** folder.
+ Make the `Font` class a part of the engine **namespace**.
+ Include the necessary header files.
+ **TTF_Font*** could be a forward declaration as it is a pointer.
  + If using a forward declaraion, place the forward declaration at the top outside of the namespace. The **TTF_Font** is a struct.

```
struct TTF_Font;
```

> In the `Font` class, the private data `m_ttfFont` needs to be accessible to the `Text` class. A `friend class` declaration allows that class to access the private members.
{: .prompt-info }

```
class Font {
public:
	Font() = default;
	~Font();

	bool Load(const std::string& name, float fontSize);

private:
	friend class Text;

	TTF_Font* m_ttfFont{ nullptr };
};
```

+ Create a **Font.cpp** file in the **Source/Engine/Renderer** folder.

```
Font::~Font() {
	if (m_ttfFont != nullptr) {
		TTF_CloseFont(m_ttfFont);
	}
}

bool Font::Load(const std::string& name, float fontSize) {
	m_ttfFont = TTF_OpenFont(name.c_str(), fontSize);
	if (m_ttfFont == nullptr) {
		std::cerr << "Could not load font: " << name << std::endl;
		return false;
	}

	return true;
}
```
> Add comments to the methods in the .cpp by typing `///` above the method. The AI should fill in comments.
{: .prompt-info }

<div align="left">
<img src="sdl-font-classes.jpg" alt="Build" width="70%"/>
</div>

#### Create Text Class ####

+ Create a **Text.h** file in the **Source/Engine/Renderer** folder.
+ Include the necessary header files.
+ Add it as part of the engine **namespace**.
+ The classes that are references or pointers can be forward declarations.
  + If using a forward declaraion, place the forward declaration of SDL classes/structs at the top outside of the namespace. The **SDL_Texture** is a struct.

```
struct SDL_Texture;
``` 

> In the `Renderer` class, the private data `m_renderer` needs to be accessible to the `Text` class. A `friend class` declaration allows that class to access the private members. Add `friend class Text` in the Renderer class declaration.
{: .prompt-info }

```
class Text {
public:
	Text() = default;
	Text(Font* font) : m_font{ font } {}
	~Text();

	bool Create(Renderer& renderer, const std::string& text, const vec3& color);
	void Draw(Renderer& renderer, int x, int y);

private:
	Font* m_font{ nullptr };
	SDL_Texture* m_texture{ nullptr };
};
```

+ Create a **Text.cpp** file in the **Source/Engine/Renderer** folder.


```
Text::~Text() {
	if (m_texture != nullptr) {
		SDL_DestroyTexture(m_texture);
	}
}

bool Text::Create(Renderer& renderer, const std::string& text, const vec3& color) {
	// create a surface using the font, text string and color
	SDL_Color c{ (uint8_t)(color.r * 255), (uint8_t)(color.g * 255), (uint8_t)(color.b * 255), 255 };
	SDL_Surface* surface = TTF_RenderText_Solid(m_font->m_ttfFont, text.c_str(), text.size(), c);
	if (surface == nullptr) {
		std::cerr << "Could not create surface.\n";
		return false;
	}

	// create a texture from the surface, only textures can render to the renderer
	m_texture = SDL_CreateTextureFromSurface(renderer.m_renderer, surface);
	if (m_texture == nullptr) {
		SDL_DestroySurface(surface);
		std::cerr << "Could not create texture" << SDL_GetError() << std::endl;
		return false;
	}

	// free the surface, no longer needed after creating the texture
	SDL_DestroySurface(surface);

	return true;
}

void Text::Draw(Renderer& renderer, float x, float y) {
	// get the texture width and height
	float width, height;
	bool success = SDL_GetTextureSize(m_texture, &width, &height);
	assert(success);

	// set the texture into the renderer at rect 
	SDL_FRect rect{ x, y, width, height };
	success = SDL_RenderTexture(renderer.m_renderer, m_texture, NULL, &rect);
	assert(success);
}
```

> Add comments to the methods in the .cpp by typing `///` above the method. The AI should fill in comments.
{: .prompt-info }

### Create Text in Main ###

> Make sure to include the necessary directories and add the namespace to the engine classes when using them in main. For example, _namespace::font_.
{: .prompt-warning }

+ In main() create and load a font. This should be after the renderer is created and before the main loop.
  + **Load(True Type Font Filename, Font Size)**

```
Font* font = new Font();
font->Load("arcadeclassic.ttf", 20);
```

+ After creating the font, create the text passing the font in the constructor. This should be after the font was created and loaded.
  + **Text(Font)**
  + **Create(Renderer, Text String, vec3)**

```
Text* text = new Text(font);
text->Create(g_engine.GetRenderer(), "Hello World", vec3{ 1, 1, 1, 1 });
```

+ In the render section of the main loop, draw the text
  + **Draw(Renderer, X Position, Y Position)**

```
text->Draw(g_engine.GetRenderer(), 40.0f, 40.0f);
```

> Build and run the program and the text will show up on the screen at the set location. Multiple text objects can be created to draw text for player lives and game score.
{: .prompt-info }

<div align="left">
<img src="sdl-font-hello.jpg" alt="Lib" width="70%"/>
</div>