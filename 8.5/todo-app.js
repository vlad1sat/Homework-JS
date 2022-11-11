(() => {
    'use strict';

    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.textContent = title;
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

        input.addEventListener('input', (e) => {
            e.preventDefault();
            let isCorrectSymbol = false;

            for (let symbol of input.value) {
                if (symbol !== ' ') {
                    isCorrectSymbol = true;
                    break;
                }
            }

            button.disabled = input.value.length === 0 || !isCorrectSymbol;
        })

        return {
            form,
            input,
            button
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
        let itemJSON = { name: name, idJSON: Math.round(Math.random() * 10000000) + 1, done: false };

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
            deleteButton,
            itemJSON
        };
    }

    function createTodoApp(container, title = "Список дел", keyList) {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
        let listTasks = [];
        container.append(todoAppTitle, todoItemForm.form, todoList);

        if (window.localStorage.getItem(keyList)) {
            let localTasks = JSON.parse(window.localStorage.getItem(keyList));
            for (const task of localTasks) {
                let elementTodoTask = createTodoItem(task.name);

                if (task.done) elementTodoTask.item.classList.toggle('list-group-item-success');

                clickDoneButton(elementTodoTask, task, keyList);
                clickDeleteButton(elementTodoTask, task, keyList);

                todoList.append(elementTodoTask.item);
            }
        }

        todoItemForm.form.addEventListener('submit',  (e) => {
            e.preventDefault();
            let todoItem = createTodoItem(todoItemForm.input.value);
            let localStorageData = window.localStorage.getItem(keyList);

            if (localStorageData === null) listTasks = [];
            else listTasks = JSON.parse(localStorageData);

            listTasks.push(todoItem.itemJSON);
            clickDoneButton(todoItem, todoItem.itemJSON);
            clickDeleteButton(todoItem, todoItem.itemJSON);

            window.localStorage.setItem(keyList, JSON.stringify(listTasks));
            todoList.append(todoItem.item);
            todoItemForm.input.value = '';
            todoItemForm.button.disabled = true;
        })

        function clickDoneButton(button, doneJSON) {
            button.doneButton.addEventListener('click',  () => {
                listTasks = JSON.parse(window.localStorage.getItem(keyList));

                listTasks.forEach((task) => {
                    if (task.idJSON === doneJSON.idJSON) {
                        task.done = !task.done;
                    }
                });

                window.localStorage.setItem(keyList, JSON.stringify(listTasks));
                button.item.classList.toggle('list-group-item-success');
            });
        }

        function clickDeleteButton(element, delJSON) {
            element.deleteButton.addEventListener('click', () => {
                if (confirm("Вы уверены?")) {
                    listTasks = JSON.parse(window.localStorage.getItem(keyList));

                    const filterTask = listTasks.filter(task => task.idJSON !== delJSON.idJSON);

                    window.localStorage.setItem(keyList, JSON.stringify(filterTask));
                    element.item.remove();
                }
            });
        }
    }

    window.createTodoApp = createTodoApp;

})();