document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open");
    return false;
});

document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open");
    return false;
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open");
    }
});
