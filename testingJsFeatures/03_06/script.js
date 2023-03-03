/**
 * Create a Backpack object.
 */

const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    },
  };
  
  console.log("The backpack object:", backpack);
  console.log("the backpack object:", backpack.pocketNum);
  console.log("the straplength left:", backpack.strapLength.left);
  // when the variable lenght is not standard and may vary when the async module is loaded and then we have more control and do more advanced things

  var query = "pocketNum";  //  we need to enclose the name of the object in a string to make it to work

  console.log("the pocketNum value:", backpack[query]);


                                    