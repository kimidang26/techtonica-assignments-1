let unordered_list_one = document.createElement("ul")
unordered_list_one.innerHTML = "Coding Experience:"
unordered_list_one.style.color ="blue"
document.querySelector(".exp").appendChild(unordered_list_one)

function workexperience(arr){
    for (let i=0; i< arr.length; i++){
        let list = document.createElement("li")
        list.innerHTML = arr[i]
        list.style.color = "black"
        unordered_list_one.appendChild(list)
    }
}

workexperience(["Two weeks of experience with Techtonica: HTML, CSS, Javascript, GitHub", "Javascript crash course 8 hours", "HTML and CSS crash course 8 hours", "Built BlackJack game"])

let unordered_list_two = document.createElement("ul")
unordered_list_two.innerHTML = "Other Experience:"
unordered_list_two.style.color ="blue"
document.querySelector(".exp").appendChild(unordered_list_two)

function workexperiencetwo(arr){
    for (let i=0; i< arr.length; i++){
        let list_two = document.createElement("li")
        list_two.innerHTML = arr[i]
        list_two.style.color = "black"
        unordered_list_two.appendChild(list_two)
    }
}

workexperiencetwo(["Building e-commerce platform using shopify" , "Collaboration in teams", "Finding bugs in work templates and reporting"])

// creating skills
let skills_list = document.createElement("div")
document.getElementById("skills").appendChild(skills_list)

function skillsAdd(arr){
    for (let i=0; i< arr.length; i++){
        let listOfSkills = document.createElement("div")
        listOfSkills.innerHTML = arr[i] 
        listOfSkills.classList.add("skillstyle")
        skills_list.appendChild(listOfSkills)
    }
}
skillsAdd(["Javascript", "CSS", "HTML", "GitHub"])

// creating education
let education_list = document.createElement("div")
document.getElementById("edu").appendChild(education_list)

function educationAdd(arr){
    for (let i=0; i< arr.length; i++){
        let listOfEducation = document.createElement("li")
        listOfEducation.innerHTML = arr[i]
        listOfEducation.classList.add("edustyle")
        education_list.appendChild(listOfEducation)
    }
}
educationAdd(["Bachelors in Commerce", "CPA"])



