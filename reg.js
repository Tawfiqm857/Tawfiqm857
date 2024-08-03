
    
        var form = document.forms['userForm'];
        var firstName = form.elements['firstName'];
        var lastName = form.elements['lastName'];
        firstName.value = 'John';
        lastName.value = 'Doe';

        form.onsubmit = function() {
            var welcomeMessage = document.getElementById('welcomeMessage');
            welcomeMessage.textContent = 'Hello, ' + firstName.value + ' ' + lastName.value + '!';
            return false; // Prevents the form from submitting to a server
        }
