---
title: Simple static blog with 11ty, DecapCMS and Netlify
description: Deploying a simple static blog with 11ty, DecapCMS on Netlify for free
author: Tim Heidler
date: 2023-07-17T20:14:01.332Z
tags:
  - post
  - featured
image: /assets/blog/favicon.png
imageAlt: "?"
---
## Getting stared

Before starting, you should make sure that the following requirements apply to you

* GitHub account
* Netlify account (can be created using your GitHub account)
* a coding editor (for example VS Code)
* Node.js installed on your PC

Start up your favorite code editor (in this Tutorial, I'll be using [VS Code](https://code.visualstudio.com/)) and open a folder, where you want to create your Blog. Next up, open a terminal in your folder. In VS Code, press on "Terminal" at the top of the program and then on "new Terminal".

![image of the Terminal tap](/assets/blog/simple_static_blog_img2.png)

Now we want to tell Node.js more about our project, with the package.json. To create this file type the following command in the Terminal.

```shell
npm init -y
```

We also need 11ty to be installed in our project. which is done with the command:

```shell
npm install @11ty/eleventy --save-dev
```

Next up, open the package.json by clicking on it in the file explorer build into VS Code.

![image of the package.js file](/assets/blog/simple_static_blog_img3.png)

 The package.json contains the basic information about your project, like the name, the version and also the commands the project runtime suports, listed under scripts. as you see there is only one command called test. we want to get rid of this command and create our own