const products = [
    {title:'Suzuki', id:1},
    {title:'BYD', id:2},
    {title:'OMADA', id:3},
];
const color = [
    'red',
    'green',
    'blue'
]


let listItems = products.map(product => 
        <li key={product.id} 
            style = {{
                color : product.id == 2 ? 'red': product.id == 1 ? 'green':'blue'
            }}>
            {product.title}
        </li>
);

export default function Lists(){
    console.log(listItems);
    return (
        <ul> {listItems} </ul>
    )
}