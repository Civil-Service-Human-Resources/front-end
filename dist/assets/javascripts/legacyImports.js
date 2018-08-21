! function(globals) {
    "use strict";
    var DVSA = {
        Modules: {},
        Utilities: {},
        Events: !1,
        init: function(events) {
            var x;
            this.Events = events || !1;
            for (x in DVSA.Modules) DVSA.Modules.hasOwnProperty(x) && "function" == typeof DVSA.Modules[x].init && DVSA.Modules[x].init()
        }
    };
    globals.DVSA = DVSA
}(this),
    function(globals) {
        "use strict";
        var init, Criteria;
        globals.DVSA || {};
        Criteria = function(options) {
            var options = options || {};
            this.trigger = options.trigger || null, this.scope = options.criteria || null, this.stateNeutral = "criteria__criterion", this.stateFail = "criteria__criterion--has-failed", this.statePass = "criteria__criterion--has-passed", this.criteria = [], this.getCriteria(), this.bindEvents()
        }, Criteria.prototype.getCriteria = function() {
            for (var criteriaElements = globals.document.querySelectorAll("[data-criteria]"), i = 0; i < criteriaElements.length; i++) {
                var criteriaName = criteriaElements[i].getAttribute("data-criteria"),
                    criteriaParam = criteriaElements[i].getAttribute("data-criteria-param") || null;
                this.criteria.push({
                    name: criteriaName,
                    param: criteriaParam,
                    state: criteriaElements[i].className,
                    element: criteriaElements[i]
                })
            }
        }, Criteria.prototype.bindEvents = function() {
            var self = this;
            globals.window.addEventListener ? (this.trigger.addEventListener("keyup", function() {
                self.checkCriteria()
            }), this.trigger.addEventListener("paste", function() {
                self.checkCriteria()
            })) : globals.window.attachEvent && (this.trigger.attachEvent("onkeyup", function() {
                self.checkCriteria()
            }), this.trigger.attachEvent("onpaste", function() {
                self.checkCriteria()
            }))
        }, Criteria.prototype.checkCriteria = function() {
            for (var currentValue = this.trigger.value, i = 0; i < this.criteria.length; i++) {
                var criteriaName = this.criteria[i].name,
                    criteriaParam = this.criteria[i].param,
                    status = this[criteriaName](currentValue, criteriaParam);
                this.decorateElement(i, status)
            }
        }, Criteria.prototype.decorateElement = function(i, state) {
            this.criteria[i].state != state && (this.criteria[i].state = state, this.criteria[i].element.className = state)
        }, Criteria.prototype.hasMixedCase = function(val) {
            var cssClass = this.stateNeutral;
            return /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(val) && (cssClass = this.statePass), cssClass
        }, Criteria.prototype.minLength = function(val, param) {
            var cssClass = this.stateNeutral,
                regEx = new RegExp("^.{" + param + ",}$");
            return regEx.test(val) && (cssClass = this.statePass), cssClass
        }, Criteria.prototype.notMatch = function(val, param) {
            var cssClass = this.stateNeutral,
                val_lc = val.toLowerCase(),
                param_lc = param.toLowerCase();
            return val_lc === param_lc && val_lc.length === param_lc.length ? cssClass = this.stateFail : val_lc != param_lc.substring(0, val_lc.length) && (cssClass = this.statePass), cssClass
        }, Criteria.prototype.hasNumeric = function(val) {
            var cssClass = this.stateNeutral;
            return /[0-9]/.test(val) && (cssClass = this.statePass), cssClass
        }, Criteria.prototype.hasUpperCase = function(val) {
            var cssClass = this.stateNeutral;
            return /[A-Z]/.test(val) && (cssClass = this.statePass), cssClass
        }, Criteria.prototype.hasLowerCase = function(val) {
            var cssClass = this.stateNeutral;
            return /[a-z]/.test(val) && (cssClass = this.statePass), cssClass
        }, init = function() {}, globals.DVSACriteria = {
            init: init,
            Criteria: Criteria
        }
    }(this),
    function(globals) {
        "use strict";
        globals.DVSA.Modules.DVSACriteria = DVSACriteria,
        globals.DVSA.init($({}))
    }(this);