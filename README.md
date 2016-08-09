# LiveVox Front-End Exercise

## Overview

This exercise will have the candidate build a responsive site navigation driven by an AJAX request.

Here are the guidelines for this exercise

* Use any framework or library that you consider helpful to achieve the requirement (i.e. jquery, yui, dojo, bootstrap).
* Chrome compliance is all that's required, all functions and features available in Chrome are in play.
* Nav must be responsive.
* Use HTML5 standards
* Code must run without bugs, please ensure your code runs as you expect it to from a fresh checkout.

Nice to haves:

* The banner to rotate images every 5 seconds automatically (gallery-like)
* Grid system (for responsiveness)
* Sass files (CSS with superpowers)
* SVG images where applies

## Version
0.1.0

## Files

* Mockup - PDF file describing how the nav should behave
* Logo - PDF with logo vectorized

## API

* GET https://demo1045116.mockable.io/menu - returns a JSON response representing the items in the nav.

## Get Started

```
git clone git@bitbucket.org:felipevega/livevox-portal.git
```

## Design Specifications

### Typography

* **Primary Navigation (Desktop)** 12px Montserrat Light
* **Banner Headline (Desktop)** 72px Montserrat Bold
* **Banner Body Copy (Desktop)** 24px Open Sans Light
* **Banner Buttons (Desktop)** 30px Montserrat Bold
* **Copyright (Desktop)** 12px Montserrat Light

* **Headline (Mobile)** 44px Montserrat Bold
* **Body Copy (Mobile)** 24px Open Sans Light
* **Copyright (Mobile)** 12px Montserrat Light

### Color

* **LiveVox Blue** #154688
* **Light Blue** #5497f8
* **Light Gray** #bcbcbc
* **Translucent Black** rgba(0, 0, 0, 0.3)

### Measurements

Measurements are specified in pixels. Dimensions are fluid unless specified.

### Interactions

#### Desktop

* On hover, Primary Navigation light blue bar shows up.
* On click, if item contains a URL, Primary Navigation navigates to a new page.
* On click, if item contains other items, Secondary Navigation appears (see Desktop, Secondary Navigation).
* Menu appears containing Secondary Navigation.
* On hover in, Secondary Navigation changes color (magenta/light gray).
* On click, Secondary shows an alert with the section Name.
* On click outside of menu, menu and mask are hidden.

#### Mobile

* When a user clicks the open navigation icon (“hamburger”), the navigation should “push” from left to right.
* The open navigation icon should change to the close navigation icon ("x").
* The Primary Navigation should include link items and menu items.
* When a user hovers a Primary Navigation item, it should change color (magenta/light gray).
* When a user clicks a Primary Navigation menu item, the Secondary Navigation should “push” down, the chevron should rotate * 180°.
* When a user clicks on the close icon ("x"), the navigation should close.
* When the navigation closes:
  * the menu should “pull” from right to left
  * the logo with full colors shows up
  * the close icon should change to the open icon