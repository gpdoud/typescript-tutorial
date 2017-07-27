
class DotNetBootcamp {
	private Id: number;
	Name: string;
	Active: boolean;
	AnAny: any;

	constructor(id: number, name: string, active: boolean) {
		this.Id = id;
		this.Name = name;
		this.Active = active;
	}

	print(): void {
		let idx: number = 1;
		const pi = 3.1415927;
		console.log("Doing a Print()");
	}
}

let dotNetBootcampInstance = new DotNetBootcamp(0, 'TestName', true);
dotNetBootcampInstance.print();