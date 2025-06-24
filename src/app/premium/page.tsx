import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Premium() {
  const features = {
    basic: [
      "30 Credits",
      "Ask Questions",
      "Get Verified Answers",
      "Basic Support",
      "Access to Question Hub",
      "Mobile Access"
    ],
    pro: [
      "60 Credits",
      "Priority Support",
      "Advanced Features",
      "Faster Response Time",
      "Download Study Materials",
      "AI Assistant Access",
      "Premium Badge",
      "Ad-free Experience"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Premium Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock more features and credits to enhance your learning experience
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Basic Plan</h2>
              <div className="text-4xl font-bold text-[#0A64BC] mb-6">
                $5.99
                <span className="text-base font-normal text-gray-600">/month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {features.basic.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-[#0A64BC] hover:bg-blue-700">
              Get Started
            </Button>
          </Card>

          {/* Pro Plan */}
          <Card className="p-8 border-2 border-[#0A64BC] hover:shadow-lg transition-shadow relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-4 right-4">
              <span className="bg-[#0A64BC] text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Pro Plan</h2>
              <div className="text-4xl font-bold text-[#0A64BC] mb-6">
                $9.99
                <span className="text-base font-normal text-gray-600">/month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {features.pro.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-[#0A64BC] hover:bg-blue-700">
              Upgrade to Pro
            </Button>
          </Card>
        </div>

        {/* Credit System Explanation */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-12">
            How Credits Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <div className="text-4xl text-[#0A64BC] mb-4">
                <i className="fas fa-question-circle"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Asking Questions</h3>
              <p className="text-gray-600">
                Short Question: 3 Credits<br />
                Long Question: 5 Credits
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-4xl text-[#0A64BC] mb-4">
                <i className="fas fa-comment-dots"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Answering Questions</h3>
              <p className="text-gray-600">
                Short Answer: Earn 3 Credits<br />
                Long Answer: Earn 5 Credits
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-4xl text-[#0A64BC] mb-4">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Bonus Credits</h3>
              <p className="text-gray-600">
                Best Answer: +2 Credits<br />
                Upvoted Answer: +1 Credit
              </p>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">How do credits work?</h3>
              <p className="text-gray-600">
                Credits are used to ask questions and can be earned by providing helpful answers. Different types of questions cost different amounts of credits.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-600">
                Yes, you can change your plan at any time. Your credits will be adjusted accordingly when you switch plans.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Do unused credits expire?</h3>
              <p className="text-gray-600">
                No, your credits don't expire as long as your account remains active. You can accumulate and use them anytime.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
