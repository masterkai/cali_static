const betRecordsOutput = document.querySelector('.betRecordsOutput');

const betRecordsLists = {
  postPerPage: 5,
  currentPage: 1,
  optionsLength: 0,
  selected: 1,
  result: null
}

const betRecordsInit = function () {
  console.log('betRecords ready!!');
  const url ='https://next.json-generator.com/api/json/get/NJBRJWOiu';
  // console.log(betRecordsLists.result);
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    betRecordsLists.result = data;
    betRecordsLoadPage(1)
    // console.log('totalPages', betRecordsLists.optionsLength);
    const betRecordsPageSelector = document.createElement('select')
    for (let i = 0; i < betRecordsLists.optionsLength; i++) {
      let betPageValue = document.createElement('option')
      betPageValue.value = (i + 1);
      betPageValue.textContent = (i + 1)
      betRecordsPageSelector.appendChild(betPageValue)
      betRecordsPageSelector.addEventListener('change', e =>
      {
        console.log('clicked!!');
        betRecordsLoadPage(e.target.value)
        betRecordsLists.selected = parseInt(e.target.value)
      });
    }
    $('#betRecords .pagination .cannotBeRemove:last-child').before(betRecordsPageSelector)
  }).catch(function (err) {
    console.log(err);
  });
  // console.log(betRecordsLists.optionsLength);

}

const betRecordsLoadPage = function (pg) {
  $('.betRecordsOutput').html('');

  // pagination.innerHTML = '';
  betRecordsLists.currentPage = pg;
  let startPost = (betRecordsLists.currentPage - 1) * betRecordsLists.postPerPage;
  let totalPages = Math.ceil(betRecordsLists.result.length / betRecordsLists.postPerPage);
  let endPost = startPost + betRecordsLists.postPerPage > betRecordsLists.result.length ? betRecordsLists.result.length : startPost + betRecordsLists.postPerPage;
  betRecordsLists.optionsLength = totalPages;

  for (let x = 0; x < totalPages; x++) {
    if (totalPages <= 1) {
      $('#betRecords .pagination').css('display', 'none')
    }
  }


  for (let x = startPost; x < endPost; x++) {
    const main = betRecordsLists.result[x];
    let div = document.createElement('div');
    div.classList.add('itemContainer');
    let headerDiv = document.createElement('div')
    let footerDiv = document.createElement('div')
    headerDiv.classList.add('info__header')
    footerDiv.classList.add('info__footer')
    let headerContainer = document.createElement('div');
    let footerContainer = document.createElement('div');
    headerContainer.classList.add('info__header__container');
    footerContainer.classList.add('info__footer__container');
    let headerProperty01 = document.createElement('div');
    headerProperty01.classList.add('property');
    headerProperty01.textContent= main.gamePlatform;
    headerContainer.appendChild(headerProperty01);
    let headerProperty02 = document.createElement('div');
    headerProperty02.classList.add('property');
    headerProperty02.innerHTML = `輸/贏：${parseInt(main.balance.split("$").join(''))>0?`<span class="success">${main.balance}</span>`:`<span class="failure">${main.balance}</span>`}`;
    headerContainer.appendChild(headerProperty02);
    let footerProperty = document.createElement('div');
    footerProperty.classList.add('property')
    footerProperty.style.fontSize = '.75rem';
    footerProperty.textContent = main.dateFormatted;
    footerContainer.appendChild(footerProperty)
    footerDiv.appendChild(footerContainer)
    let chevron = document.createElement('span')
    chevron.classList.add('iconfont', 'icon_chevron-down-light')
    chevron.style.color = '#9BA2AA';
    headerDiv.appendChild(headerContainer)
    headerDiv.appendChild(chevron)
    let dropDownBox = document.createElement('div')
    dropDownBox.classList.add('dropDownBox')
    let div_id = document.createElement('div')
    div_id.classList.add('listItem')
    div_id.style.whiteSpace = 'nowrap';
    div_id.innerHTML = `單號：<span>${main._id}</span>`
    dropDownBox.appendChild(div_id)
    let div_grade = document.createElement('div')
    div_grade.classList.add('listItem')
    div_grade.innerHTML = `星級：<span>${main.grade}</span>`
    dropDownBox.appendChild(div_grade)
    let div_platform = document.createElement('div')
    div_platform.classList.add('listItem')
    div_platform.innerHTML = `遊戲平台：<span>${main.gamePlatform}</span>`
    dropDownBox.appendChild(div_platform)
    let div_kind = document.createElement('div')
    div_kind.classList.add('listItem')
    div_kind.innerHTML = `遊戲類型：<span>${main.kind}</span>`
    dropDownBox.appendChild(div_kind)
    let div_betValue = document.createElement('div')
    div_betValue.classList.add('listItem')
    div_betValue.innerHTML = `投注額：<span>${main.betValue}</span>`
    dropDownBox.appendChild(div_betValue)
    let div_grandTotal = document.createElement('div')
    div_grandTotal.classList.add('listItem')
    div_grandTotal.innerHTML = `流水：<span>${main.grandTotal}</span>`
    dropDownBox.appendChild(div_grandTotal)
    div.appendChild(headerDiv)
    div.appendChild(dropDownBox)
    div.appendChild(footerDiv)
    betRecordsOutput.appendChild(div)

    const betRecordsState = {
      clicked: false
    }
    $('.itemContainer').on('click', function () {
      betRecordsState.clicked = !betRecordsState.clicked;
      if (betRecordsState.clicked) {
        $(this).find('.icon_chevron-down-light').addClass('icon_chevron-up-light')
        $(this).find('.itemContent').css('display','flex')
        $(this).find('.dropDownBox').addClass('active')
      } else {
        $(this).find('.icon_chevron-down-light').removeClass('icon_chevron-up-light')
        $(this).find('.itemContent').css('display','none')
        $(this).find('.dropDownBox').removeClass('active')

      }
    })

  }


}

window.addEventListener('load', function () {
  betRecordsInit();
});
$('#betRecords .pagination li:last-child').click(function (e) {
  e.preventDefault();

  if (betRecordsLists.selected === betRecordsLists.optionsLength) {
    return false
  } else {
    betRecordsLists.selected += 1;
    betRecordsLoadPage(betRecordsLists.selected)
    $('#betRecords .pagination select').val(betRecordsLists.selected);
  }
  console.log('next clicked!');
  console.log('current:', betRecordsLists.selected);
})
$('#betRecords .pagination li:first-child').click(function (e) {
  e.preventDefault();

  if (betRecordsLists.selected === 1) {
    return false
  } else {
    betRecordsLists.selected -= 1;
    betRecordsLoadPage(betRecordsLists.selected)
    $('#betRecords .pagination select').val(betRecordsLists.selected);
  }
  console.log('prev clicked!');
  console.log('current:', betRecordsLists.selected);
})