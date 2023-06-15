// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'mary';

function upperCaseCustomerName() {
    if (customerName) {
        customerName = customerName.toUpperCase();
        console.log(customerName);
        
    } else {
        console.log('customerName is not defined');
        
    }
    
}

function setBestCustomer() {
    bestCustomer = 'not bob'
    
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    
}
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'mary';
    
}