

export default function Work() {
    return (
      <main id="work" className="flex flex-col mb-8">
        <div className="flex justify-between h-screen items-center mb-20">
          <img src="../assets/pink.jpg" className="rounded-2xl"
               />
          <div className="w-2/4 flex-col items-center flex ">
                <h2 className="text-3xl">My Work</h2>
                <img src="../assets/flowerpink.jpg" className="rounded-2xl w-2/4" />
                <h4>picture title </h4>
          </div>
        </div>
        <div className=" flex items-center flex-col text-center h-screen   ">
          <div className="flex justify-around flex-wrap mb-5" >
                <img className="w-1/3 rounded-2xl" src="../assets/grayone.jpg" />
                <img className="w-1/3 rounded-2xl" src="../assets/grayth.jpg" />
                {/* <img className="w-1/3 rounded-2xl" src="../assets/grayt.jpg" /> */}
            </div>
            <h4>picture</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        
      </main>
    );
    
}