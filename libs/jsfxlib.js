var jsfxlib = {};

(function () {
    this.createWaves = function (lib){
        var sounds = {};
        for (var e in lib) {
            var data = lib[e];
            sounds[e] = this.createWave(data);
        }

        return sounds;
    }

    this.createWave = function (lib) {
        var params = this.arrayToParams(lib),
            data = jsfx.generate(params),
            wave = audio.make(data);

        return wave;
    }

    this.paramsToArray = function (params){
        var pararr = [];
        var len = jsfx.Parameters.length;
        for (var i = 0; i < len; i++){
            pararr.push(params[jsfx.Parameters[i].id]);
        }

        return pararr;
    }

    this.arrayToParams = function (pararr){
        var params = {};
        var len = jsfx.Parameters.length;
        for (var i = 0; i < len; i++){
            params[jsfx.Parameters[i].id] = pararr[i];
        }

        return params;
    }
}).apply(jsfxlib);
