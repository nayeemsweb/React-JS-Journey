function Bird(){
    var _firstPart = "unknown";
    var _secondPart = "unknown";
    
    Object.defineProperty(this, {
        "FirstPart":{
            get: function(){
                return _firstPart;
            },
            set: function (value) {
                _secondPart = value;
            }
        }
    });

    Object.defineProperty(this, {
        "SecondPart":{
            get: function(){
                return _secondPart;
            },
            set: function (value) {
                _secondPart = value;
            }
        }
    });
};

var bird1 = new Bird();
bird1.FirstPart = "Oriza";
alert(bird1.FirstPart);