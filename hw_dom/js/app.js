document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
    const form = document.querySelector('#new-golfer-form');
    form.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

  })

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
    const golfRankingListP = createRankingListItem(event.target);
    const rankingList = document.querySelector('#ranking-list');
    const golfRankingListLi = document.createElement('li');
    golfRankingListLi.classList.add();
    golfRankingListLi.appendChild(golfRankingListP);
    rankingList.appendChild(golfRankingListLi)
    event.target.reset();
  }

const createRankingListItem = function(event){
 
    
    console.log(event.course)
    const rankingItem = document.createElement('p');
    rankingItem.textContent = `Name: ${event.name.value}  
                               Age: ${event.age.value} 
                               Nationality: ${event.nationality.value} 
                               Ranking: ${event.ranking.value}
                               Favourite Course: ${event.course.value}`;

    return rankingItem;
  }

const handleDeleteAllClick = function (event) {
    const rankingList = document.querySelector('#ranking-list');
    rankingList.innerHTML = '';
}


//     const handleFormSubmit = function(event){
//     event.preventDefault();
//     const resultlist = document.querySelector('#ranking-list');
//     resultParagraph = `Name: ${event.target.name.value}  Age: ${event.target.age.value} Nationality: ${event.target.nationality.value}`;
//     resultlist.appendChild(resultParagraph.textContent);
//     const form = document.getElementById('new-golfer-form').reset();
//   }


//   const handleFormSubmit = function(event){
//     event.preventDefault();
//     const resultParagraph = document.querySelector('#ranking-list');
//     resultParagraph.textContent = `Name: ${event.target.name.value}  Age: ${event.target.age.value} Nationality: ${event.target.nationality.value}`;
//     const form = document.getElementById('new-golfer-form').reset();
//   }