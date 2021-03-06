// Input:
//  Rectangular canvas area with upper-left at 0,0, and width cw height ch
//  Image aspect ratio ir (width / height)
//
// Output:
//  - image xpos, ypos (upper-left)
//  - image sizeh, sizew
//
// Cover the canvas completely with the image.
// Can scale the image, but aspect ratio should remain the same.
// Covering should be minimal.
// Center of the image is center of canvas.
// Coordinate space is 0,0 in upper left


function fitImage(cw, ch, ir){
  var xpos = 0;
  var ypos = 0;
  var sizex = cw;
  var sizey = ch;
  var canvasRatio = cw/ch;
  var centerx = cw/2;
  var centery = ch/2;
      
  if (canvasRatio !== ir) {

    if (canvasRatio >= 1) {
      var smallest = Math.min(cw, ch);
      sizex = smallest * ir;
      sizey =  smallest;
    } else if (canvasRatio > ir && canvasRatio < 1) {
      sizex = ch * ir;
      sizey = ch;
    } else {
      sizey = cw/ir;
      sizex = cw;
    }

  }
  xpos = centerx - sizex/2;
  ypos = centery - sizey/2;
  return [xpos, ypos, sizex, sizey];
}

fitImage(2, 10, .75);
fitImage(9, 10, .75);
fitImage(10, 10, .75);
fitImage(10, 2, .75);

//closer. Not sure if it is right.