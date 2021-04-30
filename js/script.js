function getInputValue(){
    // Selecting the input element and get its value 
    var solvent = document.getElementById("Solvent").value;
    var solute = document.getElementById("Solute").value;
    
    var pic = "./js/"+solvent+solute+".png"; //"./js/"+
    var picpoly = "./js/"+solvent+solute+"Poly.png";
    
    function checkImage(imageSrc, good, bad) {
        var img = new Image();
        img.onload  = good; 
        img.onerror = bad;
        img.src = imageSrc;
    }
    
    checkImage(pic, exist, not_exist);

    // $.get(pic).done(exist).fail(not_exist)

    function exist(){
        // Displaying the value
        document.getElementById("output").innerHTML = solvent+"-"+solute;
        // 
        document.getElementById('bigpic').style.display='inline';
        // document.getElementById('bigpic').style.opacity=0.5;
        document.getElementById('bigpic').src = pic; //.replace('90x90', '225x225');

        document.getElementById('poly').style.display='inline';
        document.getElementById('poly').src = picpoly; //.replace('90x90', '225x225');

    }

    function not_exist(){
        document.getElementById("output").innerHTML = solvent+"-"+solute+" not available";
    }
}

// let d = new Date();
// document.getElementById("output").innerHTML = ""
