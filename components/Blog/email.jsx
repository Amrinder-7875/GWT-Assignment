import { useState } from "react";
import { Mail } from 'lucide-react';
export default function Email() {
   const [emailValue, setEmailValue] = useState('');
    const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${emailValue}!`);
    setEmailValue('');
  };
    return(
       <section className="relative px-8 py-32 bg-[#2f3b1f] overflow-hidden">
        {/* Animated background decoration */}
        <div className="absolute top-[-50%] left-[-25%] w-[70%] h-[200%] bg-gradient-radial from-white/10 to-transparent animate-rotate pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-8 text-stone-50 opacity-90 animate-pulse-slow" />
          
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-stone-50 mb-6">
            Join Our Community
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-stone-50 opacity-90 mb-12 leading-relaxed">
            Receive weekly reflections, wellness practices, and gentle reminders 
            to pause and reconnect with what matters most.
          </p>
          
          <form 
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              className="flex-1 px-6 py-4 bg-white/95 border-2 border-transparent rounded-sm font-sans text-base text-neutral-800 placeholder:text-neutral-500 placeholder:opacity-50 transition-all duration-300 focus:outline-none focus:border-orange-500 focus:bg-white focus:-translate-y-0.5 focus:shadow-xl"
              placeholder="Your email address"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              required
            />
            <button 
              type="submit"
              className="px-10 py-4 bg-orange-600 text-stone-50 rounded-sm font-sans text-base font-medium uppercase tracking-wider transition-all duration-500 ease-out hover:bg-orange-700 hover:-translate-y-0.5 hover:shadow-2xl shadow-lg shadow-orange-900/30 active:translate-y-0"
            >
              Subscribe
            </button>
          </form>
          
          <p className="font-sans text-sm text-stone-50 opacity-70 mt-6">
            We respect your privacy and peace of mind
          </p>
        </div>
      </section> 
    );
}