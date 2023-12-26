function saveFormData() {
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;

            const formData = {
                firstName: firstName,
                lastName: lastName
            };

            const formDataJSON = JSON.stringify(formData);

            localStorage.setItem('formData', formDataJSON);

            document.getElementById('myForm').reset();

            alert('Form data saved!');
        }

        function retrieveFormData() {
            // Retrieve the JSON string from storage
            const storedFormDataJSON = localStorage.getItem('formData');

            if (storedFormDataJSON) {
                // Parse the JSON string back into a JavaScript object
                const storedFormData = JSON.parse(storedFormDataJSON);

                // Use the data as needed
                alert(`First Name: ${storedFormData.firstName}\nLast Name: ${storedFormData.lastName}`);
            } else {
                alert('No form data found.');
            }
        }