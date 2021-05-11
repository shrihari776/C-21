function isTouching(object1,object4){
    if (object1.x - object4.x < object4.width/2 + object1.width/2
      && object4.x - object1.x < object4.width/2 + object1.width/2
      && object1.y - object4.y < object4.height/2 + object1.height/2
      && object4.y - object1.y < object4.height/2 + object1.height/2) {
   
  
    return true;
  }
  else {
   
  
    return false;
  }
  }