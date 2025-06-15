import ImageTrail from "./components/ImageTrail"

const imageModules = import.meta.glob('./assets/images/*.{jpg,jpeg}', { eager: true });

const pics = Object.entries(imageModules)
 
  .map(([_, mod]) => mod.default);


function App() {

  return (
<div className="flex flex-col  p-24 gap-24">
  
  <div className="bg-gray-900 flex justify-center items-center flex border-2 rounded-2xl border-black min-w-[1080px]" style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>

    <ImageTrail 
      items={pics}
      variant={2}
    />

    </div>
    </div>
  )
}

export default App
