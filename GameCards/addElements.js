/*
(() => {
    function createCard() {
        let elementsList = document.createElement('li');
        let clickElement = document.createElement('button');
        //let imageCard = document.createElement('img');
        let index = 0;

        clickElement.classList.add('date');
        imageCard.src = "https://avatars.mds.yandex.net/i?id=b909660bd08a052124d88476e593b6d9-5858783-images-thumbs&n=13";
        imageCard.alt = "Карточка";
        imageCard.classList.add('styleCard');
        elementsList.append(clickElement);
        clickElement.append(imageCard);

        return {
            elementsList,
            clickElement,
            imageCard,
            index
        }
    }

    function createListCards() {
        let listCards = document.createElement('ul');
        listCards.classList.add();
        return listCards;
    }

    function createGame() {
        let cards = [];
        let restartButton = createRestartButton();
        let nameGame = createMainHeader();
        let listCard  = createListCards();
        let indexesCard = createIndexCard();


        document.body.append(nameGame);
        logicCard(listCard, indexesCard, cards);

        document.body.append(listCard);
        document.body.append(restartButton);

    }

    function logicCard(listCard, indexesCard, cards) {
        for (let index = 0; index < 16; index++) {
            let card = createCard();
            listCard.append(card.elementsList);
            card.index = indexesCard[index];
            cards.push(card);
            card.clickElement.addEventListener('click', () => {
                card.imageCard.src = "https://free-images.com/or/fd8c/diamonds_queen_deck_playing.jpg";
                card.clickElement.disabled = true;
            })
        }
    }
    createGame();
    function imagesCards() {
        let images = [];

    }
    function createIndexCard() {
        let indexes = []
        for (let indexCard = 0; indexCard < 8; indexCard++){
            indexes.push(indexCard);
            indexes.push(indexCard);
        }
        shuffle(indexes);
        return indexes;
    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    /!*function addCarInApp() {
        let cards = [];
        let list = createListCards();
        let header = createMainHeader();
        let restart = createRestartButton();
        document.body.append(header);
        for (let cardApp = 0; cardApp < 16; cardApp++) {
            let card = createCard();
            list.append(card.elementsList);
            cards.push(card);
            card.clickElement.addEventListener('click', () => {
                card.imageCard.src = "https://free-images.com/or/fd8c/diamonds_queen_deck_playing.jpg";
                card.clickElement.disabled = true;
                }
            )
        }

        document.body.append(list);
        document.body.append(restart);
        restart.addEventListener('click', () => {
                for (let card of cards) {
                    card.imageCard.src = "https://avatars.mds.yandex.net/i?id=b909660bd08a052124d88476e593b6d9-5858783-images-thumbs&n=13";
                    card.clickElement.disabled = false;
                }
            }
        )
        return cards;
    }
    addCarInApp();*!/

    function createRestartButton() {
        let button = document.createElement('button');
        button.textContent = "Сыграть ещё раз!";
        button.classList.add();
        return button;
    }

    function createMainHeader() {
        let header = document.createElement('h1');
        header.textContent = "Игра карточная";
        header.classList.add();
        return header;
    }



})();*/
