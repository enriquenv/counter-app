let teilnehmer = document.getElementById("teilnehmer");
let count = 0;

function add() {
    count = count + 1;
    teilnehmer.innerText = count;
}

let savedCount = document.getElementById("saved-count");

if (typeof localStorage !== 'undefined') {
    // get values in local storage when enabled
    let saved = Number(localStorage.getItem('saved'));
    savedCount.innerText = saved

    function save() {
    saved = Number(saved) + count;
    localStorage.setItem('saved', saved);
    savedCount.innerText = saved;

    count = 0;
    teilnehmer.innerText = count;
    }

    function neu() {
        localStorage.removeItem('saved');
        savedCount.innerText = 0;
        count = 0;
        teilnehmer.innerText = count;
        saved = 0;
    }

  } else {
    // if local storage is not supported or disabled
        let saved = 0;
        savedCount.innerText = saved;

        function save() {
            saved = saved + count;
            savedCount.innerText = saved;
        
            count = 0;
            teilnehmer.innerText = count;
            }

        function neu() {
            location.reload();
        }

  }