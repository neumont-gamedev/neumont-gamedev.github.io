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
  + Click on the **<> Code** button and select **Download ZIP**.
<div align="left">
<img src="json-github-download.jpg" alt="Download" width="65%"/>
</div>

+ Copy the .zip into the **ThirdParty** folder.
+ Extract the ```rapidjson-master.zip``` file.
+ Rename the extracted folder "rapidjson".
<div align="left">
<img src="json-zip.jpg" alt="Zip" width="65%"/>
</div>

+ Delete the ```rapidjson-master.zip``` file, it is not needed.

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
  + Add ```$(SolutionDir)Source\ThirdParty\rapidjson\include```

```
$(SolutionDir)Source\ThirdParty\rapidjson\include
```
<div align="left">
<img src="json-include.jpg" alt="Include" width="75%"/>
</div>

### Create JSON File ###
+ In the **Build/Assets** folder create a text file called ```json.txt```.
<div align="left">
<img src="json-file.jpg" alt="File" width="65%"/>
</div>
+ Open the file and add **JSON** data.
```
{
	"name": "Raymond",
	"age": 44,
	"speed": 18.5,
	"isAwake": true,
	"position": [10, 20],
	"color": [1, 0, 0]
}
```

+ The data is in a key, value format .
  + “key”: value
+ Using the key, the value can be retrieved.

> _It is common to have the JSON file not correctly formatted. Use this page to verify your JSON file:_
> [https://jsonformatter.curiousconcept.com/](https://jsonformatter.curiousconcept.com/)
{: .prompt-tip }

+ Copy the contents of the **JSON** file and paste it into the page.
+ Click **Process**.
+ It will notify of  any existing errors.
<div align="left">
<img src="json-formatter.jpg" alt="Formatter" width="65%"/>
</div>

> _Many errors come from JSON files that are not properly formatted. Use the JSON formatter to validate the JSON files. The JSON formatter allows you to copy from the processed JSON text. These can be pasted back into the JSON file._
{: .prompt-warning }

### Create JSON Functions ###

+ Create a **Json.h** and **Json.cpp** in the **Core** filter in the **Engine** project, make sure the file is in the ```Source/Engine/Core``` folder.
<div align="left">
<img src="json-files.jpg" alt="Json" width="85%"/>
</div>

#### Create JSON header (.h) ####
+ In the **Json.h** file, add code for the function declarations to load and read the **JSON** file
  + The functions are placed in a namespace to keep the function names in their own space

```
#include <rapidjson/document.h>
#include <string>

namespace <engine namespace>::json
{
	bool Load(const std::string& filename, rapidjson::Document& document);

	bool Read(const rapidjson::Value& value, const std::string& name, int& data);
}
```

#### Create JSON source file (.cpp) ####
+ In the **Json.cpp** file, add code for the function definitions to load and read the **JSON** file.

```
#include "Json.h"
#include "File.h"
#include "Logger.h"

#include <rapidjson/istreamwrapper.h>
#include <iostream>

namespace <engine namespace>::json
{
    bool Load(const std::string& filename, rapidjson::Document& document) {
        // read the file into a string
        std::string buffer;
        if (!file::ReadTextFile(filename, buffer)) {
            Logger::Error("Could not read file: {}.", filename);
            return false;
        }

        // convert the string into a json stream
        std::stringstream stream(buffer);
        rapidjson::IStreamWrapper istream(stream);

        // set the json document from the stream
        document.ParseStream(istream);
        // check if the parse was successful
        if (!document.IsObject()) {
            Logger::Error("Could not parse Json: {}.", filename);
            return false;
        }

        return true;
    }

    bool Read(const rapidjson::Value& value, const std::string& name, int& data) {
        // check if the value has the "<name>" and the correct data type
        if (!value.HasMember(name.c_str()) || !value[name.c_str()].IsInt()) {
            Logger::Error("Could not read Json value (int): {}.", name);
            return false;
        }

        // get the data
        data = value[name.c_str()].GetInt();

        return true;
    }
}
```

+ Include the **Json.h** in the **EngineMinimal.h**.
  + Keep the include with the other Core includes.

```
#include "Core/Json.h"
```

### Load and Read JSON in Main() ###
+ In the Main.cpp **main()** function, add the code to read the **JSON** data.
  + Place this inside **main()** and towards the top of the function, after setting the **Assets** directory. 

```
// load the json data from a file
std::string buffer;
<engine namespace>::file::ReadTextFile("json.txt", buffer);
// show the contents of the json file (debug)
std::cout << buffer << std::endl;

// create json document from the json file contents
rapidjson::Document document;
<engine namespace>::json::Load("json.txt", document);

// read the age data from the json
int age;
<engine namespace>::json::Read(document, "age", age);
// show the age data
std::cout << age << std::endl;
```

+ After running the program, the console will display the contents of the **JSON** file and the **age** data.
<div align="left">
<img src="json-output.jpg" alt="Output" width="75%"/>
</div>

### Add Addition JSON Functions ###
_Add additional functions to load different data types from the **JSON** file._

+ In the Json.h file, _add_ the following functions.  
  + Add new functions to load **float**, **bool**, **std::string**, **vec2**, and **vec3**
  + Include **Math/Vector2.h** and **Math/Vector3.h**

```
#include "Math/Vector2.h"
#include "Math/Vector3.h"

bool Read(const rapidjson::Value& value, const std::string& name, float& data);
bool Read(const rapidjson::Value& value, const std::string& name, bool& data);
bool Read(const rapidjson::Value& value, const std::string& name, std::string& data);
bool Read(const rapidjson::Value& value, const std::string& name, vec2& data);
bool Read(const rapidjson::Value& value, const std::string& name, vec3& data);
```

+ Create the definitions for the functions in Json.cpp.
+ The code to get the data for each data type is similar to the integer Read().
  + Change the functions for the data type in Is**DataType**() and Get**DataType**() function, here is an example for the bool data
  + Do this for the **bool**, **float**, and **std::string** Read() functions

```
bool Read(const rapidjson::Value& value, const std::string& name, bool& data) {
    // check if the value has the "<name>" and the correct data type
    if (!value.HasMember(name.c_str()) || !value[name.c_str()].IsBool()) {
        Logger::Error("Could not read Json value (bool): {}.", name);
        return false;
    }

    // get the data
    data = value[name.c_str()].GetBool();

    return true;
}
```

+ The **vec2** and **vec3** have multiple values that need to be read.
  + **JSON** treats these as arrays and need to be read in as an array
+ Here is an example of reading in the **vec2**.

```
bool Read(const rapidjson::Value& value, const std::string& name, vec2& data) {
    // check if the value has the "<name>" and is an array with 2 elements
    if (!value.HasMember(name.c_str()) || !value[name.c_str()].IsArray() || value[name.c_str()].Size() != 2) {
        Logger::Error("Could not read Json value (vec2): {}.", name);
        return false;
    }

    // get json array object
    auto& array = value[name.c_str()];
    // get array values
    for (rapidjson::SizeType i = 0; i < array.Size(); i++) {
        if (!array[i].IsNumber()) {
            Logger::Error("Could not read Json value: {}.", name);
            return false;
        }

        // get the data
        data[i] = array[i].GetFloat();
    }

    return true;
}
```

+ Using the **vec2** as an example, complete the **vec3** Read().
  + The vec3 has 3 elements.
    + Make sure when checking the array size to check for 3 elements.

### Read Data Types in Main() ###

+ Update the code in main() to read and display all the data types

```
// read/show the data from the json file
std::string name;
int age;
float speed;
bool isAwake;
<engine namespace>::vec2 position;
<engine namespace>::vec3 color;

// read the json data
<engine namespace>::json::Read(document, "name", name);
<engine namespace>::json::Read(document, "age", age);
<engine namespace>::json::Read(document, "speed", speed);
<engine namespace>::json::Read(document, "isAwake", isAwake);
<engine namespace>::json::Read(document, "position", position);
<engine namespace>::json::Read(document, "color", color);

// show the data
std::cout << name << " " << age << " " << speed << " " << isAwake << std::endl;
std::cout << position.x << " " << position.y << std::endl;
std::cout << color.r << " " << color.g << " " << color.b << " " << std::endl;
```

+ The output should look like the image below
<div align="left">
<img src="json-output-all.jpg" alt="Output All" width="75%"/>
</div>

### Create JSON Read Macro ###

_To make reading data in easier, a **macro** can be created to simplify the code. A **macro** in C++ is a preprocessor directive that defines a code fragment or value to be substituted and expanded before the actual compilation process begins._

+ In the Json.h file, add the following **macro**.
  + The **#** in a **macro** converts the data parameter to a string by putting quotes around the name.
  + Place the **macro** after the **#include** lines.

```
#define JSON_READ(value, data) <engine namespace>::json::Read(value, #data, data)
```

+ In **main()** change the **Read()** function to the **macro**.
  + For this **macro** to work, the key in the **JSON** file must match the variable name in the code.
  + Place this after the **#include** lines.

_Before_
```
<engine namespace>::json::Read(document, "name", name);
```
_After_
```
JSON_READ(document, name);
```

+ In **main()** change all the read functions to use the **macro**

```
JSON_READ(document, name);
JSON_READ(document, age);
JSON_READ(document, speed);
JSON_READ(document, isAwake);
JSON_READ(document, position);
JSON_READ(document, color);
```

+ **Build** and **Run** the program again to ensure it is working correctly. It should display as before.
<div align="left">
<img src="json-output-all.jpg" alt="Output All" width="75%"/>
</div>
