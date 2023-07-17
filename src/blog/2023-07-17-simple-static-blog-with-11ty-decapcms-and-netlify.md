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
**Warning still in progress!!**

## Getting stared

Before starting, you should make sure that the following requirements apply to you

* GitHub account
* Netlify account (can be created using your GitHub account)
* a coding editor (for example VS Code)
* Node.js installed on your PC

Start up your favorite code editor (in this Tutorial, I'll be using [VS Code](https://code.visualstudio.com/)) and open a folder, where you want to create your Blog. Next up, open a terminal in your folder. In VS Code, press on "Terminal" at the top of the program and then on "new Terminal".

![image of the Terminal tap](/assets/blog/simple_static_blog_img2.png)

Now we want to tell Node.js more about our project, with the package.json. To create this file, type the following command in the Terminal.

```shell
npm init -y
```

We also need 11ty to be installed in our project. Which is done with the command:

```shell
npm install @11ty/eleventy --save-dev
```

Next up, open the package.json by clicking on it in the file explorer build into VS Code.

![image of the package.js file](/assets/blog/simple_static_blog_img3.png)

 The package.json contains the basic information about your project, like the name, the version and also the commands the project runtime supports, listed under scripts. As you see, there is only one command called test. We want to get rid of this command and create our own. Replace the test command with the following two commands.

```json
"start": "eleventy --serve",
"build": "eleventy"
```

Start will be used during development, and build will be to build the page for the deployment.

After that, we need to tell 11ty more about our project by creating a new file called "**.eleventy.js**" and pasting the following code block into it.

```javascript
 module.exports = function (eleventyConfig) {
 
 // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};
```

The code block tells 11ty where the files you create will be (src directory) and where the build files will be (public directory).

## Src directory and base.html file

now that 11ty knows where the files you create will be. Let's create them. Starting with the most important file the "index.html" this file will be the landing page of your Blog. At first, create a folder in the directory of your project called "**src**" in this directory will be all your code. In this folder, create the "**index.html**" and add the standard html5 template code in it.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

In the body tag, add a h1 headline with the main headline of your blog.

```html
<h1>hello, world</h1>
```

After wards, save the file and type the command **npm start** to start the web server of your blog. In the Terminal there should be a link displayed.

![image of the terminal showing the link to the webpage](/assets/blog/simple_static_blog_img4.png)

Paste the link into your browser and your h1 headline should be displayed on the page.

![image of the h1 headline in the browser](/assets/blog/simple_static_blog_img5.png)