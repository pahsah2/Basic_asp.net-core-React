import React, { useState, useEffect } from "react";
import { get, put } from 'axios';

const url = 'https://localhost:44304/api/products';

function ProductsEdit(props) {
    const iniState = { ProductName: '', ProductPrice: '' }
    const [product, setProduct] = useState(iniState)

    useEffect(function () {
        async function getProduct() {
            try {
                const res = await get(url + '/' + props.match.params.id);
                console.log(res);
                setProduct(res.data);
            } catch (err) {
                console.log('Error : ', err);
            }
        }

        getProduct();
    }, [props]);

    function handleSubmit(e) {
        e.preventDefault();
        async function updateProduct() {
            try {
                const res = await put(url + '/' + product.id, product);
                console.log(res);
                props.history.push('/productslists');
            } catch (err) {
                console.log('Error : ', err);
            }
        }

        updateProduct();
    }

    function cancelProduct() {
        props.history.push('/productslists');
    }

    return (
        <div>
            <h1>แก้ไขข้อมูล {product.productName}</h1><hr />
            <div class='container'>
                <form onSubmit={handleSubmit}>
                    <div class='form-group'>
                        <label for='ProductName'>ชื่อสินค้า :</label>
                        <input type='text' name='ProductName' id='ProductName'
                            class='form-control' placeholder='ชื่อสินค้า'
                            value={product.productName}
                            onChange={e => setProduct({ ...product, productName: e.target.value })} />
                    </div>
                    <div class='form-group'>
                        <label for='ProductPrice'>ราคาสินค้า :</label>
                        <input type='number' name='ProductPrice' id='ProductPrice'
                            class='form-control' placeholder='ราคาสินค้า'
                            value={product.productPrice}
                            onChange={e => setProduct({ ...product, productPrice: e.target.value })} />
                    </div>
                    <button type='submit' class='btn btn-primary'>แก้ไขข้อมูล</button>
                    <button type='button' class='btn btn-warning' onClick={cancelProduct}>ยกเลิก</button>
                </form>
            </div>
        </div>
    );
}

export default ProductsEdit;
