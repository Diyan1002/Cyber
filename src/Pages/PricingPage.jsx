import React from 'react';
import PricingFaqs from '../Components/PricingFaqs';

const Pricing = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="max-w-screen-lg mx-auto text-center mt-8">
        <h1 className="text-4xl font-bold text-white leading-tight mb-4 animate__animated animate__fadeIn">Morpheus Pricing</h1>
        <p className="text-xl mb-12 text-gray-400 animate__animated animate__fadeIn animate__delay-1s">
          You Know What Your Bill Looks Like. From Day One.
        </p>
        <p className="text-lg mb-8 text-gray-300 animate__animated animate__fadeIn animate__delay-2s">
          Morpheus pricing is built around two components: your platform subscription and the number of users. 
          Our pricing model is designed to avoid AI fees, peer-alert charges, and token meters – so the more Morpheus works, 
          the more value you get, without unexpected cost increases.
        </p>

        {/* The Formula Section */}
        <div className="border-t-2 border-gray-700 pt-8 animate__animated animate__fadeIn animate__delay-3s">
          <h2 className="text-3xl font-semibold text-[#6A4AE3] mb-4">The Formula</h2>
          <p className="text-xl text-white">
            Platform Subscription + User Licenses = Your Expected Cost
          </p>
          <p className="text-lg mt-4 text-gray-300">
            Straightforward pricing: No token fees by design. No standard investigation caps: Predictable budgeting.
          </p>
        </div>

        {/* Platform Section */}
        <div className="border-t-2 border-gray-700 pt-8 mt-8 animate__animated animate__fadeIn animate__delay-4s">
          <h2 className="text-3xl font-semibold text-[#6A4AE3] mb-4">Platform</h2>
          <h3 className="text-xl font-medium text-gray-300 mb-4">What’s Included: Everything in Your Subscription.</h3>
          <p className="text-lg text-gray-200">
            One flat subscription is designed to cover the full Morpheus platform – with no standard add-ons, all tiers,
            or feature gates.
          </p>
        </div>

        {/* New Features Section */}
        <div className="mt-12 animate__animated animate__fadeIn animate__delay-5s">
          <h2 className="text-3xl font-semibold text-[#6A4AE3] mb-8 text-center">Included Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#512adb] p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-4">SOC Alert Investigations</h3>
              <p className="text-gray-300">
                High-volume alert investigation is core to the platform. No standard investigation cap applies to your subscription.
              </p>
            </div>

            <div className="bg-[#512adb] p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-4">Attack Path Discovery</h3>
              <p className="text-gray-300">
                Deep investigation capability is included across your connected stack – not a premium add-on.
              </p>
            </div>

            <div className="bg-[#512adb] p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-4">Runtime Playbook Generation</h3>
              <p className="text-gray-300">
                Bespoke playbook generation per incident, at runtime. Included in your subscription.
              </p> 
            </div>

            <div className="bg-[#512adb] p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-4">Integration Library</h3>
              <p className="text-gray-300">
                Access to 800+ integrations. Included in your subscription.
              </p>
            </div>

            <div className="bg-[#512adb] p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-4">Case Management</h3>
              <p className="text-gray-300">
                Complete case lifecycle from alert to close. No separate tool needed for standard use cases.
              </p>
            </div>

            <div className="bg-[#512adb] p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-4">AI SOC Success Program</h3>
              <p className="text-gray-300">
                Customer Success Manager, onboarding, and training. Included in your subscription.
              </p>
            </div>
          </div>
        </div>
        <PricingFaqs />
      </div>
    </div>
  );
}

export default Pricing;