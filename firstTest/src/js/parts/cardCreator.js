const cardCreator = (arr, basketList) => arr.map((item) => {
  const card = document.createElement('div');
  card.classList.add('sort-cards__card');

  let checked = false;

  Object.keys(item).forEach((value) => {
    if (value === 'boil_volume') {
      return;
    }
    if (value === 'method') {
      return;
    }
    if (value === 'id') {
      card.id = item[value];

      basketList.forEach((el) => {
        if (el.id === card.id) {
          checked = true;
        }
      });
      return;
    }

    if (value === 'contributed_by') {
      return;
    }
    let el;
    if (value === 'image_url') {
      el = document.createElement('img');
      el.src = item[value];
    } else {
      el = document.createElement('div');

      if (value === 'volume') {
        el.textContent = `Обьем: ${item[value].value} ${item[value].unit}`;
      } else if (value === 'ingredients') {
        let malt = '(MALT): ';
        let hops = '(HOPS): ';
        const yeast = `(YEAST): ${item[value].yeast}`;
        item[value].malt.forEach((item) => {
          malt += `${item.name} ${item.amount.value} ${item.amount.unit}; `;
        });
        item[value].hops.forEach((item) => {
          hops += `${item.name} ${item.amount.value} ${item.amount.unit}; `;
        });

        el.textContent = `Состав: ${malt} ${hops} ${yeast}`;
      } else if (value === 'brewers_tips') {
        el.textContent = `Описание: ${item[value]}`;
      } else {
        el.textContent = `${value}: ${item[value]}`;
      }
    }
    card.appendChild(el);
  });

  const checkBlock = document.createElement('div');
  checkBlock.textContent = 'Добавить в корзину';
  const check = document.createElement('input');
  check.type = 'checkbox';
  check.checked = checked;
  checkBlock.classList.add('sort-cards__card-add');
  checkBlock.appendChild(check);
  card.appendChild(checkBlock);

  return card;
});


export default cardCreator;