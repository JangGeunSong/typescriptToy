interface UserInterface {
    name: string,
    email: string,
    age: number,
    register();
    payInvoice();
}


class User implements UserInterface {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('user created: ' + this.name);
    }

    register() {
        console.log(this.name + ' is registered')
    }

    payInvoice() {
        console.log(this.name + ' paid invoice');
    }
}

// let John = new User('John Doe', 'j@hmail.con', 15);

// John.register();

class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice();
    }
}

let Mike: User = new Member(1, 'Mike Smith', 'M@gmail.com', 22);

Mike.payInvoice();