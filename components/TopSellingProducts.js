export default function TopSellingProducts() {
  const products = [
    {title:'Flared Leggings',price:110,img:'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerAopHoodieRoseBrownA3A5J-NBH1906_3581f2f8-2ca2-4017-b6a8-4ee8b94c3e8a_600x.jpg?v=1665600791'},
    {title:'Super Shorts',price:59,img:'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerAop5ShortCementBrownA2A8G-NBH21_96cfc7e7-0d23-4e50-a179-dc876cd6d727_800x.jpg?v=1665562902'},
    {title:'Chad tshirt',price:78,img:'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerWordmarkStringerMossOliveA2A8Y-EBRM2_c20711a8-e7e9-4375-860d-b2ad2101e558_600x.jpg?v=1665600775'},
    {title:'Flared Leggings',price:90,img:'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerAopHoodieRoseBrownA3A5J-NBH1906_3581f2f8-2ca2-4017-b6a8-4ee8b94c3e8a_600x.jpg?v=1665600791'},
    {title:'Sporty Shorts',price:39,img:'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerAop5ShortCementBrownA2A8G-NBH21_96cfc7e7-0d23-4e50-a179-dc876cd6d727_800x.jpg?v=1665562902'},
    {title:'Flared Leggings',price:110,img:'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerWordmarkStringerMossOliveA2A8Y-EBRM2_c20711a8-e7e9-4375-860d-b2ad2101e558_600x.jpg?v=1665600775'},
  ];
  return (
    <>
      <h2 className="text-primary font-bold">Top selling products</h2>
      <div className="mt-3">
        {products.map((product, index) => (
          <div key={index} className="flex mb-4 items-center gap-2">
            <span className="text-gray-500 text-xs">{index + 1}</span>
            <img className="w-10 rounded-md" src={product.img} alt=""/>
            <div>
              <div className="text-sm text-primary leading-5">{product.title}</div>
              <div className="text-primary text-xl font-bold leading-5">${product.price}</div>
            </div>
          </div>
        ))}

      </div>
    </>
  );
}