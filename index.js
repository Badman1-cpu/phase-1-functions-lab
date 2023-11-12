function distanceFromHqInBlocks(location){
    const blocks =42 - location;
    return Math.abs(blocks);
}
function distanceFromHqInFeet(feet){
    let a = (distanceFromHqInBlocks(feet)) * 264;
    return a 
}
function distanceTravelledInFeet(start,destination){
    const b = Math.abs(start - destination);
    const c = b*264;
    return  c
}
function calculatesFarePrice(start,destination){
    const d = distanceTravelledInFeet(start,destination);
    if (d <= 400){
        return d*0
    }
    else if (d > 400 && d< 2000){
        return ((d - 400)* 0.02)
    }
    else if (d>2000 && d<2500){
        return 25
    }
    else if (d > 2500){
        return 'cannot travel that far'
    }

}