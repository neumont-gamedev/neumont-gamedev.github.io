---
title: Git Reference (Console)
date: 2024-06-27 12:45:00 +/-TTTT
categories: [Software]
tags: [software,git]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/software
---
<div align="center">
    <img src="git-logo.svg" alt="Logo" />
</div>
_This guide includes commonly used terminology and commands in Git._

### About Git ###
**Git** is a distributed version control system designed to track changes in source code during software development. It allows multiple developers to collaborate on a project simultaneously, managing changes efficiently. **Git** works by creating snapshots of a project's files at different points in time, called **commits**. These **commits** form a history of changes, enabling users to track progress, **revert** to previous states, and **merge** different branches of development. **Git** operates locally on a user's machine, allowing for offline work, and facilitates collaboration through remote **repositories** hosted on platforms like **GitHub**, **GitLab**, or **Bitbucket**. Developers can **pull** changes from and **push** changes to these remote **repositories**, enabling seamless collaboration and version control across distributed teams.

### Terminology ###
**Repository (Repo)**: A directory where your Git projects are stored, including all versions of files and directories.

**Local Repository**: The version of the repository that is on your local machine.

**Remote Repository**: The version of the repository that is hosted on a remote server, such as GitHub, GitLab, or Bitbucket.

**Clone**: A copy of a remote repository downloaded to your local machine.

**Commit**: A snapshot of changes made to the files in the repository. Commits are used to record the history of changes.

**Branch**: A separate line of development within a repository. Branches allow you to work on different features or fixes simultaneously.

**Master/Main**: The default branch in most repositories, representing the main line of development.

**Checkout**: The process of switching between different branches or commits in your repository.

**Merge**: The process of integrating changes from one branch into another.

**Rebase**: A process of moving or combining a sequence of commits to a new base commit.

**Pull**: Fetching changes from a remote repository and merging them into your local repository.

**Push**: Sending your local commits to a remote repository.

**Fetch**: Downloading objects and references from a remote repository without merging them into your local repository.

**Stash**: A mechanism to temporarily save changes that are not yet ready to be committed, allowing you to work on something else.

**Conflict**: Occurs when changes in different branches or commits are incompatible and need to be resolved manually.

**HEAD**: A reference to the most recent commit on the current branch.

**Index (Staging Area)**: An intermediate area where changes are added before they are committed.

**Blame**: A command that shows the last modification of each line in a file, used to identify who made specific changes.

**Tag**: A reference to a specific point in the repository's history, often used for marking release versions.

**Fork**: A copy of a repository that allows you to freely experiment with changes without affecting the original project.

### Commands ###
```git init```
Initializes a new Git repository in the current directory.

```git clone [url]```
Creates a local copy of a remote repository.

```git status```
Displays the state of the working directory and the staging area, showing which changes have been staged, which haven't, and which files aren't being tracked by Git.

```git add [file]``` or ```git add .``` to add all files
Adds a file to the staging area, preparing it to be included in the next commit.

```git commit -m "[message]"```
Records or snapshots the changes made to the repository in the staging area with a descriptive message explaining the changes.

```git push [remote] [branch]```
Sends local branch commits to the remote repository branch.

```git pull [remote] [branch]```
Fetches and merges changes from the remote server to your working directory.

```git branch```
Lists all the local branches in your repository. With -a it shows all branches (local + remote).

```git checkout [branch]```
Switches to the specified branch and updates the working directory.

```git merge [branch]```
Merges the specified branch into the current branch.

```git fetch [remote]```
Downloads all changes from the remote repository, but does not integrate any of these changes into your working files.

```git log```
Shows a list of commits made in the current repository. Useful for viewing history.

```git diff```
Shows file differences not yet staged.

```git reset [file]```
Unstages the file, but it preserves the file contents.

```git reset --hard [commit]```
Resets the current branch to the specified commit, discarding all changes in the staging area and working directory.

```git rm [file]```
Removes files from the working directory and staging area.


