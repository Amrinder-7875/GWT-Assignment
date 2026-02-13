export default function Footer() {
  return (
    <footer className="bg-gray-200 text-[#2D3E1F] font py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        
        {/* Left Column: Branding & Contact */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-2xl ">Dr.Maya Reynolds</h2>
          <div className="mt-4 space-y-1 text-lg">
            
            <p>23th Street 45 W, Santa Monica, CA 90401
</p>
            <p>Santa Monica,CA</p>
          </div>
          <div className="mt-6 space-y-1 text-lg">
            <p className="underline underline-offset-4 decoration-1">dr.maya@gmail.com</p>
            <p className="underline underline-offset-4 decoration-1">(555) 555-5555</p>
          </div>
        </div>

        {/* Center Column: Hours */}
        <div className="flex flex-col md:items-center">
          <div className="w-full md:w-fit">
            <h3 className="text-2xl  mb-6">Hours</h3>
            <div className="space-y-2 text-lg">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>
        </div>

        {/* Right Column: Links */}
        <div className="flex flex-col md:items-end">
          <div className="w-full md:w-fit md:text-right">
            <h3 className="text-2xl mb-6">Find</h3>
            <ul className="space-y-2 text-lg underline underline-offset-4 decoration-1">
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}