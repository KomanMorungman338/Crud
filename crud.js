var app = new function () {
    this.el = document.getElementById('tasks');
    this.tasks = [];
    this.fetchAll = function () {
        var data = '';
        if (this.tasks.length > 0) {
            for (i = 0; i < this.tasks.length; i++) {
                data += '<tr>';
                data += '<td>' + (i + 1) + '.' + this.tasks[i] + '</td>';
                data += '<td><button onclick="app.edit(' + i + ')" class="btn btn-warning">Edit</button></td>'
                data += '<td><button onclick="app.delete(' + i + ')" class="btn btn-danger">Delete</button></td>'
                data += '</tr>'
            }
        }
        this.count(this.tasks.length);
        return this.el.innerHTML = data;
    }
    this.add = function () {
        el = document.getElementById('add-todo');
        var inp = el.value;
        if (inp) {
            this.tasks.push(inp.trim());
            el.value = "";
            this.fetchAll();
        }

    }
    this.edit = function (item) {
        el = document.getElementById('edit-todo');
        el.value = this.tasks[item];
        document.getElementById('edit-box').style.display = "block";
        shelf = this;
        document.getElementById('save-edit').onsubmit = function () {
            var task = el.value;
            if (task) {
                shelf.tasks.splice(item, 1, task.trim());
                shelf.fetchAll();
                closeInput();
            }
        }


    }
    this.delete = function (item) {
        this.tasks.splice(item, 1);
        this.fetchAll();

    }
    this.count = function (data) {
        el = document.getElementById('counter');
        if (data) {
            el.innerHTML = data;

        }
        else
            el.innerHTML = '0';



    }
}
app.fetchAll();
function closeInput() {
    document.getElementById("edit-box").style.display = "none";
}