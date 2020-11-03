class Note {
    constructor(id, name, time) {
        this._idNote = id;
        this._name = name;
        this._time = time;
    }

    get name() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }

    get time() {
        return this._time;
    }

    setTime(value) {
        this._time = value;
    }

    get idNote() {
        return this._id;
    }

    set idNote(value) {
        this._id = value;
    }

    display() {
        let str = "<table style='border: 1px solid black'>";
        for (let i = 0; i < notes.length; i++) {
            str += `<tr>
                        <td id="name${i}" onclick="showCompletedTask(this.id)">${notes[i]._name}</td>
                        <td id="time${i}" onclick="showCompletedTask(this.id)">${notes[i]._time}</td>
                        <td><button id="delete${i}" onclick="deleteTask(this.id)">Delete</button></td>
                    </tr>`
        }
        str += "</table>";
        document.getElementById("test").innerHTML = str;
    }

    displaySearch() {
        let str = "<table style='border: 1px solid black'>";
        for (let i = 0; i < notesSearch.length; i++) {
            str += `<tr>
                        <td id="name${i}" onclick="showCompletedTask(this.id)">${notesSearch[i]._name}</td>
                        <td id="time${i}" onclick="showCompletedTask(this.id)">${notesSearch[i]._time}</td>
                        <td><button id="delete${i}" onclick="deleteTask(this.id)">Delete</button></td>
                        </tr>`
        }
        str += "</table>";
        document.getElementById("test").innerHTML = str;
    }
}

function add() {
    let name = document.getElementById("input-job").value;
    let time = document.getElementById("input-time").value;
    let note = new Note();
    note.setTime(time);
    note.setName(name);
    notes.push(note);
    note.idNote = notes.length;
    note.display();
    clearInput();
}

function clearInput() {
    document.getElementById("input-job").value = "";
    document.getElementById("input-time").value = "";
}

function deleteTask(id) {
    id = id.substring(6, id.length);
    notes.splice(id, 1);
    console.log(id);
    if (notes.length <= 0) {
        document.getElementById("test").innerHTML = "";
        return;
    }
    for (let i = 0; i < notes.length; i++) {
        notes[i].display();
    }
}

function searchNotes() {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].name.indexOf(document.getElementById("input-job").value) > -1) {
            console.log(notes[i]);
            for (let j = 0; j < notesSearch.length; i++) {
                if (notes[i] !== notesSearch[j]) {
                    notesSearch.push(notes[i]);
                    // break;
                }
            }
            if (notesSearch.length <= 0) {
                notesSearch.push(notes[i]);
            }
        }
    }
    console.log(notesSearch);
    notesSearch[0].displaySearch();
}

function showCompletedTask(id) {
    console.log(id);
    id = id.substring(4, id.length);
    console.log(id);
    document.getElementById("name" + id).style.textDecoration = "line-through";
    document.getElementById("time" + id).style.textDecoration = "line-through";
}

// function showToBeDoneTask() {
// }

// note1 = new Note(0, 12, 1);
// note2 = new Note(1, 1, 1);
notes = [];
notesSearch = [];