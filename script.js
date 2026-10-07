/* =========================
   SCHOLARSHIP DATABASE
========================= */

const scholarships = [

    {
        name: "Engineering Excellence Scholarship",

        description:
            "Financial support for students pursuing undergraduate engineering programs.",

        degrees: ["btech"],

        departments: [
            "cse",
            "it",
            "ece",
            "eee",
            "mech",
            "civil",
            "aiml",
            "ds"
        ],

        years: ["1", "2", "3", "4"],

        income: ["1", "2", "3"],

        states: [
            "tamilnadu",
            "kerala",
            "karnataka",
            "andhra",
            "telangana",
            "maharashtra",
            "other"
        ],

        categories: [
            "general",
            "obc",
            "sc",
            "st",
            "other"
        ],

        amount: "₹50,000",

        deadline: "30 Nov 2026",

        type: "Merit Based"
    },


    {
        name: "Tamil Nadu Higher Education Scholarship",

        description:
            "Support for eligible students pursuing higher education in Tamil Nadu.",

        degrees: [
            "btech",
            "bsc",
            "bca",
            "bcom",
            "ba",
            "bba"
        ],

        departments: [
            "cse",
            "it",
            "ece",
            "eee",
            "mech",
            "civil",
            "aiml",
            "ds",
            "other"
        ],

        years: ["1", "2", "3", "4"],

        income: ["1", "2", "3"],

        states: ["tamilnadu"],

        categories: [
            "general",
            "obc",
            "sc",
            "st",
            "other"
        ],

        amount: "₹30,000",

        deadline: "15 Dec 2026",

        type: "State Scholarship"
    },


    {
        name: "Computer Science Future Leaders",

        description:
            "Scholarship opportunity for students studying computer science and related fields.",

        degrees: [
            "btech",
            "bca",
            "bsc"
        ],

        departments: [
            "cse",
            "it",
            "aiml",
            "ds"
        ],

        years: ["2", "3", "4"],

        income: ["1", "2", "3", "4"],

        states: [
            "tamilnadu",
            "kerala",
            "karnataka",
            "andhra",
            "telangana",
            "maharashtra",
            "other"
        ],

        categories: [
            "general",
            "obc",
            "sc",
            "st",
            "other"
        ],

        amount: "₹75,000",

        deadline: "10 Jan 2027",

        type: "Technology"
    },


    {
        name: "SC/ST Higher Education Support",

        description:
            "Financial assistance for eligible SC and ST students pursuing higher education.",

        degrees: [
            "btech",
            "bsc",
            "bca",
            "bcom",
            "ba",
            "bba"
        ],

        departments: [
            "cse",
            "it",
            "ece",
            "eee",
            "mech",
            "civil",
            "aiml",
            "ds",
            "other"
        ],

        years: ["1", "2", "3", "4"],

        income: ["1", "2", "3", "4"],

        states: [
            "tamilnadu",
            "kerala",
            "karnataka",
            "andhra",
            "telangana",
            "maharashtra",
            "other"
        ],

        categories: ["sc", "st"],

        amount: "₹60,000",

        deadline: "20 Dec 2026",

        type: "Category Based"
    },


    {
        name: "Women in Technology Scholarship",

        description:
            "Support for students pursuing technology and computer-related education.",

        degrees: [
            "btech",
            "bca",
            "bsc"
        ],

        departments: [
            "cse",
            "it",
            "aiml",
            "ds"
        ],

        years: ["1", "2", "3", "4"],

        income: ["1", "2", "3"],

        states: [
            "tamilnadu",
            "kerala",
            "karnataka",
            "andhra",
            "telangana",
            "maharashtra",
            "other"
        ],

        categories: [
            "general",
            "obc",
            "sc",
            "st",
            "other"
        ],

        amount: "₹50,000",

        deadline: "05 Jan 2027",

        type: "Technology"
    }

];


/* =========================
   FORM
========================= */

const form =
    document.getElementById("scholarshipForm");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const student = {

        name:
            document.getElementById("name").value.trim(),

        state:
            document.getElementById("state").value,

        degree:
            document.getElementById("degree").value,

        department:
            document.getElementById("department").value,

        year:
            document.getElementById("year").value,

        income:
            document.getElementById("income").value,

        category:
            document.getElementById("category").value

    };


    const matches =
        findScholarships(student);


    displayResults(
        student.name,
        matches
    );

});


/* =========================
   MATCHING SYSTEM
========================= */

function findScholarships(student) {

    const results = [];


    scholarships.forEach(function(scholarship) {

        let score = 0;

        let totalCriteria = 0;


        // Degree

        totalCriteria++;

        if (
            scholarship.degrees.includes(
                student.degree
            )
        ) {

            score++;

        }


        // Department

        totalCriteria++;

        if (
            scholarship.departments.includes(
                student.department
            )
        ) {

            score++;

        }


        // Year

        totalCriteria++;

        if (
            scholarship.years.includes(
                student.year
            )
        ) {

            score++;

        }


        // Income

        totalCriteria++;

        if (
            scholarship.income.includes(
                student.income
            )
        ) {

            score++;

        }


        // State

        totalCriteria++;

        if (
            scholarship.states.includes(
                student.state
            )
        ) {

            score++;

        }


        // Category

        totalCriteria++;

        if (
            scholarship.categories.includes(
                student.category
            )
        ) {

            score++;

        }


        const percentage =
            Math.round(
                (score / totalCriteria) * 100
            );


        /*
            Show scholarships with
            at least 50% compatibility.
        */

        if (percentage >= 50) {

            results.push({

                ...scholarship,

                match: percentage

            });

        }

    });


    // Highest match first

    results.sort(function(a, b) {

        return b.match - a.match;

    });


    return results;

}


/* =========================
   DISPLAY RESULTS
========================= */

function displayResults(
    name,
    matches
) {

    const resultsSection =
        document.getElementById(
            "resultsSection"
        );


    const resultsContainer =
        document.getElementById(
            "scholarshipResults"
        );


    const resultMessage =
        document.getElementById(
            "resultMessage"
        );


    const resultCount =
        document.getElementById(
            "resultCount"
        );


    resultsSection.style.display =
        "block";


    resultsContainer.innerHTML = "";


    resultCount.textContent =
        `${matches.length} matches`;


    if (matches.length === 0) {

        resultMessage.textContent =
            `Sorry ${name}, we couldn't find scholarships matching your profile.`;

        resultsContainer.innerHTML = `

            <div class="scholarship-card">

                <h3>No scholarships found</h3>

                <p>
                    Try updating your profile details
                    or check again later for new opportunities.
                </p>

            </div>

        `;

        resultsSection.scrollIntoView({
            behavior: "smooth"
        });

        return;

    }


    resultMessage.textContent =
        `${name}, we found ${matches.length} scholarship opportunities that match your profile.`;


    matches.forEach(function(scholarship) {

        const card =
            document.createElement("div");


        card.className =
            "scholarship-card";


        card.innerHTML = `

            <div class="card-top">

                <h3>
                    ${scholarship.name}
                </h3>

                <span class="match-badge">
                    ${scholarship.match}% Match
                </span>

            </div>


            <p>
                ${scholarship.description}
            </p>


            <div class="card-info">

                <span class="info-item">
                    🎓 ${scholarship.type}
                </span>

                <span class="info-item">
                    📅 ${scholarship.deadline}
                </span>

            </div>


            <div class="card-bottom">

                <div class="amount">

                    <strong>
                        ${scholarship.amount}
                    </strong>

                    <span>
                        Scholarship amount
                    </span>

                </div>


                <a
                    href="#"
                    class="apply-btn"
                    onclick="viewScholarship('${scholarship.name}')"
                >
                    View Details
                </a>

            </div>

        `;


        resultsContainer.appendChild(card);

    });


    resultsSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   SCHOLARSHIP DETAILS
========================= */

function viewScholarship(name) {

    alert(
        `You selected: ${name}\n\n` +
        `In the final version, this button will open ` +
        `the official scholarship page.`
    );

}


/* =========================
   DARK MODE
========================= */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


themeToggle.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "dark"
        );


        const darkMode =
            document.body.classList.contains(
                "dark"
            );


        themeToggle.textContent =
            darkMode
                ? "☀️"
                : "🌙";


        /*
            Save theme preference
        */

        localStorage.setItem(
            "theme",
            darkMode
                ? "dark"
                : "light"
        );

    }
);


/* =========================
   LOAD SAVED THEME
========================= */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";

}