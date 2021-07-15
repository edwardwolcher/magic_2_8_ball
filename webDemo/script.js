let noun, verb

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(240)
  shakeBall()
  push()
  textSize(24)
  text("press any key to shake ball", 20, 40)
  pop()
}

function drawBall() {
  push()
  rectMode(CENTER)
  ellipseMode(CENTER)
  translate(width / 2, height / 2)
  noStroke()
  // draw Circle
  const diameter = min(width, height) * 0.8
  fill(10)
  circle(0, 0, diameter)
  // draw LCD
  const rectWidth = min(width, height) * 0.4
  const rectHeight = rectWidth * 0.5
  fill(20, 20, 240)
  rect(0, 0, rectWidth, rectHeight)
  // draw Text
  fill(240)
  textFont('Monospace')
  textSize(map(textWidth('abcdefghijklmnop'), 0, 80, 0, rectWidth / 16))
  text(noun, -rectWidth / 2 * 0.9, -rectHeight * 0.1)
  text(verb, -rectWidth / 2 * 0.9, rectHeight * 0.2)
  pop()
}

function shakeBall() {
  noun = random(nouns)
  verb = random(verbs)
  drawBall()
}

function keyPressed() {
  shakeBall()
}