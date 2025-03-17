function loadbuttons() {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(response => response.json())
        .then(data => displayButtons(data.data));
}

function displayButtons(buttons) {
    const buttonContainer = document.getElementById('lesson-btn');
    buttonContainer.classList.add('flex', 'justify-center', 'gap-3', 'flex-wrap');

    buttons.forEach(x => {
        const btndiv = document.createElement('div');
        btndiv.classList.add('flex', 'items-center');

        const button = document.createElement('button');
        button.id = `lesson-${x.level_no}`;
        button.classList.add('btn', 'btn-primary', 'bg-white', 'text-[#422AD5]', 'hover:bg-[#422AD5]', 'hover:text-white');
        button.innerHTML = `<img src="assets/fa-book-open.png" alt=""> Learn - ${x.level_no}`;

        button.addEventListener('click', () => {
            loadButtonDetails(x.level_no);
            document.getElementById("defaultMessageDiv").style.display = "none";
            document.getElementById("divn").innerHTML = "";
        });

        btndiv.appendChild(button);
        buttonContainer.appendChild(btndiv);
    });
}

function loadButtonDetails(id) {
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
        .then(response => response.json())
        .then(data => displayButtonDetails(data.data))
        .catch(error => console.error('Error fetching details:', error));
}

function displayButtonDetails(details) {
    const btnDetails = document.getElementById("btn-details");
    btnDetails.innerHTML = '';

    if (details.length === 0) {
        document.getElementById("divn").innerHTML = `
            <div class="flex flex-col justify-center items-center mt-8 mx-auto p-12 bg-slate-200 rounded-2xl">
                <img class="mb-4 w-16" src="assets/alert-error.png" alt="">
                <p class="text-sm text-gray-500">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <p class="text-3xl font-medium">নেক্সট Lesson এ যান</p>
            </div>
        `;
        return;
    }

    details.forEach(x => {
        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("border-white", "bg-yellow-50", "text-center", "p-6");
        detailsDiv.innerHTML = `
            <p class="font-bold text-2xl mb-2">${x.word}</p>
            <p class="font-semibold text-xs mb-2">Meaning / Pronunciation</p>
            <p class="font-semibold text-2xl mb-8">"${x.meaning} / ${x.pronounciation}"</p>
            <div class="flex justify-between">
                <button class="detbtn" data-id="${x.id}"><i class="fa-solid fa-circle-info"></i></button>
                <i class="fa-solid fa-volume-high"></i>
            </div>
        `;
        btnDetails.appendChild(detailsDiv);
    });

    document.querySelectorAll(".detbtn").forEach(button => {
        button.addEventListener("click", function () {
            loadModalContent(this.dataset.id);
        });
    });
}

function loadModalContent(id) {
    fetch(`https://openapi.programming-hero.com/api/word/${id}`)
        .then(response => response.json())
        .then(data => displayModalContent(data.data))
        .catch(error => console.error('Error fetching modal details:', error));
}

function displayModalContent(data) {
    const modal = document.getElementById("my_modal_1");
    modal.innerHTML = `
        <div class="modal-box">
            <h3 class="text-2xl font-bold">${data.word} (<span><i class="fa-solid fa-microphone"></i></span> : ${data.pronounciation})</h3>
            <p class="mt-5 text-sm font-bold">Meaning</p>
            <p class="mt-2 text-sm font-bold">${data.meaning}</p>
            <p class="mt-5 text-sm font-bold">Example</p>
            <p class="mt-2 text-sm font-normal">${data.example}</p>
            <p class="mt-5 text-sm font-bold">সমার্থক শব্দ গুলো</p>
            <div class="mt-2">${data.synonyms.map(word => `<button class="btn mt-2 mr-2">${word}</button>`).join('')}</div>
            <p class="mt-8 mb-8 text-center font-bold text-lg">Press ESC or Close button to close the modal</p>
            <div class="modal-action">
                <form method="dialog">
                    <button class="btn btn-primary">Close</button>
                </form>
            </div>
        </div>
    `;
    modal.showModal();
}

// Load buttons on page load
loadbuttons();
