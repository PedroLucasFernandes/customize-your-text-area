const fontSize = document.getElementById("fontSize");
const fontFamily = document.getElementById("fontFamily");
const fontColor = document.getElementById("fontColor");
const bgColor = document.getElementById("bgColor");
const text = document.getElementById("textarea");

let form = {
    fontSize: "12",
    fontFamily: "Arial",
    fontColor: "#000000",
    bgColor: "#FFFFFF"
};

try {
    const savedText = localStorage.getItem("text");
    const savedForm = localStorage.getItem("form");

    if (savedText !== null) {
        text.value = savedText;
    }

    if (savedForm !== null) {
        form = JSON.parse(savedForm);

        text.style.fontSize = form.fontSize + "px";
        text.style.fontFamily = form.fontFamily;
        text.style.backgroundColor = form.bgColor;
        text.style.color = form.fontColor;

        fontSize.value = form.fontSize;
        fontFamily.value = form.fontFamily;
        bgColor.value = form.bgColor;
        fontColor.value = form.fontColor;
    }
} catch (error) {
    alert(error);
}

fontSize.addEventListener("change", function () {
    text.style.fontSize = this.value + "px";
    form.fontSize = this.value;
    updateLocalStorage();
});

fontFamily.addEventListener("change", function () {
    text.style.fontFamily = this.value;
    form.fontFamily = this.value;
    updateLocalStorage();
});

fontColor.addEventListener("change", function () {
    text.style.color = this.value;
    form.fontColor = this.value;
    updateLocalStorage();
});

bgColor.addEventListener("change", function () {
    text.style.backgroundColor = this.value;
    form.bgColor = this.value;
    updateLocalStorage();
});

text.addEventListener("input", function () {
    updateLocalStorage();
});

function updateLocalStorage() {
    localStorage.setItem("text", text.value);
    localStorage.setItem("form", JSON.stringify(form));
}