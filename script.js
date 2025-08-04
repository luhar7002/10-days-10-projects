
function submitForm(){
    const gender=document.querySelector("input[name='Gender']:checked")
    const genderValue=gender?gender.value:"";
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value;
    if(name===""){
        document.getElementById("name").style.border = "2px solid red";
        return;
    }
    if(email===""){
        document.getElementById("email").style.border="2px solid red";
        return;
    }
    if(!email.endsWith("@gmail.com"))
    {
        alert("Eamil must end with @gmail.com");
        return; 
    }
    if(number===""){
        alert("Please enter your phone number");
        return;
    }
    if(!number.length==10 || isNaN(number))
    {
        alert("The Number should contain 10 digits and it must be numeric")
    }
    if(gender===null){
        alert("Please Select your Gender");
        return;
    }
    if(course===""){
        alert("Please Select The Course You wanted to study");
        return;
    }
    document.querySelector("form").reset();
    const studentInfo=document.createElement("div");
    studentInfo.className="student-entry";
    studentInfo.innerHTML=`
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Phone Number:</strong>${number}</p>
    <p><strong>Gender:</strong>${genderValue}</p>
    <p><strong>Course:</strong>${course}</p>
    <p><button id="DeleteButton" onclick="deleteButton(event)">Delete</button>`
    document.getElementById("StudentList").appendChild(studentInfo);
}

function deleteButton(event)
{
    event.target.parentElement.parentElement.remove()
}