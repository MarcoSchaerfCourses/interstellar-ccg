var maze = new THREE.Object3D();
var idAnimMaze;

var startColor;

var mazeObjects = [];
var mazeObjectsThatChanges = [];

var mazeScale = 0.01;

var xCoordsToReset = [];
var yCoordsToReset = [];

var circlesToReset = [];
var xCircleCoordsToReset = [];
var yCircleCoordsToReset = [];

var XstartSquarePosition =-100 *mazeScale;
var YstartSquarePosition = 100 *mazeScale;
xCoordsToReset.push(XstartSquarePosition);
yCoordsToReset.push(YstartSquarePosition);

var XstartGreenDoorPos = 1 *mazeScale;
var YstartGreenDoorPos = -47 *mazeScale;
xCoordsToReset.push(XstartGreenDoorPos);
yCoordsToReset.push(YstartGreenDoorPos);

var XstartYellowDoorPos = 42 *mazeScale;
var YstartYellowDoorPos = 23 *mazeScale;
xCoordsToReset.push(XstartYellowDoorPos);
yCoordsToReset.push(YstartYellowDoorPos);

var XstartPurpleDoorPos = -42 *mazeScale;
var YstartPurpleDoorPos = 84 *mazeScale;
xCoordsToReset.push(XstartPurpleDoorPos);
yCoordsToReset.push(YstartPurpleDoorPos);

var XstartOrangeDoorPos = -12 *mazeScale;
var YstartOrangeDoorPos = -62 *mazeScale;
xCoordsToReset.push(XstartOrangeDoorPos);
yCoordsToReset.push(YstartOrangeDoorPos);


var XcircleGoalPos = 71 *mazeScale;
var YcircleGoalPos = -74 *mazeScale;
xCircleCoordsToReset.push(XcircleGoalPos);
yCircleCoordsToReset.push(YcircleGoalPos);

var XcircleStartPos = -100 *mazeScale;
var YcircleStartPos = 100 *mazeScale;
xCircleCoordsToReset.push(XcircleStartPos);
yCircleCoordsToReset.push(YcircleStartPos);


var XpurpleCirlceUnlockPos = -70 *mazeScale;
var YpurpleCircleUnlockPos = 100 *mazeScale;
xCircleCoordsToReset.push(XpurpleCirlceUnlockPos);
yCircleCoordsToReset.push(YpurpleCircleUnlockPos);


var XyellowCircleUnlockPos = 14 *mazeScale;
var YyellowcircleUnlockPos = 69 *mazeScale;
xCircleCoordsToReset.push(XyellowCircleUnlockPos);
yCircleCoordsToReset.push(YyellowcircleUnlockPos);


var XpinkCircleUnlock = -100 *mazeScale;
var YpinkCircleUnlock = -74 *mazeScale;
xCircleCoordsToReset.push(XpinkCircleUnlock);
yCircleCoordsToReset.push(YpinkCircleUnlock);


var XorangeCircleUnlock = -40 *mazeScale;
var YorangeCircleUnlock = -74 *mazeScale;
xCircleCoordsToReset.push(XorangeCircleUnlock);
yCircleCoordsToReset.push(YorangeCircleUnlock);


var XbrownCircleUnlock = -70 *mazeScale;
var YbrownCircleUnlock = 69 *mazeScale;
xCircleCoordsToReset.push(XbrownCircleUnlock);
yCircleCoordsToReset.push(YbrownCircleUnlock);


var XprawnCircleUnlock = 71 *mazeScale;
var YprawnCircleUnlock = 100 *mazeScale;
xCircleCoordsToReset.push(XprawnCircleUnlock);
yCircleCoordsToReset.push(YprawnCircleUnlock);



function init() {
	
	var geometry = new THREE.PlaneGeometry( 20 *mazeScale, 20 *mazeScale ); //simple 2D square
	//var geometry = new THREE.SphereGeometry( 40, 40, 40 );


	var square = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x0000FF } ) ); //blu
	var sqbb = new THREE.Box3().setFromObject(square);
	square.name = "square";


	square.position.x = -100 *mazeScale
	square.position.y = 100 *mazeScale;

	square.castShadow = true;
	square.receiveShadow = true;

	mazeObjects.push( square );

	mazeObjectsThatChanges.push(square);

	/*background*/
	var squareBack = new THREE.PlaneGeometry(199 *mazeScale,199 *mazeScale);

	var mazeBackground = new THREE.Mesh(squareBack, new THREE.MeshBasicMaterial( { color: 0xffffff})); //riga verticale a sinistra
	mazeBackground.name = "mazeBackground";
	mazeBackground.position.x=-15*mazeScale;
	mazeBackground.position.y=14*mazeScale;
	mazeBackground.position.z=-0.02;
	mazeObjects.push(mazeBackground);
	

	/*GRID*/
	var rect = new THREE.PlaneGeometry(2 *mazeScale,200 *mazeScale);

	var line1 = new THREE.Mesh(rect, new THREE.MeshBasicMaterial( {color: 0x000000})); //riga verticale a sinistra
	line1.name = "line1";
	line1.position.x=mazeObjects[0].position.x-14 *mazeScale;
	line1.position.y=mazeObjects[0].position.y-86 *mazeScale;
	mazeObjects.push(line1);


	var rect3 = new THREE.PlaneGeometry(200 *mazeScale,2 *mazeScale);

	var line2 = new THREE.Mesh(rect3, new THREE.MeshBasicMaterial( {color: 0x000000})); //riga orizziontale in basso
	line2.name = "line2";
	line2.position.x=line1.position.x+99 *mazeScale;
	line2.position.y=line1.position.y-100 *mazeScale;
	mazeObjects.push(line2);

	
	var line3 = new THREE.Mesh(rect3, new THREE.MeshBasicMaterial( {color: 0x000000})); //riga orizzontale in alto
	line3.name = "line3";
	line3.position.x=line1.position.x+99 *mazeScale;
	line3.position.y=line1.position.y+99 *mazeScale;
	mazeObjects.push(line3);


	var line4 = new THREE.Mesh(rect, new THREE.MeshBasicMaterial( {color: 0x000000})); //riga verticale a destra
	line4.name = "line4";
	line4.position.x=line1.position.x+99*2 *mazeScale;
	line4.position.y=line1.position.y;
	mazeObjects.push(line4);



	/*MAZE WALLS*/
	var verticalLine1 = new THREE.PlaneGeometry(2 *mazeScale,90 *mazeScale);

	var line5 = new THREE.Mesh(verticalLine1, new THREE.MeshBasicMaterial( {color: 0x000000})); //muretto in alto a sx iniziale
	line5.name = "line5";
	line5.position.x=line1.position.x+28 *mazeScale;
	line5.position.y=line1.position.y+55 *mazeScale;
	mazeObjects.push(line5);
	

	var horizontalLine1 = new THREE.PlaneGeometry(30 *mazeScale,2 *mazeScale);

	var line6 = new THREE.Mesh(horizontalLine1, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line6.name = "line6";
	line6.position.x = line5.position.x+15 *mazeScale;
	line6.position.y = line5.position.y+15 *mazeScale;
	mazeObjects.push(line6);

	var line7 = new THREE.Mesh(horizontalLine1, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line7.name = "line7";
	line7.position.x = line6.position.x;
	line7.position.y = line6.position.y-30 *mazeScale;
	mazeObjects.push(line7);

	var line8 = new THREE.Mesh(verticalLine1, new THREE.MeshBasicMaterial( {color: 0x000000})); //muretto in alto a sx iniziale
	line8.name = "line8";
	line8.position.x=line7.position.x+15 *mazeScale;
	line8.position.y=line7.position.y-44 *mazeScale;
	mazeObjects.push(line8);


	var verticalLine2 = new THREE.PlaneGeometry(2 *mazeScale,80 *mazeScale);

	var line9 = new THREE.Mesh(verticalLine2, new THREE.MeshBasicMaterial( {color: 0x000000})); //muretto in alto a sx iniziale
	line9.name = "line9";
	line9.position.x=line1.position.x+28 *mazeScale;
	line9.position.y=line1.position.y-60 *mazeScale;
	mazeObjects.push(line9);


	var verticalLine3 = new THREE.PlaneGeometry(2 *mazeScale,25 *mazeScale);
	
	var line10 = new THREE.Mesh(verticalLine3, new THREE.MeshBasicMaterial( {color: 0x000000})); //muretto in alto a sx iniziale
	line10.name = "line10";
	line10.position.x=line8.position.x+1 *mazeScale;
	line10.position.y=line1.position.y-88 *mazeScale;
	mazeObjects.push(line10);


	var line11 = new THREE.Mesh(verticalLine1, new THREE.MeshBasicMaterial( {color: 0x000000})); //muretto in alto a sx iniziale
	line11.name = "line11";
	line11.position.x=line7.position.x+44 *mazeScale
	line11.position.y=line1.position.y+55 *mazeScale;
	mazeObjects.push(line11);


	var horizontalLine2 = new THREE.PlaneGeometry(20 *mazeScale,2 *mazeScale);

	var horizontalLine6 = new THREE.PlaneGeometry(32 *mazeScale,2 *mazeScale);

	var line12 = new THREE.Mesh(horizontalLine6, new THREE.MeshBasicMaterial( {color: 0x000000})); //muretto in basso a dx finale
	line12.name = "line12";
	line12.position.x=line7.position.x+31 *mazeScale;
	line12.position.y=line10.position.y+12 *mazeScale;
	mazeObjects.push(line12);


	var line13 = new THREE.Mesh(horizontalLine1, new THREE.MeshBasicMaterial( {color: 0x000000})); //muretto in basso a dx finale
	line13.name = "line13";
	line13.position.x=line7.position.x+30 *mazeScale;
	line13.position.y=line10.position.y+40 *mazeScale;
	mazeObjects.push(line13);

	var line14 = new THREE.Mesh(verticalLine3, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line14.name = "line14";
	line14.position.x=line11.position.x;
	line14.position.y=line13.position.y+12 *mazeScale;
	mazeObjects.push(line14);


	var verticalLine4 = new THREE.PlaneGeometry(2 *mazeScale,32 *mazeScale);

	var line15 = new THREE.Mesh(verticalLine4, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line15.name = "line15";
	line15.position.x=line11.position.x+25 *mazeScale;
	line15.position.y=line13.position.y+40 *mazeScale;
	mazeObjects.push(line15);

	var line16 = new THREE.Mesh(horizontalLine1, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line16.name = "line16";
	line16.position.x = line15.position.x+15 *mazeScale;
	line16.position.y = line15.position.y+48 *mazeScale;
	mazeObjects.push(line16);


	var line17 = new THREE.Mesh(horizontalLine1, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line17.name = "line17";
	line17.position.x = line15.position.x+15 *mazeScale;
	line17.position.y = line15.position.y+78 *mazeScale;
	mazeObjects.push(line17);

	var line18 = new THREE.Mesh(verticalLine4, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line18.name = "line18";
	line18.position.x=line11.position.x+25 *mazeScale;
	line18.position.y=line13.position.y+103 *mazeScale;
	mazeObjects.push(line18);

	var line19 = new THREE.Mesh(verticalLine4, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line19.name = "line19";
	line19.position.x=line18.position.x+58 *mazeScale;
	line19.position.y=line18.position.y;
	mazeObjects.push(line19);

	
	var horizontalLine3 = new THREE.PlaneGeometry(88 *mazeScale,2 *mazeScale);

	var line20 = new THREE.Mesh(horizontalLine3, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line20.name = "line20";
	line20.position.x = line15.position.x+43 *mazeScale;
	line20.position.y = line15.position.y-16 *mazeScale;
	mazeObjects.push(line20);

	var line21 = new THREE.Mesh(verticalLine4, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line21.name = "line21";
	line21.position.x=line18.position.x+58 *mazeScale;
	line21.position.y=line13.position.y+72 *mazeScale;
	mazeObjects.push(line21);


	var line22 = new THREE.Mesh(verticalLine4, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line22.name = "line22";
	line22.position.x=line18.position.x+29 *mazeScale;
	line22.position.y=line13.position.y+72 *mazeScale;
	mazeObjects.push(line22);

	var line23 = new THREE.Mesh(horizontalLine1, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line23.name = "line23";
	line23.position.x = line15.position.x+44 *mazeScale;
	line23.position.y = line15.position.y+78 *mazeScale;
	mazeObjects.push(line23);


	var horizontalLine4 = new THREE.PlaneGeometry(84 *mazeScale,2 *mazeScale);
	var line24 = new THREE.Mesh(horizontalLine4, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line24.name = "line24";
	line24.position.x = line15.position.x+44 *mazeScale;
	line24.position.y = line15.position.y-40 *mazeScale;
	mazeObjects.push(line24);

	var line25 = new THREE.Mesh(horizontalLine1, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line25.name = "line25";
	line25.position.x = line24.position.x-27 *mazeScale;
	line25.position.y = line24.position.y-28 *mazeScale;
	mazeObjects.push(line25);

	var line26 = new THREE.Mesh(horizontalLine1, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line26.name = "line26";
	line26.position.x = line25.position.x+30 *mazeScale;
	line26.position.y = line25.position.y;
	mazeObjects.push(line26);

	var line27 = new THREE.Mesh(verticalLine3, new THREE.MeshBasicMaterial( {color: 0x000000}));
	line27.name = "line27";
	line27.position.x=line26.position.x+14 *mazeScale;
	line27.position.y=line13.position.y-40 *mazeScale;
	mazeObjects.push(line27);



	var verticalLine5 = new THREE.PlaneGeometry(2 *mazeScale,28 *mazeScale);
	var line28 = new THREE.Mesh(verticalLine5, new THREE.MeshBasicMaterial( {color: 0x000000})); //green door
	line28.name = "line28";
	line28.position.x=line27.position.x-58 *mazeScale;
	line28.position.y=line27.position.y+27 *mazeScale;
	mazeObjects.push(line28);

	mazeObjectsThatChanges.push(line28);


	var line29 = new THREE.Mesh(horizontalLine1, new THREE.MeshBasicMaterial( {color: 0x000000})); //yellow door
	line29.name = "line29";
	line29.position.x = line16.position.x+29 *mazeScale;
	line29.position.y = line16.position.y-31 *mazeScale;
	mazeObjects.push(line29);

	mazeObjectsThatChanges.push(line29);



	var line30 = new THREE.Mesh(horizontalLine1, new THREE.MeshBasicMaterial( {color: 0x000000})); //purple door
	line30.name = "line30";
	line30.position.x = line15.position.x-40 *mazeScale;
	line30.position.y = line15.position.y+78 *mazeScale;
	mazeObjects.push(line30);

	mazeObjectsThatChanges.push(line30);


	var horizontalLine5 = new THREE.PlaneGeometry(26 *mazeScale,2 *mazeScale);

	var line35 = new THREE.Mesh(horizontalLine5, new THREE.MeshBasicMaterial( {color: 0x000000})); //orange door
	line35.name = "line35";
	line35.position.x=line27.position.x-71 *mazeScale;
	line35.position.y=line27.position.y+12 *mazeScale;
	//line35.rotation.z = Math.PI/2;
	mazeObjects.push(line35);

	mazeObjectsThatChanges.push(line35);


	var circle = new THREE.CircleGeometry( 5 *mazeScale,40 );
	var square2 =  new THREE.PlaneGeometry( 26.5 *mazeScale, 26 *mazeScale ); //simple 2D square
	
	var circleGoal = new THREE.Mesh(square2, new THREE.MeshBasicMaterial( { color: 0x7FFF00}));
	circleGoal.name = "circleGoal";
	circleGoal.position.x = line27.position.x+12 *mazeScale;
	circleGoal.position.y = line27.position.y;
	circleGoal.position.z = -0.01 * mazeScale;
	mazeObjects.push(circleGoal);

	circlesToReset.push(circleGoal);

	var circleStart = new THREE.Mesh(square2, new THREE.MeshBasicMaterial( { color: 0xFF0000 }));
	circleStart.name = "circleStart";
	circleStart.position.x = mazeObjects[0].position.x;
	circleStart.position.y = mazeObjects[0].position.y;
	circleStart.position.z = -0.1 * mazeScale;
	mazeObjects.push(circleStart);

	circlesToReset.push(circleStart);


	var circleUnlock1 = new THREE.Mesh(circle, new THREE.MeshBasicMaterial({  color: 0x800080 }));
	circleUnlock1.name = "purpleCircleUnlock";
	circleUnlock1.position.x = circleStart.position.x+30 *mazeScale;
	circleUnlock1.position.y = circleStart.position.y;
	mazeObjects.push(circleUnlock1);

	circlesToReset.push(circleUnlock1);


	var circleUnlock2 = new THREE.Mesh(circle, new THREE.MeshBasicMaterial( {color: 0xFFFF00}));
	circleUnlock2.name = "yellowCircleUnlock";
	circleUnlock2.position.x = circleGoal.position.x-57 *mazeScale;
	circleUnlock2.position.y = circleGoal.position.y+143 *mazeScale;
	mazeObjects.push(circleUnlock2);

	circlesToReset.push(circleUnlock2);


	var circleUnlock3 = new THREE.Mesh(circle, new THREE.MeshBasicMaterial( { color: 0xFF69B4}));
	circleUnlock3.name = "pinkCircleUnlock";
	circleUnlock3.position.x = circleStart.position.x;
	circleUnlock3.position.y = circleStart.position.y-174 *mazeScale;
	mazeObjects.push(circleUnlock3);

	circlesToReset.push(circleUnlock3);


	var circleUnlock4 = new THREE.Mesh(circle, new THREE.MeshBasicMaterial( { color: 0xff4300}));
	circleUnlock4.name = "orangeCircleUnlock";
	circleUnlock4.position.x = circleStart.position.x+60 *mazeScale;
	circleUnlock4.position.y = circleStart.position.y-174 *mazeScale;
	mazeObjects.push(circleUnlock4);

	circlesToReset.push(circleUnlock4);


	var circleUnlock5 = new THREE.Mesh(circle, new THREE.MeshBasicMaterial( { color: 0xD2691E}));
	circleUnlock5.name = "brownCircleUnlock";
	circleUnlock5.position.x = circleStart.position.x+30 *mazeScale;
	circleUnlock5.position.y = circleStart.position.y-31 *mazeScale;
	mazeObjects.push(circleUnlock5);

	circlesToReset.push(circleUnlock5);


	var circleUnlock6 = new THREE.Mesh(circle, new THREE.MeshBasicMaterial( { color: 0xb04949}));
	circleUnlock6.name = "prawnCircleUnlock";
	circleUnlock6.position.x = circleGoal.position.x;
	circleUnlock6.position.y = circleStart.position.y;
	mazeObjects.push(circleUnlock6);

	circlesToReset.push(circleUnlock6);

for(var i=0; i<mazeObjects.length; i++)
	maze.add(mazeObjects[i])
	
maze.position.y=100*mazeScale;
maze.position.z=-5;
console.log(mazeObjects);
	
}


function moveSq() {
	// movement
	var xSpeed = 2 *mazeScale;
	var ySpeed = 2 *mazeScale;

	var sq = scene.getObjectByName("square");


    	if (keyboard.pressed("W")) { //up arrow

		sq.position.y += ySpeed;
		var sqbb = new THREE.Box3().setFromObject(scene.getObjectByName("square"));
    	if(collisionIsVerified(sqbb, mazeObjects) == true ) {
    		sq.position.y-= ySpeed;
    	}


    } 
	if (keyboard.pressed("S")) { //down arrow

		sq.position.y -= ySpeed;
		var sqbb = new THREE.Box3().setFromObject(scene.getObjectByName("square"));
    	if(collisionIsVerified(sqbb, mazeObjects) == true ) {
    		sq.position.y+=ySpeed;
    	}


    } 
	if (keyboard.pressed("A")) { //left arrow
    	
		sq.position.x -= xSpeed;
		var sqbb = new THREE.Box3().setFromObject(scene.getObjectByName("square"));
    	if(collisionIsVerified(sqbb, mazeObjects) == true ) {
    		sq.position.x+=xSpeed;
    	}
    	
        
    } 
	if (keyboard.pressed("D")) { //right arrow
    	
		sq.position.x += xSpeed;
		var sqbb = new THREE.Box3().setFromObject(scene.getObjectByName("square"));
    	if(collisionIsVerified(sqbb, mazeObjects) == true ) {
    		sq.position.x-=xSpeed;
    	}

    }
	if (keyboard.pressed("space")) {

			resetPositions(mazeObjectsThatChanges,xCoordsToReset,yCoordsToReset);
			resetCircles(circlesToReset, xCircleCoordsToReset, yCircleCoordsToReset);
    }

	unlockDoors();

};



function resetPositions(mazeObjectsThatChanges, xCoordsToReset, yCoordsToReset) {
	var obj,i;
	for(i=0; i<mazeObjectsThatChanges.length; i++) {
		obj = scene.getObjectByName(mazeObjectsThatChanges[i].name);
		if(obj.rotation.z != 0) {
			obj.rotation.z = 0;
		}
		if(obj.position.x != xCoordsToReset[i]) {
			obj.position.x = xCoordsToReset[i];
		}

		if(obj.position.y != yCoordsToReset[i]) {
			obj.position.y = yCoordsToReset[i];
		}
	}
	mazeObjectsThatChanges[0].material.color.setHex(0x0000FF);	
}



function resetCircles(circlesToReset, xCircleCoordsToReset, yCircleCoordsToReset) {
	var crc,i;
	for(i=0; i<circlesToReset.length; i++) {
		crc = scene.getObjectByName(circlesToReset[i].name);
		if(crc.visible == false) {
			crc.visible = true;
		}
		if(crc.position.x != xCircleCoordsToReset[i]) {
			crc.position.x = xCircleCoordsToReset[i];
		}
		if(crc.position.y != yCircleCoordsToReset[i]) {
			crc.position.y = yCircleCoordsToReset[i];
		}
	}
}



function unlockDoors() {

	var sq = scene.getObjectByName("square");

	var pinkCircle = scene.getObjectByName("pinkCircleUnlock");
	var l30 = scene.getObjectByName("line30"); //purple door
	
	var purpleCircle = scene.getObjectByName("purpleCircleUnlock");
	var l29 = scene.getObjectByName("line29"); //yellow door
	
	var yellowCircle = scene.getObjectByName("yellowCircleUnlock");
	var l28 = scene.getObjectByName("line28"); //green door

	var orangeCircle = scene.getObjectByName("orangeCircleUnlock");
	var l35 = scene.getObjectByName("line35"); //orange door

	var brownCircle = scene.getObjectByName("brownCircleUnlock");

	var prawnCircle = scene.getObjectByName("prawnCircleUnlock");

	var goalCircle = scene.getObjectByName("circleGoal");

	var l31 = mazeObjects[31]; //purple opened door

	var l32 = mazeObjects[32]; //yellow opened door

	var l33 = mazeObjects[33]; //green opened door

	var l34 = mazeObjects[34]; //orange opened door

	
	var door;

	if(pinkCircle.position.x<= (sq.position.x+5 *mazeScale) & (sq.position.x-5 *mazeScale)<= pinkCircle.position.x & pinkCircle.position.y <= (sq.position.y+5 *mazeScale) & (sq.position.y-5 *mazeScale) <= pinkCircle.position.y) {
		
		door = scene.getObjectByName("line29");
		door.rotation.z = -Math.PI/2;
		door.translateX(16 *mazeScale);
		door.translateY(14 *mazeScale);
		
		pinkCircle.position.x = pinkCircle.position.x-40 *mazeScale;
		pinkCircle.visible=false;

	} else if (purpleCircle.position.x<= (sq.position.x+5 *mazeScale) & (sq.position.x-5 *mazeScale)<= purpleCircle.position.x & purpleCircle.position.y <= (sq.position.y+5 *mazeScale) & (sq.position.y-5 *mazeScale) <= purpleCircle.position.y) {
		door = scene.getObjectByName("line35");
		door.rotation.z = -Math.PI/2;
		door.translateX(12 *mazeScale);
		door.translateY(13 *mazeScale);

		purpleCircle.position.x = purpleCircle.position.x -80 *mazeScale;
		purpleCircle.visible=false;

	} else if(yellowCircle.position.x<= (sq.position.x+5 *mazeScale) & (sq.position.x-5 *mazeScale)<= yellowCircle.position.x & yellowCircle.position.y <= (sq.position.y+5 *mazeScale) & (sq.position.y-5 *mazeScale) <= yellowCircle.position.y) {
		door = scene.getObjectByName("line30");
		door.rotation.z = Math.PI/2;
		door.translateX(-14 *mazeScale);
		door.translateY(14 *mazeScale);

		yellowCircle.position.x = yellowCircle.position.x +90 *mazeScale;
		yellowCircle.visible=false;
	
	} else if(orangeCircle.position.x<= (sq.position.x+5 *mazeScale) & (sq.position.x-5 *mazeScale)<= orangeCircle.position.x & orangeCircle.position.y <= (sq.position.y+5 *mazeScale) & (sq.position.y-5 *mazeScale) <= orangeCircle.position.y) {
		door = scene.getObjectByName("line28");
		door.rotation.z = Math.PI/2;
		door.translateX(13 *mazeScale);
		door.translateY(13 *mazeScale);

		orangeCircle.position.x = orangeCircle.position.x-90 *mazeScale
		orangeCircle.visible=false;
	
	} else if(brownCircle.position.x<= (sq.position.x+5 *mazeScale) & (sq.position.x-5 *mazeScale)<= brownCircle.position.x & brownCircle.position.y <= (sq.position.y+5 *mazeScale) & (sq.position.y-5 *mazeScale) <= brownCircle.position.y) {
		door = scene.getObjectByName("line30");
		door.rotation.z = Math.PI/2;
		door.translateX(-14 *mazeScale);
		door.translateY(14 *mazeScale);

		brownCircle.position.x = brownCircle.position.x-60 *mazeScale;
		brownCircle.visible=false;
		
		document.addEventListener("keydown", function(e){ //press spacebar to restart the game
			if(e.keyCode == 32) {
				resetPositions(mazeObjectsThatChanges,xCoordsToReset,yCoordsToReset);
				resetCircles(circlesToReset, xCircleCoordsToReset, yCircleCoordsToReset);

			}
		});
	} else if(prawnCircle.position.x<= (sq.position.x+5 *mazeScale) & (sq.position.x-5 *mazeScale)<= prawnCircle.position.x & prawnCircle.position.y <= (sq.position.y+5 *mazeScale) & (sq.position.y-5 *mazeScale) <= prawnCircle.position.y) {
		door = scene.getObjectByName("line28");
		door.rotation.z = Math.PI/2;
		door.translateX(13 *mazeScale);
		door.translateY(13 *mazeScale);

		prawnCircle.position.x = prawnCircle.position.x+40;
		prawnCircle.visible=false;
		document.addEventListener("keydown", function(e){ //press spacebar to restart the game
			if(e.keyCode==32) {
				resetPositions(mazeObjectsThatChanges,xCoordsToReset,yCoordsToReset);
				resetCircles(circlesToReset, xCircleCoordsToReset, yCircleCoordsToReset);

			}
		}); 
	} else if(goalCircle.position.x<= (sq.position.x+5 *mazeScale) & (sq.position.x-5 *mazeScale)<= goalCircle.position.x & goalCircle.position.y <= (sq.position.y+5 *mazeScale) & (sq.position.y-5 *mazeScale) <= goalCircle.position.y) {
		tabletActivation[0]=true;
		scene.remove(maze);
		cancelAnimationFrame( idAnimMaze )
	}

}


function collisionIsVerified(sqbb,mazeObjects) {
	var verified;
	var i, obj, tempbb;
	
	for( i=1; i <=35; i++) { //i=0 non preso perchè in mazeObjects[0] c'è square, in mazeObjects[1],....,mazeObjects[33] ci sono solo le linee
		obj = scene.getObjectByName("line"+i+"");
		if(obj != null) {
			tempbb = new THREE.Box3().setFromObject(obj);//;
			if (sqbb.intersectsBox(tempbb) == true) {
				verified = true;
				break;
			} else {
				verified = false;
			}
		}
	}
	return verified;
}	
		

function animateMaze() {
	idAnimMaze =requestAnimationFrame( animateMaze );
	moveSq();
	webGLRenderer.render(scene, camera);
};

init();
