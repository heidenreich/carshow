console.log('Hello Mason and Joe');


$( ".reg-tab" ).click(function() {
  $(".reg-form").toggle();
});

$("#submit-btn").click(function(){
	 $(".reg-form").toggle();
});



function Registrant (name, phone, email, city, state, zip, year, make, model, image) {
	this.name = name;
	this.phone = phone;
	this.email = email;
	this.city = city;
	this.state = state;
	this.year = year;
	this.make = make;
	this.model = model;
	this.image = image;
};



$ ("#submit-btn").click(function() {
	var nameValue = $('input[name=Name]').val();
	var phoneNumber = $('input[name=Phone]').val();
	var emailValue = $('input[name=Email]').val();
	var cityValue = $('input[name=City]').val();
	var stateValue = $('input[name=State]').val();
	var zipValue = $('input[name=Zip]').val();
	var yearValue = $('input[name=Year]').val();
	var makeValue = $('input[name=Make]').val();
	var modelValue = $('input[name=Model]').val();
	var CarImage = $('input[name=Image]').val();

	var registrant = new Registrant(nameValue, phoneNumber, emailValue, cityValue, stateValue, zipValue, yearValue, makeValue, modelValue, CarImage);

	var RegistrantTemplate = _.template($('.RegistrantTemplate').text());


	$('.registered-users').append(RegistrantTemplate({data: registrant}))

	$('.reg-form').trigger("reset");	
})

