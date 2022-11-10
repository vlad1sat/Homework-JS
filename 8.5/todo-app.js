(function () {
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerText = title;
        return appTitle;
    }

    function createTodoItemForm() {
        let form = document.createElement('form');
        let button = document.createElement('button');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');

        button.disabled = true;
        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = "Введите название нашего дела";
        button.classList.add('btn', 'btn-primary');
        button.textContent = "Добавить дело";
        buttonWrapper.classList.add('input-group-append');

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        input.addEventListener('input', function(e) {
            e.preventDefault();
            let isCorrectSymbol = false;

            for (let symbol of input.value)
                if (symbol !== ' ') {
                    isCorrectSymbol = true;
                    break;
                }

            button.disabled = input.value.length === 0 || !isCorrectSymbol;
        })

        return {
            form,
            input,
            button,
        };
    }

    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(name) {
        let item = document.createElement('li');
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between',
            'align-items-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = "Готово";
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = "Удалить";

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            doneButton,
            deleteButton
        };
    }

    function createTodoApp(container, title = "Список дел", arraysTasks = []) {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
        container.append(todoAppTitle, todoItemForm.form, todoList);

        for (let task of arraysTasks) {
            let elementTodoTask = createTodoItem(task.name);

            if (task.done)
                elementTodoTask.item.classList.toggle('list-group-item-success');

            clickDoneButton(elementTodoTask);
            clickDeleteButton(elementTodoTask);

            todoList.append(elementTodoTask.item);
        }

        todoItemForm.form.addEventListener('submit', function (e) {
            e.preventDefault();
            let itemForm = todoItemForm.input.value;
            if (!itemForm)
                return;

            let todoItem = createTodoItem(todoItemForm.input.value);
            clickDoneButton(todoItem);
            clickDeleteButton(todoItem);

            todoList.append(todoItem.item);
            todoItemForm.input.value = '';
            todoItemForm.button.disabled = true;
        })
    }

    function clickDoneButton(button) {
        button.doneButton.addEventListener('click', function () {
            button.item.classList.toggle('list-group-item-success');
        });
    }

    function clickDeleteButton(button) {
        button.deleteButton.addEventListener('click', function () {
            if (confirm("Вы уверены?")) {
                button.item.remove();
            }
        });
    }

    window.createTodoApp = createTodoApp;
})();