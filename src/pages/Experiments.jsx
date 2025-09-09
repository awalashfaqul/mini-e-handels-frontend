import { useEffect, useState } from "react";
import { getExperiment, getVariant, createExperiment } from "../api/experiments";

export default function Experiments() {
  const [exp, setExp] = useState(null);
  const [variantText, setVariantText] = useState("");
  const [form, setForm] = useState({ name: "", a: "", b: "" });

  useEffect(()=> {
    getExperiment(1).then(setExp).catch(()=>{});
    getVariant(1).then(setVariantText).catch(()=>{});
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    await createExperiment({ experimentName: form.name, experimentVariantA: form.a, experimentVariantB: form.b });
    setForm({ name: "", a: "", b: "" });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Experiments</h1>

      <div className="mb-6">
        <form className="space-y-2" onSubmit={handleCreate}>
          <input className="border w-full px-3 py-2" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Experiment name" />
          <input className="border w-full px-3 py-2" value={form.a} onChange={e=>setForm({...form, a:e.target.value})} placeholder="Variant A text" />
          <input className="border w-full px-3 py-2" value={form.b} onChange={e=>setForm({...form, b:e.target.value})} placeholder="Variant B text" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
        </form>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Current variant</h4>
        <div className="bg-white p-4 rounded shadow-sm">{variantText || "No variant available"}</div>
      </div>
    </div>
  );
}
