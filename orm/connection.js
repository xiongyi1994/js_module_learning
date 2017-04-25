var orm = require("orm");

orm.connect("postgres://xiongyi:@localhost/xy", function(err, db) {
    if (err) throw err;

    var Person = db.define("person", {
        name: String,
        surname: String,
        age: Number, // FLOAT
        male: Boolean,
        continent: ["Europe", "America", "Asia", "Africa", "Australia", "Antartica"], // ENUM type
        photo: Buffer, // BLOB/BINARY
        data: Object // JSON encoded
    }, {
        methods: {
            fullName: function() {
                return this.name + ' ' + this.surname;
            }
        },
        validations: {
            age: orm.enforce.ranges.number(18, undefined, "under-age")
        }
    });

    // add the table to the database
    db.sync(function(err) {
        if (err) throw err;

        //在表中新建一行
        Person.create({
            id: 1,
            name: "xiongyi",
            surname: "tom",
            age: 23
        }, function(err) {
            if (err) throw err;
        });

        //查询
        Person.find({
            surname: "tom"
        }, function(err, people) {
            if (err) throw err;

            console.log("People found: %d", people.length);
            // console.log("First person: %s, age %d", people[0].fullName(), people[0].age);

        });
    })
});