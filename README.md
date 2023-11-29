# SingleForever

_How to Stay Single Forever_ is a static front end site designed to be a parody dating blog. I created this project to demonstrate a number of front-end techniques and technologies. I'm a front-end developer who is passionate about accessibility, and I wanted to build out a full site that shows off what's possible with Angular.

## General
The site is fully responsive, and the menu items become a floating mobile menu button when the screen size becomes small enough. The mobile menu slides out and freezes the rest of the screen. 

I built the modals to be fully custom. They properly trap focus, and prevent the background from scrolling or being clicked, but return the user to exactly where they were before opening it.

There's also some animation and toggling states, for example, with the search bar. It expands on click and then slides out. Once it's finished sliding, it places focus in the input. 

## Images
Many of the images on the site I made myself with Illustrator, including the SVG in the header, and all the icons (like the home button, search button, and close buttons).

Most of the other images on the site are SVGs I customized from [undraw.co](https://undraw.co/). Any other images (like on the meal prep page) were credited on the page.


## Accessibility Considerations

### Contrast

Color contrast is really important when desigining a website. I purposefully picked a color palette so that all text and icons are legible. Color contrast is easy to check on [webaim.org](https://webaim.org/resources/contrastchecker/). I've also run audits on my pages with [deque's attest tool](https://www.deque.com/tools/worldspace-attest/).

### Skip Navigation

Because I included menu items in the footer, I included a skip-navigation link in the header. It's hidden unless you tab to it and is intended to help keyboard users jump to the content in the footer without having to tab through the entire content of the page. 

### Focus

By default, items in focus are outlined with a blue ring, but this can sometimes be jarring or off-style if you're not a keyboard user. Therefore, I've used some preventDefault events to stop clicking with a mouse from causing focus, but leaving focus and the focus ring it if a user tabs to it.

The modals I made were custom built and trap focus when opened. Focus is moved to a hidden element at the beginning of the modal that can only recieve programatic focus, so when a user starts tabbing, they stay within the modal. Calling a modal explicitly provides an id to return focus to when the modal is closed, so a user returns to wherever they were. 


## Technical

I wanted to challenge myself to put a unique feature on each blog article. I reccomend exploring the site and experiencing all of the features yourself, but if you're just interested in the technical side of it, here's some of the technical considerations. 

### Printing

On the page "Meal Prepping with Depression", users can print a recipe they like. By default, printing something would print the entire page, but in this case, we wanted to print individual recipes. We do this by toggling "not-print" classes and using scss to remove certain items when printing. 

### Infinite Scrolling

On the page "Are You Being Ghosted?", users can scroll down infinitely, and a new text will always generate. This is accomplished by checking the scrollHeight of the div, and when a user is at the bottom, appending a new text with a slight delay. 


### Reactive Forms

Both the quizzes are powered by Angular's Reactive Forms, maintaining a component model of the form, and then calculating results on submit. 

_______

There's a lot more throughout the site that's worth exploring; take a look! See if you can find all of the content.
