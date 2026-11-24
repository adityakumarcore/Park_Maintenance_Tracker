// ================================
// PARK SEARCH
// ================================

function searchParks() {

    const input = document
        .getElementById("parkSearch")
        .value
        .toLowerCase();

    const parks = document.querySelectorAll(".park-card");

    parks.forEach(park => {

        const name = park
            .getAttribute("data-name")
            .toLowerCase();

        if (name.includes(input)) {
            park.style.display = "block";
        } else {
            park.style.display = "none";
        }

    });
}


// ================================
// IMAGE PREVIEW
// ================================

function previewImage(event) {

    const preview = document.getElementById("imagePreview");

    preview.innerHTML = "";

    const file = event.target.files[0];

    if (file) {

        const image = document.createElement("img");

        image.src = URL.createObjectURL(file);

        preview.appendChild(image);

    }
}


// ================================
// ISSUE SUBMISSION
// ================================

document
    .getElementById("issueForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const park = document.getElementById("parkName").value;
        const category = document.getElementById("category").value;
        const title = document.getElementById("issueTitle").value;
        const description = document.getElementById("description").value;
        const location = document.getElementById("location").value;

        if (!park || !category || !title || !description || !location) {

            alert("Please fill all required fields.");

            return;
        }

        const issueId =
            "PK-" +
            Math.floor(1000 + Math.random() * 9000);

        const issueList =
            document.getElementById("issueList");

        const issue = document.createElement("div");

        issue.className = "issue-card";

        issue.setAttribute("data-status", "reported");

        issue.innerHTML = `

            <div class="issue-top">

                <span class="issue-id">
                    #${issueId}
                </span>

                <span class="status reported">
                    Reported
                </span>

            </div>

            <h3>${title}</h3>

            <p>
                📍 ${park} - ${location}
            </p>

            <p>
                📝 ${description}
            </p>

            <p>
                🏷️ Category: ${category}
            </p>

            <div class="issue-footer">

                <span>
                    👷 Not Assigned
                </span>

                <span>
                    📅 Today
                </span>

            </div>
        `;

        issueList.prepend(issue);

        alert(
            `Issue submitted successfully!\n\nYour Issue ID is #${issueId}`
        );

        this.reset();

        document.getElementById("imagePreview").innerHTML = "";

        updateIssueCount();

        document
            .getElementById("issues")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


// ================================
// ISSUE SEARCH + FILTER
// ================================

function filterIssues() {

    const search =
        document
            .getElementById("issueSearch")
            .value
            .toLowerCase();

    const status =
        document
            .getElementById("statusFilter")
            .value;

    const issues =
        document.querySelectorAll(".issue-card");

    issues.forEach(issue => {

        const text =
            issue.innerText.toLowerCase();

        const issueStatus =
            issue.getAttribute("data-status");

        const matchesSearch =
            text.includes(search);

        const matchesStatus =
            status === "all" ||
            issueStatus === status;

        if (matchesSearch && matchesStatus) {

            issue.style.display = "block";

        } else {

            issue.style.display = "none";

        }

    });
}


// ================================
// UPDATE ISSUE COUNT
// ================================

function updateIssueCount() {

    const issues =
        document.querySelectorAll(".issue-card").length;

    document.getElementById("issueCount").innerText =
        128 + issues - 3;
}


// ================================
// LOGIN BUTTON
// ================================

document
    .querySelector(".login-btn")
    .addEventListener("click", function() {

        alert(
            "Resident Login\n\nLogin functionality can be connected to a backend later."
        );

    });