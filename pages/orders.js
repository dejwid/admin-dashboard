import Navigation from "../components/Navigation";
import Layout from "../components/Layout";
import {useState} from "react";
import {orderBy} from 'lodash';

export default function OrdersPage() {
  const [sortingColumn, setSortingColumn] = useState('id');
  const [sortingDirection, setSortingDirection] = useState('ASC');
  const data = [
    {id:1,date:'2022-10-12 18:34 CET',address: 'Sturegatan 17, 16-165 Stockholm', products: 'Super shorts, leggings, pretty hat'},
    {id:22,date:'2022-10-12 18:34 CET',address: 'Sturegatan 17, 16-165 Stockholm', products: 'Super shorts, leggings, pretty hat'},
    {id:3,date:'2022-10-12 18:34 CET',address: 'Sturegatan 17, 16-165 Stockholm', products: 'Super shorts, leggings, pretty hat'},
    {id:4,date:'2022-10-12 18:34 CET',address: 'Sturegatan 17, 16-165 Stockholm', products: 'Super shorts, leggings, pretty hat'},
    {id:5,date:'2022-10-12 18:34 CET',address: 'Sturegatan 17, 16-165 Stockholm', products: 'Super shorts, leggings, pretty hat'},
    {id:6,date:'2022-10-12 18:34 CET',address: 'Sturegatan 17, 16-165 Stockholm', products: 'Super shorts, leggings, pretty hat'},
    {id:7,date:'2022-10-12 18:34 CET',address: 'Sturegatan 17, 16-165 Stockholm', products: 'Super shorts, leggings, pretty hat'},
    {id:8,date:'2022-10-12 18:34 CET',address: 'Sturegatan 17, 16-165 Stockholm', products: 'Super shorts, leggings, pretty hat'},
    {id:9,date:'2022-10-12 18:34 CET',address: 'Sturegatan 17, 16-165 Stockholm', products: 'Super shorts, leggings, pretty hat'},
    {id:10,date:'2022-10-12 18:34 CET',address: 'Sturegatan 17, 16-165 Stockholm', products: 'Super shorts, leggings, pretty hat'},
  ];

  const columns = {
    id: 'ID',
    date: 'Date',
    address: 'Address',
    products: 'Products',
  };

  function updateSorting(column) {
    if (column === sortingColumn) {
      setSortingDirection(prev => prev === 'ASC' ? 'DESC' : 'ASC');
    }
    setSortingColumn(column);
  }

  const sortedData = orderBy(data, sortingColumn, [sortingDirection.toLowerCase()]);

  return (
    <Layout>
      <h1 className="text-primary text-xl font-bold mb-4">Orders</h1>
      <table>
        <thead>
          <tr>
            {Object.keys(columns).map(ck => (
              <th onClick={() => updateSorting(ck)}>
                {columns[ck]}
                {sortingColumn === ck ? (
                  sortingDirection === 'ASC' ? '↓' : '↑'
                ) : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map(item => (
            <tr>
              {Object.keys(item).map(key => (
                <td>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}