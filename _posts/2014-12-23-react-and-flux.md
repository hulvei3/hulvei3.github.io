---
layout: post
title: react + flux
---

In an ongoing search for better blogging abilities I will try to write about stuff I do at work, at home and all that stuff in between. And in these holidays, I'm beginning to reflect on the past year from a software engineer's point-of-view.

At work [e-conomic](http://www.e-conomic.com) we have a 14-year-old (!) codebase spanning over languages and technologies like classic ASP, ASP.NET, C#, javascript, node, mongodb and mssql, so having engineers with the right skills, patience and courage is a big priority for us. The courage to re-think and change things is especially important and when we were planning development of a new big feature we already knew that we should go for a more frontend-friendly approach, instead of old server-side rendering.

We were already doing many things on the client, but this time we would try to go a bit further towards a single-page application and we decided to try out the new kid on the block namely [React](http://facebook.github.io/react/) as the frontend framework-of-choice.
I fell in love.

Now, with almost a year's experience with React I can say for sure this wasn't just a fling. With the react-way of building our UI in a declarative and modular manner, we were building new stuff fast! Of course that were (and still are) some quirks and pitfalls that we fall into, but with continually learning by developing we are now beginning to harvest the fruit of developing high-quality and performant features - fast.[]

React is only a view-thing. A common explanation is that react is the 'V' in MVC. With React-components that describe how the world should look in this very moment, we are forcing ourselves into using immutable data, and much more stateless views. The complexity of our code disappeared.

A few month ago on a monthly js-meetup ([copenhagenjs](http://copenhagenjs.dk/)) hosted by e-conomic I was asked: _what do you use for frameworking besides react?_
The answer was simply _none_.

Instead we structure our code based on the architectural ideas and principals of [_flux_](http://facebook.github.io/flux/docs/overview.html), the kind of "gives life" to our react components.

In future blogs I will try to provide examples of how we create simple but yet powerful UI components using react+flux.