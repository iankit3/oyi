"use strict";
var Driver = (function () {
    function Driver(id, name, phone, gender, email, vehicle_info, vehicle_type, allowed_passenger, vehicle_registration, vehicle_license, rate, password) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.gender = gender;
        this.email = email;
        this.vehicle_info = vehicle_info;
        this.vehicle_type = vehicle_type;
        this.allowed_passenger = allowed_passenger;
        this.vehicle_registration = vehicle_registration;
        this.vehicle_license = vehicle_license;
        this.rate = rate;
        this.password = password;
    }
    return Driver;
}());
exports.Driver = Driver;
//# sourceMappingURL=Driver.js.map