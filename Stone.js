class stone{
	constructor(x,y)
	{
	// assign options to the rubber ball
        var options = {
            density:12, 
            restitution: 0.3,
            friction:1
        }

		this.x=x;
		this.y=y;
		this.width=80
        this.height=80
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("magenta");
			//draw the ellipse here to display the rubber ball

            rect (0,0, this.width, this.height)

			pop()
    }
}