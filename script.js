let celebrities = [
	{	
		id: 1,
		name: "Arman",
		title: "Student, Tech karo Circle",
		imgURL: "arman.jpg",
		quote: "Got task, laugh for 1 min",
		videoURL:"arman.mp4"
	},

	{
		id: 2,
		name: "Irfan",
		title: "Student, Tech karo Circle",		
		imgURL: "irfan.jpg",
		quote: "Perform dastaan Goi",
		videoURL:"irfan.mp4"
		
	},

	{
		id: 3,
		name: "Yousuf",
		title: "Student, Tech karo Circle",		
		imgURL: "yousuf.jpg",
		quote: "Got task, dance on music",
		videoURL:"yousuf.mp4"
		
	},

	{
		id: 4,
		name: "Uzma",
		title: "Student, Tech karo Circle",		
		imgURL: "uzma.jpg",
		quote: "Got task, busting baloon on head.",
		videoURL:"uzma.mp4"
		
	},

	{
		id: 5,
		name: "Saqib",
		title: "Student, Tech karo Circle",		
		imgURL: "saqib.jpg",
		quote: "Got task, Act out film name.",
		videoURL:"saqib.mp4"
		
	},
	{
		id: 6,
		name: "Taha",
		title: "Student, Tech karo Circle",		
		imgURL: "taha.jpg",
		quote: "Eat all burgurs frount of him",
		videoURL:"taha.mp4"
		
	},

	{
		id: 7,
		name: "Saeed",
		title: "Student, Tech karo Circle",		
		imgURL: "saeed.jpg",
		quote: "Got task, perform poetry",
		videoURL:"saeed.mp4"
		
	},


	{
		id: 8,
		name: "Nazia",
		title: "Student, Tech karo Circle",		
		imgURL: "nazia.jpg",
		quote: "Got task, drink glass of cold drink in one attemp .",
		videoURL:"nazia.mp4"
		
	},
	{
		id: 9,
		name: "Aisha",
		title: "Student, Tech karo Circle",		
		imgURL: "final.png",
		quote: "Final between Aisha & Hadia.",
		videoURL:"final.mp4"
		
	}

 ];
	

function initialize() {
	// console.log("assad")
	let celebritiesGroupEl = document.querySelector("#celebritries-List");
	for(let i = 0; i < celebrities.length; i ++){
		// console.log(celebrities[i])
		// bodyEl.innerHTML += "<div class='celebrity-img-div' style='background-image: url(images/"+ celebrities[i].imgURL+" )'> </div> "+ celebrities[i].name ;
		// bodyEl.innerHTML += celebrities[i].name;
		celebritiesGroupEl.innerHTML += `
					<div class="celebrity-img-div" 
					  style="background-image: url(images/${celebrities[i].imgURL})"
					  onclick="changeCeleb(${i})">
					  <p class="celebrity-img-text">${celebrities[i].name}</p>
					  
				    </div>`
	}
	changeCeleb(0);
// 	function info(x){

// 	let display =parseInt(document.querySelector("div").id);
// 	console.log(display);
	
// 		display.innerHTML = celebrities[x].name+"\n"+celebrities[x].quote;

// }

}

function changeCeleb(celeIndex){
	document.querySelector("#celebrity-name").innerHTML = celebrities[celeIndex].name;
	document.querySelector("#celebrity-title").innerHTML = celebrities[celeIndex].title;
	document.querySelector("#celebrity-img ").style["background-image"] = `url(images/${celebrities[celeIndex].imgURL})`;
	document.querySelector("#celebrity-quote").innerHTML = celebrities[celeIndex].quote;
	// document.querySelector("#celebrity-link a").href = celebrities[celeIndex].readMoreUrl;
	document.querySelector("#vid").src=`videos/${celebrities[celeIndex].videoURL}`;
	// let rand1 = Math.floor(Math.random() * 255);
	// let rand2 = Math.floor(Math.random() * 255);
	// let rand3 = Math.floor(Math.random() * 255);
}


// function changeCeleb(){
// 	console.log("hi" + celeIndex);
// }