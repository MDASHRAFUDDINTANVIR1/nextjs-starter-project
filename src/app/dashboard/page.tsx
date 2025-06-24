'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  const [questionType, setQuestionType] = useState('short');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile */}
          <div className="space-y-8">
            {/* Profile Card */}
            <Card className="p-6">
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-full bg-[#0A64BC] text-white text-3xl flex items-center justify-center mb-4 mx-auto">
                    JD
                  </div>
                  <span className="absolute bottom-0 right-0 bg-green-500 p-2 rounded-full">
                    <i className="fas fa-check text-white text-xs"></i>
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-1">John Doe</h2>
                <p className="text-gray-600 mb-4">Student at Harvard University</p>
                <div className="flex justify-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Pro Member
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Level 5
                  </span>
                </div>
                <Button variant="outline" className="w-full mb-2">
                  <i className="fas fa-edit mr-2"></i>
                  Edit Profile
                </Button>
                <Button variant="outline" className="w-full">
                  <i className="fas fa-share-alt mr-2"></i>
                  Share Profile
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#0A64BC]">45</div>
                    <div className="text-sm text-gray-600">Questions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0A64BC]">128</div>
                    <div className="text-sm text-gray-600">Answers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0A64BC]">89</div>
                    <div className="text-sm text-gray-600">Credits</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full bg-[#0A64BC]">
                  <i className="fas fa-question-circle mr-2"></i>
                  Ask a Question
                </Button>
                <Button variant="outline" className="w-full">
                  <i className="fas fa-search mr-2"></i>
                  Browse Questions
                </Button>
                <Button variant="outline" className="w-full">
                  <i className="fas fa-calculator mr-2"></i>
                  Open Calculator
                </Button>
              </div>
            </Card>
          </div>

          {/* Middle Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Tabs defaultValue="activity">
              <TabsList className="grid grid-cols-4 gap-4 bg-transparent">
                <TabsTrigger value="activity" className="data-[state=active]:bg-[#0A64BC] data-[state=active]:text-white">
                  Activity
                </TabsTrigger>
                <TabsTrigger value="questions" className="data-[state=active]:bg-[#0A64BC] data-[state=active]:text-white">
                  Questions
                </TabsTrigger>
                <TabsTrigger value="answers" className="data-[state=active]:bg-[#0A64BC] data-[state=active]:text-white">
                  Answers
                </TabsTrigger>
                <TabsTrigger value="saved" className="data-[state=active]:bg-[#0A64BC] data-[state=active]:text-white">
                  Saved
                </TabsTrigger>
              </TabsList>

              <TabsContent value="activity">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="text-[#0A64BC]">
                          <i className="fas fa-comment-dots text-xl"></i>
                        </div>
                        <div>
                          <p className="font-medium">Answered a question in Physics</p>
                          <p className="text-sm text-gray-600">2 hours ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="questions">
                <Card className="p-6">
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border-b pb-6 last:border-0 last:pb-0">
                        <h4 className="font-semibold mb-2">Sample Question {i}</h4>
                        <p className="text-gray-600 mb-4">
                          This is a sample question description that shows what you've asked...
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>3 answers</span>
                            <span>2 days ago</span>
                          </div>
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Ask Question Form */}
            <Card className="p-6">
              <h3 className="font-semibold mb-6">Ask a New Question</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Question Title
                  </label>
                  <Input placeholder="Enter your question title" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Question Details
                  </label>
                  <Textarea 
                    placeholder="Provide more details about your question..."
                    className="min-h-[150px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Question Type
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="questionType"
                        value="short"
                        checked={questionType === 'short'}
                        onChange={(e) => setQuestionType(e.target.value)}
                        className="mr-2"
                      />
                      Short (3 credits)
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="questionType"
                        value="long"
                        checked={questionType === 'long'}
                        onChange={(e) => setQuestionType(e.target.value)}
                        className="mr-2"
                      />
                      Long (5 credits)
                    </label>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Button type="submit" className="bg-[#0A64BC]">
                    Submit Question
                  </Button>
                  <span className="text-sm text-gray-600">
                    Available Credits: 89
                  </span>
                </div>
              </form>
            </Card>
          </div>
        </div>

        {/* AI Assistant Button */}
        <div className="fixed bottom-6 right-6">
          <Button 
            className="w-14 h-14 rounded-full bg-[#0A64BC] shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Open AI Assistant"
          >
            <i className="fas fa-robot text-xl"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}
