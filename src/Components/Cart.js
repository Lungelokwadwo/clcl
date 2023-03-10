import React, {Component} from 'react';
import './cart.css'

class Cart extends Component{
    selected_Items = [];
    // The following Items_list object consist of the details for three drink options given to the user 
    Items_list = [
        {
            option: 'Option: A',
            name: 'Coca Cola',
            price: 'R25',
            image: 'https://images.heb.com/is/image/HEBGrocery/prd-small/coca-cola-classic-coke-001397056.jpg'
        },
        {
            option: 'Option: B',
            name: 'Sprite',
            price: 'R20',
            image: 'https://th.bing.com/th/id/OIP.WOO_6KWefHvLx610YndvHgAAAA?pid=ImgDet&rs=1'
        },
        {
            option: 'Option: C',
            name: 'Fanta',
            price: 'R18',
            image: 'https://th.bing.com/th/id/OIP.erFWB4GNFzmrqV_tyCg1NwAAAA?pid=ImgDet&rs=1'
        }

    ];

    // The constructor allows the display of a message and other options which changes when the user interact with the application
    constructor(){
        super()
        this.state={
            Message: "Welcome to our cold drink store",
            selected: 'False',
            note: "Please note that you are only allowed to buy one drink."
        }
    }

    // The following function/method is used to check if the list of selected items is empty or not
    // If the list is empty the state message changes if not the state message changes and selected changes to true
    changeHandler(){
        if(this.selected_Items.length === 0){
            this.setState({
                Message: "Please select an Item first!"
            })
        }
        if(this.selected_Items.length === 1){
            this.setState({
            Message: "You have chosen:",
            selected: "True"
            })
        }
    }
    // This method cancels the selected item and returns to the default screen
    cancelHandler(){
        this.setState({
            Message: "Welcome to our cold drink store",
            selected: "False",
        })
        this.selected_Items.pop();
    }
    // The three following methods check the list if is empty if it is not the the items inside
    // are deleted and the selected item is added and the state message changes
    CocaCola =(e)=>{
        e.preventDefault();
        if(this.selected_Items.length>0){
            this.selected_Items.pop()
        }
        this.selected_Items.push(this.Items_list[0]);
        this.setState({
            Message: 'Coca Cola item selected'
        })
    }
    Sprite =(e)=>{
        e.preventDefault();
        if(this.selected_Items.length>0){
            this.selected_Items.pop()
        }
        this.selected_Items.push(this.Items_list[1]);
        this.setState({
            Message: 'Sprite item selected'
        })
        
    }
    Fanta =(e)=>{
        e.preventDefault();
        if(this.selected_Items.length>0){
            this.selected_Items.pop()
        }
        this.selected_Items.push(this.Items_list[2]);;
        this.setState({
            Message: 'Fanta item selected'
        })
    }
    // Render method is used display the whole application based on the condtions set on the state
    render(){
        // Here the applications returns and displays the default details available on the item_list object
        // When the list_items is displayed the user will be able to select an item and view the selected item
        if(this.state.selected === "False"){
            return(
            <div className='div'>
                <h1>{this.state.Message}</h1>
                <p id='note'>{this.state.note}</p>
                <div>
                   <section className='secs'>
                    <h2>{this.Items_list[0].option}</h2>
                    <h4>{this.Items_list[0].name}</h4>
                    <img className='images' src= {this.Items_list[0].image} alt="" />
                    <p className='price'>{this.Items_list[0].price} <button className='addButton' onClick={this.CocaCola}>add to cart</button></p>
                   </section>

                   <section className='secs'>
                    <h2>{this.Items_list[1].option}</h2>
                    <h4>{this.Items_list[1].name}</h4>
                     <img className='images' src={this.Items_list[1].image} alt="" />
                    <p className='price'>{this.Items_list[1].price} <button className='addButton'  onClick={this.Sprite}>add to cart</button></p>
                   </section>

                   <section className='secs'>
                    <h2>{this.Items_list[2].option}</h2>
                    <h4>{this.Items_list[2].name}</h4>
                     <img className='images' src={this.Items_list[2].image} alt="" />
                    <p className='price'>{this.Items_list[2].price} <button className='addButton'  onClick={this.Fanta}>add to cart</button></p>
                   </section>
                </div>
                <button id='view' onClick={()=>this.changeHandler()}>View selected item</button>
            </div>
        )
        }
        // Here when the user clicks the view selected items button above. The user will be directed to this else statement
        // But if the user did not select any item else statement will not return anything
        // The cancel button cancels the selected item and returns to the default screen
        else{
            return(
            <div>
                <h1>{this.state.Message}</h1>
                <div>  
                   <section className='results'>
                    <h2>{this.selected_Items[0].option}</h2>
                    <h4>{this.selected_Items[0].name}</h4>
                    <img className='images' src={this.selected_Items[0].image} alt="" />
                    <p className='price'>{this.selected_Items[0].price}</p> 
                   </section>
                </div>
                <button id='cancel' onClick={()=>this.cancelHandler()}>Cancel</button>
            </div>
        )
        }
    }
}
export default Cart