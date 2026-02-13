
const specializations = {
    btech: [
        "Computer Science Engineering (CSE)",
        "CSE (AI & ML)",
        "CSE (Data Science)",
        "CSE (Cyber Security)",
        "Electronics & Communication Engineering (ECE)"
    ],
    bba: [
        "Port & Supply Chain Management",
        "Global Business Management",
        "Business Analytics & Digital Marketing",
        "Finance & HR Management"
    ],
    bca: [
        "AI & Data Science",
        "AI & Robotics",
        "AI & DevOps",
        "Cyber Security & Digital Forensics",
        "Cloud Computing & Cyber Security"
    ],
    bcom: [
        "International Accounting (with ACCA-UK)",
        "Capital Market"
    ],
    bsc: [
        "Applied Psychology"
    ],
    ba: [
        "Sanskrit"
    ],
    bed: [
        "B.Sc B.Ed (Mathematics)",
        "B.Sc B.Ed (Chemistry)",
        "B.Sc B.Ed (Physics)",
        "B.A B.Ed (English)",
        "B.A B.Ed (Psychology)"
    ],
    mba: [
        "Finance",
        "Marketing",
        "Human Resources & Organizational Development",
        "Supply Chain & Logistics"
    ],
    msc: [
        "Applied Psychology",
        "Clinical Psychology"
    ],
    ma: [
        "Sanskrit"
    ]
};

const courseSelect = document.getElementById("course");
const specializationSelect = document.getElementById("specialization");

courseSelect.addEventListener("change", function () {
    const selectedCourse = this.value;

    // Reset specialization dropdown
    specializationSelect.innerHTML =
        '<option value="" disabled selected>Specialization *</option>';

    if (specializations[selectedCourse]) {
        specializations[selectedCourse].forEach(function (spec) {
            const option = document.createElement("option");
            option.value = spec;
            option.textContent = spec;
            specializationSelect.appendChild(option);
        });
    }
});







function initTabGroup(groupId) {
    const group = document.getElementById(groupId);
    if (!group) return;
    const btns = group.querySelectorAll('.course-tab-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            // 1. Deactivate all buttons in this group
            btns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // 2. Hide all panels that belong to this group
            btns.forEach(b => {
                const panel = document.getElementById(b.dataset.target);
                if (panel) panel.classList.remove('active');
            });

            // 3. Show selected panel
            const target = document.getElementById(this.dataset.target);
            if (target) target.classList.add('active');
        });
    });
}

initTabGroup('ugTabGroup');
initTabGroup('pgTabGroup');





