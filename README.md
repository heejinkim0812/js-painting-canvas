# js-painting-canvas

Build a Painting Board using vanilla-javascript  
✨Demo link: https://heejinkim0812.github.io/js-painting-canvas/

<br/>

## Painting Boards

**Feature List**

- Drawing on the canvas
  - Handle mouse events
  - Change Color and Thickness of brush
  - Random Color Picker
  - Fill/Paint/Clear on the canvas
  - Save Image
- Design for Desktop site (CSS)

<br/>

## What I Learn

- [**Canvas API**](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) is used to draw graphics with JavaScript
  - Use [**HTMLCanvasElement.getContext(\<contextType\>)**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) to get drawing context on the canvas.
    - If we use `2d` for `contextType`, the function will return [**CanvasRenderingContext2D**](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D).  
      Follow the link to see the available drawing functions of `CanvasRenderingContext2D`.
  - Save Canvas as a image by using [**HTMLCanvasElement.toDataURL()**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL).
- `a` tag can have `download` attribute, which makes users not to navigate to the URL but to download the linked URL.
  - It should contains link of the file in `href` attribute, and `download` attribute should have file name.
