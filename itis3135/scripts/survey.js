let numberOfCourses = 0;

function addCourse()
{
    numberOfCourses++;

    const courseLabel = document.createElement("label");
    courseLabel.setAttribute("id", "course-label" + numberOfCourses)
    courseLabel.setAttribute("for", "course" + numberOfCourses);
    courseLabel.innerHTML = "Course " + numberOfCourses + ":";

    const newCourse = document.createElement("input");
    newCourse.setAttribute("id", "course" + numberOfCourses);
    newCourse.setAttribute("placeholder", "ITSC2181 - Introduction to Computer Systems");
    newCourse.setAttribute("type", "text");
    newCourse.setAttribute("required", "true");

    if(numberOfCourses > 1)
    {
        document.getElementById("delete-course").remove();
    }

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete-course");
    deleteButton.setAttribute("onclick", "deleteCourse()");
    deleteButton.innerHTML = "Delete Course";

    document.getElementById("courses").appendChild(courseLabel);
    document.getElementById("courses").appendChild(newCourse);
    document.getElementById("courses").appendChild(deleteButton);
}

function deleteCourse()
{
    document.getElementById("course-label" + numberOfCourses).remove();
    document.getElementById("course" + numberOfCourses).remove();
    
    numberOfCourses--;

    if(!numberOfCourses)
    {
        document.getElementById("delete-course").remove();
    }
}