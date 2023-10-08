let form = document.getElementById("form").cloneNode(true);
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

    const courseDescLabel = document.createElement("label");
    courseDescLabel.setAttribute("id", "course-description-label" + numberOfCourses);
    courseDescLabel.setAttribute("for", "course-description" + numberOfCourses);
    courseDescLabel.innerHTML = "Description:";

    const courseDescription = document.createElement("textarea");
    courseDescription.setAttribute("id", "course-description" + numberOfCourses);
    courseDescription.setAttribute("required", "true");

    if(numberOfCourses > 1)
    {
        document.getElementById("delete-course").remove();
    }

    const deleteButton = document.createElement("input");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("id", "delete-course");
    deleteButton.setAttribute("onclick", "deleteCourse()");
    deleteButton.setAttribute("value", "Delete Course");

    document.getElementById("courses").appendChild(courseLabel);
    document.getElementById("courses").appendChild(newCourse);
    document.getElementById("courses").appendChild(courseDescLabel);
    document.getElementById("courses").appendChild(courseDescription);
    document.getElementById("courses").appendChild(deleteButton);
}

function deleteCourse()
{
    document.getElementById("course-label" + numberOfCourses).remove();
    document.getElementById("course" + numberOfCourses).remove();
    document.getElementById("course-description-label" + numberOfCourses).remove();
    document.getElementById("course-description" + numberOfCourses).remove();
    
    numberOfCourses--;

    if(!numberOfCourses)
    {
        document.getElementById("delete-course").remove();
    }
}

function createBullet(name, content)
{
    let bullet = document.createElement("li");
    bullet.innerHTML = "<strong>" + name + ":</strong> " + content;
    return bullet;
}

function createCourseList()
{
    let courseList = document.createElement("ul");
    for(let i = 1; i <= numberOfCourses; i++)
    {
        let course = document.createElement("li");
        course.innerHTML = "<strong>" + document.getElementById("course" + i).value + " -</strong> " + document.getElementById("course-description" + i).value;
        courseList.appendChild(course);
    }
    return courseList;
}

function loadImage()
{
    let image = document.getElementById("image").files[0];
    const url = URL.createObjectURL(image);
    return url;
}

function generateIntro()
{
    let intro = document.createElement("main");
    intro.setAttribute("id", "intro");
    let introHeader = document.createElement("h2");
    introHeader.innerHTML = document.getElementById("name").value + " || " + document.getElementById("mascot").value;
    let figure = document.createElement("figure");
    let image = document.createElement("img");
    image.setAttribute("src", loadImage());
    let caption = document.createElement("figcaption");
    caption.innerHTML = "<em>" + document.getElementById("caption").value + "</em>";
    figure.appendChild(image);
    figure.appendChild(caption);
    let personal = createBullet("Personal Background", document.getElementById("personal").value);
    let professional = createBullet("Professional Background", document.getElementById("professional").value);
    let academic = createBullet("Academic Background", document.getElementById("academic").value);
    let webDev = createBullet("Background in Web Development", document.getElementById("web-dev").value);
    let platform = createBullet("Primary Computer Platform", document.getElementById("primary-platform").value);
    let courseListHeader = document.createElement("li");
    courseListHeader.innerHTML = "<strong>Courses I'm Taking & Why:</strong>";
    let courseList = createCourseList();
    let funFact = createBullet("Funny/Interesting Item to Remember me By", document.getElementById("fun-fact").value);
    let other = createBullet("I would also like to share", document.getElementById("other").value);

    let introList = document.createElement("ul");

    let backButton = document.createElement("input");
    backButton.setAttribute("type", "button");
    backButton.setAttribute("value", "Make Another Intro");
    backButton.setAttribute("onclick", "reloadForm()");
    backButton.setAttribute("id", "back-button");

    introList.appendChild(introHeader);
    introList.appendChild(figure);
    introList.appendChild(personal);
    introList.appendChild(professional);
    introList.appendChild(academic);
    introList.appendChild(webDev);
    introList.appendChild(platform);
    introList.appendChild(courseListHeader);
    introList.appendChild(courseList);
    introList.appendChild(funFact);
    introList.appendChild(other);

    intro.appendChild(introList);

    intro.appendChild(backButton);

    document.getElementById("form").replaceWith(intro);
}

function reloadForm()
{
    document.getElementById("intro").replaceWith(form);
    numberOfCourses = 0;
}