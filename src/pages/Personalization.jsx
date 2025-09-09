import { useEffect, useState } from "react";
import { getPersonalized, addPersonalized } from "../api/personalization";

export default function Personalization() {
  const [segment, setSegment] = useState("new_user");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({ seg: "", msg: "" });

  useEffect(()=> { getPersonalized(segment).then(setMessage).catch(()=>{}); }, [segment]);

  const handleAdd = async (e) => {
    e.preventDefault();
    await addPersonalized({ pcSegment: form.seg, pcMessage: form.msg });
    setForm({ seg: "", msg: "" });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Personalization</h1>

      <div className="mb-4">
        <label className="text-sm">Segment</label>
        <select className="border px-3 py-2 ml-2" value={segment} onChange={(e)=>setSegment(e.target.value)}>
          <option value="new_user">new_user</option>
          <option value="vip">vip</option>
          <option value="returning">returning</option>
        </select>
      </div>

      <div className="bg-white p-4 rounded shadow-sm mb-6">
        <strong>Message for {segment}:</strong>
        <p className="mt-2">{message || "(no message configured)"}</p>
      </div>

      <form onSubmit={handleAdd} className="space-y-2">
        <input className="border w-full px-3 py-2" placeholder="Segment key (e.g. vip)" value={form.seg} onChange={e=>setForm({...form, seg:e.target.value})}/>
        <textarea className="border w-full px-3 py-2" placeholder="Message" value={form.msg} onChange={e=>setForm({...form, msg:e.target.value})}/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </form>
    </div>
  );
}
