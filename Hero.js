class Hero {
  constructor (x,y,r)
	{
		var options = {
      density :1 ,
     frictionAir :1 ,
    };
		this.x = x,
		this.y =y,
		this.r = r,
		this.image = loadImage("Superhero-01.png")
		this.body= Bodies.circle(this.x,this.y (this.r)/2,options)
		World.add(world,this.add)

	}
	display()
	{
			
			var heroPos=(this.body.position)	
			Push()
			traslate(heroPos.x,heroPos.y-100)
			rectMode(CENTRE)
			Fill(255,0,255)
			imageMode(CENTRE)
			image(this.image, 0,0,this.r+150,this.r)
			Pop()
			
	}
}
