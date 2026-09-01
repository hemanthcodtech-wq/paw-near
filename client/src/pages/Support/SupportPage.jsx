import React, { useState } from 'react';
import { 
  Bot, 
  HelpCircle, 
  RotateCcw, 
  PhoneCall, 
  Mail, 
  FileText, 
  CheckCircle2, 
  ChevronDown, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useOrders } from '../../context/OrderContext';

export default function SupportPage() {
  const { orders } = useOrders();
  const [activeAccordion, setActiveAccordion] = useState(0);

  // Return/Refund flow states
  const [returnStep, setReturnStep] = useState(1);
  const [selectedOrderForReturn, setSelectedOrderForReturn] = useState(orders[0]?.id || '');
  const [returnReason, setReturnReason] = useState('Damaged or defective package');
  const [returnTicketId, setReturnTicketId] = useState('');

  const faqs = [
    {
      q: 'How fast is instant delivery for pet food and accessories?',
      a: 'We deliver orders within 15 to 25 minutes across Hyderabad from our nearest verified pet store partners. You can track your rider in real time on the live map.'
    },
    {
      q: 'What is your product return and refund policy?',
      a: 'We offer a 7-day hassle-free return guarantee for unopened food items, collars, leashes, and accessories. Grooming and medicine products are covered under manufacturer safety warranties.'
    },
    {
      q: 'Can I book veterinary doctor consultations or groomers at home?',
      a: 'Yes! Through our Pet Services tab, you can book doorstep grooming appointments or in-clinic tokens with verified veterinarians in your area.'
    },
    {
      q: 'What payment modes are accepted?',
      a: 'We accept all major UPI apps (Google Pay, PhonePe, Paytm), Credit & Debit cards, and Cash on Delivery (COD).'
    }
  ];

  const handleReturnSubmit = (e) => {
    e.preventDefault();
    const tId = `RET-${Math.floor(100000 + Math.random() * 900000)}`;
    setReturnTicketId(tId);
    setReturnStep(2);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20 md:pb-12">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-black uppercase text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
          24/7 Support & Help Center
        </span>
        <h1 className="font-heading font-black text-2xl sm:text-4xl text-slate-900">
          How Can We Help You & Your Pet? 🐾
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
          In-app AI assistant, order tracking queries, returns, refunds, and live veterinary support.
        </p>
      </div>

      {/* 3 Contact Support Channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
            <PhoneCall className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-slate-900 text-sm">Call Pet Helpline</h3>
          <p className="text-xs text-slate-500">Toll-free customer & vet care</p>
          <a href="tel:1800PAWNEAR" className="text-xs font-black text-amber-600 hover:underline block pt-1">
            1800-PAW-NEAR
          </a>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-slate-900 text-sm">Email Support</h3>
          <p className="text-xs text-slate-500">Response within 2 hours</p>
          <a href="mailto:support@thepawstreet.com" className="text-xs font-black text-emerald-600 hover:underline block pt-1">
            support@thepawstreet.com
          </a>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
            <Bot className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-slate-900 text-sm">PawBot AI Assistant</h3>
          <p className="text-xs text-slate-500">Instant answers 24/7</p>
          <span className="text-xs font-black text-blue-600 block pt-1">
            Click bottom right widget
          </span>
        </div>
      </div>

      {/* Return & Refund Assisted Flow (SOW 2.5 requirement) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-xs space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center">
            <RotateCcw className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-slate-900 text-base">Assisted Return & Refund Flow</h3>
            <p className="text-xs text-slate-500">Initiate doorstep pickup and instant UPI refund</p>
          </div>
        </div>

        {returnStep === 1 ? (
          <form onSubmit={handleReturnSubmit} className="space-y-4 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Select Order</label>
                <select
                  value={selectedOrderForReturn}
                  onChange={(e) => setSelectedOrderForReturn(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl outline-none"
                >
                  {orders.map(o => (
                    <option key={o.id} value={o.id}>Order #{o.id} - ₹{o.totalAmount} ({o.items[0]?.name})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Reason for Return</label>
                <select
                  value={returnReason}
                  onChange={(e) => setReturnReason(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl outline-none"
                >
                  <option>Damaged or defective package</option>
                  <option>Wrong item or size delivered</option>
                  <option>Pet refused to eat / allergic</option>
                  <option>Delayed delivery</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5"
            >
              <span>Submit Return Request</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        ) : (
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-emerald-800 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Return Request Registered (#{returnTicketId})</span>
            </div>
            <p className="text-emerald-900/80">
              Our partner rider will pick up the item tomorrow between 10:00 AM - 12:00 PM. Refund will be credited to your original payment method immediately upon inspection.
            </p>
            <button
              type="button"
              onClick={() => setReturnStep(1)}
              className="text-emerald-700 font-bold underline pt-1 block"
            >
              Submit another request
            </button>
          </div>
        )}
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <h3 className="font-heading font-black text-slate-900 text-lg">Frequently Asked Questions</h3>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-2xl p-4 transition-all"
            >
              <button
                onClick={() => setActiveAccordion(activeAccordion === idx ? -1 : idx)}
                className="w-full flex items-center justify-between text-left font-heading font-bold text-xs sm:text-sm text-slate-800"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeAccordion === idx ? 'rotate-180 text-amber-500' : ''}`} />
              </button>

              {activeAccordion === idx && (
                <p className="text-xs text-slate-500 mt-2.5 pt-2.5 border-t border-slate-100 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
