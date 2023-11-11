const Crawler = require("crawler");

const baseURL = "https://www.tefas.gov.tr/FonAnaliz.aspx";

const fetchFund = (fundName) => {
  return `${baseURL}?FonKod=${fundName}`;
};

exports.getFunds = (params) => {
  return new Promise((resolve, reject) => {
    const result = [];
    const c = new Crawler({
      maxConnections: 10,
      callback: async (error, res, done) => {
        if (error) {
          reject(error);
        } else {
          const $ = res.$;
          console.log("crawler started!");
          const listItem = $(".top-list li:first-child span");
          const fundName = res.options.uri.split("=")[1];
          result.push({ fundName, price: listItem.text() });
          if (result.length === params.length) resolve(result);
        }
        done();
      },
    });

    const listOfFunds = params.map((fund) => fetchFund(fund));
    c.queue(listOfFunds);
  });
};
