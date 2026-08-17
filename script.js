const starsContainer = document.getElementById("stars");

// Create the normal twinkling stars
for (let i = 0; i < 120; i++) {
    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    star.style.animationDuration =
        2 + Math.random() * 4 + "s";

    starsContainer.appendChild(star);
}


// Create a shooting star
function createMeteor() {
    const meteor = document.createElement("div");

    meteor.classList.add("meteor");

    meteor.style.left =
        Math.random() * 80 + 10 + "%";

    meteor.style.top =
        Math.random() * 35 + "%";

    starsContainer.appendChild(meteor);

    setTimeout(() => {
        meteor.remove();
    }, 1200);
}


// A meteor appears every few seconds
setInterval(() => {

    // Sometimes create one
    if (Math.random() > 0.25) {
        createMeteor();
    }

}, 3500);
// Reveal blurred memories when tapped

const revealElements = document.querySelectorAll(".reveal");

// Start music on the first interaction

const music = document.getElementById("backgroundMusic");

let musicStarted = false;

revealElements.forEach(element => {

    element.addEventListener("click", () => {

        element.classList.add("open");

        if (!musicStarted) {

            music.play()
                .then(() => {
                    musicStarted = true;
                })
                .catch(error => {
                    console.log("Music could not start:", error);
                });

        }

    });

});