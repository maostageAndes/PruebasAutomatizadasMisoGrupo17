const { After, Before, AfterStep,BeforeStep,BeforeAll } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const dns = require("dns");
const { existsSync,mkdirSync } = require('fs');

Before(async function() {
	dns.setDefaultResultOrder("ipv4first");
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
var i=0;
BeforeStep(async function(escenario) {
  i=i+1;
});
AfterStep(async function(escenario) {
  let ruta = "./reports/capturas/"+escenario.pickle.name.replace(/\s/g,'');
  if (!existsSync(ruta)){
    mkdirSync(ruta,{recursive:true});
  }
  await this.driver.saveScreenshot("./reports/capturas/"+escenario.pickle.name.replace(/\s/g,'')+"/paso_"+i+".png");
  
});

BeforeAll(async function() {
  i=0;
});