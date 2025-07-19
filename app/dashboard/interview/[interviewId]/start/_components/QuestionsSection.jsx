import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react';

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
  const textToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Sorry, your browser does not support text-to-speech.');
    }
  };

  // ✅ Handle case when mockInterviewQuestion is not an array
  if (!Array.isArray(mockInterviewQuestion) || mockInterviewQuestion.length === 0) {
    return (
      <div className="p-5 border rounded-lg my-10 text-center text-gray-500">
        No questions available.
      </div>
    );
  }

  const currentQuestion = mockInterviewQuestion[activeQuestionIndex];

  return (
    <div className="p-5 border rounded-lg my-10">
      {/* Question selector buttons */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {mockInterviewQuestion.map((question, index) => (
          <h2
            key={index}
            className={`p-2 border rounded-full text-xs md:text-sm text-center cursor-pointer
              ${activeQuestionIndex === index ? 'bg-primary text-white' : ''}`}
          >
            Question #{index + 1}
          </h2>
        ))}
      </div>

      {/* Active question text */}
      <h2 className="my-5 text-md md:text-lg">
        {currentQuestion?.question || 'No question selected.'}
      </h2>

      {/* Volume icon to speak the question */}
      <Volume2
        className="cursor-pointer"
        onClick={() => textToSpeech(currentQuestion?.question)}
      />

      {/* Note section */}
      <div className="border rounded-lg p-5 bg-blue-100 mt-20">
        <h2 className="flex gap-2 items-center text-primary">
          <Lightbulb />
          <strong>Note:</strong>
        </h2>
        <h2 className="text-sm text-primary my-2">
          {process.env.NEXT_PUBLIC_QUESTION_NOTE || 'Answer thoughtfully and confidently.'}
        </h2>
      </div>
    </div>
  );
}

export default QuestionsSection;
