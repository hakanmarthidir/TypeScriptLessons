//READONLY PROPERTIES
//ilk kez yaratılırken atama yapılabilir ama sonrasında degistirilemez. 
interface IHaveReadOnlyProperty {
    readonly connectionString: string
}

let readVar : IHaveReadOnlyProperty = {connectionString : "Server=.;Database=Xyz"};

//readVar.connectionString = "new connectionstring"; degistirilemez. 