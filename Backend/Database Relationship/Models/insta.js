const mongoose = require("mongoose");
const {Schema} = mongoose ;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const instaUserSchema = new Schema({
    username : String,
    email : String,
})

const instaPostSchema = new Schema({
    caption : String,
    likes : Number,
    user : {
        type : Schema.Types.ObjectId,
        ref : "InstaUser"
    }    
})

// Deletion Post Middleware
instaUserSchema.post("findOneAndDelete", async (user) => {
    let postCount = await InstaPost.countDocuments({user: user._id});
    if(postCount > 0){
        let res = await InstaPost.deleteMany({user: user._id});
        console.log(res);
    }
})

const InstaUser = mongoose.model("InstaUser", instaUserSchema);
const InstaPost = mongoose.model("InstaPost", instaPostSchema);

const addData = async () => {
    let user = new InstaUser({
        username: "vivek",
        email: "vivek@example.com"
    });
    await user.save();
    // let user = await InstaUser.findOne({username: "john_doe"});

    let post = new InstaPost({
        caption: "Hii I am Vivek!",
        likes: 10,
    });
    post.user = user;
    await post.save();
}

const delUser = async () => {
    let user = await InstaUser.findByIdAndDelete("68989f27cddbdea3df356514");
    console.log(user);
}

// addData();
delUser();

