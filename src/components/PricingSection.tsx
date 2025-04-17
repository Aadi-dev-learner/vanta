
import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for startups and side projects",
    features: [
      "Up to $10,000 in monthly volume",
      "2% transaction fee",
      "Basic API access",
      "3 cryptocurrencies supported",
      "Email support",
      "Basic analytics",
    ],
    notIncluded: [
      "Fiat conversion",
      "Custom checkout",
      "Advanced analytics",
      "Multiple wallets",
    ],
    cta: "Start for Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "49",
    description: "For growing businesses and teams",
    features: [
      "Up to $100,000 in monthly volume",
      "1% transaction fee",
      "Full API access",
      "All cryptocurrencies supported",
      "Priority email support",
      "Advanced analytics",
      "Fiat conversion",
      "Custom checkout",
    ],
    notIncluded: [
      "Multiple wallets",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "299",
    description: "For large businesses with custom needs",
    features: [
      "Unlimited monthly volume",
      "0.5% transaction fee",
      "Full API access",
      "All cryptocurrencies supported",
      "24/7 dedicated support",
      "Advanced analytics with custom reports",
      "Fiat conversion with preferred rates",
      "Fully customizable checkout",
      "Multiple wallets",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} 
              className={`card-gradient border-gray-200 dark:border-gray-800 overflow-hidden relative ${
                plan.popular ? "border-2 border-crypto-purple dark:border-crypto-purple" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-crypto-purple text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline mt-2">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">/month</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, fIndex) => (
                    <li key={`not-${fIndex}`} className="flex items-start text-gray-400">
                      <XIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? "bg-crypto-purple hover:bg-crypto-purple/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
