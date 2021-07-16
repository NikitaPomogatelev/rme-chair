import "just-validate/dist/js/just-validate";
import Inputmask from "inputmask";

const validate = () => {
let inputs = document.querySelectorAll('input[type="tel"]');

let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);



let validateForms = function(selector, rules, messages) {
	new window.JustValidate(selector, {
		rules: rules,
		messages: messages,
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

}, {
	name: {
		required: "Вы должны ввести имя"
	},
	tel: {
		required: "Вы должны ввести телефон"
	},
});

validateForms('.tape__form', {
    tel: { 
        required: true,
        remote: 'Это обязательное'
    },
},  {
	tel: {
		required: "Вы должны ввести телефон"
	},
})
validateForms('.contacts__form', {
    tel: { 
        required: true,
        remote: 'Это обязательное'
    },
},  {
	tel: {
		required: "Вы должны ввести телефон"
	},
})
}
export default validate;
