const hover = document.querySelector("button");
const toolhide = document.getElementById("TT");
const arrow = document.querySelector(".arrow");

document.onclick = function(e) {    
        if( e.target != toolhide && e.target != hover) {
        toolhide.classList.remove("tooltiptextvisib");        
} else { toolhide.classList.add("tooltiptextvisib") 
}
};


