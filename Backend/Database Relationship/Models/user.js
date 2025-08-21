const mongoose = require("mongoose");
const {Schema} = mongoose ;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username : String,
    addresses : [
        {
            location : String,
            city : String,
            _id: false // Disable automatic ID generation for subdocuments
        },
    ],
});

const user = mongoose.model("User", userSchema);

const addUsers = async() => {
    let user1 = new user({
        username : "JohnDoe",
        addresses : [
            {
                location : "123 Main St",
                city : "Anytown"
            }
        ]
    });

    user1.addresses.push({
        location : "456 Elm St",
        city : "Othertown"
    });

    let result = await user1.save();
    console.log("User added:", result);
};

addUsers() ;
