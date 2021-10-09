var canvas = new fabric.Canvas("myCanvas");
player_x = 10
player_y = 10
block_height = 30;
block_width = 30;
var player_object = ""
var block_object = ""

function playerUpdate() {

    fabric.Image.fromURL("steve1.png", function (Img) {

        player_object = Img;
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top: player_y, left: player_x
        });
        canvas.add(player_object)
    })

}

function blockUpdate(get_img) {

    fabric.Image.fromURL(get_img, function (Img) {

        block_object = Img;
        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top: player_y, left: player_x
        });
        canvas.add(block_object)
    })

}

window.addEventListener("keydown", mykeyDown);

function mykeyDown(e) {

    console.log(e)
    keyPressed = e.keyCode

    if (e.shiftKey == true && keyPressed == "80") {

        console.log("shift and p are pressed together")
        block_width = block_width + 10
        block_height = block_height + 10

        document.getElementById("current_width").innerHTML = block_width
        document.getElementById("current_height").innerHTML = block_height
    }

    if (e.shiftKey == true && keyPressed == "77") {

        console.log("shift and m are pressed together")
        block_width = block_width - 10
        block_height = block_height - 10

        document.getElementById("current_width").innerHTML = block_width
        document.getElementById("current_height").innerHTML = block_height
    }

    if (keyPressed == "37") {
        left()
        console.log("Left")
    }

    if (keyPressed == "38") {
        up()
        console.log("Up")
    }

    if (keyPressed == "39") {
        right()
        console.log("Right")
    }

    if (keyPressed == "40") {
        down()
        console.log("Down")
    }

    if (keyPressed == "67") {

        blockUpdate("cloud.jpg");
        console.log("C")

    }

    if (keyPressed == "68") {

        blockUpdate("dark_green.png");
        console.log("D")

    }

    if (keyPressed == "71") {

        blockUpdate("ground.png");
        console.log("G")

    }

    if (keyPressed == "76") {

        blockUpdate("light_green.png");
        console.log("L")

    }

    if (keyPressed == "82") {

        blockUpdate("roof.jpg");
        console.log("R")

    }

    if (keyPressed == "84") {

        blockUpdate("trunk.jpg");
        console.log("T")

    }

    if (keyPressed == "85") {

        blockUpdate("unique.png");
        console.log("U")

    }

    if (keyPressed == "87") {

        blockUpdate("wall.jpg");
        console.log("W")

    }

    if (keyPressed == "89") {

        blockUpdate("yellow_wall.png");
        console.log("Y")

    }


}

function up() {

    if (player_y > 10) {

        player_y = player_y - block_height;
        console.log(player_x, player_y);
        console.log(block_height);
        canvas.remove(player_object);
        playerUpdate()

    }
    


}

function down() {

    if (player_y < 500) {

        player_y = player_y + block_height;
        console.log(player_x, player_y);
        console.log(block_height);
        canvas.remove(player_object);
        playerUpdate()

    }
    


}


function right() {

    if (player_x < 850) {

        player_x = player_x + block_width;
        console.log(player_x, player_y);
        console.log(block_height);
        canvas.remove(player_object);
        playerUpdate()

    }
    


}


function left() {

    if (player_x > 10) {

        player_x = player_x - block_width;
        console.log(player_x, player_y);
        console.log(block_height);
        canvas.remove(player_object);
        playerUpdate()

    }
    


}


