const customer = [
    {
      name: "Ahmed Khan",
      birthYear: 1997,
      currentYear: 2022,
      district: "Dhaka",
      postNo: 1500,
      priority: 2,
    },
    {
      name: "Khan Ali",
      birthYear: 2025,
      currentYear: 2022,
      district: "Cumilla",
      postNo: 1501,
      priority: 4,
    },
  ];
  
  const sortByPriority = (data) => {
    for (let i = 0; i < data.length; i++) {
      for (let k = 0; k < data.length; k++) {
        if (data[i].priority < data[k].priority) {
          let temp = data[i];
          data[i] = data[k];
          data[k] = temp;
        }
      }
    }
    return data;
  };
  
  const cardDistribution = (allData) => {
    let cardList = [];
    let generateSerialNo = "00000";
  
    for (let i = 0; i < allData.length; i++) {
      let customers = {};
      let cardNumber = "";
  
    //   capital letter...
      cardNumber += allData[i].district
        .toUpperCase()
        .split("")
        .slice(0, 2)
        .join("");
  
      // current years last two digits...
      cardNumber += allData[i].currentYear
        .toString()
        .split("")
        .splice(0 - 2)
        .join("");
  
      // postal numbers...
      cardNumber += allData[i].postNo.toString().split("").splice(0, 2).join("");
      cardNumber += allData[i].birthYear.toString();
      cardNumber += generateSerialNo + (i + 1);
  
      // creating number...
      customers.cardNumber = cardNumber;
      if (parseInt(cardNumber.split("").splice(0 - 1)) % 2 === 0) {
        customers.gift = "R";
      } else {
        customers.gift = "W";
      }
      customers.priority = allData[i].priority;
      cardList.push(customers);
    }
    const sortedElement = sortByPriority(cardList);
    return sortedElement;
  };
  
  cardDistribution(customer);

//   Output in console (Uncomment the below line for result)
//   console.log(cardDistribution(customer));
  