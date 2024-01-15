import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useReducer } from "react";

function reducer(count, action) {
  switch (
    action.type //action.type gore parametreler
  ) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    default:
      return count;
  }
}

/// Tamamen fonksiyonel bir counter oluşturun
// Sayıyı görüntülemeyi ve sayıyı artırmayı mümkün kılın
export default function CountUp() {
  const [count, dispatch] = useReducer(reducer, 0); //1 reducer fonksiyonunu tanimlayalim

  return (
    <div className="text-center p-8">
      <h3 className="text-lg font-semibold text-gray-900">
        Şu anki sayı: {count}
      </h3>
      <div className="mt-6 space-x-4">
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          <MinusIcon className="-ml-0.5 mr-1.5 h-5 w-5" />1
        </button>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" />1
        </button>
      </div>
    </div>
  );
}
