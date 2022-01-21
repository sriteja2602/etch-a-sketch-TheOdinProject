let value=16;

const con=document.getElementById('container')
		con.style.display='flex'
		con.style.flexWrap='wrap'
		con.style.width='960px'
		con.style.height='960px'
		let w=960;
    	// con.style.border='2px red solid'
		makeboxes(value)
		function makeboxes(value) {
			for (let index = 0; index < value; index++) {
				for (let index1 = 0; index1 < value; index1++) {
				const a=document.createElement('div')
				a.classList.add('mini')
				a.style.width=w/value+'px'
				a.style.height=w/value+'px'
				con.appendChild(a);
			}}
			const b=document.getElementsByClassName('mini')
			for (const button of b) 
				  button.addEventListener('mouseover', ()=> button.style.backgroundColor='blue')
		}

const clear=document.getElementById('clear')
clear.addEventListener('click',()=>{
	
	const b=document.getElementsByClassName('mini')
	
let val=prompt('Enter new value');
while(b[0]) {
    b[0].parentNode.removeChild(b[0]);
}
makeboxes(val)

})
