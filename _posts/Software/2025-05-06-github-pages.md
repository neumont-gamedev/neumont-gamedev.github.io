---
title: GitHub Pages
date: 2025-05-06 12:45:00 +/-TTTT
categories: [Software]
tags: [software,git]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/software
---
<div align="left">
<img src="github-pages.jpg" alt="github-pages" width="60%"/>
</div>
## Step 1: Create a GitHub Account (if you don't have one)

- Go to the **GitHub** website  [https://github.com](https://github.com).<br>
- Click `"Sign up"` and follow the registration process.<br>
- Verify your email address when prompted.<br>

## Step 2: Create a New Repository
<ul>
    - Log in to your **GitHub** account
    - Click the **"+"** icon in the top-right corner
</ul>
<div align="left">
    <img src="github-pages-new.jpg" alt="github-pages-new" style="display: block; margin: 0; padding: 0;" width="100%">
</div>

- Select **"New repository"**
<div align="left">
    <img src="github-pages-new-repo.jpg" alt="github-pages-new-repo" width="80%"/>
</div>

>Name your repository - for **GitHub Pages**, you have two options:<br>
>- Use _username_.github.io (creates a site at https://_username_.github.io/)<br>
>- Use any name (creates a site at https://_username_.github.io/_repository-name_/)
{: .prompt-tip }

_For this example, a repository called "my-page" is created to host the webpage._
<div align="left">
    <img src="github-pages-repo.jpg" alt="github-pages-repo" width="80%"/>
</div>

- Make sure the repository is set to **"Public"**<br>
- Click **"Create repository"**
<div align="left">
    <img src="github-create-repo.jpg" alt="github-create-repo" width="80%"/>
</div>

## Step 4: Clone Your Repository

>You have two options when cloning your repository:<br>
>- Use the **clone** command in a command prompt.<br>
>- Use the **GitHub Desktop** application.
{: .prompt-info }

### Clone - Git Console Command
- In **Window Explorer** navigate to the directory where you want to clone the repository.
<div align="left">
    <img src="github-pages-clone-dir.jpg" alt="github-clone-dir" width="80%"/>
</div>

- Type in <code style="color: green;">cmd` in the address bar and press enter. This will open a command prompt in the current directory.
<div align="left">
    <img src="github-pages-clone-cmd.jpg" alt="github-clone-cmd" width="80%"/>
</div>

<div align="left">
    <img src="github-pages-cmd.jpg" alt="github-pages-cmd" width="80%"/>
</div>

- The GitHub Repository address is needed for the next step. This can be copied from the GitHub repository.
<div align="left">
    <img src="github-pages-url.jpg" alt="github-pages-url" width="80%"/>
</div>
In this example it is: `https://github.com/neumont-gamedev/my-page.git`

- Type the following: `git clone <github url>`<br>
<div align="left">
    <img src="github-pages-clone.jpg" alt="github-pages-clone" width="80%"/>
</div>

This will clone the repository into a new directory using the **GitHub Repository** name.<br>
<div align="left">
    <img src="github-pages-cloned.jpg" alt="github-pages-cloned" width="80%"/>
</div>
<div align="left">
    <img src="github-pages-cloned-dir.jpg" alt="github-pages-cloned-dir" width="80%"/>
</div>

### Clone - GitHub Desktop

- Open your **GitHub Desktop** application.
<div align="left">
    <img src="github-pages-github-desktop.jpg" alt="github-pages-desktop" width="80%"/>
</div>

- Select `File>Clone Repository... (Ctrl+Shift+O)`
<div align="left">
    <img src="github-pages-desktop-clone.jpg" alt="github-pages-desktop-clone" width="80%"/>
</div>

- Find the **GitHub Repository** by name and select the **Local path** to clone it to.<br>
- Click **Clone**.
<div align="left">
    <img src="github-pages-desktop-cloned.jpg" alt="github-pages-desktop-cloned" width="80%"/>
</div>

- The repository will be cloned and can now be updated using **GitHub Desktop**.
<div align="left">
    <img src="github-pages-desktop-cloned-repo.jpg" alt="github-pages-desktop-cloned" width="80%"/>
</div>

> **GitHub Desktop** will be used to commit and push changes for this example.
{: .prompt-info }

## Step 3: Create Your HTML Project

- Create a `.txt` file in the new folder. Name the file `"index.txt"`<br>
<div align="left">
    <img src="github-pages-index.jpg" alt="github-pages-index" width="80%"/>
</div>

- Open the `index.txt` file and paste the following:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```
<div style="margin-left: 2em;">
<ul>
  <li>&lt;!DOCTYPE html&gt; — Declares the document type as HTML5.</li>
  <li>&lt;html&gt; — The root element of the page.</li>
  <li>&lt;body&gt; — Contains the visible content.</li>
  <li>&lt;h1&gt; — A heading element that displays "Hello World" on the page.</li>
</ul>
</div>

- Save and rename the file to `"index.html"`

> The **index.html** file is the default entry point for most websites. It acts as the homepage and typically contains the structure and content users first see.
{: .prompt-info }

<div align="left">
    <img src="github-pages-html.jpg" alt="github-pages-html" width="80%"/>
</div>

- In **GitHub Desktop** commit the changes.
- Add a commit message or use the default message.
- Click **"Commit"**.
<div align="left">
    <img src="github-pages-html-commit.jpg" alt="github-pages-html-commit" width="80%"/>
</div>

- **Publish** the repository. Click **Publish Branch**.
<div align="left">
    <img src="github-pages-html-publish.jpg" alt="github-pages-html-publish" width="80%"/>
</div>

- Navigate to the GitHub repository.<br>
- The URL is `https://github.com/<username>/<repository-name>`<br>
- In this example it is: `https://github.com/neumont-gamedev/my-page`

- The `index.html` should appear in the repository.
<div align="left">
    <img src="github-pages-mypage.jpg" alt="github-pages-mypage" width="80%"/>
</div>

## Step 4: Set Up GitHub Pages

- Go to your repository's main page
- Click **"Settings"** (tab at the top).
<div align="left">
    <img src="github-pages-settings.jpg" alt="github-pages-settings" width="80%"/>
</div>
- Scroll down to **"Pages"** in the left sidebar.
<div align="left">
    <img src="github-pages-settings-pages.jpg" alt="github-pages-settings" width="80%"/>
</div>
- Under **"Source"**, select the branch containing your code (usually "main" or "master").
<div align="left">
    <img src="github-pages-settings-branch.jpg" alt="github-pages-settings-branch" width="80%"/>
</div>
- Select the folder where your files are located (usually "/(root)")
- Click **"Save"** 
<div align="left">
    <img src="github-pages-settings-root.jpg" alt="github-pages-settings-root" width="80%"/>
</div>

## Step 5: Access Your GitHub Page

After saving, **GitHub** will provide a link to your published site.
It may take a few minutes for your site to be published.

<ul>
- Press F5 to refresh the page.
</ul>
<div align="left">
    <img src="github-pages-visit-site.jpg" alt="github-pages-visit-site" width="80%"/>
</div>

<ul>
- Visit the provided **URL** to see your published **HTML** project
</ul>
<div align="left">
    <img src="github-pages-site.jpg" alt="github-pages-site" width="80%"/>
</div>

Your **HTML** project should now be live and accessible via the GitHub Pages URL (`https://<username>.github.io/` or `https://<username>.github.io/<repository-name>/)`.

In this example it is:
[https://neumont-gamedev.github.io/my-page/](https://neumont-gamedev.github.io/my-page/)

## Optional: Using a Custom Domain

If you want to use a custom domain instead of the **GitHub Pages URL**:

- Go to the **GitHub Pages** settings.<br>
- Enter your custom domain in the "Custom domain" field.<br>
- Update your domain's DNS settings to point to **GitHub Pages**.<br>
