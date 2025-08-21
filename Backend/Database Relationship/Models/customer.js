const mongoose = require("mongoose");
const {Schema} = mongoose ;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
    item : String,
    price : Number,
});

const customerSchema = new Schema({
    name : String,
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref : "Order",
        },
    ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomers = async () => {
//     let cus1 = new Customer({
//         name : "John Doe",
//     });
//     let order1 = await Order.findOne({item : "Samosa"});
//     let order2 = await Order.findOne({item : "Chips"});    
//     cus1.orders.push(order1,order2);
//     let result = await cus1.save();
//     console.log("Customer added:", result)
// };
// addCustomers();


const findCustomer = async () => {
    let customer = await Customer.find({}).populate("orders");
    console.log(customer);
}
findCustomer();

// const addOrders = async () => {
//     let res = await Order.insertMany([
//         {item : "Samosa", price : 15},
//         {item : "Chips" , price : 10},
//         {item : "Chocolate", price: 50},
//     ])
//     console.log("Orders added:", res);
// }
// addOrders();