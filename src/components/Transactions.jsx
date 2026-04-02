import { useState } from "react";
function Transactions({ transactions, setTransactions, role }) {
const [search,setSearch]=useState("");
const filtered=transactions.filter(t=>t.category.toLowerCase().includes(search.toLowerCase()));
const addTx=()=>{
if(role!=="admin") return;
setTransactions([...transactions,{id:Date.now(),date:"2026-04-05",amount:1000,category:"New",type:"income"}]);
};
return (
<div className="p-4">
<h2 className="text-xl mb-2">Transactions</h2>
<input placeholder="search" onChange={e=>setSearch(e.target.value)} className="text-black p-1"/>
{role==="admin" && <button onClick={addTx} className="ml-2 bg-blue-500 p-1">Add</button>}
{filtered.map(t=>(
<div key={t.id} className="flex justify-between border-b py-1">
<span>{t.date}</span><span>{t.category}</span><span>₹{t.amount}</span>
</div>))}
</div>);
}
export default Transactions;