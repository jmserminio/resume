$(function() {
const chartData = [
	{
		percent: 88,
		textContent: 'HTML/HTML5',
		icon: 'fab fa-html5'
	}, {
		percent: 82,
		textContent: 'CSS/CSS3',
		icon: 'fab fa-css3-alt'
	}, {
		percent: 25,
		textContent: 'Sass',
		icon: 'fab fa-sass'
	},{
		percent: 25,
		textContent: 'Bootstrap',
		icon: 'fab fa-bootstrap'
	}, {
		percent: 78,
		textContent: 'Git',
		icon: 'fab fa-github-square'
	}, {
		percent: 38,
		textContent: 'JavaScript/JQuery',
		icon: 'fab fa-js-square'
	}, {
		percent: 35,
		textContent: 'Photoshop',
		icon: 'fab fa-adobe'
	}, {
		percent: 32,
		textContent: 'UI / UX',
		icon: 'fas fa-columns'
	}, {
		percent: 20,
		textContent: 'SEO',
		icon: 'fab fa-google'
	}, {
		percent: 10,
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
		company_logo: 'img/tcap.png',
		company_name: 'Transcosmos Asia Philippines Inc.',
		job_position: 'Front-End Web Developer',
		job_exp: '( May 06, 2019 - Present )',
		description: [{
			'description_content' : ['Cooperate with designers to create clean, simple and user friendly interfaces',
									'Uses code versioning tool for project workflows',
									'Convert PSD design to code using HTML | CSS | JavaScript/JQuery libraries etc.',
									'Develop responsive view for mobiles',
									'Carry out quality assurance tests to discover errors and optimize usability',
									'Maintain and improve websites | Browser testing and debugging | Optimizing websites for maximum speed',
									'Finish the task before the deadline']
		}],
		project: [{
			projectName: 'Duskin Health Rent',
			projectPhotoPc: 'img/dsk.jpg',
			projectPhotoSp: 'img/dsk_sp.jpg',
			projectLink: 'https://healthrent.duskin.jp/'
		}, {
			projectName: 'Shonan Beauty Clinic',
			projectPhotoPc: 'img/sbc.jpg',
			projectPhotoSp: 'img/sbc_sp.jpg',
			projectLink: 'https://www.s-b-c.net/'
		}]
	}
];

for(let x in expData) {
	let htmlStr =	'<li>\
						<div class="logo_content" data-aos="fade-right" data-aos-duration="500">\
							<img src='+expData[x].company_logo +'>\
						</div>\
						<div class="exp_content" data-aos="fade-right" data-aos-duration="500">\
							<p class="company_name">'+ expData[x].company_name +'</p>\
							<p class="job_position">'+ expData[x].job_position +'</p>\
							<p class="job_exp">'+ expData[x].job_exp +'</p>\
							<ul class="description_content">';
								for(let y in expData[x].description[0].description_content) {
									htmlStr = htmlStr + '<li class="description_list"><i class="fa fa-caret-right"></i>'+ expData[x].description[0].description_content[y] +'</li>';
								}
								htmlStr = htmlStr + '\
							</ul>\
						</div>\
					</li>';
					$('.exp').append(htmlStr);
	
	for(let z in expData[x].project){
	$('.project_content').append('\
		<li>\
			<div class="project_list" data-aos="fade-right" data-aos-duration="500">\
				<div class="project_cap">\
					<h3>'+expData[x].project[z].projectName+'</h3>\
					<p class="view_site"><a href="'+expData[x].project[z].projectLink+'" target="_blank">Open</a></p>\
				</div>\
				<div class="project_img"><img class="pcOnly" src="'+expData[x].project[z].projectPhotoPc+'"><img class="spOnly" src="'+expData[x].project[z].projectPhotoSp+'"><div>\
			</div>\
		</li>\
		');
	}
}
});