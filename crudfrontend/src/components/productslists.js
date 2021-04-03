import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function ProductsLists() {
    const [products, setProducts] = useState([]);
    const url = 'https://localhost:44304/api/products';

    useEffect(function () {
        async function getProductsLists() {
            try {
                const res = await Axios.get(url);
                setProducts(res.data);
            } catch (err) {
                console.log('Error : ', err);
            }
        }
        getProductsLists();
    }, []);

    return (
        <div>
            <div>
                <Link to='/productsadd' class='btn btn-primary float-right'>เพิ่มสินค้าใหม่...</Link>
            </div><br /><br />
            <div>
                <table class='table'>
                    <thead>
                        <tr>
                            <td>รหัสสินค้า</td>
                            <td>ชื่อสินค้า</td>
                            <td>ราคาสินค้า</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => {
                                return (
                                    <tr>
                                        <td>{product.id}</td>
                                        <td><Link to={'/products/' + product.id}>{product.productName}</Link></td>
                                        <td>{product.productPrice}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductsLists
