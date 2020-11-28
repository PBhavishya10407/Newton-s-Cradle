class Roof
{
    constructor(x,y,width,height)
    {
        var options=
        {
            isStatic : true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display()
    {
        var gpos=this.body.position;
        push();
        translate(gpos.x,gpos.y);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
        
    }
}