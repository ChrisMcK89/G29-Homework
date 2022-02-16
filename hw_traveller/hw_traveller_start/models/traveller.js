const Journey = require("./journey");

const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    return this.journeys.map ((journey) => {
      return journey.startLocation;
    })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map ((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter ((journey) => {
    return journey.transport == transport;
  })
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysOverDistance = this.journeys.filter ((journey)=> {
    return journey.distance > minDistance;
  })
  return journeysOverDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce ((total, journey) => {
    return total += journey.distance;
  }, 0)
};


Traveller.prototype.getUniqueModesOfTransport = function () {
 return this.journeys.map((journey) => {
  return journey.transport;
 })
 .filter((transport, index, array) => {
  return array.indexOf(transport) === index;
 })

};
//   const unique = [];
//   this.journeys.forEach (journey => {
//     if(!unique.includes.journey.transport){
//       unique.push.journey.transport;
//     }
//   });
// }


module.exports = Traveller;
