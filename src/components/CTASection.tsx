
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-br from-crypto-purple to-crypto-blue p-1">
          <div className="bg-white dark:bg-crypto-dark rounded-xl px-6 py-12 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="space-y-4 md:max-w-xl">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Ready to start accepting crypto payments?
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Join thousands of developers who trust Web3PayPilot for their cryptocurrency payment needs. Set up your account in minutes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  Talk to Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
