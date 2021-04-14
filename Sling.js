class Sling{
    constructor(body, point)
    {
        var options = 
        {
        bodyA:body,
        pointB:point,
        stiffness:0.03,
        length:1
        }

        this.bodyA = body;
        this.pointB = point;
        this.sling=Constraint.create (options);
    }

    fly(){
        this.sling.bodyA=null;
    }

    attach(body){
        this.sling.bodyA=body;
    }

    display (){
        if(this.sling.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }

}