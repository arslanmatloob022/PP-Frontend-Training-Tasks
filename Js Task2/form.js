

    const degreeSelect = document.getElementById('degree');
    const durationSelect = document.getElementById('duration');
    const associationSelect = document.getElementById('association');
    durDropDown = document.querySelector(".duration");
    ascDropDown = document.querySelector(".association");
    function options(value, text){
        const option = document.createElement('option');
        option.value = '4';
        option.text = '4 years';
        durationSelect.add(option2)
    }

    degreeSelect.addEventListener('change', () => {
        durationSelect.innerHTML = '';
        if (degreeSelect.value === 'bsc') {
        durDropDown.classList.add("active");
;
        } else if (degreeSelect.value === 'msc') {
            durDropDown.classList.add("active");
        const option1 = document.createElement('option');
        option1.value = '2';
        option1.text = '2 years';
        durationSelect.add(option1);

        const option2 = document.createElement('option');
        option2.value = '3';
        option2.text = '3 years';
        durationSelect.add(option2);
        } else if (degreeSelect.value === 'phd') {
            durDropDown.classList.add("active");
        const option1 = document.createElement('option');
        option1.value = '3';
        option1.text = '3 years';
        durationSelect.add(option1);

        const option2 = document.createElement('option');
        option2.value = '5';
        option2.text = '5 years';
        durationSelect.add(option2);
        };

        
    });

    durationSelect.addEventListener('change', () => {
        associationSelect.innerHTML ='';

        if (durationSelect.value === '2') {
        ascDropDown.classList.add("active");
        const option1 = document.createElement('option');
        option1.value = 'm-phil';
        option1.text = 'M Phill';
        associationSelect.add(option1);

        const option2 = document.createElement('option');
        option2.value = 'master';
        option2.text = 'Master';
        associationSelect.add(option2);
        const option3 = document.createElement('option');
        option2.value = 'master';
        option2.text = 'Master';
        associationSelect.add(option3);
        } else if (durationSelect.value === '3') {
        ascDropDown.classList.add("active");
        const option1 = document.createElement('option');
        option1.value = 'doctorate';
        option1.text = 'Doctorate';
        associationSelect.add(option1);

        const option2 = document.createElement('option');
        option2.value = 'professor';
        option2.text = 'professor';
        associationSelect.add(option2);
        } else if (durationSelect.value === '4') {
        ascDropDown.classList.add("active");
        const option1 = document.createElement('option');
        option1.value = 'doctorate';
        option1.text = 'Doate';
        durationSelect.add(option1);

        const option2 = document.createElement('option');
        option2.value = 'professor';
        option2.text = 'prsor';
        associationSelect.add(option2);
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
    
