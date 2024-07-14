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
	// initialize TTF SDL
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

### Create Font Class ###

+ Create Font.h file

```
class Font
{
public:
	Font() = default;
	~Font();

	bool Load(const std::string& name, int fontSize);

private:
	_TTF_Font* m_ttfFont{ nullptr };
};
```

+ Create Font.cpp file

```
Font::~Font()
{
	if (m_ttfFont != nullptr)
	{
		TTF_CloseFont(m_ttfFont);
	}
}

bool Font::Load(const std::string& name, int fontSize)
{
	m_ttfFont = TTF_OpenFont(name.c_str(), fontSize);
	if (m_ttfFont == nullptr)
	{
		std::cerr << "Could not load font: " << name << std::endl;
		return false;
	}

	return true;
}
```

### Create Text Class ###

+ Create Text.h file

```
class Text
{
public:
	Text() = default;
	Text(Font* font) : m_font{ font } {}
	~Text();

	bool Create(Renderer& renderer, const std::string& text, const Color& color);
	void Draw(Renderer& renderer, int x, int y);

private:
	Font* m_font{ nullptr };
	SDL_Texture* m_texture{ nullptr };
};
```

+ Create Text.cpp file

```
Text::~Text()
{
	if (m_texture != nullptr)
	{
		SDL_DestroyTexture(m_texture);
	}
}

bool Text::Create(Renderer& renderer, const std::string& text, const Color& color)
{
	// create a surface using the font, text string and color
	SDL_Color c{ Color::ToInt(color.r), Color::ToInt(color.g), Color::ToInt(color.b), Color::ToInt(color.a) };
	SDL_Surface* surface = TTF_RenderText_Solid(m_font->m_ttfFont, text.c_str(), c);
	if (surface == nullptr)
	{
		std::cerr << "Could not create surface.\n";
		return false;
	}

	// create a texture from the surface, only textures can render to the renderer
	m_texture = SDL_CreateTextureFromSurface(renderer.m_renderer, surface);
	if (surface == nullptr)
	{
		SDL_FreeSurface(surface);
		std::cerr << "Could not create texture" << SDL_GetError() << std::endl;
		return false;
	}


	// free the surface, no longer needed after creating the texture
	SDL_FreeSurface(surface);

	return true;
}

void Text::Draw(Renderer& renderer, int x, int y)
{
	assert(m_texture);

	// query the texture for the texture width and height
	int width, height;
	SDL_QueryTexture(m_texture, nullptr, nullptr, &width, &height);

	// copy the texture onto the renderer
	SDL_Rect rect{ x, y, width, height };
	SDL_RenderCopy(renderer.m_renderer, m_texture, NULL, &rect);
}

```

### Create Text in Main ###

+ In main() create and load a font
  + **Load(True Type Font Filename, Font Size)**

```
Font* font = new Font();
font->Load("arcadeclassic.ttf", 20);
```

+ After creating the font, create the text passing the font in the constructor
  + **Text(Font)**
  + **Create(Renderer, Text String, Color)**

```
Text* text = new Text(font);
text->Create(g_engine.GetRenderer(), "Hello World", Color{ 1, 1, 1, 1 });
```

+ In the render section of the main loop, draw the text
  + **Draw(Renderer, X Position, Y Position)**

```
text->Draw(g_engine.GetRenderer(), 40, 40);
```

<div align="left">
<img src="sdl-font-hello.jpg" alt="Lib" width="70%"/>
</div>