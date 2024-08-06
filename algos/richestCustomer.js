var maximumWealth = function(accounts) {
    let max = 0;
    accounts.forEach((customer) => {
        let sum = 0;
        customer.forEach((bank) => {
            sum = sum + bank
        })
        if (sum > max) {
            max = sum
        }
    })
    return max
};