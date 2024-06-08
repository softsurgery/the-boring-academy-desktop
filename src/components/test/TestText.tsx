import React from 'react';

interface TestTextProps {
  text: string;
}

export default function TestText({ text }: TestTextProps) {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}
