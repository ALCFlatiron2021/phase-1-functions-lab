const headQ = 42
const feet = 264

function distanceFromHqInBlocks (pickup) {
    if (pickup > 42) {
        return (pickup - headQ);
    } else if (pickup < 42) {
        return (headQ - pickup)
    }
}

function distanceFromHqInFeet(dropoff) {
    if (dropoff > 42) {
    let endTrip = (dropoff - headQ) * feet
        return endTrip
    } else if (dropoff < 42) {
    let endtrip = (headQ - dropoff) * feet
        return endtrip
    }
    }

    //distanceTravelledInFeet: Calculates the number of feet a passenger travels given a starting block and an ending block — it only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long.

    //start

function distanceTravelledInFeet (start,end) {
    if (end > start) {
    let trip = (end - start) * feet
    return trip
    } else if ( start > end) {
    let trip = (start - end) * feet
    return trip
    }
}

    //calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.




function calculatesFarePrice (start,destination){
    const feet = distanceTravelledInFeet(start,destination) 
    if (feet < 400) {
        return 0
    } else if (feet > 2500){
        return 'cannot travel that far'
    } else if (feet > 2000){
        return 25
    } else if  (feet > 400 <= 2000) {
        return parseFloat(((feet * .02)-(400*.02)).toFixed(2))
    }


    //if (Math.abs((start - destination) * feet < 400)){
      //  return 0
//     }
//     else if (Math.abs((start - destination) * feet > 2500)){
//         return 'cannot travel that far'
//     }
//     else if (Math.abs((start - destination) * feet > 2000)){
//         return 25 
//     }
//     else if (Math.abs((start - destination) * feet > 400 < 2000)){
//         return Math.abs(((start - destination) * feet - 400) * .02)
//     } 
 }

    
