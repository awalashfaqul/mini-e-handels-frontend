import { useEffect, useState } from "react";
//import { getContentForSegment } from "../api/personalization";
//import { getVariant } from "../api/experiments";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [heroVariant, setHeroVariant] = useState("");

  useEffect(() => {
    // Example: personalize homepage for "new-user"
    //getContentForSegment("new-user").then(setMessage);

    // Example: experiment with homepage hero banner (id=1)
    //getVariant(1).then(setHeroVariant);
  }, []);

  return (
    <div className="text-center p-8">
      {/* <h1 className="text-4xl font-bold mb-4">Welcome to Mini E-Commerce Store</h1> */}
      {heroVariant && (
        <div className="mb-4 p-6 rounded bg-blue-100">
          <p className="font-semibold">Experiment Hero: {heroVariant}</p>
        </div>
      )}
      <p className="text-lg text-gray-700">{message || "Welcome to our store! Your personalized shopping starts here!"}</p>
    </div>
  );
}
