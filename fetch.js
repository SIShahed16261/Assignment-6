function loadbuttons(){

    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then((response)=>response.json())
    .then((data)=>displayButtons(data.data));
}
function displayButtons(buttons){
// console.log(buttons);
const buttonContainer = document.getElementById('lesson-btn');
buttonContainer.classList.add('flex', 'justify-center', 'gap-3', 'flex-wrap');
for (let x of buttons)
{
    console.log(x);
    const btndiv= document.createElement('div');
    btndiv.classList.add('flex','items-center');
    
    btndiv.innerHTML = `
    <buttton class="btn btn-primary bg-white text-[#422AD5]  hover:bg-[#422AD5] hover:text-white">
                <img src="assets/fa-book-open.png" alt="">
                Learn - ${x.level_no}
            </buttton>
    `
buttonContainer.appendChild(btndiv);
}

}
loadbuttons();