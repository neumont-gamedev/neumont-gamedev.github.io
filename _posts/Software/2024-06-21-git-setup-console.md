---
title: Git Setup (Console)
date: 2024-06-21 12:45:00 +/-TTTT
categories: [Git]
tags: [git]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/git
---
<div align="center">
    <img src="git-logo.svg" alt="Logo" />
</div>
_This instructional guide will teach you how to create a Git repository and host it remotely on GitHub. You will learn how to make the initial commit and push your changes to the repository. This guide will demonstrate how to use Git through the command line prompt._

#### About Git ####
**Git** is a distributed version control system designed to track changes in source code during software development. It allows multiple developers to collaborate on a project simultaneously, managing changes efficiently. **Git** works by creating snapshots of a project's files at different points in time, called **commits**. These **commits** form a history of changes, enabling users to track progress, **revert** to previous states, and **merge** different branches of development. **Git** operates locally on a user's machine, allowing for offline work, and facilitates collaboration through remote **repositories** hosted on platforms like **GitHub**, **GitLab**, or **Bitbucket**. Developers can **pull** changes from and **push** changes to these remote **repositories**, enabling seamless collaboration and version control across distributed teams.

#### Install Git ####
**Git** may already be installed on your computer. Open a command prompt and type ```git -v```. If **Git** is installed, the current version will be displayed, **Git** is ready and the install step can be skipped.
<div align="left">
<img src="git-version.jpg" alt="Version" width="50%"/>
</div>

+ Download and install the latest version of Git. It is recommended to install the _64-bit Git for Windows Setup_.
  + [https://git-scm.com/](https://git-scm.com/)
<div align="left">
<img src="git-download.jpg" alt="Download Git Windows" width="35%"/>
</div>

Try and run the ```git -v``` command in a command prompty to ensure it was installed correctly.