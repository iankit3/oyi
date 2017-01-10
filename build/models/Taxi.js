"use strict";
var Taxi = (function () {
    function Taxi(name, phone, drop_location, pickup_location, vehicle_type) {
        this.name = name;
        this.phone = phone;
        this.drop_location = drop_location;
        this.pickup_location = pickup_location;
        this.vehicle_type = vehicle_type;
    }
    return Taxi;
}());
exports.Taxi = Taxi;
//# sourceMappingURL=Taxi.js.map