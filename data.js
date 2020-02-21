$(function() {
const chartData = [
	{
		percent: 90,
		textContent: 'HTML/HTML5',
		icon: 'fab fa-html5'
	}, {
		percent: 90,
		textContent: 'CSS/CSS3',
		icon: 'fab fa-css3-alt'
	}, {
		percent: 30,
		textContent: 'Wordpress(Bakery)',
		icon: 'fab fa-wordpress'
	}, {
		percent: 50,
		textContent: 'Bootstrap',
		icon: 'fab fa-bootstrap'
	}, {
		percent: 90,
		textContent: 'Git',
		icon: 'fab fa-github-square'
	}, {
		percent: 25,
		textContent: 'Ajax',
		icon: 'fas fa-file-code'
	}, {
		percent: 55,
		textContent: 'Json',
		icon: 'fas fa-file-code'
	}, {
		percent: 70,
		textContent: 'JavaScript/JQuery',
		icon: 'fab fa-js-square'
	}, {
		percent: 30,
		textContent: 'Photoshop',
		icon: 'fab fa-adobe'
	}, {
		percent: 75,
		textContent: 'UI / UX',
		icon: 'fas fa-columns'
	}, {
		percent: 50,
		textContent: 'SEO',
		icon: 'fab fa-google'
	}, {
		percent: 70,
		textContent: 'PHP',
		icon: 'fab fa-php'
	}, {
		percent: 40,
		textContent: 'MySQL',
		icon: 'fas fa-database'
	}
];

for(let i in chartData) {
	$('.sk_bar_chart_li').append('\
		<li class="item" data-aos="fade-right" data-aos-duration="500">\
			<div class="bar">\
				<span class="percent">'+ chartData[i].percent +'%</span>\
				<div class="progress" style="width:'+ chartData[i].percent +'%;">\
					<span class="title"><i class="'+ chartData[i].icon +'"></i>'+ chartData[i].textContent +'</span>\
				</div>\
			</div>\
		</li>\
	');
}

const expData = [
	{
		company: 'images/tcap_logo.png',
		companyName: 'Transcosmos Asia Philippines Inc.',
		dateExp: '( Front-End Web Developer )',
		position: 'May 06, 2019 - Present',
		description: [{
			'desc' : ['Cooperate with designers to create clean interfaces and simple, intuitive interactions and experiences.',
					'Develop project concepts and maintain optimal workflow.',
					'Carry out quality assurance tests to discover errors and optimize usability.',
					'Convert PSD design to code using HTML/CSS/JavaScript/JQuery libraries etc.',
					'Develop responsive view for mobiles.',
					'Maintain and improve website / Browser testing and debugging / Optimize applications for maximum speed.',
					'Finish the task before the deadline.',
					'Support back-end developers for Unit Testing']
		}],
		project: [{
			projectName: 'Duskin Health Rent',
			projectPhoto: 'img/jm.jpg',
			projectLink: 'https://healthrent.duskin.jp/'
		}, {
			projectName: 'Shonan Beauty Clinic',
			projectPhoto: 'img/jm.jpg',
			projectLink: 'https://www.s-b-c.net/'
		}]
	}
];

for(let x in expData) {
	let htmlStr = '<li class="expBlock">\
		<div class="logoContent" data-aos="fade-right" data-aos-duration="500">\
			<img class="logo" src='+expData[x].company+'>\
		</div>\
		<div class="expContent" data-aos="fade-right" data-aos-duration="500">\
			<p class="companyName">'+ expData[x].companyName +'</p>\
			<p class="dateExp">'+ expData[x].dateExp +'</p>\
			<p class="position">'+ expData[x].position +'</p>\
			<ul class="desc">';

				for(let y in expData[x].description[0].desc) {
					htmlStr = htmlStr + '<li class="descList"><i class="fa fa-caret-right"></i>'+  expData[x].description[0].desc[y] +'</li>';
				}

				htmlStr = htmlStr + '\
			</ul>\
		</div>\
		</li>';
	$('.expList').append(htmlStr);
	
	for(let z in expData[x].project){
	$('.project_content').append('\
		<li>\
			<div class="project_list" data-aos="fade-right" data-aos-duration="500">\
				<div class="project_cap">\
					<h3>'+expData[x].project[z].projectName+'</h3>\
					<p class="view_site"><a href="'+expData[x].project[z].projectLink+'" target="_blank">Open</a></p>\
				</div>\
				<div class="project_img"><img src="'+expData[x].project[z].projectPhoto+'"><div>\
			</div>\
		</li>\
		');
	}
}
});