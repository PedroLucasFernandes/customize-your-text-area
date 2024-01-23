const fontSize = document.getElementById("fontSize");
const fontFamily = document.getElementById("fontFamily");
const fontColor = document.getElementById("fontColor");
const bgColor = document.getElementById("bgColor");
const text = document.getElementById("textarea");

const form =
    localStorage.getItem("form") !== null
    ? JSON.parse(localStorage.getItem("form"))
    :  {
    fontSize: "12",
    fontFamily: "Arial",
    fontColor: "#000000",
    bgColor: "#FFFFFF"
}

try {
    if(localStorage.getItem("text") !== null){
        text.value = localStorage.getItem("text");
    }

    if(localStorage.getItem("form") !== null){
        const formData = JSON.parse(localStorage.getItem("form"));

        fontSize.value = formData.fontSize;
        fontFamily.value = formData.fontFamily;
        bgColor.value = formData.bgColor;
        fontColor.value = formData.fontColor;

        text.style.fontSize = fontSize.value + "px";
        text.style.fontFamily = fontFamily.value;
        text.style.backgroundColor = bgColor.value;
        text.style.color = fontColor.value;
    }
} catch (error) {
    alert(error);
}

fontSize.addEventListener("change", function(){
    text.style.fontSize = this.value + "px";
    
    form.fontSize = this.value;
    localStorage.setItem("form", JSON.stringify(form));
});

fontFamily.addEventListener("change", function(){
    text.style.fontFamily = this.value;
    
    form.fontFamily = this.value;
    localStorage.setItem("form", JSON.stringify(form));
});

fontColor.addEventListener("change", function(){
    text.style.color = this.value;
    
    form.fontColor = this.value;
    localStorage.setItem("form", JSON.stringify(form));
});

bgColor.addEventListener("change", function(){
    text.style.backgroundColor = this.value;
    
    form.bgColor = this.value;
    localStorage.setItem("form", JSON.stringify(form));
});

text.addEventListener("change", function(){
    localStorage.setItem("text", JSON.stringify(text.value));
});