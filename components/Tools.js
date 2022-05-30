/**
 * Set yp the Tools class
 */

class Tools {
    constructor(
        id,
        type,
        name,
        diameter,
        length,
        partNumber,
        toolHolder,
        feed,
        speed,
        toolLife
    ) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.diameter = diameter;
        this.length = length;
        this.partNumber = partNumber;
        this.toolHolder = toolHolder;
        this.feed = feed;
        this.speed = speed;
        this.toolLife = toolLife;
    }
}

export default Tools;
