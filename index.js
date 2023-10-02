// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Sample data for featured courses (replace with your own data)
    const featuredCourses = [
        { title: "Mathematics 101", instructor: "John Smith" },
        { title: "History 202", instructor: "Jane Doe" },
        { title: "Science Lab", instructor: "David Johnson" }
    ];

    // Function to display featured courses
    function displayFeaturedCourses() {
        const featuredCoursesSection = document.querySelector("#featured-courses");
        featuredCoursesSection.innerHTML = "";

        featuredCourses.forEach(course => {
            const courseCard = document.createElement("div");
            courseCard.classList.add("course-card");
            courseCard.innerHTML = `
                <h3>${course.title}</h3>
                <p>Instructor: ${course.instructor}</p>
            `;
            featuredCoursesSection.appendChild(courseCard);
        });
    }

    // Call the function to display featured courses
    displayFeaturedCourses();
});
