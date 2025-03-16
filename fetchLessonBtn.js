
function loadbuttons() {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(response => response.json())
        .then(data => displayButtons(data.data));
}

function displayButtons(buttons) {
    const buttonContainer = document.getElementById('lesson-btn');
    buttonContainer.classList.add('flex', 'justify-center', 'gap-3', 'flex-wrap');

    for (let x of buttons) {
        const btndiv = document.createElement('div');
        btndiv.classList.add('flex', 'items-center');

        // Create button with unique id
        const button = document.createElement('button');
        button.id = `lesson-${x.level_no}`;
        button.classList.add('btn', 'btn-primary', 'bg-white', 'text-[#422AD5]', 'hover:bg-[#422AD5]', 'hover:text-white');
        button.innerHTML = `<img src="assets/fa-book-open.png" alt=""> Learn - ${x.level_no}`;

        // Add event listener to fetch details when clicked
        button.addEventListener('click', () => 
            {
                loadButtonDetails(x.level_no);
            document.getElementById("defaultMessageDiv ").style.display="none";
            });

        btndiv.appendChild(button);
        buttonContainer.appendChild(btndiv);
    }
}

function loadButtonDetails(id) {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayButtonDetails(data.data))
        .catch(error => console.error('Error fetching details:', error));
}

function displayButtonDetails(details) {
    const btnDetails = document.getElementById("btn-details");
    btnDetails.innerHTML = ''; // Clear previous details

    // for having no data 

    if (details.length === 0) {
        const divn = document.getElementById("divn");
      
        divn.innerHTML = `
        
            <div class="flex flex-col justify-center items-center mt-8 mx-auto p-12 bg-slate-200 rounded-2xl">
                <img class="mb-4 w-16" src="assets/alert-error.png" alt="">
                <p class="text-sm text-gray-500">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <p class="text-3xl font-medium">নেক্সট Lesson এ যান</p>
            </div>

        `;
        return;
    }
// for having data
    for (let x of details) {
       
        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("border-white", "bg-yellow-50", "text-center", "p-6");

        detailsDiv.innerHTML = `
            <p class="font-bold text-2xl mb-2">${x.word}</p>
            <p class="font-semibold text-xs mb-2">Meaning /Pronunciation</p>
            <p class="font-semibold text-2xl mb-8">"${x.meaning} / ${x.pronounciation}"</p>
            <div class="flex justify-between">
                <i class="fa-solid fa-circle-info"></i>
                <i class="fa-solid fa-volume-high"></i>
            </div>
        `;

        btnDetails.appendChild(detailsDiv);
    }
}

// Load buttons on page load
loadbuttons();

