import JustValidate from '../just-validate';
import Inputmask from "inputmask";

let inputs = document.querySelectorAll('input[type="tel"]');

let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);



let validateForms = function(selector, rules, successModal, yaGoal) {
	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function(form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();

		}
	});
}

validateForms('.modal-form', { 
    name: { 
        required: true
    }, 
    tel: { 
        required: true 
    },

});

validateForms('.tape__form', {
    tel: { 
        required: true,
        remote: 'Это обязательное'
    },
})
validateForms('.contacts__form', {
    tel: { 
        required: true,
        remote: 'Это обязательное'
    },
})