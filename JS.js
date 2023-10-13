// Observered elements
let observer = new IntersectionObserver((entries)=>{
	entries.forEach((entry)=>{
		entry.target.classList.toggle('show',entry.isIntersecting);
	})
})

// Observing elements
let scrolling_items = document.querySelectorAll('.items');
scrolling_items.forEach((target)=>{
	observer.observe(target);
})

// For typing in effect 
let temp_type=0;
let text=`Welcome to my Personal Website.`;
let speed=50;
let para_welcome=document.getElementById("para-welcome"); 
function type_effect(){
	if(temp_type<text.length){
		para_welcome.innerHTML+=text.charAt(temp_type);temp_type++;
		setTimeout(type_effect,speed);
	}
}
type_effect();

let images=document.querySelectorAll(".imgs");
images.forEach((img)=>{
	img.addEventListener("mouseenter",()=>{
		img.nextElementSibling.style.opacity=1;
		img.style.opacity=0.3;
	});
	img.addEventListener('mouseleave',()=>{
		img.nextElementSibling.style.opacity=0;
		img.style.opacity=1;
	});
	img.nextElementSibling.addEventListener("mouseenter",()=>{
		img.nextElementSibling.style.opacity=1;
		img.style.opacity=0.3;
	});
	img.nextElementSibling.addEventListener("mouseleave",()=>{
		img.nextElementSibling.style.opacity=0;
		img.style.opacity=1;
	});
})