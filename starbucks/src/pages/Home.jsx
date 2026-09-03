import DebouncedSearch from "../components/home/DebouncedSearch";

function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <header className="bg-[#006241] px-4 py-5 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-widest">Starbucks</p>
        <p className="mt-1 text-lg">A great day for coffee</p>
      </header>
      <DebouncedSearch />
    </main>
  );
}

export default Home;











































// import { PromoSection } from "../components/home/PromoSection"

// const Home = () => {
//     return (
//     <main className="max-w-6xl mx-auto">
//         {/* Top green pannel */}

//         <section className="bg-[#32462f] text-white py-8 text-center ">
//             <div className="flex justify-center items-center gap-4 ">
//                 <h3 className="font-semibold text-lg">It's a great day for coffee</h3>

//                 <button className="border border-amber-50 rounded-full px-5 py-2 ">
//                     Start an order
//                 </button>
//             </div>
//         </section>

//         <div className="space-y-6 mt-6 bg-amber-200">
//             <PromoSection
//             imageurl="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-112130.jpg"
//             title="PSL season is here"
//             description= "Our 2026 pumpkin menu has landed. Enjoy the one-and-only Pumpkin Spice Latte, tasty new drinks and all your pumpkin favorites."
//             buttonText="see the pumpkin menu"
//             bgColor="bg-[#b94722]"
//             />

//             <PromoSection
//             imageurl="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-112130.jpg"
//             title="PSL season is here"
//             description= "Our 2026 pumpkin menu has landed. Enjoy the one-and-only Pumpkin Spice Latte, tasty new drinks and all your pumpkin favorites."
//             buttonText="see the pumpkin menu"
//             bgColor="bg-[#b94722]"
//             />

//             <PromoSection
//             imageurl="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-112130.jpg"
//             title="PSL season is here"
//             description= "Our 2026 pumpkin menu has landed. Enjoy the one-and-only Pumpkin Spice Latte, tasty new drinks and all your pumpkin favorites."
//             buttonText="see the pumpkin menu"
//             bgColor="bg-[#b94722]"
//             />

//             <PromoSection
//             imageurl="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-112130.jpg"
//             title="PSL season is here"
//             description= "Our 2026 pumpkin menu has landed. Enjoy the one-and-only Pumpkin Spice Latte, tasty new drinks and all your pumpkin favorites."
//             buttonText="see the pumpkin menu"
//             bgColor="bg-[#b94722]"
//             />

//             <PromoSection
//             imageurl="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-112130.jpg"
//             title="PSL season is here"
//             description= "Our 2026 pumpkin menu has landed. Enjoy the one-and-only Pumpkin Spice Latte, tasty new drinks and all your pumpkin favorites."
//             buttonText="see the pumpkin menu"
//             bgColor="bg-[#b94722]"
//             />


//         </div>
//     </main>
//     )
// }

// export default Home
