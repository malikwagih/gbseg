// var solvent="";
// var solute="";
// var pic = "./img/blank.png"; 
// var picpoly = "./img/blank.png";
var maxPicsNum=4;

var data={
    "Ag" : ['Al', 'Au', 'Co', 'Cu', 'Fe', 'Mg', 'Mo', 'Ni', 'Pb', 'Pd', 'Pt', 'Ta', 'Ti', 'W', 'Zr'],
    "Al" : ['Ag', 'Au', 'Co', 'Cu', 'Fe', 'Mg', 'Mo', 'Nb', 'Ni', 'Pb', 'Pd', 'Pt', 'Si', 'Sm', 'Ta', 'Ti', 'W', 'Zn', 'Zr'],
    "Au" : ['Ag', 'Al', 'Co', 'Cu', 'Fe', 'Mg', 'Mo', 'Ni', 'Pb', 'Pd', 'Pt', 'Si', 'Ta', 'Ti', 'W', 'Zr'],
    "Co" : ['Ag', 'Al', 'Au', 'Cr', 'Cu', 'Fe', 'Mg', 'Mo', 'Ni', 'Pb', 'Pd', 'Pt', 'Ta', 'Ti', 'W', 'Zr'],
    "Cr" : ['Fe', 'Ni', 'W'],
    "Cu" : ['Ag', 'Al', 'Au', 'Co', 'Cr', 'Fe', 'Mg', 'Mo', 'Ni', 'Pb', 'Pd', 'Pt', 'Si', 'Ta', 'Ti', 'W', 'Zr'],
    "Fe" : ['Ag', 'Al', 'Au', 'Co', 'Cr', 'Cu', 'Mg', 'Mn', 'Mo', 'Ni', 'P', 'Pb', 'Pd', 'Pt', 'Si', 'Ta', 'Ti', 'V', 'W', 'Zr'],
    "Mg" : ['Ag', 'Al', 'Au', 'Co', 'Cu', 'Fe', 'Mo', 'Ni', 'Pb', 'Pd', 'Pt', 'Si', 'Ta', 'Ti', 'W', 'Zn', 'Zr'],
    "Mo" : ['Ag', 'Al', 'Au', 'Co', 'Cu', 'Fe', 'Mg', 'Ni', 'Pb', 'Pd', 'Pt', 'Ta', 'Ti', 'W', 'Zr'],
    "Nb" : ['Al', 'Ni', 'Ti', 'Zr'],
    "Ni" : ['Ag', 'Al', 'Au', 'Co', 'Cr', 'Cu', 'Fe', 'Mg', 'Mo', 'Nb', 'Pb', 'Pd', 'Pt', 'Ta', 'Ti', 'V', 'W', 'Zr'],
    "Pd" : ['Ag', 'Al', 'Au', 'Co', 'Cu', 'Fe', 'Mg', 'Mo', 'Ni', 'Pb', 'Pt', 'Ta', 'Ti', 'W', 'Zr'],
    "Pt" : ['Ag', 'Al', 'Au', 'Co', 'Cu', 'Fe', 'Mg', 'Mo', 'Ni', 'Pb', 'Pd', 'Ta', 'Ti', 'W', 'Zr'],
    "Re" : ['W'],
    "Ta" : ['Ag', 'Al', 'Au', 'Co', 'Cu', 'Fe', 'Mg', 'Mo', 'Ni', 'Pb', 'Pd', 'Pt', 'Ti', 'W', 'Zr'],
    "Ti" : ['Ag', 'Al', 'Au', 'Co', 'Cu', 'Fe', 'Mg', 'Mo', 'Nb', 'Ni', 'Pb', 'Pd', 'Pt', 'Ta', 'V', 'W', 'Zr'],
    "V" : ['Fe', 'Ni', 'Ti'],
    "W" : ['Ag', 'Al', 'Au', 'Co', 'Cr', 'Cu', 'Fe', 'Mg', 'Mo', 'Ni', 'Pb', 'Pd', 'Pt', 'Re', 'Ta', 'Ti', 'Zr'],
    "Zr" : ['Ag', 'Al', 'Au', 'Co', 'Cu', 'Fe', 'Mg', 'Mo', 'Nb', 'Ni', 'Pb', 'Pd', 'Pt', 'Ta', 'Ti', 'W'],
    // "Ni":["Zr","Ag"],
    // "Fe":["Al","Mg"],
}

updateSolvent();

for(var i=0;i<maxPicsNum;i++){
    $( "body" ).append( 
        "<img id=bigpic"+i+" src=./img/blank.png style=display:none;vertical-align:top; width=40%/> "//+
        // ""+
        // "<img id=poly"+i+" src=./img/blank.png style=display:none;vertical-align:top; width=35%/> " 
    );
}
// $(document).ready(function(){

//     $("img").error(function() {
//         $(this).parent().remove();
//     });

// });

// $(".img").on("error", function () {
//     // $(this).attr("src", "broken.gif");
//     console.log("errooorr")
//     $(this).parent().remove();
// });

$(window).bind('load', function() {
    $('img').each(function() {
      if( (typeof this.naturalWidth != "undefined" && this.naturalWidth == 0) 
      ||  this.readyState == 'uninitialized'                                  ) {
          $(this).attr('src', './img/blank.png');
      }
    });
  });


///////////////////////////////

function checkImage(imageSrc, good, bad) {
    var img = new Image();
    img.onload  = good; 
    img.onerror = bad;
    img.src = imageSrc;
}

// function exist(solvent,solute,pic,picpoly,num){
function exist(solvent,solute,pic,num){

    console.log(pic)

    // Displaying the value
    if (num==0){
        document.getElementById("output").innerHTML = solvent+"("+solute+")";
    }
    if(num<maxPicsNum){

        
        document.getElementById("bigpic"+num).style.display='inline';
        document.getElementById("bigpic"+num).src = pic; 
        // document.getElementById("poly"+num).style.display='inline';
        // document.getElementById("poly"+num).src = picpoly; 
        
        var i=num+1;
        var pic = "./img/"+solvent+solute+i+".png"; //"./js/"+
        // var picpoly = "./img/"+solvent+solute+"Poly"+i+".png";
        // checkImage(pic, function(){ return exist(solvent,solute,pic,picpoly,i)}, function(){ return not_exist(solvent,solute,i)});
        checkImage(pic, function(){ return exist(solvent,solute,pic,i)}, function(){ return not_exist(solvent,solute,i)});
        

    }
        

}

function not_exist(solvent,solute,num){
    if (num==0){
        document.getElementById("output").innerHTML = solvent+"("+solute+") is not currently available.";
    }
    if(num<maxPicsNum){
        document.getElementById("bigpic"+num).style.display='inline';
        document.getElementById("bigpic"+num).src = "./img/blank.png"; 
        // document.getElementById("poly"+num).style.display='inline';
        // document.getElementById("poly"+num).src = "./img/blank.png"; 
    }

}


///////////

$("#solvent").change(function () {         
    var val = $(this).val();
    updateSolute(data[val]);
      
});

$("#solute").change(function () {         
    var val = $(this).val();
    var solvent = $("#solvent").val()
    var solute = $(this).val();

    for(var i=0;i<maxPicsNum;i++){
        document.getElementById("bigpic"+i).style.display='inline';
        document.getElementById("bigpic"+i).src = "./img/blank.png"; 
        // document.getElementById("poly"+i).style.display='inline';
        // document.getElementById("poly"+i).src = "./img/blank.png"; 
    }

    
    // for(var i=0;i<maxPicsNum;i++){
    var i=0; 
    var pic = "./img/"+solvent+solute+i+".png"; //"./js/"+
    // var picpoly = "./img/"+solvent+solute+"Poly"+i+".png";
    checkImage(pic, function(){ return exist(solvent,solute,pic,i)}, function(){ return not_exist(solvent,solute,i)});
    // checkImage(pic, function(){ return exist(solvent,solute,pic,picpoly,i)}, function(){ return not_exist(solvent,solute,i)});
    // }

    
      
});

function updateSolvent(){
    $('#solvent')
    .find('option')
    .remove()
    .end()
    .append("<option value=hide>"+"------ Choose Solvent ------" +"</option>");
        
    $.each(data, function(key,value){
        $("#solvent").append(
            "<option value=" + key +">"+key+"</option>"
            // "<option value=" + value.id +">"+value.name+"</option>"
        );
    });

}

function updateSolute(value){
    $('#solute')
    .find('option')
    .remove()
    .end()
    .append("<option value=hide>"+"------ Choose Solute ------" +"</option>");
    

    $.each(value, function(key1,value1){
        // console.log(value1)
        $("#solute").append(
            "<option value=" + value1 +">"+value1+"</option>"
        );
    });
}


///////////

