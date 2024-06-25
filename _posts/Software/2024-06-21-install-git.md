---
title: Install Git (Console)
date: 2024-06-21 12:45:00 +/-TTTT
categories: [Software]
tags: [software,git]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/software
---
<div align="center">
    <img src="git-logo.svg" alt="Logo" />
</div>
_This instructional guide will teach you how to create a Git repository and host it remotely on GitHub. You will learn how to make the initial commit and push your changes to the repository. This guide will demonstrate how to use Git through the command line prompt._

### About Git ###
**Git** is a distributed version control system designed to track changes in source code during software development. It allows multiple developers to collaborate on a project simultaneously, managing changes efficiently. **Git** works by creating snapshots of a project's files at different points in time, called **commits**. These **commits** form a history of changes, enabling users to track progress, **revert** to previous states, and **merge** different branches of development. **Git** operates locally on a user's machine, allowing for offline work, and facilitates collaboration through remote **repositories** hosted on platforms like **GitHub**, **GitLab**, or **Bitbucket**. Developers can **pull** changes from and **push** changes to these remote **repositories**, enabling seamless collaboration and version control across distributed teams.

### Install Git ###
**Git** may already be installed on your computer. Open a command prompt and type ```git -v```. If **Git** is installed, the current version will be displayed, **Git** is ready and the install step can be skipped.
<div align="left">
<img src="git-version.jpg" alt="Version" width="50%"/>
</div>

> There are mutliple ways to open a command prompt.
> <br>
> + _Press (Windows+R) to bring up the run window and then type ```cmd```._
><div align="left">
><img src="git-run-cmd.jpg" alt="Run" width="40%"/>
></div>
> + _Type ```cmd``` in the Windows Explorer bar to open in the current directory._
><div align="left">
><img src="git-explorer-cmd.jpg" alt="Explorer" width="70%"/>
></div> 
{: .prompt-tip }

+ Download and install the latest version of Git. It is recommended to install the _64-bit Git for Windows Setup_.
  + [https://git-scm.com/](https://git-scm.com/)
<div align="left">
<img src="git-download.jpg" alt="Download Git Windows" width="35%"/>
</div>

> Run the ```git -v``` command in a command prompt to ensure it was installed correctly.
{: .prompt-warning }

### Create Repository ###
+ Open a command prompt in the directory that you want to place under source conrol. _(See instructions above)_  
+ Type ```git init``` to initialize a Git repository in the directory
<div align="left">
<img src="git-init.jpg" alt="Git Init" width="80%"/>
</div>

_A .gitignore file serves to exclude specific files and directories from being tracked in Git. It allows the exclusion of files that are temporary or only required during project builds, ensuring they are not included in the repository's history._

+	Download the VisualStudio.ignore file
  + [https://github.com/github/gitignore](https://github.com/github/gitignore)
+	Click the VisualStudio.ignore
<div align="left">
<img src="git-vs-ignore.jpg" alt="Git VS Ignore" width="80%"/>
</div>
+ Click the download icon to download the file
<div align="left">
<img src="git-vs-ignore-download.jpg" alt="Git VS Ignore Download" width="80%"/>
</div>
+ Copy the downloaded file to the project directory
  + Remove the "VisualStudio" part of the filename
<div align="left">
<img src="git-ignore.jpg" alt="Git Ignore" width="100%"/>
</div>

+	Add the files to Git using the ```git add . ```command
<div align="left">
<img src="git-add.jpg" alt="Git Add" width="80%"/>
</div>

> Individual files can be added using ```git add <filename>``` 
> <br>
> All files can be added using ```get add .```
{: .prompt-tip }

+	There will be warnings about the line ending of the files
  +	Different operating systems using different types of line endings
    +	Windows uses CRLF (Carriage Return Line Feed) and Unix uses LF (Line Feed)
  +	To disable the warnings, type the following command
```git config core.autocrlf true```
<div align="left">
<img src="git-line-config.jpg" alt="Git Line Config" width="80%"/>
</div>

+	Commit the changes using the git command ```commit -m <message>”```
  +	For the first commit, it will look like ```git commit -m “Initial commit”```
<div align="left">
<img src="git-commit.jpg" alt="Git Commit" width="80%"/>
</div>

### Create Remote Repository ###
A **Git** remote repository is hosted on a server, allowing developers to store, share, and collaborate on code. It acts as a central hub where contributors can push local changes and pull updates regardless of their location. Popular platforms for hosting include **GitHub**, **GitLab**, and **Bitbucket**.

_The following steps assumes that you have a GitHub page already setup. If you do not have a GitHub account, proceed to the GitHub signup page and create an account: [https://github.com/](https://github.com/)_

+ Open your GitHub repositories page
<div align="left">
<img src="git-github.jpg" alt="GitHub" width="60%"/>
</div>
+ Click **Repositories**
+ Click **New** to create a new repository.
<div align="left">
<img src="git-new.jpg" alt="GitHub New" width="60%"/>
</div>
+	Type the name of the repository
<div align="left">
<img src="git-new-name.jpg" alt="GitHub New Name" width="60%"/>
</div>

+	Copy the **URL** for the new repository.
<div align="left">
<img src="git-url.jpg" alt="GitHub URL" width="60%"/>
</div>

+	To upload the Git repository to the remote repository (GitHub), use the command	```git remote add origin <url>```
  +	Example: ```git remote add origin https://github.com/neumont-gamedev/Example```
<div align="left">
<img src="git-remote-add.jpg" alt="GitHub Remote Add" width="80%"/>
</div> 

+	To push the changes to the remote repository (GitHub), use the command ```git push -u origin master```
<div align="left">
<img src="git-push.jpg" alt="GitHub Push" width="80%"/>
</div> 
