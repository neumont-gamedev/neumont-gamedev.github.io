---
title: Install Visual Studio
date: 2024-06-23 12:45:00 +/-TTTT
categories: [Software]
tags: [software,visualstudio]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/software
---
<div align="center">
    <img src="software-visualstudio.png" alt="Logo" width="60%" />
</div>
_This guide will show you how to install the latest version of Visual Studio using the Neumont Software website._

### About Visual Studio ###
**Visual Studio** is an IDE developed by Microsoft to create a variety of applications using different language and SDK.
An IDE, or Integrated Development Environment, enables programmers to consolidate the different aspects of writing a computer program. IDEs increase programmer productivity by combining common activities of writing software into a single application: editing source code, building executables, and debugging.

### Install Visual Studio ###
+ Go to [https://my.neumont.edu](https://my.neumont.edu)
  + Login using your school credentials
+ Click on **Software**
<div align="left">
<img src="vs-software.jpg" alt="Software" width="60%"/>
</div>
+ Click on **Azure Education Hub**
<div align="left">
<img src="vs-azure.jpg" alt="Azure" width="50%"/>
</div>
+ Sign-In to the Azure Account
  + This will be your student email and password
<div align="left">
<img src="vs-azure-signin.jpg" alt="Azure Signin" width="100%"/>
</div>

<div align="left">
<img src="vs-authenticator.webp" alt="Authenticator" width="20%"/>
</div>
> Verification through an authenticator app may be required.
{: .prompt-warning }
+ Select **Visual Studio Enterprise Edition**
<div align="left">
<img src="vs-azure-software.jpg" alt="Azure Software" width="50%"/>
</div>
<div align="left">
<img src="vs-azure-software-select.jpg" alt="Azure Software Select" width="100%"/>
</div>
+ Download **Visual Studio Enterprise Edition**
<div align="left">
<img src="vs-azure-download.jpg" alt="Download Visual Studio" width="40%"/>
</div>
+ The **Visual Studion Enterprise Edition** will require a **key**
  + Click **View Key** and save the key
  + The **key** will be used to register Visual Studio once installed
<div align="left">
<img src="vs-key.jpg" alt="Visual Studio Key" width="50%"/>
</div>
+ Install Visual Studio from the downloaded .exe
<div align="left">
<img src="vs-exe.jpg" alt="Visual Studio Exe" width="80%"/>
</div>
<br>
> It may ask if you want to add any components, select **Desktop development with C++**.
{: .prompt-info }
<div align="left">
<img src="vs-components.jpg" alt="Visual Studio Components" width="80%"/>
</div>

### Update Visual Studio ###
> If Visual Studio is already installed, you may need to update it.
{: .prompt-info }
+ Check for the **Notification** icon at the bottom right of Visual Studio  
<div align="left">
<img src="vs-notification.jpg" alt="Visual Studio Notification" width="100%"/>
</div>
+ If shown, click to show notifications and update Visual Studio if needed
<div align="left">
<img src="vs-update.jpg" alt="Visual Studio Update" width="100%"/>
</div>

### Create Visual Studio C++ Application ###

+	Run Visual Studio from the Start Menu
  + Type "Visual Studio" in the Start Bar
<div align="left">
<img src="vs-start.jpg" alt="Visual Studio Start" width="60%"/>
</div>

> Right-click on it and select **Pin to taskbar** for quick access.
{: .prompt-tip }
<div align="left">
<img src="vs-pin.jpg" alt="Visual Studio Pin" width="100%"/>
</div>

+ Select **Create a new project**
<div align="left">
<img src="vs-create-project.jpg" alt="Visual Studio Create Project" width="70%"/>
</div>
  
+ Create a new **Console App** project
  + Select **C++** for **Languages**
  + Select **Console** for **Project Types**
  + Select **Console App**
  + Press **Next**
<div align="left">
<img src="vs-console.jpg" alt="Visual Studio Console" width="80%"/>
</div>

> For applications with multiple projects, place the **Project** in a different folder than the **Solution**. <br>
> Uncheck the **Place solution and project in the same directory** checkbox
{: .prompt-tip }

+ Configure your new project
  + Set the **Project name** name to "HelloWorld" (or whatever name desired)
  + Set the **Location** for the project
  + Press **Create**
<div align="left">
<img src="vs-configure-project.jpg" alt="Visual Studio Configure" width="80%"/>
</div>

+ The project will be created with a "HelloWorld.cpp" source file
<div align="left">
<img src="vs-hello-world-cpp.jpg" alt="Visual Studio Hello World" width="80%"/>
</div>

+ Press F5 to run the program
<div align="left">
<img src="vs-hello-world.jpg" alt="Visual Studio Hello World" width="80%"/>
</div>
