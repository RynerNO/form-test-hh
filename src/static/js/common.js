const licenseContainer = document.querySelector('#license');

const licensePlans = licenseContainer.querySelectorAll('.license__plan')

const licenseBuyLink = licenseContainer.querySelector('.license__btn')

const licenseSelectedPlanEl = licenseContainer.querySelector('.license__selected-plan span')

const licenseTotalPriceEl = licenseContainer.querySelector('.license__total-price') 

const licenseAmountEl = licenseContainer.querySelector('select')

// Значения по умолчанию
let selectedPlan = licensePlans[0];
let licenseAmount = 1;

for(let licensePlan of licensePlans) {
    licensePlan.addEventListener('click', () => {
        selectedPlan.classList.remove('license__plan_selected')
        selectedPlan = licensePlan
        selectedPlan.classList.add('license__plan_selected')
        licenseSelectedPlanEl.innerHTML = selectedPlan.getAttribute('plan')
        calcTotalPrice()
        editUrl()
        
    })
}

licenseAmountEl.addEventListener('change', () => {
    licenseAmount = licenseAmountEl.value
    calcTotalPrice()
    editUrl()
})
// Расчет итоговой суммы в зависимости от выбраной лицензии и количества
function calcTotalPrice() {
    let licensePrice = Number(selectedPlan.getAttribute('value'));
    licenseTotalPriceEl.innerHTML = licensePrice * licenseAmount
}

function editUrl() {
    licenseBuyLink.setAttribute('href', `/buy-plan-${selectedPlan.getAttribute('plan')}-amount-${licenseAmount}`)
}