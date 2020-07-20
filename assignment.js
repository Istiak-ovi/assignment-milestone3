////problem---1

function feetToMile(feet){
    var mile=feet/5280;
    return mile;
}
var result=feetToMile(15564);
console.log('Result in Mile is: ',result,'Mile');

////Problem ----2
function woodCalculator(chair,table,khat){
    var chairCount=chair*1;
    var tableCount=table*3;
    var khatCount=khat*5;
    var total=chairCount+tableCount+khatCount;
    return total;
}
var customer1=woodCalculator(10,15,5);
console.log('We need:',customer1,'Cubic feet wood');
var customer2=woodCalculator(5,10,3);
console.log('We need:',customer2,'Cubic feet wood');


//Problem----4
function tinyFriend(friend){
    var maxFriend=friend[0];
    for(var i=0;i<friend.length;i++){
        if(maxFriend.length>friend[i].length){
            maxFriend=friend[i];
        }
    }
    return maxFriend;
}
var friendList=['Rana','Ashik','jalal','Joy'];
var myTinnyfriend=tinyFriend(friendList);
console.log(myTinnyfriend);

/////Problem ---3
 function brickCalculator(floor){
    if(floor<=10){
        var ittPerFeet=1000;
        var totalItt=1000*15;
        var total=floor*totalItt;
        return total;
    }
    else if(floor>10 && floor<=20){
        var lowerBrick=15000;
        var newFloor=floor-10;
        var secondNewFloor=(10*lowerBrick)+(newFloor*12*1000);
        return secondNewFloor;
    }
    else{
        var twentyFloor=(10*15*1000)+(10*12*1000);
        var newFloor=floor-20;
        var thirdNewFloor=twentyFloor+(newFloor*10*1000);
        return thirdNewFloor;
    }
}
var floorWiseItt1=brickCalculator(10);
console.log("Itt needed:",floorWiseItt1);
var floorWiseItt2=brickCalculator(20);
console.log("Itt needed:",floorWiseItt2);
var floorWiseItt3=brickCalculator(25);
console.log("Itt needed:",floorWiseItt3);

