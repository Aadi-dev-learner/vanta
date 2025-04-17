
import {
  ShieldCheck,
  Zap,
  BarChart4,
  Globe,
  Code,
  CreditCard,
  Wallet,
  LayoutDashboard
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Wallet className="h-10 w-10 text-crypto-purple" />,
    title: "Multiple Cryptocurrencies",
    description: "Accept Bitcoin, Ethereum, USDC and other major cryptocurrencies with a single integration."
  },
  {
    icon: <Zap className="h-10 w-10 text-crypto-blue" />,
    title: "Instant Settlements",
    description: "Receive payments in real-time with our lightning-fast settlement process."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-crypto-purple" />,
    title: "Enterprise-Grade Security",
    description: "Your funds and customer data are protected with bank-level encryption and security."
  },
  {
    icon: <Code className="h-10 w-10 text-crypto-blue" />,
    title: "Developer-Friendly API",
    description: "Simple, well-documented API with SDKs for all major programming languages."
  },
  {
    icon: <BarChart4 className="h-10 w-10 text-crypto-purple" />,
    title: "Detailed Analytics",
    description: "Track payment trends, conversion rates, and customer behavior with our analytics dashboard."
  },
  {
    icon: <Globe className="h-10 w-10 text-crypto-blue" />,
    title: "Global Support",
    description: "Accept payments from customers anywhere in the world without geographical restrictions."
  },
  {
    icon: <CreditCard className="h-10 w-10 text-crypto-purple" />,
    title: "Fiat Conversion",
    description: "Automatically convert crypto to your preferred fiat currency to avoid market volatility."
  },
  {
    icon: <LayoutDashboard className="h-10 w-10 text-crypto-blue" />,
    title: "Customizable Checkout",
    description: "Fully customizable payment flow that integrates seamlessly with your application's UI."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Your <span className="gradient-text">Web3 Business</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to start accepting cryptocurrency payments in your application, website, or platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-gradient border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
