---
title: GitHub Pages
date: 2025-05-06 12:45:00 +/-TTTT
categories: [Software]
tags: [software,git]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/software
---
><div align="left">
><img src="github-pages.jpg" alt="github-pages" width="60%"/>
></div>

## Step 1: Create a GitHub Account (if you don't have one)

Go to the **GitHub** website  [https://github.com](https://github.com)
Click `"Sign up"` and follow the registration process
Verify your email address when prompted

## Step 2: Create a New Repository

Log in to your **GitHub** account
Click the **"+"** icon in the top-right corner
><div align="left">
><img src="github-pages-new.jpg" alt="github-pages-new" width="80%"/>
></div>

Select **"New repository"**
><div align="left">
><img src="github-pages-new-repo.jpg" alt="github-pages-new-repo" width="80%"/>
></div>

>Name your repository - for **GitHub Pages**, you have two options:<br>
>Use _username_.github.io (creates a site at https://_username_.github.io/)<br>
>Use any name (creates a site at https://_username_.github.io/_repository-name_/)
{: .prompt-tip }

_For this example, a repository called "my-page" is created to host the webpage._
><div align="left">
><img src="github-pages-repo.jpg" alt="github-pages-repo" width="80%"/>
></div>

Make sure the repository is set to **"Public"**
Click **"Create repository"**
><div align="left">
><img src="github-create-repo.jpg" alt="github-create-repo" width="80%"/>
></div>

## Step 3: Upload Your HTML Project

On your new repository page, click **"uploading an existing file"**
Drag and drop your **HTML** files or click to browse your computer
Make sure your main **HTML** file is named `index.html`
Add a commit message (e.g., "Initial commit")
Click **"Commit changes"**

## Step 4: Set Up GitHub Pages

Go to your repository's main page
Click **"Settings"** (tab at the top)
Scroll down to **"Pages"** in the left sidebar
Under **"Source"**, select the branch containing your code (usually "main" or "master")
Select the folder where your files are located (usually "/(root)")
Click **"Save"**

## Step 5: Access Your GitHub Page

After saving, **GitHub** will provide a link to your published site
It may take a few minutes for your site to be published
Visit the provided **URL** to see your published **HTML** project

Your **HTML** project should now be live and accessible via the GitHub Pages URL (https://username.github.io/ or https://username.github.io/repository-name/).

## Optional: Using a Custom Domain

If you want to use a custom domain instead of the **GitHub Pages URL**:

Go to the **GitHub Pages** settings
Enter your custom domain in the "Custom domain" field
Update your domain's DNS settings to point to **GitHub Pages**
