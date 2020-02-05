var showOrder = function (){
var orderPhoto = '';
var order;
while (order !== "house" && order !== "hotel"){
    order = prompt ("pick hotel or house");
}
var numberOrder;
numberOrder = prompt ("what the numbers of house or hotel you need");
for (var i = 0; i < numberOrder; i++){
    console.log ("i =" + i);
    if (order == "hotel"){
      orderPhoto = orderPhoto + '<img src ="images/hotel.png">';
    }
    else if (order == "house"){
        orderPhoto = orderPhoto + '<img src ="images/house.png">';
    }
}
return orderPhoto;
}
document.write (showOrder());


