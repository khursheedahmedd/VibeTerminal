import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Terminal, Zap, Shield, Globe, Mic, Users, Star } from 'lucide-react';

const Plans = () => {
  const features = [
    {
      title: "Core Features",
      items: [
        "Natural language command processing",
        "Context-aware AI assistance",
        "Voice command support",
        "Smart autocomplete",
        "Command history and replay",
        "Safety features and undo capability"
      ]
    },
    {
      title: "Advanced Features",
      items: [
        "Team collaboration tools",
        "Session sharing and templates",
        "Advanced security controls",
        "Custom safety rules",
        "Rich output formatting",
        "Cloud sync capabilities"
      ]
    },
    {
      title: "Enterprise Features",
      items: [
        "SSO integration",
        "Audit logging",
        "On-premise deployment",
        "Custom integrations",
        "Priority support",
        "Dedicated account manager"
      ]
    }
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for individual developers",
      features: [
        "Unlimited commands",
        "All core features",
        "Local AI models",
        "Basic support",
        "Community access",
        "Regular updates"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$15",
      period: "/month",
      description: "For professional developers and small teams",
      features: [
        "Everything in Free",
        "Team collaboration",
        "Cloud sync",
        "Priority support",
        "Advanced features",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations and large teams",
      features: [
        "Everything in Pro",
        "SSO integration",
        "Audit logging",
        "On-premise deployment",
        "Dedicated support",
        "Custom solutions"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#f7f7f8]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Choose the plan that best fits your needs. All plans include core features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`bg-white border border-gray-200 rounded-3xl relative ${
                plan.popular ? 'ring-2 ring-black' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  )}
                </div>
                <CardDescription className="text-gray-500 mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full mt-8 ${
                    plan.popular 
                      ? 'bg-black text-white hover:bg-gray-900' 
                      : 'bg-white text-black border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Feature Comparison</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((featureGroup, index) => (
            <Card key={index} className="bg-white border border-gray-200 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{featureGroup.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {featureGroup.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <Card className="bg-white border border-gray-200 rounded-3xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Can I switch plans later?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </CardContent>
          </Card>
          <Card className="bg-white border border-gray-200 rounded-3xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </CardContent>
          </Card>
          <Card className="bg-white border border-gray-200 rounded-3xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Is there a free trial?</h3>
              <p className="text-gray-600">Yes, all paid plans come with a 14-day free trial. No credit card required to start.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-white border border-gray-200 max-w-4xl mx-auto rounded-3xl">
          <CardContent className="py-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Ready to Get Started?</h3>
            <p className="text-xl text-gray-500 mb-8">
              Join thousands of developers who've already upgraded their workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-900">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50">
                Contact Sales
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Plans; 