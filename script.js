jQuery('document').ready(function() {

	var default_lang = 'by';
	jQuery('#by').css('background-color','#87AAAA');
	jQuery('#check_yourself_lang').html(jQuery('#check_yourself_lang').attr('description-data-by'));

	jQuery('#by').on('click', function() {
		default_lang = 'by';
		jQuery('#en').css('background-color','#C8E3D4');
		jQuery('#by').css('background-color','#87AAAA');
		jQuery('#check_yourself_lang').html(jQuery('#check_yourself_lang').attr('description-data-by'));
	});
	jQuery('#en').on('click', function() {
		default_lang = 'en';
		jQuery('#en').css('background-color','#87AAAA');
		jQuery('#by').css('background-color','#C8E3D4');
		jQuery('#check_yourself_lang').html(jQuery('#check_yourself_lang').attr('description-data-en'));
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
	jQuery('.check').on('click', function() {
		var answers = [];
		var u = 0;
		for(let i = 1; i <= 3; i++) {
			if(jQuery('.q1_'+i).is(':checked')) {
				answers.push(i);
				u = 1;
			}
		}
		if(u == 0) {
			alert('ответьте все вопросы');
			return 0;
		}
		u = 0;
		for(let i = 1; i <= 3; i++) {
			if(jQuery('.q2_'+i).is(':checked')) {
				answers.push(i);
				u = 1;
			}
		}
		if(u == 0) {
			alert('ответьте все вопросы');
			return 0;
		}
		u = 0;
		for(let i = 1; i <= 3; i++) {
			if(jQuery('.q3_'+i).is(':checked')) {
				answers.push(i);
				u = 1;
			}
		}
		if(u == 0) {
			alert('ответьте все вопросы');
			return 0;
		}
		u = 0;
		for(let i = 1; i <= 3; i++) {
			if(jQuery('.q4_'+i).is(':checked')) {
				answers.push(i);
				u = 1;
			}
		}
		if(u == 0) {
			alert('ответьте все вопросы');
			return 0;
		}
		u = 0;
		for(let i = 1; i <= 3; i++) {
			if(jQuery('.q5_'+i).is(':checked')) {
				answers.push(i);
				u = 1;
			}
		}
		if(u == 0) {
			alert('ответьте все вопросы');
			return 0;
		}
		u = 0;
		for(let i = 1; i <= 3; i++) {
			if(jQuery('.q6_'+i).is(':checked')) {
				answers.push(i);
				u = 1;
			}
		}
		if(u == 0) {
			alert('ответьте все вопросы');
			return 0;
		}
		u = 0;
		for(let i = 1; i <= 3; i++) {
			if(jQuery('.q7_'+i).is(':checked')) {
				answers.push(i);
				u = 1;
			}
		}
		if(u == 0) {
			alert('ответьте все вопросы');
			return 0;
		}
		u = 0;
		for(let i = 1; i <= 3; i++) {
			if(jQuery('.q8_'+i).is(':checked')) {
				answers.push(i);
				u = 1;
			}
		}
		if(u == 0) {
			alert('ответьте все вопросы');
			return 0;
		}
		u = 0;
		for(let i = 1; i <= 3; i++) {
			if(jQuery('.q9_'+i).is(':checked')) {
				answers.push(i);
				u = 1;
			}
		}
		if(u == 0) {
			alert('ответьте все вопросы');
			return 0;
		}
		u = 0;
		if(answers[0]  == 2) {
			jQuery('.w1_2').css('color','#77D970');
			u = u + 1;
		} else {
			jQuery('.w1_2').css('color','#77D970');
			jQuery('.w1_'+answers[0]).css('color','red');
		}
		if(answers[1]  == 1) {
			jQuery('.w2_1').css('color','#77D970');
			u = u + 1;
		} else {
			jQuery('.w2_1').css('color','#77D970');
			jQuery('.w2_'+answers[1]).css('color','red');
		}
		if(answers[2]  == 2) {
			jQuery('.w3_2').css('color','#77D970');
			u = u + 1;
		} else {
			jQuery('.w3_2').css('color','#77D970');
			jQuery('.w3_'+answers[2]).css('color','red');
		}
		if(answers[3]  == 3) {
			jQuery('.w4_3').css('color','#77D970');
			u = u + 1;
		} else {
			jQuery('.w4_3').css('color','#77D970');
			jQuery('.w4_'+answers[3]).css('color','red');
		}
		if(answers[4]  == 1) {
			jQuery('.w5_1').css('color','#77D970');
			u = u + 1;
		} else {
			jQuery('.w5_1').css('color','#77D970');
			jQuery('.w5_'+answers[4]).css('color','red');
		}
		if(answers[5]  == 2) {
			jQuery('.w6_2').css('color','#77D970');
			u = u + 1;
		} else {
			jQuery('.w6_2').css('color','#77D970');
			jQuery('.w6_'+answers[5]).css('color','red');
		}
		if(answers[6]  == 1) {
			jQuery('.w7_1').css('color','#77D970');
			u = u + 1;
		} else {
			jQuery('.w7_1').css('color','#77D970');
			jQuery('.w7_'+answers[6]).css('color','red');
		}
		if(answers[7]  == 3) {
			jQuery('.w8_3').css('color','#77D970');
			u = u + 1;
		} else {
			jQuery('.w8_3').css('color','#77D970');
			jQuery('.w8_'+answers[7]).css('color','red');
		}
		if(answers[8]  == 2) {
			jQuery('.w9_2').css('color','#77D970');
			u = u + 1;
		} else {
			jQuery('.w9_2').css('color','#77D970');
			jQuery('.w9_'+answers[8]).css('color','red');
		}
		jQuery('.result').html('Результат: '+u.toString()+'/9');

	});
	jQuery('#check_yourself').on('click', function() {
		if(default_lang == 'by') {
			jQuery('.quiz_by').fadeIn();
			jQuery('.quiz_en').fadeOut();
		} else {
			jQuery('.quiz_en').fadeIn();
			jQuery('.quiz_by').fadeOut();
		}
	});

});