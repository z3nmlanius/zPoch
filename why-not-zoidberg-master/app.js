(function() {

  return {
    events: {
      'app.activated':'showTime',
      'click .addTime':'convertDays',
      'click #genTime':'generateTime',
      'click .buttonDateInput':'convertToEpoch',
      'click .backToHome':"switchToHome"
    },

showTime: function(){
        var dateObj = new Date();
        var localeTime = dateObj.toLocaleDateString();
        var requesterTimeZone = this.ticket().requester().timeZone().ianaName();
        var agentTimeZone = this.currentUser().timeZone().ianaName();
        var agentTime = new Date().toLocaleString('en-US', { timeZone: agentTimeZone });
        var requesterTime = new Date().toLocaleString('en-US', { timeZone: requesterTimeZone });

        this.switchTo('home', {currDate: localeTime, requestTimeObject: requesterTime});

        //var time = dateObj.getTime();
        //var dateTimeObj = Object.keys(blah).map(function(k){return blah[k]});
        //console.log(agentTime);
        //console.log(dateObj);
        //console.log(blah);
        //console.log(dateTimeObj);
        //console.log("testing");
        //return (new Date()).valueOf();
        
    },

    convertDays: function(){

        var di = this.$('#dataInput').val();
        //console.log(di);
        var dateObj2 = new Date();
        var setAndGetDate = dateObj2.setDate(dateObj2.getDate() + (di - 0));
        var setLocaleTime = dateObj2.toLocaleDateString();
        //console.log(dateObj2);
        this.switchTo('displayTime', {newObj: setLocaleTime});
        /*var n = di * 86400;
        var d = n * 0.0000115741;*/
        //console.log(d);

        },

   /* function: getEpochTime(Input) {
        
        var month = String(this.$('#month'));
        var day = Sting(this.$('#day'));
        var year = String(this.$('#year'));
        var hour = this.$('#hour').val();
        var min = this.$('#min').val();
        var sec = this.$('#sec').val();

        var inputDate = new Date(Input)
        var myEpoch = inputDate.getTime()/1000.0;
        return myEpoch;
        Uncomment this for console debugging
        console.log(myEpoch)

  },*/

   generateTime: function(){

        var dateObj3 = new Date();
        var showMyTime = dateObj3.toLocaleDateString();
        var showFullTime = new Date().getTime() / 1000;
        var d = new Date(0);
        d.setUTCSeconds(showFullTime);
        //console.log(showMyTime);
        //console.log(showFullTime);
        //this.switchTo ('timeGenerated', {timeObject: ["EPOCH => " + showFullTime + "// LOCAL => " + showMyTime]});
        this.switchTo ('timeGenerated', {timeObject: ["<ul><li>EPOCH => " + showFullTime + "</li>" + "<li>LOCAL => " + d + "</li></ul>"]});

  },

  switchToHome: function(){

        // Same data as 'showTime()' function above - resetting and displaying current data/time on app reset
        var dateObj = new Date();
        var localeTime = dateObj.toLocaleDateString();
        var requesterTimeZone = this.ticket().requester().timeZone().ianaName();
        var agentTimeZone = this.currentUser().timeZone().ianaName();
        var agentTime = new Date().toLocaleString('en-US', { timeZone: agentTimeZone });
        var requesterTime = new Date().toLocaleString('en-US', { timeZone: requesterTimeZone });
    
        this.switchTo('home', {currDate: localeTime, requestTimeObject: requesterTime});

  }

  /*convertToEpoch: function(){
    
    var conEpoch = this.$("#dateInput").val();
    var inputDate = new Date(conEpoch);
    var myEpoch = inputDate.getTime()/1000.0;
    this.switchTo('timeGenerated', {dateOutput: myEpoch});

  }*/




    };

}());
