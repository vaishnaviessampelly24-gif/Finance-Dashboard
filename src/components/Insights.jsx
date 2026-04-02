function Insights({ transactions }) {
const map={};
transactions.forEach(t=>{
if(t.type==="expense"){ map[t.category]=(map[t.category]||0)+t.amount;}
});
const highest=Object.keys(map).reduce((a,b)=>map[a]>map[b]?a:b,Object.keys(map)[0]);
return <div className="p-4">Top category: {highest}</div>;
}
export default Insights;