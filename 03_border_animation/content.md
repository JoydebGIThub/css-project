```css
.card{
    position: relative;
}
.card::after{
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: red;
}
```
"**Explanation:**" by giving the "**position: relative;**" in the ".card" it will effect the size of the content of the "**.card::after**". It will help the content to be same size of the card.

```css
.card::after{
    top: 50%;
    left: 50%;
}
```
"**Explanation:**" it will help us to center the origin means the top left corner of the content
```css
.card::after{
    translate: -50% -50%;
}
```
"**Explanation:**" it will make the content over the card
```css
.card::after{
    z-index: -1;
}
```
"**Explanation:**" it will help us to put the content behind the card

```css
.card::after{
    background-image: conic-gradient(red, blue);
}
```
"**Explanation:**" it will make the content half red and half blue. The color traverse clock wise. So we can change the gradient to give a rainbo color

```css
.card::after{
        background-image: conic-gradient( #ff4545 , #00ff99, #006aff, #ff0095, #ff4545);
}
```
"**Explanation:**" by giving the same color in the 1st and last it will remove the line in the staring and the ending. The line faid
********************************************************
#### For getting the glow effect
```css
.card::after, .card::before{
    content: '';
}
```
"**Explanation:**" we add the "**.card::before**" to create a before element
```css
.card::before{
    filter: blur(1.5rem);
}
```
"**Explanation:**" it will make the things glow
```css
.card::before{
    opacity: 0.5;
}
```
"**Explanation:**" it will make it less glow
********************************************************************
#### for animation
```css
.card::after{
    background-image: conic-gradient( transparent 70%, blue);
}
```
"**Explanation:**" add a blue effect in the and "**transparent 70%**" control the transparency
##### Control the angle
```css
.card::after{
   background-image: conic-gradient(from 170deg, transparent 70%, blue);
}
```
"**Explanation:**" by changeing the degree the effect will move arround in the border
##### For moving the angle dynamically
```css
.card::after{
      --angle: 0deg;
    background-image: conic-gradient(from var(--angle), transparent 70%, blue);
}
```
"**Explanation:**" by createing the variable we can control the angle dynamically

##### add the animation
```css
.card::after{
 animation: 3s spin linear infinite;
}
```
"**Explanation:**" for infinite loop
##### for working the animation
```css
@keyframes spin{
    from{
        --angle: 0deg;
    }
    to{
        --angle: 360deg;
    }
}
```
"**Explanation:**" it will give the spin for how to change the angle from to
*****************************************************************
"**after all this the the animation is not working because css variable is not mutable so here we can use @property use to make custom property**"
```css
@property --angle{
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}
```
"**Explanation:**" instade of declare the variable in the content we declare it here. "**"<angle>"**" it means a number follow up by deg.

