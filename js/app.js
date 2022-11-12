let firstP = document.getElementById(`firstP`);
firstP[`innerText`] = `City or Rural living: pros and cons.`;
firstP.style.color = `limegreen`;
firstP.style.fontWeight = `900`;
firstP[`style`][`fontsize`] = `2em`;
firstP.style.fontStyle = `italic`;

let title1 = document.getElementsByClassName(`title1`);
for (let i=0; i<title1.length; i++){
    title1[i].innerHTML += ` As long as there's coffee, it's all good.`;
}


let images = document.querySelectorAll(`img`);
for (let i=0; i<images.length; i++){
    images[i].setAttribute(`src`, `https://www.placecage.com/c/200/300`);
}

let allPTags = document.querySelectorAll(`p`);
for (const paragraph of allPTags) {
    console.log(paragraph);
    if (paragraph.innerText.includes(`link`)){
        paragraph.insertAdjacentHTML(`beforeend`, 
                        `<a href="https.//amazon.com">The shopping site</a>`);
    }
}
// introducing 'for of'. This type of loop exists in different languages. This would be 'for each' in other languages.
// a loop that is handy when you need it to perform an operation on each element and you don't care where they are
// we don't need access to each 'i' of the loop. This would not be useful if we wanted to attach the order (we don't know, we don't care)
// we just know it will go through them one by one.
