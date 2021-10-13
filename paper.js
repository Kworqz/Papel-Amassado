class Paper{
	constructor(x,y,r)
	{ var options = {
		'restitution':0.3,
		'friction':5,
		'density':1
	}
		this.x=x;
		this.y=y;
		this.r=r
        this.image = loadImage("paper.png");
		World.add(world, this.body);

	}
	display()
	{
			var PaperPos=this.body.position;
            var angle = this.body.angle;

			push();
			translate(PaperPos.x, PaperPos.y);
			imageMode(CENTER)
            rotate(angle);
            image(this.image,0, 0, this.width, this.height);
            pop();
	}

}