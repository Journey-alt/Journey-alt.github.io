$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //  toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 650, 200, 20, "red");
    createPlatform(500, 550, 200, 20, "orange");
    createPlatform(200, 450, 200, 20, "yellow");
    createPlatform(500, 350, 200, 20, "lime");
    createPlatform(850, 250, 200, 20, "blue");
    createPlatform(1200, 150, 200, 20, "violet");

    // TODO 3 - Create Collectables
    createCollectable("database", 1350, 50);
    createCollectable("grace", 250, 200);
    createCollectable("diamond", 1000, 500);


    
    // TODO 4 - Create Cannons
    createCannon("right", 300, 2000);
    createCannon("left", 500, 4000);
    createCannon("bottom", 800, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
