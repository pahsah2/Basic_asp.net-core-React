import React , { useState} from "react";
import { post } from 'axios';

function ProductsAdd(props){
    const iniState = { ProductName: '', ProductPrice: ''}
    const [product , setProduct] = useState(iniState)

    function cancelProduct(){
        props.history.push('/productslists');

    }
    function handleSubmit(e){
        e.preventDefault();
        async function postProduct () {
            try{
                const res = await post('https://localhost:44304/api/products' , product);
                console.log(res);
                props.history.push( '/productslists');
            }catch (err) {
                console.log('Error : ', err);
            }
        }
        postProduct();

    }
    return (
        <div>
            <h1>เพิ่มข้อมูลสินค้าใหม่</h1><hr />
            <div class='container'>
                <form onSubmit={handleSubmit}>
                    <div class='form-group'>
                        <label for='ProductName'>ชื่อสินค้า :</label>
                        <input type='text' name='ProductName' id='ProductName'
                            class='form-control' placeholder='ชื่อสินค้า'
                            value={product.ProductName}
                            onChange={e => setProduct({ ...product, ProductName: e.target.value })} />
                    </div>
                    <div class='form-group'>
                        <label for='ProductPrice'>ราคาสินค้า :</label>
                        <input type='number' name='ProductPrice' id='ProductPrice'
                            class='form-control' placeholder='ราคาสินค้า'
                            value={product.ProductPrice}
                            onChange={e => setProduct({ ...product, ProductPrice: parseInt(e.target.value) })} />
                    </div>
                    <button type='submit' class='btn btn-primary'>เพิ่มสินค้า</button>
                    <button type='button' class='btn btn-warning' onClick={cancelProduct}>ยกเลิก</button>
                </form>
            </div>
        </div>
    );
}
export default ProductsAdd;