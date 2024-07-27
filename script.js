document.getElementById("download-link").addEventListener("click", (event) => {
    const link = document.createElement("a");
    link.href = "Bean-Regular.ttf"
    link.download = "Bean-Regular.ttf"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});