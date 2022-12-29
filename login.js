const chars ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#_-"
function genRandom(length){
	let result='';
	const charLength = chars.length
	for (let i=0;i<length;i++){
		result += chars.charAt(Math.floor(Math.random()*charLength));
	}
	return result;
}
window.addEventListener("DOMContentLoaded",()=>{
	document.getElementById("username").innerHTML = (' ' +genRandom(8));
});
