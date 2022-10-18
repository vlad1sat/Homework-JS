(() => {
    function createCard() {
        let elementsList = document.createElement('li');
        let clickElement = document.createElement('button');
        let imageCard = document.createElement('p');
        let index = 0;

        imageCard.textContent = "S"
        clickElement.classList.add('date');

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
        restartButton.addEventListener('click', () => {
        })

    }

    function logicCard(listCard, indexesCard, cards) {
        let countTap = 0;
        let clickCards = [];
        for (let index = 0; index < 16; index++) {
            let card = createCard();
            listCard.append(card.elementsList);
            card.index = indexesCard[index];
            cards.push(card);
            card.clickElement.addEventListener('click', () => {
                card.imageCard.textContent = String(card.index);
                card.clickElement.disabled = true;
                clickCards.push(card);
                countTap++;
                if (countTap === 2) {
                    countTap = 0;
                    if (clickCards[0].index === clickCards[1].index)
                        clickCards.length = 0;
                    else {
                        clickCards[0].imageCard.textContent = "S";
                        clickCards[1].imageCard.textContent = "S";
                        clickCards[0].clickElement.disabled = false;
                        clickCards[1].clickElement.disabled = false;
                        clickCards.length = 0;
                    }
                }
            })

        }

    }
    createGame();
    /*function imagesCards() {
        let images = [];

    }*/

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
    /*function addCarInApp() {
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
    addCarInApp();*/

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



})();