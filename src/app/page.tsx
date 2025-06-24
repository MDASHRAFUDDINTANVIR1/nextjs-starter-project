import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center text-center py-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Your Academic Success
              <span className="block mt-2">Starts Here</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300">
              Join our global community of students and experts. Get verified answers and excel in your studies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg"
              >
                Ask a Question
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg"
              >
                Explore Questions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group">
              <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-black">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Basic Plan</h3>
                  <p className="text-gray-600 mb-6">Perfect for getting started</p>
                  <p className="text-4xl font-bold mb-6">$5.99</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center mr-3">✓</span>
                    30 Credits
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center mr-3">✓</span>
                    Ask Questions
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center mr-3">✓</span>
                    Get Verified Answers
                  </li>
                </ul>
                <Button className="w-full bg-black text-white hover:bg-gray-900 py-6 text-lg group-hover:scale-105 transition-transform">
                  Subscribe Now
                </Button>
              </Card>
            </div>

            <div className="group">
              <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-black bg-black text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
                  <p className="text-gray-400 mb-6">For serious learners</p>
                  <p className="text-4xl font-bold mb-6">$9.99</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center mr-3">✓</span>
                    60 Credits
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center mr-3">✓</span>
                    Priority Support
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center mr-3">✓</span>
                    Advanced Features
                  </li>
                </ul>
                <Button className="w-full bg-white text-black hover:bg-gray-100 py-6 text-lg group-hover:scale-105 transition-transform">
                  Subscribe Now
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">How It Works</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>1. Ask Your Question</AccordionTrigger>
                <AccordionContent>
                  Submit your academic questions and get help from verified experts. Use credits to ask questions and receive detailed explanations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>2. Get Expert Answers</AccordionTrigger>
                <AccordionContent>
                  Our verified contributors provide detailed, accurate answers to help you understand complex topics better.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>3. Earn Credits</AccordionTrigger>
                <AccordionContent>
                  Help others by answering questions and earn credits. Use these credits to ask more questions or unlock premium features.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Featured Questions Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Featured Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-8 bg-gray-900 border-0 hover:bg-gray-800 transition-colors">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                    Mathematics
                  </span>
                  <h3 className="text-xl font-semibold">Complex Analysis Question {i}</h3>
                  <p className="text-gray-400">
                    Understanding the relationship between complex functions and their derivatives...
                  </p>
                  <div className="pt-4 flex justify-between items-center border-t border-gray-800">
                    <span className="text-gray-400">5 answers</span>
                    <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">10K+</p>
              <p className="text-gray-600">Questions Answered</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">5K+</p>
              <p className="text-gray-600">Active Students</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-gray-600">Expert Tutors</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Icon */}
      <div className="fixed bottom-6 right-6">
        <Button 
          className="w-14 h-14 rounded-full bg-black text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
          aria-label="Open chat"
        >
          <i className="fas fa-comments text-xl"></i>
        </Button>
      </div>
    </div>
  );
}
