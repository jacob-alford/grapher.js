// --- Configuration --- //
const xLim = [-2,16]; // Each integer value represents its own line on the graph.
const yLim = [-2,16]; // The origin will always be placed at 0,0; and will prefer the lower bound for tie breaks.
const dims = [500,500]; // The dimension in pixels of the canvas
const filename = "graph"; // The image file name is saved
const backgroundColor = "black"; // The background of the graph
const majorGridLineColor = 200; // The color of the axis
const minorGridLineColor = 50; // The color of the grid lines
const textColor = 200; // The color of the numbers on the graph
const textSz = 15; // The size of the numbers on the graph
const textOffset = [-4,18]; // The position of the numbers on the graph, [-4,18] represents 18px below the x axis, and -4 pixels aligns with the minor grid lines.
// -------------------- //
let button;
let canv;

// --- Function and Vector Declaration --- //
// ------------- Vectors ------------------
let a = new Matrix([2,2]);
let b = new Matrix([-1,3]);
let c = Matrix.add(a,b);
// ----------- Scatter Plots --------------
let points = [];
for(let i=0;i<500;i++){
  points.push(mat_rand([2],0,15));
}
// --------- Plain Functions --------------
const f = (x,c) => c[0]*sin(c[1]*x) + c[2];
// -------------------------------------- //
function setup() {
  canv = createCanvas(dims[0],dims[1]);
  button = createButton('Save Image');
  button.position(50,dims[1] + 25);
  button.attribute("onclick","saveImage()");

  createGraph(); // Create the grid lines

  stroke("blue");
  drawVector(a,origin); // Draw 'a' at the origin

  stroke("green");
  drawVector(b,toCoords(a)); // Draw 'b' at 'a'

  stroke("yellow");
  drawVector(c,origin); // Draw 'c' (a+b) at the origin

  stroke("pink");
  scatter(points); // Draw the scatter plot

  stroke("red");
  graph(f,2,5,1); // Graph the function, where 2,5,1 represents amplitude, angular frequency, and y-offset respectively.
}
