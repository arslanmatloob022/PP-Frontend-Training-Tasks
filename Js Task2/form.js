

    const degreeSelect = document.getElementById('degree');
    const durationSelect = document.getElementById('duration');
    const associationSelect = document.getElementById('association');
    durDropDown = document.querySelector(".duration");
    ascDropDown = document.querySelector(".association");

    // var arr = [
    //     ['mcs','bcs','bse','bes'],
    //     ['MCS','BCS','BSE','BES'],
    //     ['2','3','4','5'],
    //     ['2 years','3 years','4 years','5 years'],
    //     ['mphil','master','philoshpy','doctorate'],
    //     ['Mphil','Master','Philoshpy','Doctorate'],
    // ]

    // for(let i=0; 1 < arr.length; i++){
    //     if([i].value === 'bcs'){
    //         console.log("found");
    //        }
    //     for(let j=0; j<arr.length-1; j++){
           
    //     }
    // }

    function duroptions(value, text){
        const option = document.createElement('option');
        option.value = value;
        option.text = text;
        durationSelect.add(option)
    }
    function ascoptions(value, text){
        const option = document.createElement('option');
        option.value = value;
        option.text = text;
        associationSelect.add(option)
    }

    degreeSelect.addEventListener('change', () => {
        durationSelect.innerHTML = '';
        durDropDown.classList.add("active");
        if (degreeSelect.value === 'bsc') {
            ascoptions('2','2 Years');
            ascoptions('4','4 Years');

        } else if (degreeSelect.value === 'msc') {
            ascoptions('3','3 Years');
            ascoptions('5','5 Years');
        } else if (degreeSelect.value === 'phd') {
            ascoptions('4','4 Years');
            ascoptionsh('6','6 Years');
        };
    });

    durationSelect.addEventListener('change', () => {
        associationSelect.innerHTML ='2';
        ascDropDown.classList.add("active");
        if (durationSelect.value === '2') {
            duroptions('m-phil','M Phill');
            duroptions('master','Matser');
        } else if (durationSelect.value === '4') {
        const option1 = document.createElement('option');
        duroptions('phd','PHD');
        duroptions('philosphy','Philosphy');
        } else if (durationSelect.value === '5') {
        duroptions('phd','5th ');
        duroptions('philosphy','6Th');
        }else if (durationSelect.value === '6') {
        duroptions('phd','7th ');
        duroptions('philosphy','8Th');
        }
    });



    //Password show/hide
    pwShowHide = document.querySelectorAll(".pw_hide");
    pwShowHide.forEach((icon) => {
        icon.addEventListener("click", () => {
            let getPwInput = icon.parentElement.querySelector("input");
            if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
            } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
            }
        });
    });

    document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form input values
    const fullName = document.getElementById("fullName").value;
    const userName = document.querySelector(".userName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    const education = document.getElementById("education").value;
    const degree = document.getElementById("degree").value;
    const duration = document.getElementById("duration").value;

    // Create JSON object with form data
    const formData = {
    fullName: fullName,
    userName: userName,
    email: email,
    phoneNumber: phoneNumber,
    password: password,
    education: education,
    degree: degree,
    duration: duration
    };

    // Convert JSON object to JSON string
    const formDataJson = JSON.stringify(Object.fromEntries(formData.entries()));
    // const jsonData = JSON.stringify(formData, null, 2);

    localStorage.setItem('formData', formDataJson);
    window.location.href ='res.html';
    formDataJson = localStorage.getItem('formData');
    formData = JSON.parse(formDataJson);
    document.write(formData);
});
    
