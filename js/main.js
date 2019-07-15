let lesMdpElts = document.querySelectorAll("input[type='password']");
let paraElt = document.getElementById("infoMdp");

for (let input of lesMdpElts) {
	input.addEventListener("input", function() {
		let input1Elt = document.getElementById("mdp1").value;
		let input2Elt = document.getElementById("mdp2").value;

		if (this.value.length < 8) { 	  					// the length need to be greater than 8
			paraElt.textContent = "length to short";
			paraElt.style.color = 'red';
			return;
		} else if (!/(\d+|\D+){8,}/gi.test(this.value)) { 	// the password need to containt 8 characters (numbers or letters)
			paraElt.textContent = "the criteria are not met (6 letters and 2 numbers)";
			paraElt.style.color = 'red';
			return;
		}else if (input1Elt !== input2Elt) { 				// the value of 2 input need to be the same
			paraElt.textContent = "The passwords are not the same";
			paraElt.style.color = 'red';
			return;
		} else { 											// if every condition are clear than the password if valid
			paraElt.textContent = "Password Valid";
			paraElt.style.color = 'green';
		}


		// other way of doing
		/*
		if (this.value.length >= 8) {
			if (/(\d+|\D+){8,}/gi.test(this.value)) {
					if (input1Elt === input2Elt) {
						paraElt.textContent = "Password Valid";
						paraElt.style.color = 'green';
					} else {
						paraElt.textContent = "The passwords are not the same";
						paraElt.style.color = 'red';
					}
			} else {
				paraElt.textContent = "the criteria are not met (letters and numbers)";
				paraElt.style.color = 'red';
			}
		} else {
			paraElt.textContent = "length to short";
			paraElt.style.color = 'red';
		}
		*/
	});
}
