function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    let viewStr
if (views<1000){
 viewStr = views;
}
else if (views>1000000){
    viewStr = views/100000 + "M";
}else{
    viewStr = views/1000 + "k"
}

    let html = `  <div class="card">
    <div class="image">
        <img src="${thumbnail}">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName}  .  ${viewStr} views  . ${monthsOld} months ago</p>
    </div>
</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML+ html
}

createCard("Introduction to Development | Sigma Web Dev Course", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWfGPsuQKuWateaRbWeBo1MDhM3A")