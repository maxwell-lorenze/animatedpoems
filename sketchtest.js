let bouncing_balls_g = []
let bouncing_balls_r = []
let bouncing_balls_b = []
let floating_rectangles_b = []
let floating_rectanlges_r = []

function setup() {
let detailX;
    // create a canvas that fills the browser window and attach it to your HTML
    createCanvas(windowWidth, windowHeight).parent('p5')

    // the p5 variables "width" and "height" hold the dimensions of the canvas
    for (let i=0; i<20; i++) {
        // the x and y leav room on the edges for the ball radius
        let random_ball = { x:random(5,30) ,
                            y: random(5,30),
                            vx: random(-5, 5),
                            vy: random(-5, 5),
                            c: [0, random(100,255), 0]
                        }
        bouncing_balls_g.push(random_ball)
        //creats the pieces of the watermelon rind
    }
    for (let i=0; i<20; i++) {
        // the x and y leav room on the edges for the ball radius
        let random_ball_r = { x:random(5,30) ,
                            y: random(5,30),
                            vx: random(-5, 5),
                            vy: random(-5, 5),
                            c: [random(100,255),0, 0]
                        }
        bouncing_balls_r.push(random_ball_r)
    }
    for (let i=0; i<10; i++) {
        // the x and y leav room on the edges for the ball radius
        let random_ball_b = { x:5 ,
                            y:5,
                            vx: random(-5, 5),
                            vy: random(-5, 5),
                            c: [0, 0, 0]
                        }
        bouncing_balls_b.push(random_ball_b)
    }

    for (let i=0; i<30; i++){

      let random_rectangle_b= {x: random(0, width),
                                y: random(0, height),
                                vx: random(1, 5),
                                vy: random(1, 5),
                                color: [0, 0, 0]


                              }

    floating_rectangles_b.push(random_rectangle_b)

      }
  //  for (let i=0; i<30; i++){

      //  let random_rectangle_r= {x: random(0, width),
      //                            y: random(0, height),
      //                            vx: random(1, 5),
      //                            vy: random(1, 5),
      //                            color: [random(100,255), 0, 0]


        //                        }

      //floating_rectangles_r.push(random_rectangle_r)

        //}

}

function draw() {



// //Opening and closing circle
//   ball.size = ball.size + ball.vsize
//   if (ball.size >= 500) {
//     ball.vsize = -ball.vsize
//   }


  for (let ball of bouncing_balls_g){


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
         for (let other_ball of bouncing_balls_g) {
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
                 }

             }
         }
       }


    for (let rectangle of floating_rectangles_b){

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

// if the window is resized, resize the canvas to match
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
