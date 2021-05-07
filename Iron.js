class iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
        var options = {
            density:17, 
            restitution: 0.5,
            friction:1
        }

		this.x=x;
		this.y=y;
		this.width=100
        this.height=100
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			//draw the ellipse here to display the rubber ball

            rect (0,0, this.width, this.height)

			pop()
    }
}
