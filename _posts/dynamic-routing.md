---
title: "The Serverless Framework: Notes and Thoughts"
excerpt: "Because the serverless framework is zero configuration by default, ideally it should be easy to set up and deploy. This is only the ideal case, of course, and any developer from an amateur to a professional knows that actually creating a web app and deploying it is full of trial and error."
coverImage: "/assets/blog/dynamic-routing/logo.gif"
date: "2021-03-08T05:35:07.322Z"
author:
  name: Charles McNamara
  picture: "/assets/blog/authors/charlie_white.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/logo.gif"
---

Because the serverless framework is zero configuration by default, ideally it should be easy to set up and deploy. This is only the ideal case, of course, and any developer from an amateur to a professional knows that actually creating a web app and deploying it is full of trial and error. It's important to understand that in this situation we're using [this repository.](https://github.com/serverless-nextjs/serverless-next.js) My primary thoughts on the matter would simply be to add that we need to remember not to use the _npx serverless_ command and rather to change it to just _serverless_. You should also probably be using linux rather than Windows as the latter caused me quite a few issues. At least what I can say is that having a windows username seperated by spaces is not ideal. After you install the serverless framework (I used _git [repositorylink]_), you'll need to make a very simple modification to your serverless.yml to add the component name; you can find the documentation on this in the GitHub's README. Once you do that you can set the AWS credentials with your preffered method whether that be in the CLI or in an AWS CONFIG FILE. Then you can test your app with _npm run dev_ or you can deploy your app with _serverless_.

## Thoughts

Serverless is a versatile and scalable framework for deploying next.js apps and I couldn't recommend it more highly to developers new and professional alike. It's a significant advantage to have such an easy framework. For example, serverless.yml doesn't have that many options and so there's only so much you can do when you deploy, meaning you don't have to worry endlessly that you messed something up, you can find a full list [here](https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml/). In addition, the architecture behind it is concise and quick and statically serving pages is a step up from your typical website. The ability to set caching standards before deployment saves the hassle of creating an entire backend for your simple test site just to change caching behavior.
