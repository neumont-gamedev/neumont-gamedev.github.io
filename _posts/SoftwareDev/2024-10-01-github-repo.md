---
title: GitHub Repository (Console)
date: 2024-10-01 08:45:00 +/-TTTT
categories: [SoftwareDev]
tags: [software,git]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/softwaredev/github
---
<div align="center">
    <img src="git-logo.svg" alt="Logo" />
</div>
_This guide will walk you through creating a Git repository and hosting it remotely on GitHub. You will learn how to make the initial commit and push your changes to the repository. The instructions will demonstrate how to use Git via the command line prompt._

### Create Repository ###
+ Open a command prompt in the directory that you want to place under source conrol.
+ Use the ```git init``` command to initialize a Git repository in the directory.
```
git init
```
<div align="left">
<img src="git-init.jpg" alt="Git Init" width="65%"/>
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
  + Remove the "VisualStudio" part of the filename so the filename is ```.gitignore```
<div align="left">
<img src="git-ignore.jpg" alt="Git Ignore" width="100%"/>
</div>

+	Add the files to Git using the ```git add .``` command 
```
git add .
```
<div align="left">
<img src="git-add.jpg" alt="Git Add" width="70%"/>
</div>
<br>
> Individual files can be added using ```git add <filename>``` 
> <br>
> All files can be added using ```get add .```
{: .prompt-tip }

+	There will be warnings about the line ending of the files
  +	Different operating systems using different types of line endings
    +	Windows uses CRLF (Carriage Return Line Feed) and Unix uses LF (Line Feed)
  +	To disable the warnings, use the ```git config core.autocrlf true``` command
```
git config core.autocrlf true
```
<div align="left">
<img src="git-line-config.jpg" alt="Git Line Config" width="70%"/>
</div>

+	Commit the changes using the git command ```commit -m <message>”```
  +	For the first commit, it will look like ```git commit -m “Initial commit”```
```
git commit -m “Initial commit”
```
<div align="left">
<img src="git-commit.jpg" alt="Git Commit" width="70%"/>
</div>

<div align="center">
    <img src="github-logo.jpg" alt="Logo" width="70%" />
</div>

### About GitHub ###
**GitHub** is a web-based platform used for version control and collaboration on software development projects, primarily using Git. It allows developers to track changes to their code, work on projects simultaneously, and manage different versions or branches of their work. **GitHub** also serves as a repository hosting service, enabling teams to store, share, and review code while maintaining a history of contributions.

_The following steps assumes that you have a GitHub page already setup. If you do not have a GitHub account, proceed to the GitHub signup page and create an account: [https://github.com/](https://github.com/)_

> The default branch name of your GitHub repository may be "master" or "main". Originally, the base branch was called "master" but has now been updated to "main". You can set the default branch name with the following steps. It's important to know what the default branch name when using it.
{: .prompt-info }

### Set Default Branch Name ###
+ Open you GitHub page
+ Navigate to the **Settings** at the top right.
<div align="left">
<img src="github-settings.jpg" alt="GitHub Settings" width="70%"/>
</div>

+ Select **Repositories**
<div align="left">
<img src="github-settings-repo.jpg" alt="GitHub Repo" width="70%"/>
</div>

+ Set the default branch name to "master" or "main"
  + This will be the default branch name for all repositories created
<div align="left">
<img src="github-settings-repo-default.jpg" alt="GitHub Repo" width="70%"/>
</div>

### Create Remote Repository ###
A **Git** remote repository is hosted on a server, allowing developers to store, share, and collaborate on code. It acts as a central hub where contributors can push local changes and pull updates regardless of their location. Popular platforms for hosting include **GitHub**, **GitLab**, and **Bitbucket**.

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
+ **Add a README file** (optional)
+ Click **Create repository**
<div align="left">
<img src="git-new-name.jpg" alt="GitHub New Name" width="60%"/>
</div>

+	Copy the HTTPS **URL** for the new repository.
<div align="left">
<img src="git-url.jpg" alt="GitHub URL" width="75%"/>
</div>

+	To upload the Git repository to the remote repository (GitHub), use the command	```git remote add origin <url>.git```
  + Use the copied HTTPS **URL** from the new GitHub repository for the url
  +	Example: ```git remote add origin https://github.com/neumont-gamedev/Example.git```
  
<div align="left">
<img src="git-remote-add.jpg" alt="GitHub Remote Add" width="100%"/>
</div> 

> Depending on what your remote branch is set to, the follow step will either be "master" or "main".
{: .prompt-warning }

+	To push the changes to the remote repository (GitHub), use the command ```git push -u origin main```
```
git push -u origin main
```
<div align="left">
<img src="git-push.jpg" alt="GitHub Push" width="150%"/>
</div> 
