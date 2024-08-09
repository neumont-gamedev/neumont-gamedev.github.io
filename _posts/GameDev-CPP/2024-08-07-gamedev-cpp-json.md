---
title: C++ JSON
date: 2024-08-07 10:00:00 +/-TTTT
categories: [GameDev,C++]
tags: [gamedev,c++]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/gamedev/cpp/json
---

<div align="left">
<img src="json-logo.svg.png" alt="Logo" width="25%"/>
</div>

_This guide will provide step-by-step instructions on how to add JSON to the Visual Studio C++ project._

In computing, **serialization** is the process of translating a data structure or object state 
into a format that can be stored or transmitted and reconstructed later. 
The reverse process is called **deserialization**. The game engine will use JSON to deserialize file(s) that define game objects in the game level.

### About JSON ###
**JSON** (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. **JSON** is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.

### Download JSON ###

+ Download the code for **RapidJSON** [https://github.com/Tencent/rapidjson/](https://github.com/Tencent/rapidjson/)  
  + Click on the **<> Code** button and select **Download ZIP** 
<div align="left">
<img src="json-github-download.jpg" alt="Download" width="65%"/>
</div>

+ Copy the .zip into the **ThirdParty** folder
+ Extract the ```rapidjson-master.zip``` file
+ Rename the extracted folder "rapidjson"
<div align="left">
<img src="json-zip.jpg" alt="Zip" width="65%"/>
</div>

+ Delete the ```rapidjson-master.zip``` file, it is not needed

### Add JSON to the Solution Project(s) ###
> If the **Solution** contains multiple **Projects**, the following steps will need to be done for each project. This is because each project needs the path to the JSON includes.
> <div align="left">
> <img src="json-projects.jpg" alt="Projects" width="75%"/>
> </div>
{: .prompt-warning }

> In the **Project Properties**, make sure that the **Configuration** is set to **All Configurations** and **Platform** is set to **All Platforms**.
> <div align="left">
> <img src="json-configuration.jpg" alt="Configurations" width="75%"/>
> </div>
{: .prompt-warning }

 
+ Add the directory of the FMOD include folder to the **Additional Include Directories**.
  + **Additional Include Directories** is located in **C/C++>General**.
  + Add ```$(SolutionDir)ThirdParty\rapidjson\include```

```
$(SolutionDir)ThirdParty\rapidjson\include
```
<div align="left">
<img src="json-include.jpg" alt="Include" width="75%"/>
</div>

### Create JSON File ###
+ In the **Build/Assets** folder create a text file called ```json.txt```
<div align="left">
<img src="json-file.jpg" alt="File" width="65%"/>
</div>
+ Open the file and add **JSON** data
```
{
	"name": "Raymond",
	"age": 44,
	"speed": 18.5,
	"isAwake": true,
	"position": [10, 20],
	"color": [1, 0, 0, 1]
}
```

+ The data is in a key, value format 
  + “key”: value
+ Using the key, the value can be retrieved

> _It is common to have the JSON file not correctly formatted. Use this page to verify your JSON file:_
> [https://jsonformatter.curiousconcept.com/](https://jsonformatter.curiousconcept.com/)
{: .prompt-tip }

+ Copy the contents of the **JSON** file and paste it into the page
+ Click **Process**
+ It will notify you of any errors if they exist
<div align="left">
<img src="json-formatter.jpg" alt="Formatter" width="65%"/>
</div>

### Create JSON Functions ###

+ Create a **Json.h** and **Json.cpp** in the **Core** filter, make sure the file is in the ```source/core``` folder
<div align="left">
<img src="json-files.jpg" alt="Json" width="75%"/>
</div>

#### Create JSON header (.h) ####
+ In the **Json.h** file, add code for the function declarations to load and read the **JSON** file
  + The functions are placed in a namespace to keep the function names in their own space

```
#include <string>
#include<rapidjson/document.h>

namespace Json
{
	bool Load(const std::string& filename, rapidjson::Document& document);
	bool Read(const rapidjson::Value& value, const std::string& name, int& data);
}
```

#### Create JSON source file (.cpp) ####
+ In the **Json.cpp** file, add code for the function definitions to load and read the **JSON** file

```
#include "Json.h"
#include "EFile.h"

#include <rapidjson/istreamwrapper.h>
#include <iostream>

namespace Json
{
    bool Load(const std::string& filename, rapidjson::Document& document)
    {
        // read the file into a string
        std::string buffer;
        if (!File::ReadFile(filename, buffer))
        {
            return false;
        }

        // convert the string into a json stream
        std::stringstream stream(buffer);
        rapidjson::IStreamWrapper istream(stream);

        // set the json document from the stream
        document.ParseStream(istream);
        // check if the parse was successful
        if (!document.IsObject())
        {
            std::cerr << "Could not parse Json: " << filename << std::endl;
            return false;
        }

        return true;
    }

    bool Read(const rapidjson::Value& value, const std::string& name, int& data)
    {
        // check if the value has the "<name>" and the correct data type
        if (!value.HasMember(name.c_str()) || !value[name.c_str()].IsInt())
        {
            std::cerr << "Could not read Json value: " << name << std::endl;
            return false;
        }

        // get the data
        data = value[name.c_str()].GetInt();

        return true;
    }
}
```

+ Include the **Json.h## in the Engine.h
  + Keep the include with the other Core includes

```
#include "Core/Json.h"
```

### Load and Read JSON in Main() ###
+ In the Main.cpp main() function, add the code to read the **JSON** data 

```
// !! this code is not neccessary, it just shows the contents of the file !!
std::string buffer;
File::ReadFile("json.txt", buffer);
// show the contents of the json file
std::cout << buffer << std::endl;

// create json document from the json file contents
rapidjson::Document document;
Json::Load("json.txt", document);

// read the name data from the json
std::string name;
Json::Read(document, "name", name);
// show the name data
std::cout << name << std::endl;
```

+ After running the program, the console will display the contents of the **JSON** file and the name data
<div align="left">
<img src="json-output.jpg" alt="Output" width="75%"/>
</div>

### Add Addition JSON Functions ###
_Add additional functions to load different data types from the **JSON**_

+ In the Json.h file, add the following functions
  + Include **Vector2.h** and **Color.h**
  + Add new functions to load **float**, **bool**, **std::string**, **Vector2**, and **Color**
```
#include "Math/Vector2.h"
#include "Math/Color.h"

bool Read(const rapidjson::Value& value, const std::string& name, float& data);
bool Read(const rapidjson::Value& value, const std::string& name, bool& data);
bool Read(const rapidjson::Value& value, const std::string& name, std::string& data);
bool Read(const rapidjson::Value& value, const std::string& name, Vector2& data);
bool Read(const rapidjson::Value& value, const std::string& name, Color& data);
```

+ Create the definitions for the functions in Json.cpp
+ The code to get the data for each data type is similar to the int Read()
  + Change the functions for the data type in Is**DataType**() and Get**DataType**() function, here is an example for the bool data
  + Do this for the **bool**, **float**, and **std::string** Read() functions

```
bool Read(const rapidjson::Value& value, const std::string& name, bool& data)
{
    // check if the value has the "<name>" and the correct data type
    if (!value.HasMember(name.c_str()) || !value[name.c_str()].IsBool())
    {
        std::cerr << "Could not read Json value: " << name << std::endl;
        return false;
    }

    // get the data
    data = value[name.c_str()].GetBool();

    return true;
}
```

+ The **Vector2** and **Color** have multiple values that need to be read
  + **JSON** treats these as arrays and need to be read in as an array
+ Here is an example of reading in the **Vector2**

```
bool Read(const rapidjson::Value& value, const std::string& name, Vector2& data)
{
    // check if the value has the "<name>" and is an array with 2 elements
    if (!value.HasMember(name.c_str()) || !value[name.c_str()].IsArray() || value[name.c_str()].Size() != 2)
    {
        std::cerr << "Could not read Json value: " << name << std::endl;
        return false;
    }

    // get json array object
    auto& array = value[name.c_str()];
    // get array values
    for (rapidjson::SizeType i = 0; i < array.Size(); i++)
    {
        if (!array[i].IsNumber())
        {
            std::cerr << "Could not read Json value: " << name << std::endl;
            return false;
        }

        // get the data
        data[i] = array[i].GetFloat();
    }

    return true;
}
```

+ Using the **Vector2** as an example, complete the **Color** Read()
  + The color has 4 elements
    + Make sure when checking the array size, you check for 4 elements

### Read Data Types in Main() ###

+ Update the code in main() to read and display all the data types

```
// read the data from the json
std::string name;
int age;
float speed;
bool isAwake;
Vector2 position;
Color color;

Json::Read(document, "name", name);
Json::Read(document, "age", age);
Json::Read(document, "speed", speed);
Json::Read(document, "isAwake", isAwake);
Json::Read(document, "position", position);
Json::Read(document, "color", color);
// show the data
std::cout << name << " " << age << " " << speed << " " << isAwake << std::endl;
std::cout << position.x << " " << position.y << std::endl;
std::cout << color.r << " " << color.g << " " << color.b << " " << color.a << std::endl;
```
+ The output should look like the image below
<div align="left">
<img src="json-output-all.jpg" alt="Output All" width="75%"/>
</div>

### Create JSON Read Macro ###

_To make reading data in easier, a **macro** can be created to simplify the code. A **macro** in C++ is a preprocessor directive that defines a code fragment or value to be substituted and expanded before the actual compilation process begins._

+ In the Json.h file, add the following **macro**
  + The **#** in a **macro** converts the data parameter to a string by putting quotes around the name

```
#define READ_DATA(value, data) Json::Read(value, #data, data)
```

+ In main() change the Read() function to the **macro**
  + For the **macro** to work, the key in the **JSON** file must match the variable name in the code

_Before_
```
Json::Read(document, "name", name);
```
_After_
```
READ_DATA(document, name);
```

+ In main() change all the read functions to use the **macro**

```
READ_DATA(document, name);
READ_DATA(document, age);
READ_DATA(document, speed);
READ_DATA(document, isAwake);
READ_DATA(document, position);
READ_DATA(document, color);
```