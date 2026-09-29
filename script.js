// ==========================================
// BULAN & BINTANG
// NOVEL VISUAL
// ==========================================


// ==========================================
// ELEMENT HTML
// ==========================================

const dialogueElement =
    document.getElementById("dialogue");

const characterNameElement =
    document.getElementById("characterName");

const characterImageElement =
    document.getElementById("characterImage");

const sceneTitleElement =
    document.getElementById("sceneTitle");

const choicesElement =
    document.getElementById("choices");

const nextButton =
    document.getElementById("nextButton");


// ==========================================
// STATUS GAME
// ==========================================

let currentScene = 0;
let currentDialogue = 0;


// ==========================================
// DATA CERITA
// ==========================================

const story = [

    // ======================================
    // SCENE 0
    // ======================================

    {
        title: "Malam Pertama",

        dialogues: [

            {
                name: "Luna",

                image: "foto/luna.png",

                text:
                    "Malam ini bulan terlihat lebih indah dari biasanya..."
            },

            {
                name: "Luna",

                image: "foto/luna.png",

                text:
                    "Entah kenapa aku merasa ada sesuatu yang akan terjadi malam ini."
            },

            {
                name: "Narator",

                image: "foto/bulan.png",

                text:
                    "Tiba-tiba sebuah cahaya melintas di langit."
            },

            {
                name: "Luna",

                image: "foto/luna.png",

                text:
                    "Apa itu?!"
            }
        ],

        choices: [

            {
                text:
                    "Aku harus mencari sumber cahaya itu.",

                nextScene: 1
            },

            {
                text:
                    "Aku akan tetap melihat langit.",

                nextScene: 2
            }
        ]
    },


    // ======================================
    // SCENE 1
    // ======================================

    {
        title: "Bintang Jatuh",

        dialogues: [

            {
                name: "Luna",

                image: "foto/luna.png",

                text:
                    "Aku harus mencari tahu apa yang jatuh tadi."
            },

            {
                name: "Narator",

                image: "foto/bintang.png",

                text:
                    "Luna berlari menuju taman di ujung kota."
            },

            {
                name: "Stella",

                image: "foto/stella.png",

                text:
                    "Akhirnya... seseorang bisa melihatku."
            },

            {
                name: "Luna",

                image: "foto/luna.png",

                text:
                    "Siapa kamu?"
            },

            {
                name: "Stella",

                image: "foto/stella.png",

                text:
                    "Namaku Stella. Aku adalah bintang yang kehilangan tempatku di langit."
            }
        ],

        choices: [

            {
                text:
                    "Aku akan membantumu kembali ke langit.",

                nextScene: 3
            },

            {
                text:
                    "Kenapa aku harus membantumu?",

                nextScene: 4
            }
        ]
    },


    // ======================================
    // SCENE 2
    // ======================================

    {
        title: "Di Bawah Cahaya Bulan",

        dialogues: [

            {
                name: "Luna",

                image: "foto/luna.png",

                text:
                    "Mungkin aku hanya melihat bintang jatuh."
            },

            {
                name: "Narator",

                image: "foto/bulan.png",

                text:
                    "Luna menatap bulan dengan tenang."
            },

            {
                name: "Stella",

                image: "foto/stella.png",

                text:
                    "Tolong..."
            },

            {
                name: "Luna",

                image: "foto/luna.png",

                text:
                    "Suara siapa itu?"
            }
        ],

        choices: [

            {
                text:
                    "Mencari suara tersebut.",

                nextScene: 1
            }
        ]
    },


    // ======================================
    // SCENE 3
    // ======================================

    {
        title: "Cahaya Harapan",

        dialogues: [

            {
                name: "Luna",

                image: "foto/luna.png",

                text:
                    "Aku akan membantumu kembali ke langit."
            },

            {
                name: "Stella",

                image: "foto/stella.png",

                text:
                    "Benarkah?"
            },

            {
                name: "Luna",

                image: "foto/luna.png",

                text:
                    "Tentu. Tidak ada seorang pun yang seharusnya sendirian."
            },

            {
                name: "Stella",

                image: "foto/stella.png",

                text:
                    "Terima kasih, Luna."
            },

            {
                name: "Narator",

                image: "foto/bintang.png",

                text:
                    "Cahaya bintang memenuhi langit malam."
            }
        ],

        ending: "good"
    },


    // ======================================
    // SCENE 4
    // ======================================

    {
        title: "Rahasia Stella",

        dialogues: [

            {
                name: "Luna",

                image: "foto/luna.png",

                text:
                    "Kenapa aku harus membantumu?"
            },

            {
                name: "Stella",

                image: "foto/stella.png",

                text:
                    "Karena aku sudah terlalu lama tersesat."
            },

            {
                name: "Stella",

                image: "foto/stella.png",

                text:
                    "Setiap malam aku melihat rumahku dari kejauhan."
            },

            {
                name: "Luna",

                image: "foto/luna.png",

                text:
                    "Kalau begitu... aku akan mencoba membantumu."
            }
        ],

        choices: [

            {
                text:
                    "Ulurkan tangan kepada Stella.",

                nextScene: 3
            },

            {
                text:
                    "Tinggalkan taman.",

                nextScene: 5
            }
        ]
    },


    // ======================================
    // SCENE 5
    // ======================================

    {
        title: "Bintang yang Hilang",

        dialogues: [

            {
                name: "Narator",

                image: "foto/bulan.png",

                text:
                    "Luna meninggalkan taman."
            },

            {
                name: "Stella",

                image: "foto/stella.png",

                text:
                    "Mungkin memang tidak semua bintang ditakdirkan kembali ke langit."
            },

            {
                name: "Narator",

                image: "foto/bintang.png",

                text:
                    "Malam itu, satu cahaya di langit perlahan menghilang."
            }
        ],

        ending: "sad"
    }

];


// ==========================================
// MENAMPILKAN DIALOG
// ==========================================

function showDialogue() {

    const scene =
        story[currentScene];

    const dialogue =
        scene.dialogues[currentDialogue];


    // Judul scene
    sceneTitleElement.textContent =
        scene.title;


    // Nama karakter
    characterNameElement.textContent =
        dialogue.name;


    // Gambar karakter
    characterImageElement.src =
        dialogue.image;


    // Teks
    dialogueElement.textContent =
        dialogue.text;


    // Hapus pilihan lama
    choicesElement.innerHTML = "";


    // Jika bukan dialog terakhir
    if (
        currentDialogue <
        scene.dialogues.length - 1
    ) {

        nextButton.style.display =
            "block";

        nextButton.textContent =
            "Lanjut ▶";

        return;
    }


    // Jika memiliki ending
    if (scene.ending) {

        nextButton.style.display =
            "block";

        nextButton.textContent =
            "Lihat Ending ✦";

        return;
    }


    // Jika memiliki pilihan
    if (scene.choices) {

        nextButton.style.display =
            "none";

        showChoices(scene.choices);
    }
}


// ==========================================
// MENAMPILKAN PILIHAN
// ==========================================

function showChoices(choices) {

    choicesElement.innerHTML = "";


    choices.forEach(function(choice) {

        const button =
            document.createElement("button");


        button.className =
            "choice-button";


        button.textContent =
            choice.text;


        button.addEventListener(
            "click",
            function() {

                currentScene =
                    choice.nextScene;

                currentDialogue = 0;

                showDialogue();
            }
        );


        choicesElement.appendChild(button);

    });
}


// ==========================================
// TOMBOL LANJUT
// ==========================================

nextButton.addEventListener(
    "click",
    function() {

        const scene =
            story[currentScene];


        // Masih ada dialog
        if (
            currentDialogue <
            scene.dialogues.length - 1
        ) {

            currentDialogue++;

            showDialogue();

            return;
        }


        // Ending
        if (scene.ending) {

            showEnding(
                scene.ending
            );

            return;
        }
    }
);


// ==========================================
// ENDING
// ==========================================

function showEnding(type) {

    choicesElement.innerHTML = "";


    if (type === "good") {

        sceneTitleElement.textContent =
            "ENDING — CAHAYA DI LANGIT";


        characterNameElement.textContent =
            "Stella";


        characterImageElement.src =
            "foto/stella.png";


        dialogueElement.textContent =
            "Dengan bantuan Luna, Stella menemukan jalan pulang. Malam itu, sebuah bintang baru bersinar paling terang di langit.";

    }

    else {

        sceneTitleElement.textContent =
            "ENDING — BINTANG YANG HILANG";


        characterNameElement.textContent =
            "Narator";


        characterImageElement.src =
            "foto/bulan.png";


        dialogueElement.textContent =
            "Luna tidak pernah melupakan Stella. Setiap kali melihat langit malam, ia selalu bertanya-tanya apakah bintang itu masih mengingatnya.";

    }


    nextButton.textContent =
        "Main Lagi ↻";


    nextButton.style.display =
        "block";


    nextButton.onclick =
        restartGame;
}


// ==========================================
// RESTART
// ==========================================

function restartGame() {

    currentScene = 0;

    currentDialogue = 0;


    nextButton.onclick = null;


    showDialogue();
}


// ==========================================
// MULAI GAME
// ==========================================

showDialogue();