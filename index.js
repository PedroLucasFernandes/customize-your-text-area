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

const importButton = document.getElementById("importButton");
const importModal = document.getElementById("importModal");
const closeExportModal = document.getElementById("closeExportModal");

const exportButton = document.getElementById("exportButton");
const exportModal = document.getElementById("exportModal");
const closeImportModal = document.getElementById("closeImportModal");


importButton.addEventListener("click", function(){
    importModal.style.display = "flex";
    importModal.style.position = "absolute";
    importModal.style.left = "50vw";
    importModal.style.top = "50vh";
});

exportButton.addEventListener("click", function(){
    exportModal.style.display = "flex";
    exportModal.style.position = "absolute";
    exportModal.style.left = "50vw";
    exportModal.style.top = "50vh";

    const exportCode = document.getElementById("exportCode");
    
    form.text = text.value;

    exportCode.innerText = JSON.stringify(form, null, 2);
});

closeImportModal.addEventListener("click", function(){
    importModal.style.display = "none";

    const importCode = document.getElementById("importCode");
    try {
        const importedForm = JSON.parse(importCode.value);
        form.fontSize = importedForm.fontSize;
        form.fontFamily = importedForm.fontFamily;
        form.fontColor = importedForm.fontColor;
        form.bgColor = importedForm.bgColor;
        form.text = importedForm.text;
        updatePageWithForm();
    } catch (error) {
        alert("Error parsing the imported JSON.");
    }
});

closeExportModal.addEventListener("click", function(){
    exportModal.style.display = "none";
});

function updatePageWithForm() {
    text.style.fontSize = form.fontSize + "px";
    text.style.fontFamily = form.fontFamily;
    text.style.backgroundColor = form.bgColor;
    text.style.color = form.fontColor;

    fontSize.value = form.fontSize;
    fontFamily.value = form.fontFamily;
    bgColor.value = form.bgColor;
    fontColor.value = form.fontColor;

    text.value = form.text;
    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem("text", text.value);
    localStorage.setItem("form", JSON.stringify(form));
}