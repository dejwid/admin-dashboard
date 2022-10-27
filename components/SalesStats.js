import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useEffect, useState} from "react";

export default function SalesStats() {
  const [domLoaded,setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const data = [
    {
      "name": "January",
      "sales": 4000,
      "revenue": 2400,
      "amt": 2400
    },
    {
      "name": "February",
      "sales": 3000,
      "revenue": 1398,
      "amt": 2210
    },
    {
      "name": "March",
      "sales": 2000,
      "revenue": 9800,
      "amt": 2290
    },
    {
      "name": "April",
      "sales": 2780,
      "revenue": 3908,
      "amt": 2000
    },
    {
      "name": "June",
      "sales": 1890,
      "revenue": 4800,
      "amt": 2181
    },
    {
      "name": "July",
      "sales": 2390,
      "revenue": 3800,
      "amt": 2500
    },
    {
      "name": "August",
      "sales": 3490,
      "revenue": 4300,
      "amt": 2100
    }
  ];
  return (
    <div className="w-full" style={{height:'60vh'}}>
      <h2 className="mt-5 mb-3 text-primary font-bold text-xl">Sales statistics</h2>
      {domLoaded && (
        <ResponsiveContainer width="99%">
          <AreaChart data={data}
                     margin={{ top: 0, right: 0, left: -20, bottom: 45 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" style={{fill:'#aaa',fontSize:'.7rem'}} />
            <YAxis label={{fill:'red'}} style={{fill:'#aaa',fontSize:'.7rem'}}  />
            <CartesianGrid strokeDasharray="1 1" style={{borderStyle:{color:'red'}}}  />
            <Tooltip />
            <Area type="monotone" dataKey="sales" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}