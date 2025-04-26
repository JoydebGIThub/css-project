# Flex box
Every html element that holds any type of content can be a flexbox or grid container
## How to align element anywhere inside its parent element?
### How to center a div?
```css
body{
    display: flex;
}
.box{
    height: 100px;
    width: 100px;
    background-color: #0071FF;
    font-size: 20pt;
}
```
We always apply flex in the parent element.
Here the most elements have a "display" of "block" or "inline" per default.
1. block element take the whole div of the screen so the next element will be in the next line.
#### But when we apply display flex we leve the default part and entry a different world
In flex container the elements can be in 2 direction:
1. Cross Axis(Top to bottom)
2. Main Axis(left to right)
They will control the flow of layout
##### To position your elements along the main axis you need the "justify-content" property
```css
body{
    border: 8px solid black;
    display: flex;
    /* justify-content: flex-start;default left */
    /* justify-content: flex-end;right */
    justify-content: center;/*center in the main axis*/
}
```
##### Align the element in vertically so we use "cross axis".
1. we set a min-height
2. we use the "align-items" property to control the alignment along the cross axis.
```css
body{
    min-height: 400px;
    border: 8px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}
```
##### Distribute the element left to right
```css
body{
    min-height: 400px;
    border: 8px solid black;
    display: flex;
    justify-content: space-between;/*distribute the element left to right and the 1st and last element tauched the edge*/
    align-items: center;
}
```
##### Distribute the element left to right but don't tauch the edge:
```css
body{
    min-height: 400px;
    border: 8px solid black;
    display: flex;
    justify-content: space-around;/*distribute the element left to right don't tauched the edge*/
    align-items: center;
}
```
##### distribute the element left to right all the spaces are even
```css
body{
    min-height: 400px;
    border: 8px solid black;
    display: flex;
    justify-content: space-evenly;/*distribute the element left to right all the spaces are even*/
    align-items: center;
}
```
### Flex direction
#### flex-direction control the direction of main axis
```css
flex-direction: row;
```
"row" is the default properties which start from left to right
##### for right to left direction:
```css
flex-direction: row-reverse; 
```
##### we can change the axis from main to cross
```css
flex-direction: column; /*change the axis*/
```
##### to center the item in cross axis we use align-item instade of justify content:
```css
body{
    min-height: 400px;
    border: 8px solid black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
```
#### flex-direction controls the direction of the main axis, which influences other flexbox properties
##### give a little gap between 2 elements:
```css
 gap: 20px;
```
##### responsive flex if we don't have enough space it will shift the element to the next line
```css
flex-wrap: wrap;
```
##### To control all the line in the content we use:
```css
align-content: space-around;
```
- align-item will control the alignment of the cross axis of every flex box line individually.
- align-content will control the all line together
##### Apply the different gaps for column and row
```css
    column-gap: 10px;
    row-gap: 5px;
```
##### We can stop the shrink of the boxes by applying: the items will be overflowed
```css
.box{
    flex-shrink: 0;
}
```
##### by using the following we can fix one element and other will be shrink
```css
#box-1{
    flex-shrink: 0;
}
.box{
    flex-shrink: 1;
}
```
##### If we want the element to grow to fill out the empty space in the parent element:
```css
.box{
    flex-grow: 1;
}
```
##### We can use max and min width to control the growing and shrink level of the boxes as per the width
```css
.box{
    flex-grow: 1;
    max-width: 300px; /*each element can grow upto 300px*/
}
.box{
    flex-shrink: 1;
    min-width: 100px; /*each element can shrink until 100px*/
}
```
##### to stop the overflow in the in the shrink to can use @media to wrap the element:
```css
@media(max-width:576px){
    body{
        flex-wrap:wrap;
    }
}
```
##### We can align a perticular item in different position then other:
```css
#box-1{
    align-self: center;
}
```
#### to fix one element in the left and rest of the element in the right we use:
```css
body{
    min-height: 400px;
    border: 8px solid black;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    align-items: flex-start;
}
#box-1{
    margin-right: auto;
}
```