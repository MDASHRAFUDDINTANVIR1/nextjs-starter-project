'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select } from "@/components/ui/select";

export default function QuestionsHub() {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  // Sample questions data
  const questions = [
    {
      id: 1,
      title: "How do you solve quadratic equations?",
      subject: "Mathematics",
      type: "Long",
      difficulty: "Medium",
      votes: 15,
      answers: 3,
      date: "2024-02-20",
      description: "I'm having trouble understanding the steps to solve quadratic equations. Can someone explain the process?"
    },
    {
      id: 2,
      title: "What is photosynthesis?",
      subject: "Biology",
      type: "Short",
      difficulty: "Easy",
      votes: 12,
      answers: 5,
      date: "2024-02-19",
      description: "Need a clear explanation of the photosynthesis process in plants."
    },
    {
      id: 3,
      title: "Newton's Laws of Motion",
      subject: "Physics",
      type: "Long",
      difficulty: "Hard",
      votes: 20,
      answers: 7,
      date: "2024-02-18",
      description: "Looking for detailed explanations and examples of Newton's three laws of motion."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Questions Hub</h1>
          <p className="text-gray-600">
            Explore questions from students worldwide or ask your own question
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="all">All Subjects</option>
                <option value="math">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="biology">Biology</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Question Type
              </label>
              <select
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="short">Short</option>
                <option value="long">Long</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty
              </label>
              <select
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                <option value="all">All Difficulties</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div className="flex items-end">
              <Button className="w-full bg-[#0A64BC]">
                Apply Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {questions.map((question) => (
            <Card key={question.id} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {question.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{question.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {question.subject}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {question.type}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {question.difficulty}
                    </span>
                  </div>
                </div>
                <Button variant="outline">Answer</Button>
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
                <span>
                  <i className="fas fa-arrow-up mr-1"></i>
                  {question.votes} votes
                </span>
                <span>
                  <i className="fas fa-comment mr-1"></i>
                  {question.answers} answers
                </span>
                <span>
                  <i className="fas fa-calendar mr-1"></i>
                  {question.date}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Ask Question Button (Fixed) */}
        <div className="fixed bottom-6 right-6">
          <Button className="bg-[#0A64BC] shadow-lg hover:shadow-xl transition-shadow">
            <i className="fas fa-plus mr-2"></i>
            Ask Question
          </Button>
        </div>
      </div>
    </div>
  );
}
