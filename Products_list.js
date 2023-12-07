import Product from "./Product";

function Products_list()
{
    let products = [
        { id: 1, name: "BTS Light Stick", price: "9000", url: "https://cf.shopee.ph/file/936ff8399928956be7289856c3ca9d21_tn" },
        { id: 2, name: "Seventeen Light Stick", price: "7000", url: "https://ae01.alicdn.com/kf/Hb830febf3483484abf22d170c27dd78aO/KPOP-SEVENTEEN-BONG-VER-2-Bluetooth-Light-Stick-Album-Concerts-Lamp-Lightstick-Fluorescent-Stick-Card.jpg" },
        { id: 3, name: "Enhypen Light Stick", price: "6500", url: "https://cdn.shopify.com/s/files/1/0249/1354/3267/products/enhypen-lightstick-official_1200x1200.jpg?v=1639550460" }        
    ]
    return (
        <div className="products">
            {
                products.map((product) => {
                    return (
                        <Product name={product.name} price={product.price} url={product.url} key={product.id} />
                    )
                })
            }

            {/*<Product name="BTS Light Stick" price="9000" url="https://cf.shopee.ph/file/936ff8399928956be7289856c3ca9d21_tn" />
            <Product name="Seventeen Light Stick " price="7000" url="https://ae01.alicdn.com/kf/Hb830febf3483484abf22d170c27dd78aO/KPOP-SEVENTEEN-BONG-VER-2-Bluetooth-Light-Stick-Album-Concerts-Lamp-Lightstick-Fluorescent-Stick-Card.jpg" />
            <Product name="Enhypen Light Stick" price="6500" url="https://cdn.shopify.com/s/files/1/0249/1354/3267/products/enhypen-lightstick-official_1200x1200.jpg?v=1639550460" />*/}
        </div>
    )
}
export default Products_list;