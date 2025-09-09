import { useEffect, useState } from "react";
import { getVariant } from "../api/experiments";
import { getPersonalized } from "../api/personalization";
import ExperimentBanner from "../components/ExperimentBanner";
import PersonalizedBanner from "../components/PersonalizedBanner";

export default function Home() {
  const [variant, setVariant] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getVariant(1).then(setVariant).catch(()=>{});
    getPersonalized("new_user").then(setMessage).catch(()=>{});
  }, []);

  return (
    <div>
      {/* <ExperimentBanner variant={variant} />
      <PersonalizedBanner message={message} /> */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          {/* <h1 className="text-3xl font-bold mb-3">Mini e-Commerce Store</h1> */}
          <p className="text-gray-600">A small, clean e-commerce demo with A/B experiments and personalization.</p>
        </div>
        <div className="p-6 bg-white rounded shadow-sm">
          <h4 className="font-semibold mb-2">Get started</h4>
          <ul className="text-sm text-gray-600">
            <li>- Browse products</li>
            <li>- Add to cart</li>
            <li>- Checkout (orders are in-memory)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
