import React from 'react';

class ShoppingList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: '',
            shoppingCart: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const item = e.target.value;
        this.setState({item: item});
        e.preventDefault();
    }

    handleSubmit(e) {
        const newItem = this.state.item;
        if (newItem !== '') {
            this.setState({shoppingCart: this.state.shoppingCart.concat(newItem)});
            this.setState({item: ''});
            e.preventDefault();
        } else {
            alert('Text Field Cannot be Blank...Try Again!');
            e.preventDefault();
        }
    }

    render() {
        let itemList = [];
        for(let i=0; i < this.state.shoppingCart.length; i++) {
            itemList.push(
                <li
                    key={i}>{this.state.shoppingCart[i]}
                    <button 
                        style={{marginLeft: "10px"}}
                        onClick={()=>{
                            let index;
                            if(this.state.shoppingCart[i].onclick){
                                index = i;
                            }
                            const cart = Object.assign([], this.state.shoppingCart);
                            cart.splice(i, 1);
                            this.setState({shoppingCart: cart});
                    }}>Delete</button>
                </li>
            )
        }
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Shopping Item:
                        <input style={{marginLeft:"5px"}}
                            name="item"
                            type="text"
                            value={this.state.item}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type='submit' style={{marginLeft: "10px"}}>Add to Shopping List</button>
                </form>
                
                <ul>
                    {itemList}
                </ul>
            </div>
    
        );
    }
}

export default ShoppingList;