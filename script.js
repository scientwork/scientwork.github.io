jQuery('document').ready(function() {

	var default_lang = 'by';
	jQuery('#by').css('background-color','#87AAAA');

	jQuery('#by').on('click', function() {
		default_lang = 'by';
		jQuery('#en').css('background-color','#C8E3D4');
		jQuery('#by').css('background-color','#87AAAA');
		console.log(default_lang);
	});
	jQuery('#en').on('click', function() {
		default_lang = 'en';
		jQuery('#en').css('background-color','#87AAAA');
		jQuery('#by').css('background-color','#C8E3D4');
		console.log(default_lang);
	});

	jQuery('#q1').on('click', function() {
		if(default_lang == 'by') {
			jQuery('.description').html(jQuery(this).attr('description-data-by'));
		} else {
			jQuery('.description').html(jQuery(this).attr('description-data-en'));
		}
		jQuery('.description').fadeIn();
		for(let i = 1; i <= 15; i++) {
			jQuery('#q' + i.toString()).css('opacity','0');
		}
		jQuery('#q1').css('opacity','0.5');
	});
	jQuery('.exit').on('click', function() {
		jQuery('.description').fadeOut();
	});
	jQuery('#q2').on('click', function() {
		if(default_lang == 'by') {
			jQuery('.description').html(jQuery(this).attr('description-data-by'));
		} else {
			jQuery('.description').html(jQuery(this).attr('description-data-en'));
		}
		jQuery('.description').fadeIn();
		for(let i = 1; i <= 15; i++) {
			jQuery('#q' + i).css('opacity','0');
		}
		jQuery('#q2').css('opacity','0.5');
	});
	jQuery('.exit').on('click', function() {
		jQuery('.description').fadeOut();
	});
	jQuery('#q3').on('click', function() {
		if(default_lang == 'by') {
			jQuery('.description').html(jQuery(this).attr('description-data-by'));
		} else {
			jQuery('.description').html(jQuery(this).attr('description-data-en'));
		}
		jQuery('.description').fadeIn();
		for(let i = 1; i <= 15; i++) {
			jQuery('#q' + i).css('opacity','0');
		}
		jQuery('#q3').css('opacity','0.5');
	});
	jQuery('.exit').on('click', function() {
		jQuery('.description').fadeOut();
	});
	jQuery('#q4').on('click', function() {
		if(default_lang == 'by') {
			jQuery('.description').html(jQuery(this).attr('description-data-by'));
		} else {
			jQuery('.description').html(jQuery(this).attr('description-data-en'));
		}
		jQuery('.description').fadeIn();
		for(let i = 1; i <= 15; i++) {
			jQuery('#q' + i).css('opacity','0');
		}
		jQuery('#q4').css('opacity','0.5');
	});
	jQuery('.exit').on('click', function() {
		jQuery('.description').fadeOut();
	});
	jQuery('#q5').on('click', function() {
		if(default_lang == 'by') {
			jQuery('.description').html(jQuery(this).attr('description-data-by'));
		} else {
			jQuery('.description').html(jQuery(this).attr('description-data-en'));
		}
		jQuery('.description').fadeIn();
		for(let i = 1; i <= 15; i++) {
			jQuery('#q' + i).css('opacity','0');
		}
		jQuery('#q5').css('opacity','0.5');
	});
	jQuery('.exit').on('click', function() {
		jQuery('.description').fadeOut();
	});
	jQuery('#q6').on('click', function() {
		if(default_lang == 'by') {
			jQuery('.description').html(jQuery(this).attr('description-data-by'));
		} else {
			jQuery('.description').html(jQuery(this).attr('description-data-en'));
		}
		jQuery('.description').fadeIn();
		for(let i = 1; i <= 15; i++) {
			jQuery('#q' + i).css('opacity','0');
		}
		jQuery('#q6').css('opacity','0.5');
	});
	jQuery('.exit').on('click', function() {
		jQuery('.description').fadeOut();
	});
	jQuery('#q7').on('click', function() {
		if(default_lang == 'by') {
			jQuery('.description').html(jQuery(this).attr('description-data-by'));
		} else {
			jQuery('.description').html(jQuery(this).attr('description-data-en'));
		}
		jQuery('.description').fadeIn();
		for(let i = 1; i <= 15; i++) {
			jQuery('#q' + i).css('opacity','0');
		}
		jQuery('#q7').css('opacity','0.5');
	});
	jQuery('.exit').on('click', function() {
		jQuery('.description').fadeOut();
	});
	jQuery('#q8').on('click', function() {
		if(default_lang == 'by') {
			jQuery('.description').html(jQuery(this).attr('description-data-by'));
		} else {
			jQuery('.description').html(jQuery(this).attr('description-data-en'));
		}
		jQuery('.description').fadeIn();
		for(let i = 1; i <= 15; i++) {
			jQuery('#q' + i).css('opacity','0');
		}
		jQuery('#q8').css('opacity','0.5');
	});
	jQuery('.exit').on('click', function() {
		jQuery('.description').fadeOut();
	});
	jQuery('#q9').on('click', function() {
		if(default_lang == 'by') {
			jQuery('.description').html(jQuery(this).attr('description-data-by'));
		} else {
			jQuery('.description').html(jQuery(this).attr('description-data-en'));
		}
		jQuery('.description').fadeIn();
		for(let i = 1; i <= 15; i++) {
			jQuery('#q' + i).css('opacity','0');
		}
		jQuery('#q9').css('opacity','0.5');
	});
	jQuery('.exit').on('click', function() {
		jQuery('.description').fadeOut();
	});
	jQuery('#q10').on('click', function() {
		if(default_lang == 'by') {
			jQuery('.description').html(jQuery(this).attr('description-data-by'));
		} else {
			jQuery('.description').html(jQuery(this).attr('description-data-en'));
		}
		jQuery('.description').fadeIn();
		for(let i = 1; i <= 15; i++) {
			jQuery('#q' + i).css('opacity','0');
		}
		jQuery('#q10').css('opacity','0.5');
	});
	jQuery('.exit').on('click', function() {
		jQuery('.description').fadeOut();
	});
	jQuery('#q11').on('click', function() {
		if(default_lang == 'by') {
			jQuery('.description').html(jQuery(this).attr('description-data-by'));
		} else {
			jQuery('.description').html(jQuery(this).attr('description-data-en'));
		}
		jQuery('.description').fadeIn();
		for(let i = 1; i <= 15; i++) {
			jQuery('#q' + i).css('opacity','0');
		}
		jQuery('#q11').css('opacity','0.5');
	});
	jQuery('.exit').on('click', function() {
		jQuery('.description').fadeOut();
	});

});