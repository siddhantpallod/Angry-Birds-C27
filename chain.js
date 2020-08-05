class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.05,
            length : 10
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y);
    }
}