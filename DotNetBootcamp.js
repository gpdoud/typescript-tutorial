var DotNetBootcamp = (function () {
    function DotNetBootcamp(id, name, active) {
        this.Id = id;
        this.Name = name;
        this.Active = active;
    }
    DotNetBootcamp.prototype.print = function () {
        var idx = 1;
        var pi = 3.1415927;
        console.log("Doing a Print()");
    };
    return DotNetBootcamp;
}());
var dotNetBootcampInstance = new DotNetBootcamp('0', 'TestName', true);
dotNetBootcampInstance.print();
