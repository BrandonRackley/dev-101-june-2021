Html
===

> Presenting Content

## Cheat Sheet Resource

https://htmlcheatsheet.com

## Tags

* Matching
* Self-Closing
* Void Elements
* Attributes

## Basic Presentation

Tag | Description
---|---
`<h1></h1>` | Header Level 1
`<h2></h2>` | Header Level 2
`<ul><li></li></ul>` | Bullet List
`<ol><li></li></ol>` | Numbered List

## Text

Tag | Description
---|---
`<p></p>` | Paragraph Block text (`display:block`)
`<span></span>` | Inline text (`display: inline`)
`<em></em>` | Emphasis
`<strong></strong>` | Strong

## Blocks

Tag | Description
---|---
`<div></div>` | Division

## Div soup and semantic HTML

Avoid `div`s whenever possible. These tags work exactly like divs, but are treated differently by _screen readers_ and other accessibility devices. 

Also, `div` soup is hard to read. Semtantic tags, meanwhile, make the purpose of your code clearer to future developers.

```html
<article>
<footer>
<header>
<main>
<nav>
<section>
```
## Visual

Tag | Description
---|---
`<img src="">` | Image
`<hr>` | Horizontal Rule

## Attributes: `id` and `class`

```html
<article id="flowers"></article>
<p class="content"></p>
```

## Links 

Tag | Description
---|---
`<a href="other-page.html"></a>` | Link to another page
`<a href="#flowers"></a>` | Jump to element with id
