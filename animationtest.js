let bouncing_balls = []
let bouncing_ballsg = []
let bouncing_ballsb = []
let floating_rectangles = []
let floating_rectanglesO = []
let floating_rectanglesr = []
let music
//function preload(){
//  music = loadSound('watermelon_man.mp3')}
function setup() {
let detailX;
frameRate(50)
print(frameCount)
    // create a canvas that fills the browser window and attach it to your HTML
    createCanvas(windowWidth, windowHeight).parent('p5')
    background(242,172,8)

    // the p5 variables "width" and "height" hold the dimensions of the canvas

for (let i=0; i<20; i++) {

let random_ball = {x: random(0, width),
                  y: random(0, height),
                  size: random(10, 40),
                  vx: random(-5, 5),
                  vy: random(-5, 5),
                  color: [random(150,240), 0, 0]
                }

bouncing_balls.push(random_ball)

    }
    for (let i=0; i<20; i++) {

    let random_ballg = {x: random(0, width),
                      y: random(0, height),
                      size: random(30, 70),
                      vx: random(-5,5),
                      vy: random(-5,5),
                      color: [0, 100, 50]
                    }

    bouncing_ballsg.push(random_ballg)
    //start()

        }
        for (let i=0; i<10; i++) {

        let random_ballb = {x: random(0, width),
                          y: random(0, height),
                          size: random(5, 10),
                          vx: random(-5,5),
                          vy: random(-5,5),
                          color: [0, 0, 0]
                        }

        bouncing_ballsb.push(random_ballb)

            }


for (let i=0; i<20; i++){

  let random_rectangle_b= {x: random(0, width),
                            y: random(0, height),
                            vx: random(1, 5),
                            vy: random(1, 5),
                            color: [0, 0, 0]


                          }

floating_rectangles.push(random_rectangle_b)

  }
  for (let i=0; i<20; i++){

    let random_rectangleo= {x: random(0, width),
                              y: random(0, height),
                              vx: random(1, 5),
                              vy: random(1, 5),
                              color: [242,172,8]


                            }

  floating_rectanglesO.push(random_rectangleo)

    }
    for (let i=0; i<20; i++){

      let random_rectangler= {x: random(0, width),
                                y: random(0, height),
                                vx: random(1, 5),
                                vy: random(1, 5),
                                color: [random(100,250),0,0]


                              }

    floating_rectanglesr.push(random_rectangler)

      }

}
//function mouseClicked() {

//  music.play()

//}

function draw() {
  if (frameCount>0){

       for (let ballg of bouncing_ballsg){
         // green balls

      fill (ballg.color)

      circle(ballg.x, ballg.y, ballg.size)
       ballg.x = ballg.x + ballg.vx
       ballg.y = ballg.y + ballg.vy

       // bounce ball off walls
              if (ballg.x >= width - ballg.size/2) {
                  ballg.vx = -ballg.vx      // flip the direction!
              }
              if (ballg.x <= 0 + ballg.size/2) {
                  ballg.vx = -ballg.vx
              }
              if (ballg.y >= height - ballg.size/2) {
                  ballg.vx = -ballg.vx
              }
              if (ballg.y <= 0 + ballg.size/2) {
                  ballg.vx = -ballg.vx
              }

              // check if it is colliding with another ball
              // we do this by selecting a second ball from our array
              for (let other_ballg of bouncing_ballsg) {
                  if (other_ballg != ballg) {   // this condition stops us from testing if the ball is colliding with itself

                      // how close do they have to be to touch?
                      let touching = abs(ballg.size/2 + other_ballg.size/2)

                      // how far apart are they now?
                      let distance = dist(ballg.x, ballg.y, other_ballg.x, other_ballg.y)

                      // if theyre touching, bounce them
                      // (not real physics, but close enough for now)
                      if (distance <= touching) {
                          ballg.vx = -ballg.vx
                          ballg.vy = -ballg.vy
                          ballg.x = ballg.x + ballg.vx
                          ballg.y = ballg.y + ballg.vy
                      }  }  }  }
       if(frameCount>150){
         for (let ball of bouncing_balls){
       //red balls
        fill (ball.color)
        circle(ball.x, ball.y, ball.size)
         ball.x = ball.x + ball.vx
         ball.y = ball.y + ball.vy
         // bounce ball off walls
                if (ball.x >= width - ball.size/2) {
                    ball.vx = -ball.vx      // flip the direction!
                }
                if (ball.x <= 0 + ball.size/2) {
                    ball.vx = -ball.vx
                }
                if (ball.y >= height - ball.size/2) {
                    ball.vx = -ball.vx
                }
                if (ball.y <= 0 + ball.size/2) {
                    ball.vx = -ball.vx
                }
                // check if it is colliding with another ball
                // we do this by selecting a second ball from our array
                for (let other_ball of bouncing_balls) {
                    if (other_ball != ball) {   // this condition stops us from testing if the ball is colliding with itself
                        // how close do they have to be to touch?
                        let touching = abs(ball.size/2 + other_ball.size/2)
                        // how far apart are they now?
                        let distance = dist(ball.x, ball.y, other_ball.x, other_ball.y)
                        // if theyre touching, bounce them
                        // (not real physics, but close enough for now)
                        if (distance <= touching) {
                            ball.vx = -ball.vx
                            ball.vy = -ball.vy
                            ball.x = ball.x + ball.vx
                            ball.y = ball.y + ball.vy
                        }  } }  }
            for (let ballb of bouncing_ballsb){
     // black balls

           fill (ballb.color)

           circle(ballb.x, ballb.y, ballb.size)
            ballb.x = ballb.x + ballb.vx
            ballb.y = ballb.y + ballb.vy

            // bounce ball off walls
                   if (ballb.x >= width - ballb.size/2) {
                       ballb.vx = -ballb.vx      // flip the direction!
                   }
                   if (ballb.x <= 0 + ballb.size/2) {
                       ballb.vx = -ballb.vx
                   }
                   if (ballb.y >= height - ballb.size/2) {
                       ballb.vx = -ballb.vx
                   }
                   if (ballb.y <= 0 + ballb.size/2) {
                       ballb.vx = -ballb.vx
                   }

                   // check if it is colliding with another ball
                   // we do this by selecting a second ball from our array
                   for (let other_ballb of bouncing_ballsb) {
                       if (other_ballb != ballb) {   // this condition stops us from testing if the ball is colliding with itself

                           // how close do they have to be to touch?
                           let touching = abs(ballb.size/2 + other_ballb.size/2)

                           // how far apart are they now?
                           let distance = dist(ballb.x, ballb.y, other_ballb.x, other_ballb.y)

                           // if theyre touching, bounce them
                           // (not real physics, but close enough for now)
                           if (distance <= touching) {
                               ballb.vx = -ballb.vx
                               ballb.vy = -ballb.vy
                               ballb.x = ballb.x + ballb.vx
                               ballb.y = ballb.y + ballb.vy
                           }

                       }
                   }
                 }
               }
if(frameCount>350 && frameCount<1300){
    for (let rectangle of floating_rectangles){

noFill()
  stroke(rectangle.color)


rect(rectangle.x, rectangle.y, rectangle.x, rectangle.y, rectangle.size)
  rectangle.x = rectangle.x + rectangle.vx
  rectangle.y = rectangle.y + rectangle.vy


if (rectangle.x >= width) {
      rectangle.vx = -rectangle.vx
    }

if (rectangle.x <= 0) {
      rectangle.vx = -rectangle.vx
  }

if (rectangle.y >= height) {
      rectangle.vy = -rectangle.vy
}

if (rectangle.y <= 0) {
      rectangle.vy = -rectangle.vy
       }

    }

}
if(frameCount>850){
    for (let rectangleo of floating_rectanglesO){

noFill()
  stroke(rectangleo.color)


rect(rectangleo.x, rectangleo.y, rectangleo.x, rectangleo.y, rectangleo.size)
  rectangleo.x = rectangleo.x + rectangleo.vx
  rectangleo.y = rectangleo.y + rectangleo.vy


if (rectangleo.x >= width) {
      rectangleo.vx = -rectangleo.vx
    }

if (rectangleo.x <= 0) {
      rectangleo.vx = -rectangleo.vx
  }

if (rectangleo.y >= height) {
      rectangleo.vy = -rectangleo.vy
}

if (rectangleo.y <= 0) {
      rectangleo.vy = -rectangleo.vy
       }

    }

}
if(frameCount>1500){
    for (let rectangler of floating_rectanglesr){

noFill()
  stroke(rectangler.color)


rect(rectangler.x, rectangler.y, rectangler.x, rectangler.y, rectangler.size)
  rectangler.x = rectangler.x + rectangler.vx
  rectangler.y = rectangler.y + rectangler.vy


if (rectangler.x >= width) {
      rectangler.vx = -rectangler.vx
    }

if (rectangler.x <= 0) {
      rectangler.vx = -rectangler.vx
  }

if (rectangler.y >= height) {
      rectangler.vy = -rectangler.vy
}

if (rectangler.y <= 0) {
      rectangler.vy = -rectangler.vy
       }

    }

}
}
if (frameCount>2000){
window.location.href = 'https://docs.google.com/document/d/1kNsey1LF8EaQMNuZ5JwMXeAo5oDBFiqYF6emm0m3JzU/edit?usp=sharing'}
}



// if the window is resized, resize the canvas to match
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
