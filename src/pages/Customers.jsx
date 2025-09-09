import { useEffect, useState } from "react";
import { getCustomers, createCustomer, deleteCustomer } from "../api/customers";

export default function Customers() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", shipping: "" });

  useEffect(()=> { getCustomers().then(setList).catch(()=>{}); }, []);

  const refresh = async () => setList(await getCustomers());

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCustomer(form);
    setForm({ name: "", email: "", shipping: "" });
    await refresh();
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    await refresh();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input className="border rounded px-3 py-2 w-full" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required/>
        <input className="border rounded px-3 py-2 w-full" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required/>
        <input className="border rounded px-3 py-2 w-full" placeholder="Shipping address" value={form.shipping} onChange={e=>setForm({...form, shipping:e.target.value})}/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
      </form>

      <div className="space-y-3">
        {list.map(c=> (
          <div key={c.customersId} className="bg-white border rounded p-3 flex justify-between items-center">
            <div>
              <div className="font-semibold">{c.customersName}</div>
              <div className="text-sm text-gray-500">{c.customersEmail}</div>
              <div className="text-sm">Membership: {c.customersMembershipLevel}</div>
            </div>
            <div>
              <button onClick={()=>handleDelete(c.customersId)} className="text-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
