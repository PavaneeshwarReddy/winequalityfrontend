import { useState } from "react";
import heatmap from "./images/heatmap.png";
import Wine from "./class";

function App() {
  const [fixed_acidity, setFixedAcidity] = useState(0);
  const [volatile_acidity, setVolatileAcidity] = useState(0);
  const [citric_acid, setCitricAcid] = useState(0);
  const [residual_sugar, setSugary] = useState(0);
  const [chlorides, setCholrides] = useState(0);
  const [free_sulphur, setFreeSulphur] = useState(0);
  const [total_sulphur, setTotalSulphur] = useState(0);
  const [density, setDensity] = useState(0);
  const [ph, setPh] = useState(0);
  const [sulphates, setSulphates] = useState(0);
  const [alocholo, setAlochol] = useState(0);
  const [ans, setAns] = useState(null);

  const sendData = () => {
    var wineData = new Wine(
      fixed_acidity,
      volatile_acidity,
      citric_acid,
      residual_sugar,
      chlorides,
      free_sulphur,
      total_sulphur,
      density,
      ph,
      sulphates,
      alocholo
    );
    console.log(wineData);
    fetch("https://winequalitybackendpavaneeshwar.onrender.com/get-by-name", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(wineData),
    })
      .then((response) => response.json())
      .then((data) => setAns(data["Data"]));
      // fetch("https://winequalitybackendpavaneeshwar.onrender.com/get-by-name"  
      // )
      //   .then((response) => response.json())
      //   .then((data) => setAns(data["name"]));
  };

  const downloadSrcCode=()=>{
    const url = "https://pavaneeshwar7077-winequality.netlify.app/srccode.pdf";
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download","srccode.pdf")
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();

  }
  return (
    <div className="flex flex-col w-full  h-full items-center justify-center font-mono">
      <div className="self-start p-2 font-bold text-red-600">Wine Quality Prediction</div>
      <button className="bg-green-400 p-3 rounded-full " onClick={()=>downloadSrcCode()}>Download Source Code</button>
      <div className="flex flex-col text-center mt-28 bg-slate-100 rounded-3xl p-10 space-y-3  ">
      {ans != null ? (
        <div className="text-4xl font-bold text-slate-600 mb-4">{ans}</div>
      ) : (
        <></>
      )}
        <div className="text-black text-2xl font-bold">Enter the Values</div>
        <div className="flex flex-row space-x-2">
          <input
            className="w-1/2 p-1  "
            placeholder="fixed acidity"
            onChange={(e) => {
              setFixedAcidity(e.target.value);
            }}
          />

          <input
            className="w-1/2  p-1"
            placeholder="volatile acidity"
            onChange={(e) => {
              setVolatileAcidity(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row space-x-2">
          <input
            className="w-1/2 p-1  "
            placeholder="citric acid"
            onChange={(e) => {
              setCitricAcid(e.target.value);
            }}
          />

          <input
            className="w-1/2  p-1"
            placeholder="residual sugar"
            onChange={(e) => {
              setSugary(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row space-x-2">
          <input
            className="w-1/2 p-1  "
            placeholder="chlorides"
            onChange={(e) => {
              setCholrides(e.target.value);
            }}
          />

          <input
            className="w-1/2  p-1"
            placeholder="free sulfurdioxide"
            onChange={(e) => {
              setFreeSulphur(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row space-x-2">
          <input
            className="w-1/2 p-1  "
            placeholder="total sulfurdioxide"
            onChange={(e) => {
              setTotalSulphur(e.target.value);
            }}
          />

          <input
            className="w-1/2  p-1"
            placeholder="density"
            onChange={(e) => {
              setDensity(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row space-x-2">
          <input
            className="w-1/2 p-1  "
            placeholder="pH	"
            onChange={(e) => {
              setPh(e.target.value);
            }}
          />

          <input
            className="w-1/2  p-1"
            placeholder="sulphates	"
            onChange={(e) => {
              setSulphates(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row space-x-2">
          <input
            className="w-1/2 p-1  "
            placeholder="alcohol"
            onChange={(e) => {
              setAlochol(e.target.value);
            }}
          />
        </div>
        <button
          className="bg-slate-500 text-white rounded-3xl p-2"
          onClick={() => sendData()}
        >
          check quality
        </button>
      </div>
     <div>
     <div className="font-bold text-center mt-10 text-xl">Heat Map</div>
     <img src={heatmap} alt="loading..."/>
     </div>
    </div>
  );
}

export default App;
