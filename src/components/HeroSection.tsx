
import { Button } from "@/components/ui/button";
import { ArrowRight, Bitcoin, Coins, Codepen } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 md:pt-32 md:pb-24 bg-hero-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-block px-4 py-2 bg-white dark:bg-gray-800 shadow-sm rounded-full">
              <span className="text-sm font-medium text-crypto-purple">Web3 Payments Made Simple</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Accept <span className="gradient-text">Crypto Payments</span> in Your Applications
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Integrate cryptocurrency payments into your app in minutes, not months. Our API handles the complexity so you can focus on building your product.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group">
                Start for Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Supported Cryptocurrencies</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 shadow-sm px-3 py-2 rounded-full">
                  <Bitcoin className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-medium">Bitcoin</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 shadow-sm px-3 py-2 rounded-full">
                  <Coins className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Ethereum</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 shadow-sm px-3 py-2 rounded-full">
                  <span className="h-4 w-4 flex items-center justify-center text-emerald-500 font-bold">U</span>
                  <span className="text-sm font-medium">USDC</span>
                </div>
                <span className="text-sm text-gray-500">+10 more</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-crypto-purple/20 to-crypto-blue/20 rounded-3xl animate-pulse-slow"></div>
              <div className="absolute left-4 top-4 w-3/4 h-3/4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 animate-float">
                <div className="flex justify-between items-center mb-4">
                  <Codepen className="h-8 w-8 text-crypto-purple" />
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2"></div>
                </div>
                <div className="mt-6 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <pre className="text-xs overflow-x-auto">
                    <code className="text-gray-800 dark:text-gray-300">
                      {`const payment = await web3pay.createPayment({
  amount: '100',
  currency: 'USDC',
  description: 'Subscription payment'
});`}
                    </code>
                  </pre>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-sm">
                    <p className="text-gray-500">Status</p>
                    <p className="font-medium">Processing...</p>
                  </div>
                  <div className="flex items-center justify-center h-10 w-10 bg-crypto-purple/10 rounded-full">
                    <div className="h-3 w-3 bg-crypto-purple rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute right-4 bottom-4 w-2/3 h-2/3 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2 items-center">
                    <div className="h-8 w-8 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                      <Bitcoin className="h-4 w-4 text-amber-500" />
                    </div>
                    <span className="font-medium">Bitcoin</span>
                  </div>
                  <span className="text-sm text-gray-500">0.0045 BTC</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-2 bg-gradient-to-r from-crypto-blue to-crypto-purple rounded-full w-3/4"></div>
                </div>
                <div className="mt-4 text-sm text-gray-500 flex justify-between">
                  <span>3 confirmations</span>
                  <span>4 of 6 required</span>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-1 rounded-full">
                    In Progress
                  </span>
                  <div className="flex gap-1">
                    <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
                    <div className="h-2 w-2 bg-amber-500/50 rounded-full"></div>
                    <div className="h-2 w-2 bg-amber-500/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
