const delay = number =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, number);
  });

delay(3000).then(() => console.log('Done'));
