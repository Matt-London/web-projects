const stage = document.getElementById("stage");

// =================== Same mass, different volume (wood and brick)
const SAME_MASS = new Scene(stage);
const SCENE1_MASS = 5; // kg
const SCENE1_WOOD_VOLUME = 12.5; // L
const SCENE1_BRICK_VOLUME = 2.5; // L

// Wood
//SAME_MASS.add_object(new Block(100, 100, SAME_MASS.width / 16, 100, SCENE1_MASS, SCENE1_WOOD_VOLUME, true, "images/wood.jpg", stage, true, true, true, true));
SAME_MASS.add_object(SAME_MASS.width / 16, 100, SCENE1_MASS, SCENE1_WOOD_VOLUME, true, "images/wood.jpg", stage, false);
// Brick
// SAME_MASS.add_object(new Block(100, 100, SAME_MASS.width / 7, 100, SCENE1_MASS, SCENE1_BRICK_VOLUME, true, "images/brick.png", stage, true, true, true, true));
SAME_MASS.add_object(SAME_MASS.width / 7, 100, SCENE1_MASS, SCENE1_BRICK_VOLUME, true, "images/brick.png", stage, false);
// Scales
// SAME_MASS.add_object(new Scale(75, 150, SAME_MASS.width * 3 / 4, 100, stage));
SAME_MASS.add_object(SAME_MASS.width * 3 / 4, 100, 1, 1, false, "grey", stage, true);
// SAME_MASS.add_object(new Scale(75, 150, SAME_MASS.width / 2, 100, stage));
SAME_MASS.add_object(SAME_MASS.width / 2, 100, 1, 1, false, "grey", stage, true);

unload_scene(SAME_MASS);



// =================== Same volume, different mass (wood and brick)
const SAME_VOLUME = new Scene(stage);
const SCENE2_VOLUME = 5; // L
const SCENE2_WOOD_MASS = 2; // kg
const SCENE2_BRICK_MASS = 10; // L


// Wood
// SAME_VOLUME.add_object(new Block(100, 100, SAME_VOLUME.width / 16, 100, SCENE2_WOOD_MASS, SCENE2_VOLUME, true, "images/wood.jpg", stage, true, true, true, true));
SAME_VOLUME.add_object(SAME_VOLUME.width / 16, 100, SCENE2_WOOD_MASS, SCENE2_VOLUME, true, "images/wood.jpg", stage, false);
// Brick
// SAME_VOLUME.add_object(new Block(100, 100, SAME_VOLUME.width / 7, 100, SCENE2_BRICK_MASS, SCENE2_VOLUME, true, "images/brick.png", stage, true, true, true, true));
SAME_VOLUME.add_object(SAME_VOLUME.width / 7, 100, SCENE2_BRICK_MASS, SCENE2_VOLUME, true, "images/brick.png", stage, false);
// Scales
SAME_VOLUME.add_object(SAME_MASS.width * 3 / 4, 100, 1, 1, false, "grey", stage, true);
SAME_VOLUME.add_object(SAME_MASS.width / 2, 100, 1, 1, false, "grey", stage, true);

unload_scene(SAME_VOLUME);



// =================== Same density, different mass, different volume (wood)
const SAME_DENSITY = new Scene(stage);
const SCENE3_B1_MASS = 2; // kg
const SCENE3_B2_MASS = 4; // kg
const SCENE3_B1_VOLUME = 5; // L
const SCENE3_B2_VOLUME = 10; // L


// Wood
// SAME_DENSITY.add_object(new Block(100, 100, SAME_DENSITY.width / 16, 100, SCENE3_B1_MASS, SCENE3_B1_VOLUME, true, "images/wood.jpg", stage, true, true, true, true));
SAME_DENSITY.add_object(SAME_DENSITY.width / 16, 100, SCENE3_B1_MASS, SCENE3_B1_VOLUME, true, "images/wood.jpg", stage, false);
// Wood
// SAME_DENSITY.add_object(new Block(100, 100, SAME_DENSITY.width / 7, 100, SCENE3_B2_MASS, SCENE3_B2_VOLUME, true, "images/wood.jpg", stage, true, true, true, true));
SAME_DENSITY.add_object(SAME_DENSITY.width / 7, 100, SCENE3_B2_MASS, SCENE3_B2_VOLUME, true, "images/wood.jpg", stage, false);
// Scales
SAME_DENSITY.add_object(SAME_MASS.width * 3 / 4, 100, 1, 1, false, "grey", stage, true);
SAME_DENSITY.add_object(SAME_MASS.width / 2, 100, 1, 1, false, "grey", stage, true);

unload_scene(SAME_DENSITY);