const Park = function (name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

module.exports = Park

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur){
    const indexOfDino = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDino, 1);
}

// Park.prototype.mostVisitors = function(){
//     for(let i = 0, listcount = this.dinosaurs.length; i < listcount; i++){
//         var visitcount = this.dinosaurs
//         console.log(visitcount)
//     }

Park.prototype.mostVisitors = function(){

    for(var i = 0; i < this.dinosaurs.length; i++) {
        var currentdino = this.dinosaurs[i];
        var dinovisits = currentdino.guestsAttractedPerDay;
        return dinovisits;
    }


}

