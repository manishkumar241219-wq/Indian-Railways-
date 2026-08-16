/* =========================================================
   INDIA THROUGH THE RAILWAY WINDOW
   MAIN SCRIPT
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

/* ---------- Explore ---------- */

const exploreButton =
    document.getElementById("exploreButton");

const exploreModal =
    document.getElementById("exploreModal");

const closeExplore =
    document.getElementById("closeExplore");


/* ---------- Build With Us ---------- */

const collaborateButton =
    document.getElementById("collaborateButton");

const collaborationModal =
    document.getElementById("collaborationModal");

const closeCollaboration =
    document.getElementById("closeCollaboration");


/* ---------- Add Website ---------- */

const addProjectButton =
    document.getElementById("addProjectButton");

const addWebsiteModal =
    document.getElementById("addWebsiteModal");

const closeAddWebsite =
    document.getElementById("closeAddWebsite");


/* ---------- Form ---------- */

const websiteForm =
    document.getElementById("websiteForm");

const creatorNameInput =
    document.getElementById("creatorName");

const websiteDescriptionInput =
    document.getElementById("websiteDescription");

const websiteURLInput =
    document.getElementById("websiteURL");

const formError =
    document.getElementById("formError");


/* ---------- Creator List ---------- */

const creatorList =
    document.getElementById("creatorList");


/* ---------- Page ---------- */

const page =
    document.querySelector(".page");


/* ---------- Place Cards ---------- */

const placeCards =
    document.querySelectorAll(".place-card");



/* =========================================================
   CONFIGURATION
========================================================= */


/*
 * IMPORTANT:
 *
 * All website submissions will be sent
 * to this email address.
 */

const SUBMISSION_EMAIL =
    "manishkumar241219@gmail.com";


/*
 * Email subject.
 */

const SUBMISSION_SUBJECT =
    "India through Railways Project submission";


/*
 * Local storage key.
 */

const STORAGE_KEY =
    "railwayCommunityProjects";



/* =========================================================
   DEFAULT COMMUNITY PROJECTS
========================================================= */

const defaultProjects = [

    {
        id: "manish-original",

        name: "Manish Kumar",

        description:
            "India Through the Railway Window",

        url: "#",

        likes: 1248,

        category: "Original"

    },


    {
        id: "roadways-music",

        name: "Manish Kumar",

        description:
            "Roadways Music",

        url:
            "https://manishkumar241219-wq.github.io/music-player-deploy/",

        likes: 342,

        category: "Music"

    }

];



/* =========================================================
   GET PROJECTS
========================================================= */

function getProjects() {

    const savedProjects =
        localStorage.getItem(STORAGE_KEY);


    /*
     * If nothing has been saved before,
     * use the default projects.
     */

    if (!savedProjects) {

        return defaultProjects;

    }


    try {

        const parsedProjects =
            JSON.parse(savedProjects);


        if (
            Array.isArray(parsedProjects)
        ) {

            return parsedProjects;

        }

    }

    catch (error) {

        console.error(
            "Error reading projects:",
            error
        );

    }


    return defaultProjects;

}



/* =========================================================
   SAVE PROJECTS
========================================================= */

function saveProjects(projects) {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(projects)
        );

    }

    catch (error) {

        console.error(
            "Error saving projects:",
            error
        );

    }

}



/* =========================================================
   INITIALIZE PROJECT STORAGE
========================================================= */

if (
    !localStorage.getItem(STORAGE_KEY)
) {

    saveProjects(defaultProjects);

}



/* =========================================================
   EXPLORE UTTARAKHAND
========================================================= */


/* ---------- Open Explore ---------- */

if (exploreButton) {

    exploreButton.addEventListener(
        "click",
        function () {

            exploreModal.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";

        }
    );

}



/* ---------- Close Explore ---------- */

function closeExploreModal() {

    if (!exploreModal) {
        return;
    }


    exploreModal.classList.remove(
        "active"
    );


    document.body.style.overflow = "";

}


if (closeExplore) {

    closeExplore.addEventListener(
        "click",
        closeExploreModal
    );

}



/* =========================================================
   BUILD WITH US
========================================================= */


/* ---------- Open Build With Us ---------- */

if (collaborateButton) {

    collaborateButton.addEventListener(
        "click",
        function () {

            renderProjects();


            collaborationModal.classList.add(
                "active"
            );


            document.body.style.overflow =
                "hidden";

        }
    );

}



/* ---------- Close Build With Us ---------- */

function closeCollaborationModal() {

    if (!collaborationModal) {
        return;
    }


    collaborationModal.classList.remove(
        "active"
    );


    document.body.style.overflow = "";

}


if (closeCollaboration) {

    closeCollaboration.addEventListener(
        "click",
        closeCollaborationModal
    );

}



/* =========================================================
   ADD WEBSITE
========================================================= */


/* ---------- Open Add Website ---------- */

if (addProjectButton) {

    addProjectButton.addEventListener(
        "click",
        function () {

            /*
             * Close community modal.
             */

            collaborationModal.classList.remove(
                "active"
            );


            /*
             * Reset form.
             */

            if (websiteForm) {

                websiteForm.reset();

            }


            if (formError) {

                formError.textContent = "";

            }


            /*
             * Open submission modal.
             */

            addWebsiteModal.classList.add(
                "active"
            );

        }
    );

}



/* ---------- Close Add Website ---------- */

function closeAddWebsiteModal() {

    if (!addWebsiteModal) {
        return;
    }


    addWebsiteModal.classList.remove(
        "active"
    );


    /*
     * Return to Build With Us.
     */

    collaborationModal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


if (closeAddWebsite) {

    closeAddWebsite.addEventListener(
        "click",
        closeAddWebsiteModal
    );

}



/* =========================================================
   WEBSITE SUBMISSION
========================================================= */

if (websiteForm) {

    websiteForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /*
             * Clear previous error.
             */

            formError.textContent = "";



            /* =================================================
               GET FORM VALUES
            ================================================= */

            const name =
                creatorNameInput.value.trim();


            const description =
                websiteDescriptionInput.value.trim();


            let url =
                websiteURLInput.value.trim();



            /* =================================================
               VALIDATE NAME
            ================================================= */

            if (
                name.length < 2
            ) {

                formError.textContent =
                    "Please enter your name.";

                return;

            }



            /* =================================================
               VALIDATE DESCRIPTION
            ================================================= */

            if (
                description.length < 5
            ) {

                formError.textContent =
                    "Please describe your website.";

                return;

            }



            /* =================================================
               VALIDATE URL
            ================================================= */

            if (!url) {

                formError.textContent =
                    "Please enter your website URL.";

                return;

            }



            /* =================================================
               ADD HTTPS IF MISSING
            ================================================= */

            if (
                !url.startsWith("http://") &&
                !url.startsWith("https://")
            ) {

                url =
                    "https://" + url;

            }



            /* =================================================
               VALIDATE URL FORMAT
            ================================================= */

            try {

                const parsedURL =
                    new URL(url);


                /*
                 * Only allow normal web URLs.
                 */

                if (
                    parsedURL.protocol !== "http:" &&
                    parsedURL.protocol !== "https:"
                ) {

                    throw new Error(
                        "Invalid protocol"
                    );

                }

            }

            catch (error) {

                formError.textContent =
                    "Please enter a valid website URL.";

                return;

            }



            /* =================================================
               CREATE EMAIL BODY
            ================================================= */

            const body =
`Hello Manish,

New website submission for the India Through the Railway Window project.

Name:
${name}

Description:
${description}

Website URL:
${url}

Please review the website and add it to the community if it fits the project.

Thank you.`;



            /* =================================================
               CREATE GMAIL COMPOSE URL
            ================================================= */

            const gmailURL =
                "https://mail.google.com/mail/?" +
                "view=cm" +
                "&fs=1" +
                "&to=" +
                encodeURIComponent(
                    SUBMISSION_EMAIL
                ) +
                "&su=" +
                encodeURIComponent(
                    SUBMISSION_SUBJECT
                ) +
                "&body=" +
                encodeURIComponent(
                    body
                );



            /* =================================================
               CLOSE SUBMISSION MODAL
            ================================================= */

            addWebsiteModal.classList.remove(
                "active"
            );


            document.body.style.overflow =
                "";



            /* =================================================
               OPEN GMAIL
            ================================================= */

            window.open(
                gmailURL,
                "_blank",
                "noopener,noreferrer"
            );



            /* =================================================
               RESET FORM
            ================================================= */

            websiteForm.reset();

        }
    );

}



/* =========================================================
   RENDER COMMUNITY PROJECTS
========================================================= */

function renderProjects() {

    if (!creatorList) {
        return;
    }


    const projects =
        getProjects();


    /*
     * Clear existing cards.
     */

    creatorList.innerHTML = "";



    /*
     * Create cards.
     */

    projects.forEach(
        function (project) {

            const card =
                createProjectCard(project);


            creatorList.appendChild(
                card
            );

        }
    );

}



/* =========================================================
   CREATE CREATOR CARD
========================================================= */

function createProjectCard(project) {

    /*
     * Main button.
     */

    const card =
        document.createElement("button");


    card.className =
        "creator-card";


    card.type =
        "button";


    card.dataset.url =
        project.url;


    card.dataset.name =
        project.name;



    /* =================================================
       AVATAR
    ================================================= */

    const avatar =
        document.createElement("div");


    avatar.className =
        "creator-avatar";


    avatar.textContent =
        getInitials(
            project.name
        );



    /* =================================================
       CREATOR INFO
    ================================================= */

    const info =
        document.createElement("div");


    info.className =
        "creator-info";



    /* ---------- Name ---------- */

    const name =
        document.createElement("h3");


    name.textContent =
        project.name;



    /* ---------- Description ---------- */

    const description =
        document.createElement("p");


    description.textContent =
        project.description;



    /* ---------- Meta ---------- */

    const meta =
        document.createElement("div");


    meta.className =
        "creator-meta";



    /* ---------- Likes ---------- */

    const likes =
        document.createElement("span");


    likes.className =
        "likes";


    likes.textContent =
        "♥ " +
        formatNumber(
            project.likes
        );



    /* ---------- Category ---------- */

    const category =
        document.createElement("span");


    category.textContent =
        project.category;



    /*
     * Add metadata.
     */

    meta.appendChild(
        likes
    );


    meta.appendChild(
        category
    );



    /*
     * Add creator information.
     */

    info.appendChild(
        name
    );


    info.appendChild(
        description
    );


    info.appendChild(
        meta
    );



    /* =================================================
       ARROW
    ================================================= */

    const arrow =
        document.createElement("div");


    arrow.className =
        "creator-arrow";


    arrow.textContent =
        "→";



    /* =================================================
       ADD EVERYTHING TO CARD
    ================================================= */

    card.appendChild(
        avatar
    );


    card.appendChild(
        info
    );


    card.appendChild(
        arrow
    );



    /* =================================================
       CARD CLICK
    ================================================= */

    card.addEventListener(
        "click",
        function () {

            /*
             * Original project does not
             * need to open a website.
             */

            if (
                !project.url ||
                project.url === "#"
            ) {

                return;

            }


            openCreatorWebsite(
                project.url
            );

        }
    );



    return card;

}



/* =========================================================
   FORMAT NUMBERS
========================================================= */

function formatNumber(number) {

    if (
        typeof number !== "number"
    ) {

        return "0";

    }


    return number.toLocaleString(
        "en-IN"
    );

}



/* =========================================================
   GET CREATOR INITIALS
========================================================= */

function getInitials(name) {

    if (!name) {

        return "??";

    }


    const words =
        name
            .trim()
            .split(/\s+/);



    /*
     * One word name.
     */

    if (
        words.length === 1
    ) {

        return words[0]
            .substring(0, 2)
            .toUpperCase();

    }



    /*
     * Multiple word name.
     */

    return (
        words[0].charAt(0) +
        words[
            words.length - 1
        ].charAt(0)
    ).toUpperCase();

}



/* =========================================================
   OPEN CREATOR WEBSITE
========================================================= */

function openCreatorWebsite(url) {

    /*
     * Close community modal.
     */

    if (collaborationModal) {

        collaborationModal.classList.remove(
            "active"
        );

    }


    /*
     * Start fade transition.
     */

    if (page) {

        page.classList.add(
            "page-fade-out"
        );

    }



    /*
     * Wait for fade animation,
     * then navigate in the same tab.
     */

    setTimeout(
        function () {

            window.location.href =
                url;

        },
        450
    );

}



/* =========================================================
   EXPLORE PLACE CARDS
========================================================= */

placeCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function () {

                const place =
                    card.dataset.place;


                /*
                 * For now, just close
                 * the modal.
                 *
                 * We can later connect
                 * each place to its own
                 * experience.
                 */

                console.log(
                    "Selected place:",
                    place
                );


                closeExploreModal();

            }
        );

    }
);



/* =========================================================
   CLICK OUTSIDE EXPLORE MODAL
========================================================= */

if (exploreModal) {

    exploreModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                exploreModal
            ) {

                closeExploreModal();

            }

        }
    );

}



/* =========================================================
   CLICK OUTSIDE COMMUNITY MODAL
========================================================= */

if (collaborationModal) {

    collaborationModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                collaborationModal
            ) {

                closeCollaborationModal();

            }

        }
    );

}



/* =========================================================
   CLICK OUTSIDE ADD WEBSITE MODAL
========================================================= */

if (addWebsiteModal) {

    addWebsiteModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                addWebsiteModal
            ) {

                closeAddWebsiteModal();

            }

        }
    );

}



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !== "Escape"
        ) {

            return;

        }



        /*
         * Close Add Website first.
         */

        if (
            addWebsiteModal &&
            addWebsiteModal.classList.contains(
                "active"
            )
        ) {

            closeAddWebsiteModal();

            return;

        }



        /*
         * Close Community.
         */

        if (
            collaborationModal &&
            collaborationModal.classList.contains(
                "active"
            )
        ) {

            closeCollaborationModal();

            return;

        }



        /*
         * Close Explore.
         */

        if (
            exploreModal &&
            exploreModal.classList.contains(
                "active"
            )
        ) {

            closeExploreModal();

        }

    }
);



/* =========================================================
   INITIALIZE
========================================================= */

renderProjects();